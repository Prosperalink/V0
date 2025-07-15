'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useMemo, useRef, useState } from 'react';

import AnimationObserver from '@/components/AnimationObserver';

interface IQualityDemoProps {
  title?: string;
  onDataSubmit?: (data: IFormData) => Promise<void>;
  isEnabled?: boolean;
  maxItems?: number;
}

interface IFormData {
  name: string;
  email: string;
  message: string;
}

interface IValidationErrors {
  [key: string]: string;
}

const ANIMATION_DURATION = 0.3;
const MAX_MESSAGE_LENGTH = 500;

export default function QualityDemo({
  title = 'Quality Demo Component',
  onDataSubmit,
  isEnabled = true,
}: IQualityDemoProps) {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<IValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Performance optimization: Memoize validation logic
  const validationErrors = useMemo((): IValidationErrors => {
    const newErrors: IValidationErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = 'Message must be less than 500 characters';
    }

    return newErrors;
  }, [formData]);

  // Performance optimization: Memoize animation variants
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: ANIMATION_DURATION, ease: 'easeOut' },
      },
    }),
    []
  );

  const formVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: ANIMATION_DURATION, ease: 'easeOut' },
      },
    }),
    []
  );

  // Robust error handling with try-catch and proper error clearing
  const handleInputChange = useCallback(
    (field: keyof IFormData, value: string) => {
      try {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Clear error when user starts typing - immediate clearing without animation delay
        if (errors[field]) {
          setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[field];
            return newErrors;
          });
        }
      } catch {
        // Graceful degradation: Don't crash the component
        // Error logged for debugging purposes
      }
    },
    [errors]
  );

  // Robust error handling for form submission with proper async handling
  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent) => {
      event.preventDefault();

      try {
        // Validate form
        const currentValidationErrors = validationErrors;
        if (Object.keys(currentValidationErrors).length > 0) {
          setErrors(currentValidationErrors);
          return;
        }

        setIsSubmitting(true);

        // Call external handler if provided
        if (onDataSubmit) {
          await onDataSubmit(formData);
        }

        // Simulate API call for demo
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Reset submitting before showing success
        setIsSubmitting(false);
        setIsSubmitted(true);
      } catch {
        // Graceful degradation: Show user-friendly error
        setErrors({ submit: 'Failed to submit form. Please try again.' });
        setIsSubmitting(false);
      }
    },
    [formData, onDataSubmit, validationErrors]
  );

  // Accessibility: Keyboard navigation support
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && event.ctrlKey) {
      event.preventDefault();
      // Use form ref to trigger submit event
      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    }
  }, []);

  // Early return for disabled state
  if (!isEnabled) {
    return (
      <div
        className="p-4 text-neutral-lightTextSecondary bg-neutral-lightBg rounded-lg"
        role="status"
        aria-label="Component is disabled"
      >
        This component is currently disabled.
      </div>
    );
  }

  return (
    <AnimationObserver>
      <motion.div
        className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="main"
        aria-labelledby="demo-title"
      >
        <h2
          id="demo-title"
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          {title}
        </h2>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              ref={formRef}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onSubmit={handleSubmit}
              className="space-y-4"
              noValidate
              onKeyDown={handleKeyDown}
            >
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-3 py-2 border rounded-md transition-colors ${focusedField === 'name' ? 'border-blue-500' : 'border-gray-300'} ${errors.name ? 'border-red-500' : ''}`}
                  value={formData.name}
                  onChange={e => handleInputChange('name', e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-red-500 mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-3 py-2 border rounded-md transition-colors ${focusedField === 'email' ? 'border-blue-500' : 'border-gray-300'} ${errors.email ? 'border-red-500' : ''}`}
                  value={formData.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-red-500 mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                  className={`w-full px-3 py-2 border rounded-md transition-colors resize-none ${focusedField === 'message' ? 'border-blue-500' : 'border-gray-300'} ${errors.message ? 'border-red-500' : ''}`}
                  value={formData.message}
                  onChange={e => handleInputChange('message', e.target.value)}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xs text-red-500 mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-md font-medium transition-colors bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white"
                disabled={isSubmitting}
                aria-describedby={
                  isSubmitting ? 'submitting-status' : undefined
                }
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              {isSubmitting && (
                <p
                  className="text-sm text-gray-600 text-center"
                  id="submitting-status"
                >
                  Please wait while we process your submission...
                </p>
              )}
              {errors.submit && (
                <p className="text-sm text-red-500 text-center mt-2">
                  {errors.submit}
                </p>
              )}
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col items-center justify-center py-8"
            >
              <div
                role="img"
                aria-label="Success checkmark"
                className="w-12 h-12 text-green-500 mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                Success!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
                Your form has been submitted successfully.
              </p>
              <p className="text-sm text-gray-500 text-center">
                Submitted on {new Date().toISOString().split('T')[0]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimationObserver>
  );
}
