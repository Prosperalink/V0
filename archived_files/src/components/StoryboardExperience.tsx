'use client';

import { motion } from 'framer-motion';
import { Eye, FileText, Play, Rocket, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function StoryboardExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [floatingParticles, setFloatingParticles] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set mounted state on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate particles only on client side
  useEffect(() => {
    if (!mounted) return;

    const particles = [...Array(20)].map((unused, i) => ({
      key: `storyboard-particle-${i}-${Math.random()}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 3,
    }));
    setFloatingParticles(particles);
  }, [mounted]);

  const steps = [
    {
      id: 1,
      title: 'Discovery',
      subtitle: 'Understanding Your Vision',
      description:
        'We begin by understanding your unique story and vision, diving deep into your brand, goals, and the emotional journey you want to create.',
      emotion: 'Curiosity',
      color: 'from-blue-500 to-blue-600',
      icon: Search,
      process: [
        'Initial consultation and vision alignment',
        'Brand analysis and audience research',
        'Competitive landscape review',
        'Project scope and objectives definition',
      ],
      deliverables: [
        'Comprehensive project brief',
        'Brand positioning strategy',
        'Target audience personas',
        'Project timeline and milestones',
      ],
      timeline: '1-2 weeks',
    },
    {
      id: 2,
      title: 'Planning',
      subtitle: 'Crafting Your Storyboard',
      description:
        'We craft a detailed storyboard of your digital experience, mapping out every scene, transition, and emotional beat.',
      emotion: 'Excitement',
      color: 'from-purple-500 to-purple-600',
      icon: FileText,
      process: [
        'Creative concept development',
        'Storyboard and wireframe creation',
        'Technical architecture planning',
        'Content strategy and copywriting',
      ],
      deliverables: [
        'Detailed storyboard and wireframes',
        'Technical specifications',
        'Content strategy document',
        'Project roadmap and timeline',
      ],
      timeline: '2-3 weeks',
    },
    {
      id: 3,
      title: 'Creation',
      subtitle: 'Bringing Your Story to Life',
      description:
        'We bring your story to life with cinematic precision, using cutting-edge technology and artistic vision.',
      emotion: 'Inspiration',
      color: 'from-green-500 to-green-600',
      icon: Play,
      process: [
        'Visual design and UI/UX creation',
        'Frontend and backend development',
        'Content creation and integration',
        'Animation and interaction development',
      ],
      deliverables: [
        'Fully functional website or application',
        'Responsive design across all devices',
        'Optimized performance and SEO',
        'Content management system',
      ],
      timeline: '4-8 weeks',
    },
    {
      id: 4,
      title: 'Review',
      subtitle: 'Perfecting Every Scene',
      description:
        'We collaborate with you to perfect every scene, ensuring every detail aligns with your vision and exceeds expectations.',
      emotion: 'Trust',
      color: 'from-orange-500 to-orange-600',
      icon: Eye,
      process: [
        'Comprehensive testing and quality assurance',
        'User experience optimization',
        'Performance and security testing',
        'Client feedback integration',
      ],
      deliverables: [
        'Quality assurance report',
        'Performance optimization',
        'Security audit and compliance',
        'User testing feedback',
      ],
      timeline: '1-2 weeks',
    },
    {
      id: 5,
      title: 'Launch',
      subtitle: 'Premiering Your Masterpiece',
      description:
        'We premiere your digital masterpiece to the world, ensuring a flawless launch and ongoing support.',
      emotion: 'Transformation',
      color: 'from-red-500 to-red-600',
      icon: Rocket,
      process: [
        'Final deployment and launch preparation',
        'Domain and hosting setup',
        'Analytics and tracking implementation',
        'Launch monitoring and support',
      ],
      deliverables: [
        'Live website or application',
        'Analytics and reporting setup',
        'Launch support and monitoring',
        'Ongoing maintenance plan',
      ],
      timeline: '1 week',
    },
  ];

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
    setIsExpanded(true);
  };

  const scrollToStep = (stepIndex: number) => {
    setActiveStep(stepIndex);
    setIsExpanded(true);

    if (containerRef.current) {
      const stepElement = containerRef.current.children[
        stepIndex
      ] as HTMLElement;
      if (stepElement) {
        stepElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-cinematic-blue-deep via-cinematic-blue-rich to-cinematic-blue-deep overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-spotlight opacity-20" />

      {/* Section Header */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Cinematic Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every step is a scene in your story. We guide you through a
            transformative process that brings your vision to life with
            cinematic precision and human-centered design.
          </p>
        </motion.div>
      </div>

      {/* Interactive Timeline */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cinematic-gold-primary to-transparent" />

          {/* Steps */}
          <div ref={containerRef} className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }}
              >
                {/* Step Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-110`}
                    onClick={() => handleStepClick(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>
                </div>

                {/* Step Content */}
                <motion.div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'text-left' : 'text-right'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.2,
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-cinematic-gold-primary font-medium">
                          {step.subtitle}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-cinematic-gold-primary/20 text-cinematic-gold-primary text-sm font-medium rounded-full">
                          {step.timeline}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Process */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">
                          Our Process
                        </h4>
                        <ul className="space-y-2">
                          {step.process.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 text-sm flex items-start"
                            >
                              <span className="text-cinematic-gold-primary mr-2">
                                •
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 text-sm flex items-start"
                            >
                              <span className="text-cinematic-gold-primary mr-2">
                                ✓
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Emotion Indicator */}
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">
                          Target Emotion:
                        </span>
                        <span className="text-cinematic-gold-primary font-medium">
                          {step.emotion}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted &&
          floatingParticles.map(p => (
            <motion.div
              key={p.key}
              className="absolute w-1 h-1 bg-cinematic-gold-primary rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
              }}
            />
          ))}
      </div>
    </section>
  );
}
