'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import AnimationObserver from './AnimationObserver';

interface IJourneyStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  duration: string;
  outcomes: string[];
}

const steps: IJourneyStep[] = [
  {
    id: 'discovery',
    title: 'Discovery & Strategy',
    description:
      'We dive deep into understanding your business, challenges, and aspirations to craft a tailored digital strategy.',
    icon: '🔍',
    color: 'from-blue-500 to-cyan-400',
    duration: '1-2 weeks',
    outcomes: [
      'Comprehensive Business Analysis',
      'Digital Strategy Roadmap',
      'Technology Assessment',
      'Competitive Analysis',
    ],
  },
  {
    id: 'design',
    title: 'Design & Prototyping',
    description:
      'Our creative team transforms your vision into stunning visual concepts and interactive prototypes.',
    icon: '🎨',
    color: 'from-purple-500 to-pink-400',
    duration: '2-3 weeks',
    outcomes: [
      'Visual Design Concepts',
      'Interactive Prototypes',
      'User Experience Maps',
      'Brand Guidelines',
    ],
  },
  {
    id: 'development',
    title: 'Development & Integration',
    description:
      'We build robust, scalable solutions using cutting-edge technologies and best practices.',
    icon: '⚙️',
    color: 'from-green-500 to-emerald-400',
    duration: '4-8 weeks',
    outcomes: [
      'Custom Development',
      'API Integration',
      'Database Architecture',
      'Performance Optimization',
    ],
  },
  {
    id: 'testing',
    title: 'Testing & Quality Assurance',
    description:
      'Rigorous testing ensures your solution is flawless, secure, and ready for launch.',
    icon: '🔧',
    color: 'from-orange-500 to-red-400',
    duration: '1-2 weeks',
    outcomes: [
      'Comprehensive Testing',
      'Security Audits',
      'Performance Testing',
      'User Acceptance Testing',
    ],
  },
  {
    id: 'launch',
    title: 'Launch & Optimization',
    description:
      'We ensure a smooth launch and continuously optimize your solution for maximum impact.',
    icon: '🚀',
    color: 'from-yellow-500 to-amber-400',
    duration: 'Ongoing',
    outcomes: [
      'Smooth Deployment',
      'Performance Monitoring',
      'Continuous Optimization',
      'Support & Maintenance',
    ],
  },
];

export default function ClientJourney() {
  const [activeStep, setActiveStep] = useState<string>('discovery');

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900/30 to-slate-900">
        <div className="absolute inset-0 bg-[url('/hero-video.mp4')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <AnimationObserver>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Journey With Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collaborative process designed to transform your vision into
              digital reality, with transparency and excellence at every step.
            </p>
          </motion.div>
        </AnimationObserver>

        {/* Journey Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/50 to-amber-500/50" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <AnimationObserver key={step.id}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Step Content */}
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                  >
                    <motion.div
                      className={`p-6 rounded-2xl border border-white/10 backdrop-blur-sm bg-gradient-to-br ${step.color} cursor-pointer transition-all duration-500 hover:scale-105 ${
                        activeStep === step.id
                          ? 'border-white/30 shadow-lg shadow-blue-500/20'
                          : ''
                      }`}
                      onClick={() => setActiveStep(step.id)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{step.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {step.duration}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-4 border-slate-900 shadow-lg" />

                  {/* Spacer */}
                  <div className="w-1/2" />
                </motion.div>
              </AnimationObserver>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <AnimationObserver>
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {steps.find(s => s.id === activeStep)?.title} - Key Outcomes
                </h3>
                <ul className="space-y-3">
                  {steps
                    .find(s => s.id === activeStep)
                    ?.outcomes.map((outcome, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-3" />
                        {outcome}
                      </motion.li>
                    ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {steps.find(s => s.id === activeStep)?.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {steps.find(s => s.id === activeStep)?.duration}
                  </h4>
                  <p className="text-gray-400">
                    Estimated timeline for this phase
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimationObserver>
      </div>
    </section>
  );
}
