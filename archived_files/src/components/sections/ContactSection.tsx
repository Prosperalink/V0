'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budgetRange: '',
      timeline: '',
      message: '',
    });

    // Show success message (you can implement this as needed)
    alert(
      'Thank you! Our producers will be in touch to schedule a creative consultation.'
    );
  };

  return (
    <section className="relative py-24 bg-deep-blue overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/6 w-1 h-1 bg-golden-accent rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute bottom-1/3 right-1/5 w-0.5 h-0.5 bg-golden-accent rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-golden-accent mb-6">
              The Blueprint for Your Masterpiece
            </h2>
            <p className="text-xl text-text-subtle max-w-3xl mx-auto">
              Let's draft the first scene. Fill out this blueprint, and our
              producers will be in touch to schedule a creative consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="bg-dark-tone/80 backdrop-blur-sm rounded-lg p-8 border border-golden-accent/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-text-white font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-deep-blue/50 border border-golden-accent/30 rounded-lg text-text-white placeholder-text-subtle focus:outline-none focus:border-golden-accent focus:ring-1 focus:ring-golden-accent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-text-white font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-deep-blue/50 border border-golden-accent/30 rounded-lg text-text-white placeholder-text-subtle focus:outline-none focus:border-golden-accent focus:ring-1 focus:ring-golden-accent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-text-white font-medium mb-2"
                  >
                    Your Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-deep-blue/50 border border-golden-accent/30 rounded-lg text-text-white placeholder-text-subtle focus:outline-none focus:border-golden-accent focus:ring-1 focus:ring-golden-accent transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-text-white font-medium mb-2"
                    >
                      What type of project are you envisioning?
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-deep-blue/50 border border-golden-accent/30 rounded-lg text-text-white focus:outline-none focus:border-golden-accent focus:ring-1 focus:ring-golden-accent transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="website">Website Development</option>
                      <option value="branding">Brand Identity</option>
                      <option value="video">Video Production</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="consulting">Strategic Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budgetRange"
                      className="block text-text-white font-medium mb-2"
                    >
                      What's your investment range?
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-deep-blue/50 border border-golden-accent/30 rounded-lg text-text-white focus:outline-none focus:border-golden-accent focus:ring-1 focus:ring-golden-accent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-text-white font-medium mb-2"
                  >
                    When do you need this completed?
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-deep-blue/50 border border-golden-accent/30 rounded-lg text-text-white focus:outline-none focus:border-golden-accent focus:ring-1 focus:ring-golden-accent transition-all duration-300"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months+">6+ months</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-text-white font-medium mb-2"
                  >
                    Tell us about your cinematic vision
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-deep-blue/50 border border-golden-accent/30 rounded-lg text-text-white placeholder-text-subtle focus:outline-none focus:border-golden-accent focus:ring-1 focus:ring-golden-accent transition-all duration-300"
                    placeholder="Describe your project vision, goals, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-golden-accent focus:ring-offset-2 focus:ring-offset-deep-blue disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-deep-blue"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send the Blueprint
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Director's Note */}
              <div className="bg-dark-tone/30 backdrop-blur-sm rounded-lg p-8 border border-golden-accent/20">
                <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-4">
                  A Note from the Director
                </h3>
                <p className="text-text-subtle leading-relaxed">
                  Thank you for taking the tour. What you've witnessed is more
                  than a process; it's a philosophy. If you believe your brand
                  has a story worth telling, then you're in the right place. My
                  door is always open to visionaries who are ready to create
                  something truly exceptional.
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-dark-tone/30 backdrop-blur-sm rounded-lg p-8 border border-golden-accent/20">
                <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-6">
                  Connect With Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-golden-accent" />
                    <div>
                      <div className="text-text-white font-medium">Email</div>
                      <div className="text-text-subtle">
                        contact@orsonvision.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-golden-accent" />
                    <div>
                      <div className="text-text-white font-medium">Phone</div>
                      <div className="text-text-subtle">+216 XX XXX XXX</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-golden-accent" />
                    <div>
                      <div className="text-text-white font-medium">
                        Location
                      </div>
                      <div className="text-text-subtle">Tunis, Tunisia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-dark-tone/30 backdrop-blur-sm rounded-lg p-8 border border-golden-accent/20">
                <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-4">
                  Office Hours
                </h3>
                <p className="text-text-subtle">
                  Monday - Friday, 9:00 AM - 6:00 PM (Tunisia Time)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
