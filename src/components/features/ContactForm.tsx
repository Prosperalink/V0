'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import AnimationObserver from '@/components/AnimationObserver';
import {
  IContactFormData,
  googleWorkspaceManager,
} from '@/lib/google-workspace';

interface IContactFormProps {
  className?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm({ className = '' }: IContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IContactFormData>();

  const onSubmit = async (data: IContactFormData) => {
    setStatus('submitting');
    setErrorMessage('');

    try {
      // First, try to send via Google Workspace if authenticated
      const isAuthenticated = googleWorkspaceManager.isAuthenticated();

      if (isAuthenticated) {
        const success = await googleWorkspaceManager.processContactForm(data);
        if (success) {
          setStatus('success');
          setMessage('Thank you! Your message has been sent successfully.');
          reset();
          return;
        }
      }

      // Fallback to regular form submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! Your message has been sent successfully.');
        reset();
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-6 h-6 text-red-500" />;
      case 'submitting':
        return <Loader2 className="w-6 h-6 text-cinematic-gold animate-spin" />;
      default:
        return <Send className="w-6 h-6 text-cinematic-gold" />;
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'success':
        return message || 'Thank you! Your message has been sent successfully.';
      case 'error':
        return errorMessage || 'Failed to send message. Please try again.';
      case 'submitting':
        return 'Sending your message...';
      default:
        return '';
    }
  };

  return (
    <AnimationObserver className={className}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-[var(--bg-primary)] dark:bg-[var(--bg-secondary)] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cinematic-blue to-cinematic-gold p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">
              Begin Your Cinematic Transformation
            </h3>
            <p className="text-blue-100">
              Let&apos;s unearth your unique story and craft a digital
              experience that will captivate your audience, amplify your impact,
              and create lasting connections.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cinematic-blue focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cinematic-blue focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Phone and Company Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="form-input-cinematic"
                  placeholder="+216 XX XXX XXX"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Company
                </label>
                <input
                  {...register('company')}
                  type="text"
                  id="company"
                  className="form-input-cinematic"
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Service of Interest *
              </label>
              <select
                {...register('service', {
                  required: 'Please select a service',
                })}
                id="service"
                className="form-input-cinematic"
              >
                <option value="">Select a service</option>
                <option value="digital-innovation">Digital Innovation</option>
                <option value="creative-design">Creative Design</option>
                <option value="content-creation">Content Creation</option>
                <option value="technology-solutions">
                  Technology Solutions
                </option>
                <option value="strategic-consulting">
                  Strategic Consulting
                </option>
                <option value="multiple-services">Multiple Services</option>
                <option value="custom-project">Custom Project</option>
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.service.message}
                </p>
              )}
            </div>

            {/* Budget and Timeline Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Budget Range
                </label>
                <select
                  {...register('budget')}
                  id="budget"
                  className="form-input-cinematic"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1000">Under 1,000 TND</option>
                  <option value="1000-5000">1,000 - 5,000 TND</option>
                  <option value="5000-15000">5,000 - 15,000 TND</option>
                  <option value="15000-50000">15,000 - 50,000 TND</option>
                  <option value="over-50000">Over 50,000 TND</option>
                  <option value="to-discuss">To be discussed</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Project Timeline
                </label>
                <select
                  {...register('timeline')}
                  id="timeline"
                  className="form-input-cinematic"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-2-weeks">1-2 weeks</option>
                  <option value="1-month">1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Project Details *
              </label>
              <textarea
                {...register('message', {
                  required: 'Please describe your project',
                  minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters long',
                  },
                })}
                id="message"
                rows={6}
                className="form-input-cinematic resize-none"
                placeholder="Tell us about your project, goals, and vision..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || status === 'submitting'}
              className="w-full bg-gradient-to-r from-cinematic-gold to-cinematic-gold-dark text-white font-semibold py-4 px-8 rounded-lg hover:from-cinematic-gold-dark hover:to-cinematic-gold transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center space-x-2">
                {getStatusIcon()}
                <span>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </span>
              </div>
            </motion.button>

            {/* Status Message */}
            <AnimatePresence>
              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-lg border ${
                    status === 'success'
                      ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200'
                      : status === 'error'
                        ? 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200'
                        : 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {getStatusIcon()}
                    <p className="text-sm font-medium">{getStatusMessage()}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="text-sm text-gray-500">
            We&apos;ll get back to you within 24 hours.
          </p>
          <p className="mt-1">
            Or email us directly at{' '}
            <a
              href="mailto:contact@orsonvision.com"
              className="text-cinematic-gold hover:text-cinematic-gold-dark transition-colors"
            >
              contact@orsonvision.com
            </a>
          </p>
        </div>
      </div>
    </AnimationObserver>
  );
}
