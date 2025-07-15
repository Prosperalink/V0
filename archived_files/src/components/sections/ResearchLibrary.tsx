'use client';

import { motion } from 'framer-motion';
import { BarChart3, Target, TrendingUp, Users } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

export default function ResearchLibrary() {
  // Final copy for 'The Research Library' - Data-Driven Insights
  const stats: StatItem[] = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      value: '98%',
      label: 'Data-Driven Success Rate',
      description:
        'Projects completed with measurable ROI and performance metrics, ensuring every decision is backed by comprehensive analytics and user behavior insights.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '3.2x',
      label: 'Average Performance Increase',
      description:
        'Typical improvement in user engagement and conversion rates through our cinematic approach to digital experience design and strategic optimization.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '500+',
      label: 'User Research Sessions',
      description:
        'Comprehensive user testing and behavioral analysis conducted across diverse demographics to inform every design decision and content strategy.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: '95%',
      label: 'Target Audience Precision',
      description:
        'Accuracy in reaching and engaging intended user demographics through sophisticated audience analysis and personalized content delivery strategies.',
    },
  ];

  return (
    <section className="relative py-24 bg-deep-blue overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.04),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 left-1/6 w-1 h-1 bg-golden-accent rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/5 w-0.5 h-0.5 bg-golden-accent rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-golden-accent mb-6">
            The Research Library
          </h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            Our creative instincts are sharp, but they are always informed by
            rigorous research. We blend data-driven insights with our artistic
            vision to ensure our work not only looks beautiful but performs
            brilliantly.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-dark-tone/50 backdrop-blur-sm rounded-lg p-6 border border-golden-accent/20 hover:border-golden-accent/40 transition-all duration-300"
            >
              <div className="text-golden-accent mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-golden-accent mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-text-white mb-2">
                {stat.label}
              </div>
              <div className="text-text-subtle text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Performance Chart */}
          <div className="bg-dark-tone/30 backdrop-blur-sm rounded-lg p-8 border border-golden-accent/20">
            <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-6">
              Performance Analytics
            </h3>
            <div className="space-y-4">
              {[
                {
                  label: 'User Engagement',
                  value: 87,
                  color: 'from-golden-accent to-yellow-400',
                },
                {
                  label: 'Conversion Rate',
                  value: 94,
                  color: 'from-blue-400 to-cyan-400',
                },
                {
                  label: 'Load Speed',
                  value: 96,
                  color: 'from-green-400 to-emerald-400',
                },
                {
                  label: 'Mobile Optimization',
                  value: 98,
                  color: 'from-purple-400 to-pink-400',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-text-white font-medium">
                      {item.label}
                    </span>
                    <span className="text-golden-accent font-bold">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full bg-deep-blue/50 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Insights */}
          <div className="bg-dark-tone/30 backdrop-blur-sm rounded-lg p-8 border border-golden-accent/20">
            <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-6">
              Research Insights
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: 'Behavioral Patterns',
                  description:
                    'Deep analysis of user interaction patterns and decision-making processes',
                  percentage: '92%',
                },
                {
                  title: 'Market Trends',
                  description:
                    'Real-time monitoring of industry trends and competitive landscape',
                  percentage: '89%',
                },
                {
                  title: 'A/B Testing Results',
                  description:
                    'Comprehensive testing methodology for optimal user experience',
                  percentage: '95%',
                },
                {
                  title: 'Accessibility Compliance',
                  description:
                    'Full WCAG 2.1 AA compliance for inclusive design',
                  percentage: '100%',
                },
              ].map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-golden-accent to-yellow-400 rounded-lg flex items-center justify-center text-deep-blue font-bold text-sm">
                    {insight.percentage}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-white mb-1">
                      {insight.title}
                    </h4>
                    <p className="text-text-subtle text-sm">
                      {insight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
