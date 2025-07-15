'use client';

import AnimationObserver from '@/components/AnimationObserver';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { useState } from 'react';

interface IContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const contactInfo: IContactInfo[] = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    value: 'hello@orsonvision.com',
    description: 'Get in touch for inquiries and consultations',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    value: '+216 XX XXX XXX',
    description: 'Call us for immediate assistance',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Location',
    value: 'Tunis, Tunisia',
    description: 'Serving clients worldwide from our base',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Response Time',
    value: 'Within 24 hours',
    description: 'We respond to all inquiries promptly',
  },
];

export default function CinematicContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        timeline: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationObserver>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-6">
              Ready to Create Your Story?
            </h2>
            <p className="text-xl sm:text-2xl text-text-white mb-4 max-w-3xl mx-auto">
              Let's transform your vision into a cinematic masterpiece
            </p>
            <p className="text-lg text-text-subtle max-w-2xl mx-auto">
              Every great film begins with a conversation. Let's discuss your
              project and craft a story that captivates your audience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-background-blue-deep to-deep-blue p-8 rounded-2xl border border-golden-accent/20"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-golden-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-text-white">
                    Thank you for reaching out. We'll get back to you within 24
                    hours to discuss your cinematic journey.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-golden-accent font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-deep-blue border border-golden-accent/20 rounded-lg text-text-white placeholder-text-subtle focus:border-golden-accent focus:outline-none transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-golden-accent font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-deep-blue border border-golden-accent/20 rounded-lg text-text-white placeholder-text-subtle focus:border-golden-accent focus:outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-golden-accent font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-deep-blue border border-golden-accent/20 rounded-lg text-text-white placeholder-text-subtle focus:border-golden-accent focus:outline-none transition-colors duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-golden-accent font-medium mb-2">
                        Project Type *
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-deep-blue border border-golden-accent/20 rounded-lg text-text-white focus:border-golden-accent focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select project type</option>
                        <option value="wedding-events">Wedding & Events</option>
                        <option value="education">Education</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="business-growth">Business Growth</option>
                        <option value="creative-industries">
                          Creative Industries
                        </option>
                        <option value="technology">Technology</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-golden-accent font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-deep-blue border border-golden-accent/20 rounded-lg text-text-white focus:border-golden-accent focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="over-50k">Over $50,000</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-golden-accent font-medium mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-deep-blue border border-golden-accent/20 rounded-lg text-text-white focus:border-golden-accent focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-months-plus">6+ months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-golden-accent font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-deep-blue border border-golden-accent/20 rounded-lg text-text-white placeholder-text-subtle focus:border-golden-accent focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and vision..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-deep-blue border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-background-blue-deep to-deep-blue rounded-xl border border-golden-accent/20"
                  >
                    <div className="p-3 bg-gradient-to-r from-golden-accent to-yellow-400 rounded-lg text-deep-blue">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-golden-accent mb-1">
                        {info.title}
                      </h3>
                      <p className="text-text-white font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-text-subtle text-sm">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-background-blue-deep to-deep-blue p-8 rounded-2xl border border-golden-accent/20"
              >
                <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-4">
                  Why Choose Orson Vision?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span className="text-text-white">
                      Hollywood-level production values
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span className="text-text-white">
                      Strategic business thinking
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span className="text-text-white">
                      Proven track record of success
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span className="text-text-white">
                      Personalized approach to every project
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AnimationObserver>
      </div>
    </section>
  );
}
