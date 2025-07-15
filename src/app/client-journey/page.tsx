'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ClientJourneyPage() {
  const { t } = useLanguage();

  const journeySteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description:
        'We begin by deeply understanding your business, goals, and unique story to create a strategic foundation.',
      duration: '1-2 weeks',
      deliverables: [
        'Business analysis and research',
        'Competitive landscape review',
        'User persona development',
        'Strategic recommendations',
      ],
      icon: '🔍',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description:
        'Our creative team transforms your vision into stunning visual concepts and interactive prototypes.',
      duration: '2-3 weeks',
      deliverables: [
        'Wireframes and user flows',
        'Visual design concepts',
        'Interactive prototypes',
        'Design system creation',
      ],
      icon: '🎨',
    },
    {
      step: '03',
      title: 'Development & Integration',
      description:
        'We build robust, scalable solutions using cutting-edge technologies and best practices.',
      duration: '4-8 weeks',
      deliverables: [
        'Frontend and backend development',
        'Third-party integrations',
        'Performance optimization',
        'Security implementation',
      ],
      icon: '⚙️',
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description:
        'Rigorous testing ensures your solution performs flawlessly across all devices and platforms.',
      duration: '1-2 weeks',
      deliverables: [
        'Cross-browser testing',
        'Mobile responsiveness',
        'Performance testing',
        'Security audits',
      ],
      icon: '🧪',
    },
    {
      step: '05',
      title: 'Launch & Optimization',
      description:
        'We ensure a smooth launch and continuously optimize your solution for maximum impact.',
      duration: 'Ongoing',
      deliverables: [
        'Deployment and launch',
        'SEO optimization',
        'Analytics setup',
        'Performance monitoring',
      ],
      icon: '🚀',
    },
  ];

  const successStories = [
    {
      client: 'TechStart',
      industry: 'E-commerce',
      challenge:
        'Needed a scalable platform to handle rapid growth and international expansion',
      solution:
        'Built a custom e-commerce solution with advanced inventory management, multi-language support, and analytics',
      results: [
        '250% increase in conversion rates',
        '40% reduction in cart abandonment',
        '300% growth in monthly revenue',
        'Expansion to 5 new markets',
      ],
      timeline: '12 weeks',
      team: [
        'Project Manager',
        'Senior Developer',
        'UX Designer',
        'Content Strategist',
      ],
    },
    {
      client: 'École Internationale',
      industry: 'Education',
      challenge:
        'Required an engaging platform for remote learning and student collaboration',
      solution:
        'Developed an interactive learning management system with real-time collaboration features and parent portals',
      results: [
        '180% increase in student engagement',
        '95% parent satisfaction rate',
        '50% reduction in administrative workload',
        'Seamless transition to hybrid learning',
      ],
      timeline: '16 weeks',
      team: [
        'Project Manager',
        'Full-Stack Developer',
        'UX Designer',
        'Content Strategist',
      ],
    },
    {
      client: 'Tunisian Crafts',
      industry: 'Artisan & Crafts',
      challenge:
        'Wanted to reach global markets while preserving authentic cultural heritage',
      solution:
        'Created a multilingual marketplace with advanced shipping, payment systems, and cultural storytelling',
      results: [
        '300% increase in online sales',
        'Expansion to 15+ countries',
        'Preserved cultural authenticity',
        'Enhanced artisan livelihoods',
      ],
      timeline: '20 weeks',
      team: [
        'Project Manager',
        'Senior Developer',
        'UX Designer',
        'Content Strategist',
        'Localization Expert',
      ],
    },
  ];

  const processBenefits = [
    {
      title: 'Transparent Communication',
      description:
        'Regular updates, clear timelines, and open communication ensure you&#39;re always in the loop.',
      icon: '💬',
    },
    {
      title: 'Flexible Collaboration',
      description:
        'Work with us remotely or in-person, with tools and processes that adapt to your preferences.',
      icon: '🤝',
    },
    {
      title: 'Quality Assurance',
      description:
        'Rigorous testing and quality checks ensure your solution meets the highest standards.',
      icon: '✅',
    },
    {
      title: 'Ongoing Support',
      description:
        'We&#39;re here long after launch with maintenance, updates, and optimization services.',
      icon: '🛠️',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      quote:
        'The team at Orson Vision made our vision a reality. Their cinematic approach to design and development resulted in a platform that not only looks stunning but performs exceptionally well.',
      rating: 5,
    },
    {
      name: 'Ahmed Ben Ali',
      role: 'Founder, Tunisian Crafts',
      quote:
        'Working with Orson Vision was a game-changer for our business. They understood our cultural heritage and helped us reach global markets while staying true to our roots.',
      rating: 5,
    },
    {
      name: 'Marie Dubois',
      role: 'Marketing Director, École Internationale',
      quote:
        'The team&#39;s attention to detail and commitment to excellence exceeded our expectations. Our new learning platform has transformed how we engage with students and parents.',
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cinematic-blue to-cinematic-gold" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t('clientJourney.hero.title')}
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-200">
              {t('clientJourney.hero.subtitle')}
            </h2>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('clientJourney.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-blue mb-6">
              Our Process
            </h2>
            <p className="text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto">
              A proven methodology that ensures every project delivers
              exceptional results and exceeds expectations.
            </p>
          </div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-[var(--bg-primary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl font-bold text-cinematic-blue mr-4">
                        {step.step}
                      </div>
                      <div className="text-3xl">{step.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[var(--color-foreground)]/70 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex items-center mb-4">
                      <span className="bg-cinematic-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {step.duration}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cinematic-blue mb-3">
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, i) => (
                          <li
                            key={i}
                            className="text-sm text-[var(--color-foreground)]/70 flex items-start space-x-2"
                          >
                            <span className="text-cinematic-blue text-xs mt-1">
                              •
                            </span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-cinematic-blue to-cinematic-gold h-64 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold opacity-20 mb-4">
                        {step.step}
                      </div>
                      <div className="text-4xl">{step.icon}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-blue mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto">
              Real projects, real results. See how our collaborative process
              delivers exceptional outcomes.
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <motion.div
                key={story.client}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[var(--bg-secondary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-[var(--color-foreground)] mr-4">
                        {story.client}
                      </h3>
                      <span className="bg-cinematic-blue text-white px-3 py-1 rounded-full text-sm">
                        {story.industry}
                      </span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-cinematic-blue mb-2">
                          Challenge
                        </h4>
                        <p className="text-[var(--color-foreground)]/70">
                          {story.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-cinematic-blue mb-2">
                          Solution
                        </h4>
                        <p className="text-[var(--color-foreground)]/70">
                          {story.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-cinematic-blue mb-2">
                          Results
                        </h4>
                        <ul className="space-y-1">
                          {story.results.map((result, i) => (
                            <li
                              key={i}
                              className="text-sm text-[var(--color-foreground)]/70 flex items-start space-x-2"
                            >
                              <span className="text-cinematic-gold text-xs mt-1">
                                ✓
                              </span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-[var(--bg-primary)] rounded-xl p-6">
                      <h4 className="font-semibold text-cinematic-blue mb-4">
                        Project Details
                      </h4>

                      <div className="space-y-4">
                        <div>
                          <span className="text-sm text-[var(--color-foreground)]/60">
                            Timeline
                          </span>
                          <p className="font-semibold text-[var(--color-foreground)]">
                            {story.timeline}
                          </p>
                        </div>

                        <div>
                          <span className="text-sm text-[var(--color-foreground)]/60">
                            Team
                          </span>
                          <div className="space-y-1 mt-1">
                            {story.team.map((member, i) => (
                              <div
                                key={i}
                                className="text-sm text-[var(--color-foreground)]/70"
                              >
                                • {member}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-blue mb-6">
              Why Choose Our Process?
            </h2>
            <p className="text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto">
              Our collaborative approach ensures you&apos;re involved every step
              of the way, with transparency and quality at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-cinematic-blue mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[var(--color-foreground)]/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-blue mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto">
              Hear from clients who have experienced our collaborative process
              and achieved exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[var(--bg-secondary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-cinematic-gold mr-4">
                    {(() => {
                      const stars = [];
                      for (let i = 0; i < testimonial.rating; i++) {
                        stars.push(
                          <span key={i} className="text-xl">
                            ★
                          </span>
                        );
                      }
                      return stars;
                    })()}
                  </div>
                </div>

                <p className="text-[var(--color-foreground)] mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cinematic-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-foreground)]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[var(--color-foreground)]/70">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-cinematic-blue to-cinematic-gold">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Let&apos;s discuss your project and begin crafting a digital
              experience that transforms your business and delights your
              audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-cinematic-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cinematic-blue transition-all duration-300"
              >
                Schedule a Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
