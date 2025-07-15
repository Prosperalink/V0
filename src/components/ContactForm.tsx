'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import React, { useCallback, useMemo, useState } from 'react';

interface IFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

interface IFormErrors {
  [key: string]: string;
}

interface IInputFieldProps {
  field: keyof IFormData;
  label: string;
  type?: string;
  required?: boolean;
}

interface IFormStepProps {
  step: number;
  currentStep: number;
  children: React.ReactNode;
}

// Extracted animation variants for better maintainability
const useAnimationVariants = () => {
  return useMemo(
    () => ({
      container: {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      },
      form: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      },
      success: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      },
    }),
    []
  );
};

// Extracted form validation logic
const useFormValidation = (formData: IFormData) => {
  return useCallback((): IFormErrors => {
    const newErrors: IFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  }, [formData]);
};

// Extracted form submission logic
const useFormSubmission = (validateForm: () => IFormErrors) => {
  return useCallback(async (): Promise<boolean> => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      return false;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    return true;
  }, [validateForm]);
};

// Extracted form state management
const useFormState = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState<IFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = useCallback(
    (field: keyof IFormData, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    },
    [errors]
  );

  const handleFocus = useCallback((field: string) => {
    setFocusedField(field);
  }, []);

  const handleBlur = useCallback(() => {
    setFocusedField(null);
  }, []);

  const resetForm = useCallback(() => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      timeline: '',
      message: '',
    });
    setCurrentStep(1);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    currentStep,
    focusedField,
    setErrors,
    setIsSubmitting,
    setIsSubmitted,
    setCurrentStep,
    handleInputChange,
    handleFocus,
    handleBlur,
    resetForm,
  };
};

// Extracted input field component for better maintainability
const InputField = ({
  field,
  label,
  type = 'text',
  required = false,
  formData,
  errors,
  focusedField,
  onInputChange,
  onFocus,
  onBlur,
}: IInputFieldProps & {
  formData: IFormData;
  errors: IFormErrors;
  focusedField: string | null;
  onInputChange: (field: keyof IFormData, value: string) => void;
  onFocus: (field: string) => void;
  onBlur: () => void;
}) => {
  const isTextarea = field === 'message';
  const isFocused = focusedField === field;
  const hasError = errors[field];
  const hasValue = formData[field];

  const inputClassName = useMemo(() => {
    const baseClasses =
      'w-full px-4 py-4 border-2 rounded-lg transition-all duration-300 bg-neutral-lightBg/10 dark:bg-neutral-darkBg/10 text-neutral-lightText dark:text-neutral-darkText placeholder-neutral-lightTextSecondary dark:placeholder-neutral-darkTextSecondary';
    const focusClasses = isFocused
      ? 'border-cinematic-blue dark:border-cinematic-gold shadow-lg shadow-cinematic-blue/20 dark:shadow-cinematic-gold/20 bg-neutral-lightBg/20 dark:bg-neutral-darkBg/20'
      : 'border-neutral-lightText/20 dark:border-neutral-darkText/20';
    const errorClasses = hasError
      ? 'border-red-500 dark:border-red-400 shadow-lg shadow-red-500/20'
      : '';
    const textareaClasses = isTextarea ? 'input-cinematic resize-none' : '';

    return `${baseClasses} ${focusClasses} ${errorClasses} ${textareaClasses}`.trim();
  }, [isFocused, hasError, isTextarea]);

  const labelClassName = useMemo(() => {
    const baseClasses =
      'absolute left-4 top-4 text-neutral-lightTextSecondary dark:text-neutral-darkTextSecondary transition-all duration-300 pointer-events-none';
    const positionClasses = isTextarea ? 'left-12' : '';
    const stateClasses =
      isFocused || hasValue
        ? 'text-xs -translate-y-6 text-cinematic-blue dark:text-cinematic-gold'
        : 'text-base';

    return `${baseClasses} ${positionClasses} ${stateClasses}`.trim();
  }, [isFocused, hasValue, isTextarea]);

  const labelAnimation = useMemo(
    () => ({
      y: isFocused || hasValue ? -24 : 0,
      scale: isFocused || hasValue ? 0.85 : 1,
    }),
    [isFocused, hasValue]
  );

  const focusRingClassName = useMemo(() => {
    const baseClasses =
      'absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-300';
    const focusClasses = isFocused
      ? 'border-cinematic-blue/30 dark:border-cinematic-gold/30'
      : '';

    return `${baseClasses} ${focusClasses}`.trim();
  }, [isFocused]);

  return (
    <motion.div
      className="relative mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {isTextarea ? (
          <textarea
            id={field}
            name={field}
            value={formData[field]}
            onChange={e => onInputChange(field, e.target.value)}
            onFocus={() => onFocus(field)}
            onBlur={onBlur}
            className={inputClassName}
            placeholder={isFocused ? '' : `Enter your ${label.toLowerCase()}`}
            required={required}
            rows={6}
          />
        ) : (
          <input
            type={type}
            id={field}
            name={field}
            value={formData[field]}
            onChange={e => onInputChange(field, e.target.value)}
            onFocus={() => onFocus(field)}
            onBlur={onBlur}
            className={inputClassName}
            placeholder={isFocused ? '' : `Enter your ${label.toLowerCase()}`}
            required={required}
          />
        )}

        {/* Floating label */}
        <motion.label className={labelClassName} animate={labelAnimation}>
          {label} {required && '*'}
        </motion.label>

        {/* Enhanced focus ring */}
        <div className={focusRingClassName} />
      </div>

      {/* Error message with animation */}
      <AnimatePresence>
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center"
          >
            <span className="w-1 h-1 bg-red-500 rounded-full mr-2" />
            {hasError}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Extracted form step component
const FormStep = ({ step, currentStep, children }: IFormStepProps) => {
  if (step !== currentStep) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`step${step}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Extracted success component for better maintainability
const SuccessMessage = ({ onReset }: { onReset: () => void }) => {
  const variants = useAnimationVariants();

  return (
    <motion.div
      className="text-center py-12"
      variants={variants.success}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-20 h-20 bg-cinematic-gold rounded-full flex items-center justify-center mx-auto mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        <Check className="w-10 h-10 text-white" />
      </motion.div>

      <motion.h3
        className="text-2xl font-bold text-neutral-lightText dark:text-neutral-darkText mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Message Sent Successfully!
      </motion.h3>

      <motion.p
        className="text-neutral-lightTextSecondary dark:text-neutral-darkTextSecondary mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Thank you for reaching out! We&apos;ll get back to you within 24 hours
        to discuss your project and how we can bring your vision to life with
        our cinematic approach to digital innovation.
      </motion.p>

      <motion.button
        onClick={onReset}
        className="px-6 py-3 bg-cinematic-blue dark:bg-cinematic-gold text-white dark:text-cinematic-blue font-medium rounded-lg hover:bg-cinematic-blue/90 dark:hover:bg-cinematic-gold/90 transition-all duration-300 btn-cinematic"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Another Message
      </motion.button>
    </motion.div>
  );
};

// Extracted progress indicator component
const ProgressIndicator = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  const progressVariants = {
    initial: { width: 0 },
    animate: {
      width: `${(currentStep / totalSteps) * 100}%`,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Step {currentStep} of {totalSteps}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {Math.round((currentStep / totalSteps) * 100)}% Complete
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cinematic-blue to-cinematic-gold rounded-full"
          variants={progressVariants}
          initial="initial"
          animate="animate"
        />
      </div>
    </div>
  );
};

// Extracted navigation buttons component
const NavigationButtons = ({
  currentStep,
  totalSteps,
  isSubmitting,
  onNext,
  onPrev,
}: {
  currentStep: number;
  totalSteps: number;
  isSubmitting: boolean;
  onNext: () => void;
  onPrev: () => void;
}) => {
  return (
    <div className="flex justify-between pt-6">
      <motion.button
        type="button"
        onClick={onPrev}
        disabled={currentStep === 1}
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
          currentStep === 1
            ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
            : 'bg-gray-600 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600'
        }`}
        whileHover={currentStep !== 1 ? { scale: 1.05 } : {}}
        whileTap={currentStep !== 1 ? { scale: 0.95 } : {}}
      >
        Previous
      </motion.button>

      {currentStep < totalSteps ? (
        <motion.button
          type="button"
          onClick={onNext}
          className="px-6 py-3 bg-cinematic-blue dark:bg-cinematic-gold text-white font-medium rounded-lg hover:bg-cinematic-blue/90 dark:hover:bg-cinematic-gold/90 transition-all duration-300 btn-cinematic"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next Step
        </motion.button>
      ) : (
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-cinematic-blue dark:bg-cinematic-gold text-white hover:bg-cinematic-blue/90 dark:hover:bg-cinematic-gold/90'
          }`}
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
        >
          {isSubmitting ? (
            <>
              <Send className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </motion.button>
      )}
    </div>
  );
};

export default function ContactForm() {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    currentStep,
    focusedField,
    setErrors,
    setIsSubmitting,
    setIsSubmitted,
    setCurrentStep,
    handleInputChange,
    handleFocus,
    handleBlur,
    resetForm,
  } = useFormState();

  const validateForm = useFormValidation(formData);
  const submitForm = useFormSubmission(validateForm);
  const animations = useAnimationVariants();

  const handleSubmit = async () => {
    const errors = validateForm();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      const success = await submitForm();
      setIsSubmitting(false);

      if (success) {
        setIsSubmitted(true);
      }
    }
  };

  const handleNext = () => {
    const currentStepErrors = validateCurrentStep();
    if (Object.keys(currentStepErrors).length === 0) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    } else {
      setErrors(prev => ({ ...prev, ...currentStepErrors }));
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const validateCurrentStep = (): IFormErrors => {
    const errors: IFormErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Please enter a valid email';
        }
        break;
      case 2:
        if (!formData.service) errors.service = 'Please select a service';
        if (!formData.budget) errors.budget = 'Please select a budget range';
        break;
      case 3:
        if (!formData.message.trim()) errors.message = 'Message is required';
        break;
    }

    return errors;
  };

  if (isSubmitted) {
    return (
      <div
        className="w-full max-w-2xl mx-auto"
        data-testid="contact-form-success"
      >
        <SuccessMessage onReset={resetForm} />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto" data-testid="contact-form">
      <motion.div
        variants={animations.container}
        initial="hidden"
        animate="visible"
        className="bg-neutral-lightBg/10 dark:bg-neutral-darkBg/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-neutral-lightText/10 dark:border-neutral-darkText/10"
      >
        {/* Header */}
        <div className="text-center mb-8" data-testid="contact-form-header">
          <h2 className="text-3xl font-bold text-neutral-lightText dark:text-neutral-darkText mb-4">
            Get Started
          </h2>
          <p className="text-neutral-lightTextSecondary dark:text-neutral-darkTextSecondary">
            Let&apos;s create something extraordinary together
          </p>
        </div>

        {/* Progress Indicator */}
        <ProgressIndicator currentStep={currentStep} totalSteps={3} />

        {/* Form Steps */}
        <motion.div
          variants={animations.form}
          initial="hidden"
          animate="visible"
          className="mt-8"
          data-testid="contact-form-steps"
        >
          <AnimatePresence mode="wait">
            <FormStep
              key={currentStep}
              step={currentStep}
              currentStep={currentStep}
            >
              {currentStep === 1 && (
                <div className="space-y-6" data-testid="contact-form-step-1">
                  <InputField
                    field="name"
                    label="Full Name"
                    required
                    formData={formData}
                    errors={errors}
                    focusedField={focusedField}
                    onInputChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <InputField
                    field="email"
                    label="Email Address"
                    type="email"
                    required
                    formData={formData}
                    errors={errors}
                    focusedField={focusedField}
                    onInputChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <InputField
                    field="phone"
                    label="Phone Number (Optional)"
                    type="tel"
                    formData={formData}
                    errors={errors}
                    focusedField={focusedField}
                    onInputChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <InputField
                    field="company"
                    label="Company (Optional)"
                    formData={formData}
                    errors={errors}
                    focusedField={focusedField}
                    onInputChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6" data-testid="contact-form-step-2">
                  <div>
                    <label className="block text-neutral-lightText dark:text-neutral-darkText font-medium mb-3">
                      Service Interest *
                    </label>
                    <select
                      value={formData.service}
                      onChange={e =>
                        handleInputChange('service', e.target.value)
                      }
                      onFocus={() => handleFocus('service')}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                        focusedField === 'service'
                          ? 'border-cinematic-blue bg-neutral-lightBg/20 dark:bg-neutral-darkBg/20'
                          : 'border-neutral-lightText/20 dark:border-neutral-darkText/20 bg-neutral-lightBg/10 dark:bg-neutral-darkBg/10'
                      } ${errors.service ? 'border-red-400' : ''} text-neutral-lightText dark:text-neutral-darkText placeholder-neutral-lightTextSecondary dark:placeholder-neutral-darkTextSecondary focus:outline-none`}
                      data-testid="service-select"
                    >
                      <option value="">Select a service</option>
                      <option value="content-creation">Content Creation</option>
                      <option value="creative-design">Creative Design</option>
                      <option value="digital-innovation">
                        Digital Innovation
                      </option>
                      <option value="strategic-consulting">
                        Strategic Consulting
                      </option>
                      <option value="technology-solutions">
                        Technology Solutions
                      </option>
                    </select>
                    {errors.service && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-neutral-lightText dark:text-neutral-darkText font-medium mb-3">
                      Budget Range *
                    </label>
                    <select
                      value={formData.budget}
                      onChange={e =>
                        handleInputChange('budget', e.target.value)
                      }
                      onFocus={() => handleFocus('budget')}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                        focusedField === 'budget'
                          ? 'border-cinematic-blue bg-neutral-lightBg/20 dark:bg-neutral-darkBg/20'
                          : 'border-neutral-lightText/20 dark:border-neutral-darkText/20 bg-neutral-lightBg/10 dark:bg-neutral-darkBg/10'
                      } ${errors.budget ? 'border-red-400' : ''} text-neutral-lightText dark:text-neutral-darkText placeholder-neutral-lightTextSecondary dark:placeholder-neutral-darkTextSecondary focus:outline-none`}
                      data-testid="budget-select"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                    {errors.budget && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.budget}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-neutral-lightText dark:text-neutral-darkText font-medium mb-3">
                      Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={e =>
                        handleInputChange('timeline', e.target.value)
                      }
                      onFocus={() => handleFocus('timeline')}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                        focusedField === 'timeline'
                          ? 'border-cinematic-blue bg-neutral-lightBg/20 dark:bg-neutral-darkBg/20'
                          : 'border-neutral-lightText/20 dark:border-neutral-darkText/20 bg-neutral-lightBg/10 dark:bg-neutral-darkBg/10'
                      } text-neutral-lightText dark:text-neutral-darkText placeholder-neutral-lightTextSecondary dark:placeholder-neutral-darkTextSecondary focus:outline-none`}
                      data-testid="timeline-select"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="1-month">1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3+months">3+ months</option>
                    </select>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6" data-testid="contact-form-step-3">
                  <InputField
                    field="message"
                    label="Project Details"
                    required
                    formData={formData}
                    errors={errors}
                    focusedField={focusedField}
                    onInputChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              )}
            </FormStep>
          </AnimatePresence>
        </motion.div>

        {/* Navigation Buttons */}
        <NavigationButtons
          currentStep={currentStep}
          totalSteps={3}
          isSubmitting={isSubmitting}
          onNext={currentStep === 3 ? handleSubmit : handleNext}
          onPrev={handlePrev}
        />
      </motion.div>
    </div>
  );
}
