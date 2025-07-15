'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, Search, Settings } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Discovery & Transparency',
    description:
      'We start with an honest conversation about your needs, budget, and goals. No hidden costs, no surprises - just transparent communication.',
    icon: Search,
    color: 'from-cobalt-blue to-blue-500',
  },
  {
    id: 2,
    title: 'Authentic Strategy',
    description:
      'We develop a strategy that tells your authentic story. No flashy marketing, just honest, effective solutions that drive real results.',
    icon: Lightbulb,
    color: 'from-green-500 to-green-600',
  },
  {
    id: 3,
    title: 'Digital Vérité Production',
    description:
      'We capture your story with documentary-style authenticity. Real moments, real people, real results that connect with your audience.',
    icon: Settings,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 4,
    title: 'Performance & Results',
    description:
      "We deliver measurable results and ongoing support. Your success is our success - we're committed to your long-term growth.",
    icon: CheckCircle,
    color: 'from-success to-success-dark',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cobalt-blue/10 text-cobalt-blue text-sm font-medium mb-6"
          >
            Our Process
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-onyx mb-6">
            Transparent
            <span className="text-cobalt-blue"> Process</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Digital Vérité approach ensures complete transparency at every
            step of your project.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cobalt-blue/20 hidden lg:block" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Icon */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon size={32} className="text-white" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-cobalt-blue/20" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-bold text-cobalt-blue">
                        {String(step.id).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl font-semibold text-onyx">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
