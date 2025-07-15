'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  FileText,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Upload,
  User,
  X,
} from 'lucide-react';
import { useRef, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  files: File[];
}

interface CinematicContactFormProps {
  onSubmit?: (data: FormData) => void;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function CinematicContactForm({
  onSubmit,
  onSuccess,
  onError,
}: CinematicContactFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    files: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const steps = [
    {
      title: 'Personal Information',
      description: 'Tell us about yourself',
      fields: ['name', 'email', 'phone', 'company'],
    },
    {
      title: 'Project Details',
      description: 'What can we help you with?',
      fields: ['projectType', 'budget', 'timeline'],
    },
    {
      title: 'Project Description',
      description: 'Share your vision with us',
      fields: ['description'],
    },
    {
      title: 'Additional Files',
      description: 'Upload any relevant materials',
      fields: ['files'],
    },
  ];

  const projectTypes = [
    'Website Development',
    'Video Production',
    'Digital Marketing',
    'Brand Identity',
    'E-commerce Solution',
    'Mobile Application',
    'Content Creation',
    'Other',
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 weeks',
    '1-2 months',
    '3-6 months',
    '6+ months',
  ];

  const validateStep = (stepIndex: number): boolean => {
    const stepFields = steps[stepIndex].fields;
    const newErrors: Partial<FormData> = {};

    stepFields.forEach(field => {
      if (field === 'name' && !formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (field === 'email' && !formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (
        field === 'email' &&
        formData.email &&
        !/\S+@\S+\.\S+/.test(formData.email)
      ) {
        newErrors.email = 'Please enter a valid email';
      }
      if (field === 'phone' && !formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      }
      if (field === 'projectType' && !formData.projectType) {
        newErrors.projectType = 'Please select a project type';
      }
      if (field === 'budget' && !formData.budget) {
        newErrors.budget = 'Please select a budget range';
      }
      if (field === 'timeline' && !formData.timeline) {
        newErrors.timeline = 'Please select a timeline';
      }
      if (field === 'description' && !formData.description.trim()) {
        newErrors.description = 'Please describe your project';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setFormData(prev => ({ ...prev, files: [...prev.files, ...files] }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      setIsSuccess(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      if (onError) {
        onError(error instanceof Error ? error.message : 'An error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: string) => {
    switch (field) {
      case 'name':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            <label className="block text-golden-accent font-medium">
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-subtle"
                size={20}
              />
              <input
                type="text"
                value={formData.name}
                onChange={e => handleInputChange('name', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 bg-background-blue-deep border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.name
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-text-subtle/30 focus:border-golden-accent focus:ring-golden-accent/50'
                } text-text-white`}
                placeholder="Enter your full name"
              />
            </div>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {errors.name}
              </motion.p>
            )}
          </motion.div>
        );

      case 'email':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-2"
          >
            <label className="block text-golden-accent font-medium">
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-subtle"
                size={20}
              />
              <input
                type="email"
                value={formData.email}
                onChange={e => handleInputChange('email', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 bg-background-blue-deep border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-text-subtle/30 focus:border-golden-accent focus:ring-golden-accent/50'
                } text-text-white`}
                placeholder="Enter your email address"
              />
            </div>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>
        );

      case 'phone':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-2"
          >
            <label className="block text-golden-accent font-medium">
              Phone Number
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-subtle"
                size={20}
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={e => handleInputChange('phone', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 bg-background-blue-deep border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.phone
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-text-subtle/30 focus:border-golden-accent focus:ring-golden-accent/50'
                } text-text-white`}
                placeholder="Enter your phone number"
              />
            </div>
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {errors.phone}
              </motion.p>
            )}
          </motion.div>
        );

      case 'company':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="space-y-2"
          >
            <label className="block text-golden-accent font-medium">
              Company (Optional)
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={e => handleInputChange('company', e.target.value)}
              className="w-full px-4 py-3 bg-background-blue-deep border border-text-subtle/30 rounded-lg focus:outline-none focus:border-golden-accent focus:ring-2 focus:ring-golden-accent/50 transition-all duration-300 text-text-white"
              placeholder="Enter your company name"
            />
          </motion.div>
        );

      case 'projectType':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            <label className="block text-golden-accent font-medium">
              Project Type
            </label>
            <select
              value={formData.projectType}
              onChange={e => handleInputChange('projectType', e.target.value)}
              className={`w-full px-4 py-3 bg-background-blue-deep border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.projectType
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-text-subtle/30 focus:border-golden-accent focus:ring-golden-accent/50'
              } text-text-white`}
            >
              <option value="">Select a project type</option>
              {projectTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {errors.projectType}
              </motion.p>
            )}
          </motion.div>
        );

      case 'budget':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-2"
          >
            <label className="block text-golden-accent font-medium">
              Budget Range
            </label>
            <select
              value={formData.budget}
              onChange={e => handleInputChange('budget', e.target.value)}
              className={`w-full px-4 py-3 bg-background-blue-deep border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.budget
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-text-subtle/30 focus:border-golden-accent focus:ring-golden-accent/50'
              } text-text-white`}
            >
              <option value="">Select a budget range</option>
              {budgetRanges.map(range => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.budget && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {errors.budget}
              </motion.p>
            )}
          </motion.div>
        );

      case 'timeline':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-2"
          >
            <label className="block text-golden-accent font-medium">
              Timeline
            </label>
            <select
              value={formData.timeline}
              onChange={e => handleInputChange('timeline', e.target.value)}
              className={`w-full px-4 py-3 bg-background-blue-deep border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.timeline
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-text-subtle/30 focus:border-golden-accent focus:ring-golden-accent/50'
              } text-text-white`}
            >
              <option value="">Select a timeline</option>
              {timelineOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.timeline && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {errors.timeline}
              </motion.p>
            )}
          </motion.div>
        );

      case 'description':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            <label className="block text-golden-accent font-medium">
              Project Description
            </label>
            <div className="relative">
              <MessageSquare
                className="absolute left-3 top-3 text-text-subtle"
                size={20}
              />
              <textarea
                value={formData.description}
                onChange={e => handleInputChange('description', e.target.value)}
                rows={6}
                className={`w-full pl-10 pr-4 py-3 bg-background-blue-deep border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                  errors.description
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-text-subtle/30 focus:border-golden-accent focus:ring-golden-accent/50'
                } text-text-white`}
                placeholder="Describe your project vision, goals, and any specific requirements..."
              />
            </div>
            {errors.description && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {errors.description}
              </motion.p>
            )}
          </motion.div>
        );

      case 'files':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <label className="block text-golden-accent font-medium">
              Additional Files
            </label>

            {/* File Upload Area */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-text-subtle/30 rounded-lg p-8 text-center cursor-pointer hover:border-golden-accent/50 transition-colors duration-300"
            >
              <Upload className="mx-auto mb-4 text-text-subtle" size={32} />
              <p className="text-text-white mb-2">Click to upload files</p>
              <p className="text-text-subtle text-sm">
                PDF, DOC, Images, Videos (Max 10MB each)
              </p>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mov"
            />

            {/* File List */}
            {formData.files.length > 0 && (
              <div className="space-y-2">
                <p className="text-golden-accent font-medium">
                  Uploaded Files:
                </p>
                {formData.files.map((file, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-3 bg-background-blue-deep rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="text-golden-accent" size={20} />
                      <span className="text-text-white text-sm">
                        {file.name}
                      </span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="p-1 hover:bg-red-500/20 rounded-full transition-colors"
                    >
                      <X className="text-red-400" size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle className="text-white" size={32} />
        </motion.div>
        <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-text-white mb-8">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsSuccess(false);
            setCurrentStep(0);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              projectType: '',
              budget: '',
              timeline: '',
              description: '',
              files: [],
            });
          }}
          className="bg-golden-accent text-deep-blue px-6 py-3 rounded-lg font-semibold hover:bg-golden-accent/90 transition-colors"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <section className="relative min-h-screen bg-deep-blue overflow-hidden">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/50 to-deep-blue/80 z-10" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Form Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-4">
            Start Your Project
          </h2>
          <p className="text-xl text-text-white max-w-2xl mx-auto">
            Let's create something extraordinary together. Tell us about your
            vision.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index < steps.length - 1 ? 'flex-1' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    index <= currentStep
                      ? 'bg-golden-accent text-deep-blue'
                      : 'bg-text-subtle/30 text-text-subtle'
                  }`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                      index < currentStep
                        ? 'bg-golden-accent'
                        : 'bg-text-subtle/30'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="max-w-2xl mx-auto"
        >
          {/* Step Header */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-2">
              {steps[currentStep].title}
            </h3>
            <p className="text-text-subtle">{steps[currentStep].description}</p>
          </motion.div>

          {/* Form Fields */}
          <div className="space-y-6">
            {steps[currentStep].fields.map(field => renderField(field))}
          </div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="flex justify-between mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentStep === 0
                  ? 'text-text-subtle cursor-not-allowed'
                  : 'text-golden-accent border border-golden-accent hover:bg-golden-accent hover:text-deep-blue'
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </motion.button>

            {currentStep === steps.length - 1 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-golden-accent text-deep-blue px-6 py-3 rounded-lg font-semibold hover:bg-golden-accent/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-deep-blue border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="flex items-center gap-2 bg-golden-accent text-deep-blue px-6 py-3 rounded-lg font-semibold hover:bg-golden-accent/90 transition-colors"
              >
                Next
                <ChevronRight size={20} />
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
