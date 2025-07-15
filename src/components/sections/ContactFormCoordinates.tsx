'use client';

import { motion } from 'framer-motion';
import { Building, Mail, MessageSquare, Phone, Send, User } from 'lucide-react';
import { useState } from 'react';

export default function ContactFormCoordinates() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dark-tone via-deep-blue to-dark-tone">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-cinematic font-bold mb-6 text-golden-accent"
          >
            Transmit Your Coordinates
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-text-white max-w-3xl mx-auto"
          >
            Share your vision with us and let's chart a course to digital
            excellence together.
          </motion.p>

          {/* Golden Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-gradient-to-r from-golden-accent to-yellow-400 mx-auto mt-8"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-dark-tone/50 to-mid-tone/50 p-8 rounded-2xl backdrop-blur-sm border border-golden-accent/20 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-golden-accent font-semibold mb-2"
                >
                  Cosmic Identifier
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-golden-accent w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-dark-tone/50 border border-golden-accent/30 rounded-lg text-cream-white placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-golden-accent focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-golden-accent font-semibold mb-2"
                >
                  Digital Frequency
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-golden-accent w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-dark-tone/50 border border-golden-accent/30 rounded-lg text-cream-white placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-golden-accent focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Company Field */}
              <div className="relative">
                <label
                  htmlFor="company"
                  className="block text-golden-accent font-semibold mb-2"
                >
                  Galactic Corporation
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-golden-accent w-5 h-5" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-dark-tone/50 border border-golden-accent/30 rounded-lg text-cream-white placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-golden-accent focus:border-transparent transition-all duration-300"
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label
                  htmlFor="phone"
                  className="block text-golden-accent font-semibold mb-2"
                >
                  Communication Channel
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-golden-accent w-5 h-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-dark-tone/50 border border-golden-accent/30 rounded-lg text-cream-white placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-golden-accent focus:border-transparent transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-golden-accent font-semibold mb-2"
              >
                Cosmic Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-golden-accent w-5 h-5" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full pl-10 pr-4 py-3 bg-dark-tone/50 border border-golden-accent/30 rounded-lg text-cream-white placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-golden-accent focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, vision, or any questions you have..."
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-golden-accent focus:ring-offset-2 focus:ring-offset-deep-blue"
            >
              Transmit Coordinates
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-text-subtle">
              We'll respond within 24 hours to discuss your cosmic vision.
            </p>
          </motion.div>
        </div>

        {/* Additional cosmic elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-10 w-2 h-2 bg-golden-accent rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute top-40 right-20 w-1 h-1 bg-golden-accent rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
