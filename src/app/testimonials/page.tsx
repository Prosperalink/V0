'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimonialsPage() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      company: 'TechStart',
      industry: 'E-commerce',
      quote:
        'Orson Vision transformed our digital presence with their cinematic approach. The results exceeded our expectations - our conversion rates increased by 250% within the first quarter.',
      results: [
        '250% increase in conversion rates',
        '40% reduction in cart abandonment',
        '300% growth in monthly revenue',
      ],
      rating: 5,
      image: '/testimonials/sarah-johnson.jpg',
    },
    {
      name: 'Ahmed Ben Ali',
      role: 'Founder, Tunisian Crafts',
      company: 'Tunisian Crafts',
      industry: 'Artisan & Crafts',
      quote:
        'Their human-centered design philosophy perfectly captured our brand essence. Our online sales increased by 300% and we now reach customers worldwide while maintaining our authentic Tunisian heritage.',
      results: [
        '300% increase in online sales',
        'Expansion to 15+ countries',
        'Preserved cultural authenticity',
      ],
      rating: 5,
      image: '/testimonials/ahmed-ben-ali.jpg',
    },
    {
      name: 'Marie Dubois',
      role: 'Marketing Director, École Internationale',
      company: 'École Internationale',
      industry: 'Education',
      quote:
        'The team at Orson Vision understood our educational mission and created content that truly resonates with our community. Our student engagement increased by 180% and parent satisfaction scores are at an all-time high.',
      results: [
        '180% increase in student engagement',
        '95% parent satisfaction rate',
        '50% reduction in administrative workload',
      ],
      rating: 5,
      image: '/testimonials/marie-dubois.jpg',
    },
    {
      name: 'David Chen',
      role: 'CTO, InnovateTech',
      company: 'InnovateTech',
      industry: 'Technology',
      quote:
        'The technical expertise and creative vision of the Orson Vision team is unmatched. They delivered a solution that not only met our requirements but exceeded them in every way.',
      results: [
        '200% improvement in system performance',
        '90% reduction in development time',
        'Enhanced user experience',
      ],
      rating: 5,
      image: '/testimonials/david-chen.jpg',
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'Creative Director, Heritage Designs',
      company: 'Heritage Designs',
      industry: 'Fashion & Design',
      quote:
        'Working with Orson Vision was a revelation. They helped us tell our story in a way that connects with customers on a deep, emotional level while driving real business results.',
      results: [
        '150% increase in brand awareness',
        '200% growth in online orders',
        'Enhanced brand storytelling',
      ],
      rating: 5,
      image: '/testimonials/fatima-al-zahra.jpg',
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Operations Manager, Green Solutions',
      company: 'Green Solutions',
      industry: 'Sustainability',
      quote:
        "The team's commitment to understanding our mission and values was evident in every aspect of the project. They created a platform that truly reflects our commitment to sustainability.",
      results: [
        '120% increase in customer engagement',
        '80% improvement in lead generation',
        'Enhanced sustainability messaging',
      ],
      rating: 5,
      image: '/testimonials/carlos-rodriguez.jpg',
    },
  ];

  const industryStats = [
    {
      industry: 'E-commerce',
      projects: 15,
      avgImprovement: '280%',
      metric: 'Conversion Rate',
      icon: '🛒',
    },
    {
      industry: 'Education',
      projects: 12,
      avgImprovement: '175%',
      metric: 'Student Engagement',
      icon: '🎓',
    },
    {
      industry: 'Artisan & Crafts',
      projects: 8,
      avgImprovement: '320%',
      metric: 'Online Sales',
      icon: '🎨',
    },
    {
      industry: 'Technology',
      projects: 20,
      avgImprovement: '240%',
      metric: 'Performance',
      icon: '⚙️',
    },
    {
      industry: 'Fashion & Design',
      projects: 10,
      avgImprovement: '190%',
      metric: 'Brand Awareness',
      icon: '👗',
    },
    {
      industry: 'Sustainability',
      projects: 6,
      avgImprovement: '150%',
      metric: 'Customer Engagement',
      icon: '🌱',
    },
  ];

  const resultsShowcase = [
    {
      category: 'Performance Metrics',
      stats: [
        { label: 'Average Conversion Rate Increase', value: '245%' },
        { label: 'Average Revenue Growth', value: '312%' },
        { label: 'Average User Engagement', value: '187%' },
        { label: 'Average Page Load Speed', value: '2.3s' },
      ],
    },
    {
      category: 'Client Satisfaction',
      stats: [
        { label: 'Client Satisfaction Rate', value: '98%' },
        { label: 'Project Completion Rate', value: '100%' },
        { label: 'Client Retention Rate', value: '95%' },
        { label: 'Referral Rate', value: '87%' },
      ],
    },
    {
      category: 'Project Success',
      stats: [
        { label: 'Projects Delivered On Time', value: '100%' },
        { label: 'Projects Under Budget', value: '92%' },
        { label: 'Post-Launch Support', value: '100%' },
        { label: 'Long-term Partnerships', value: '85%' },
      ],
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
              {t('testimonials.title')}
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-200">
              {t('testimonials.subtitle')}
            </h2>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how our cinematic approach to digital experiences has
              transformed businesses across industries, driving measurable
              results and creating lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Stories */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-blue mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto">
              Hear directly from the businesses we&apos;ve helped transform
              through our cinematic digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-2xl shadow-lg border border-[var(--color-border)] overflow-hidden"
              >
                <div className="bg-gradient-to-br from-cinematic-blue to-cinematic-gold h-48 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-sm opacity-80">
                      {testimonial.industry}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-cinematic-blue rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-foreground)]">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-[var(--color-foreground)]/70">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-cinematic-blue">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex text-cinematic-gold">
                      {(() => {
                        const stars = [];
                        for (let i = 0; i < testimonial.rating; i++) {
                          stars.push(
                            <span key={i} className="text-lg">
                              ★
                            </span>
                          );
                        }
                        return stars;
                      })()}
                    </div>
                  </div>

                  <p className="text-[var(--color-foreground)]/80 mb-4 leading-relaxed italic text-sm">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div>
                    <h4 className="font-semibold text-cinematic-blue mb-2 text-sm">
                      Key Results
                    </h4>
                    <ul className="space-y-1">
                      {testimonial.results.map((result, i) => (
                        <li
                          key={i}
                          className="text-xs text-[var(--color-foreground)]/70 flex items-start space-x-2"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-blue mb-6">
              Results by Industry
            </h2>
            <p className="text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto">
              Our cinematic approach delivers exceptional results across diverse
              industries and business models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.industry}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[var(--bg-secondary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)] text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-cinematic-blue mb-4">
                  {stat.industry}
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-[var(--color-foreground)]">
                      {stat.projects}
                    </div>
                    <div className="text-sm text-[var(--color-foreground)]/70">
                      Projects Completed
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-cinematic-gold">
                      {stat.avgImprovement}
                    </div>
                    <div className="text-sm text-[var(--color-foreground)]/70">
                      Avg {stat.metric} Improvement
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cinematic-blue mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto">
              Our track record speaks for itself. Here are the numbers that
              demonstrate our commitment to delivering exceptional value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resultsShowcase.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]"
              >
                <h3 className="text-2xl font-bold text-cinematic-blue mb-6">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.stats.map((stat, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-[var(--color-foreground)]/70 text-sm">
                        {stat.label}
                      </span>
                      <span className="text-2xl font-bold text-cinematic-gold">
                        {stat.value}
                      </span>
                    </div>
                  ))}
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Let&apos;s discuss your project and create a digital experience
              that delivers exceptional results for your business.
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
                View Our Process
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
