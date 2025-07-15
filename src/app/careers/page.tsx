'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/contexts/LanguageContext';

export default function CareersPage() {
  const { t } = useLanguage();

  const cultureValues = [
    {
      title: 'Human-Centered Design',
      description:
        'We believe in putting people first - both our team and our clients. Every decision we make is guided by empathy and understanding.',
      icon: '❤️',
    },
    {
      title: 'Creative Excellence',
      description:
        'We push boundaries and embrace innovation while maintaining the highest standards of quality and craftsmanship.',
      icon: '🎨',
    },
    {
      title: 'Collaborative Growth',
      description:
        'We foster an environment where everyone can learn, grow, and contribute to our shared success.',
      icon: '🤝',
    },
    {
      title: 'Authentic Storytelling',
      description:
        'We believe every brand has a unique story, and we help them tell it in the most compelling way possible.',
      icon: '📖',
    },
  ];

  const opportunities = [
    {
      title: 'Senior Frontend Developer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      department: 'Engineering',
      description:
        'Join our team to build stunning, performant web experiences that bring our clients&#39; stories to life.',
      requirements: [
        '5+ years of experience with React/Next.js',
        'Strong TypeScript skills',
        'Experience with modern CSS and animations',
        'Passion for user experience and performance',
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Professional development budget',
        'Health and wellness benefits',
      ],
    },
    {
      title: 'UX/UI Designer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      department: 'Design',
      description:
        'Create intuitive, beautiful interfaces that delight users and drive business results.',
      requirements: [
        '3+ years of UX/UI design experience',
        'Proficiency in Figma and design systems',
        'Strong portfolio showcasing user-centered design',
        'Experience with user research and testing',
      ],
      benefits: [
        'Creative freedom and ownership',
        'Latest design tools and resources',
        'Conference and workshop opportunities',
        'Collaborative design culture',
      ],
    },
    {
      title: 'Content Strategist',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      department: 'Marketing',
      description:
        'Help brands find their authentic voice and create compelling content that resonates with their audience.',
      requirements: [
        '4+ years of content strategy experience',
        'Strong writing and storytelling skills',
        'Experience with brand voice development',
        'Multilingual content experience preferred',
      ],
      benefits: [
        'Creative storytelling opportunities',
        'Work with diverse global brands',
        'Content creation tools and resources',
        'Professional writing workshops',
      ],
    },
    {
      title: 'Project Manager',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      department: 'Operations',
      description:
        'Lead complex digital projects from concept to launch, ensuring exceptional delivery and client satisfaction.',
      requirements: [
        '5+ years of project management experience',
        'Experience in digital/creative agencies',
        'Strong client communication skills',
        'Agile/Scrum methodology knowledge',
      ],
      benefits: [
        'Leadership and growth opportunities',
        'Project management tools and training',
        'Client relationship development',
        'Strategic planning involvement',
      ],
    },
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health insurance',
        'Mental health support',
        'Fitness and wellness programs',
        'Flexible work arrangements',
      ],
      icon: '🏥',
    },
    {
      category: 'Professional Growth',
      items: [
        'Learning and development budget',
        'Conference and workshop opportunities',
        'Mentorship programs',
        'Career advancement paths',
      ],
      icon: '📚',
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Unlimited paid time off',
        'Flexible working hours',
        'Remote work options',
        'Family-friendly policies',
      ],
      icon: '⚖️',
    },
    {
      category: 'Team & Culture',
      items: [
        'Regular team events and retreats',
        'Collaborative work environment',
        'Diversity and inclusion programs',
        'Creative and innovative culture',
      ],
      icon: '🎉',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Developer',
      quote:
        'Working at Orson Vision has been transformative. The team&#39;s commitment to human-centered design and cinematic storytelling has pushed me to grow both technically and creatively.',
      years: '2 years',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'UX Designer',
      quote:
        'The collaborative culture here is incredible. Everyone&#39;s voice matters, and we&#39;re constantly learning from each other. It&#39;s rare to find a company that truly values both creativity and technical excellence.',
      years: '1.5 years',
    },
    {
      name: 'Aisha Patel',
      role: 'Content Strategist',
      quote:
        'I love how we get to work with diverse brands and help them tell their unique stories. The multilingual aspect of our work makes every project exciting and culturally rich.',
      years: '3 years',
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
              {t('careers.hero.title')}
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-200">
              {t('careers.hero.subtitle')}
            </h2>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('careers.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-blue mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto">
              We believe in creating an environment where creativity thrives,
              innovation flourishes, and every team member can reach their full
              potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-cinematic-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--color-foreground)]/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-blue mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto">
              Join our team and help us create extraordinary digital experiences
              that inspire and transform.
            </p>
          </div>

          <div className="space-y-8">
            {opportunities.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[var(--bg-secondary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-cinematic-blue text-white px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                      <span className="bg-[var(--color-border)] text-[var(--color-foreground)] px-3 py-1 rounded-full">
                        {job.location}
                      </span>
                      <span className="bg-cinematic-gold text-white px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cinematic-blue hover:bg-cinematic-blue/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-4 lg:mt-0"
                  >
                    Apply Now
                  </motion.button>
                </div>

                <p className="text-[var(--color-foreground)]/80 mb-6 leading-relaxed">
                  {job.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-cinematic-blue mb-3">
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--color-foreground)]/70 flex items-start space-x-2"
                        >
                          <span className="text-cinematic-blue text-xs mt-1">
                            •
                          </span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cinematic-blue mb-3">
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--color-foreground)]/70 flex items-start space-x-2"
                        >
                          <span className="text-cinematic-gold text-xs mt-1">
                            ✓
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-blue mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto">
              We believe in taking care of our team so they can do their best
              work and live their best lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-2xl p-6 shadow-lg border border-[var(--color-border)] text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-cinematic-blue mb-4">
                  {benefit.category}
                </h3>
                <div className="space-y-2">
                  {benefit.items.map((item, i) => (
                    <div
                      key={i}
                      className="text-sm text-[var(--color-foreground)]/70"
                    >
                      • {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-blue mb-6">
              Hear From Our Team
            </h2>
            <p className="text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto">
              Discover what makes working at Orson Vision special from the
              people who know it best.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-cinematic-blue to-cinematic-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-foreground)]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[var(--color-foreground)]/70">
                      {testimonial.role} • {testimonial.years}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--color-foreground)]/80 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              If you&apos;re passionate about creating extraordinary digital
              experiences and want to be part of a team that values creativity,
              innovation, and human connection, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-cinematic-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cinematic-blue transition-all duration-300"
              >
                Send General Application
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
