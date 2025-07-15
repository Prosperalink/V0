'use client';

import AnimationObserver from '@/components/AnimationObserver';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';

interface ISolution {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  features: string[];
  results: string[];
  cta: string;
}

const solutions: ISolution[] = [
  {
    id: 'digital-innovation',
    title: 'Digital Innovation',
    description:
      'Building robust digital foundations that drive growth and competitive advantage through cutting-edge technology and sophisticated design.',
    icon: '🚀',
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-900/20 to-cyan-800/20',
    features: [
      'Custom Booking Systems',
      'Portfolio Websites',
      'E-commerce Platforms',
      'Business Automation',
      'CRM Systems',
      'Analytics Tools',
    ],
    results: [
      '300% Increase in Efficiency',
      '50% Reduction in Manual Tasks',
      '24/7 Automated Operations',
      'Real-time Data Insights',
    ],
    cta: 'Transform Your Digital Foundation',
  },
  {
    id: 'creative-design',
    title: 'Creative Design',
    description:
      "Crafting compelling visual narratives that unearth your brand's unique story and amplify it through cinematic design experiences.",
    icon: '🎨',
    color: 'from-purple-600 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-900/20 to-pink-800/20',
    features: [
      'Brand Identity Design',
      'Visual Storytelling',
      'Cinematic Photography',
      'Motion Graphics',
      'UI/UX Design',
      'Marketing Materials',
    ],
    results: [
      '200% Brand Recognition',
      '85% Customer Engagement',
      'Award-Winning Designs',
      'Viral Visual Content',
    ],
    cta: 'Craft Your Visual Story',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description:
      'Creating engaging content that tells your story and connects with your audience on a deeper level through cinematic storytelling.',
    icon: '📝',
    color: 'from-green-600 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-900/20 to-emerald-800/20',
    features: [
      'Video Production',
      'Photography',
      'Blog Writing',
      'Social Media Content',
      'Podcast Production',
      'Educational Content',
    ],
    results: [
      '500% Content Engagement',
      '1M+ Video Views',
      'Viral Social Media',
      'Industry Recognition',
    ],
    cta: 'Tell Your Story',
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Consulting',
    description:
      'Providing strategic guidance that aligns your digital presence with your business objectives for sustainable growth.',
    icon: '🎯',
    color: 'from-orange-600 to-red-500',
    bgColor: 'bg-gradient-to-br from-orange-900/20 to-red-800/20',
    features: [
      'Business Strategy',
      'Digital Transformation',
      'Market Analysis',
      'Growth Planning',
      'Technology Roadmap',
      'Performance Optimization',
    ],
    results: [
      '150% Revenue Growth',
      'Market Leadership',
      'Operational Excellence',
      'Sustainable Scaling',
    ],
    cta: 'Chart Your Success Path',
  },
  {
    id: 'technology-solutions',
    title: 'Technology Solutions',
    description:
      'Delivering cutting-edge technology solutions that streamline operations and create competitive advantages.',
    icon: '⚡',
    color: 'from-yellow-600 to-orange-500',
    bgColor: 'bg-gradient-to-br from-yellow-900/20 to-orange-800/20',
    features: [
      'Custom Software Development',
      'System Integration',
      'Cloud Solutions',
      'Security Implementation',
      'API Development',
      'Performance Optimization',
    ],
    results: [
      '99.9% System Uptime',
      '60% Cost Reduction',
      'Enhanced Security',
      'Scalable Architecture',
    ],
    cta: 'Build Your Tech Advantage',
  },
];

export default function SolutionsMatrix() {
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
              Solutions Matrix
            </h2>
            <p className="text-xl sm:text-2xl text-text-white mb-4 max-w-3xl mx-auto">
              Where cinematic storytelling meets strategic innovation
            </p>
            <p className="text-lg text-text-subtle max-w-2xl mx-auto">
              Each solution is crafted with the precision of a master filmmaker,
              combining artistic vision with technical excellence to deliver
              results that exceed expectations.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border border-golden-accent/20 ${solution.bgColor} backdrop-blur-sm hover:border-golden-accent/40 transition-all duration-500 group`}
              >
                {/* Solution Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`text-4xl bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}
                  >
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-text-white leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-golden-accent mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-golden-accent rounded-full" />
                        <span className="text-text-white text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-golden-accent mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Measurable Results
                  </h4>
                  <div className="space-y-2">
                    {solution.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center gap-2"
                      >
                        <Star className="w-4 h-4 text-golden-accent" />
                        <span className="text-text-white text-sm">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${solution.color} text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300`}
                >
                  {solution.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-golden-accent text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-accent/90 transition-colors duration-300 shadow-lg"
            >
              Explore All Solutions
            </motion.button>
          </motion.div>
        </AnimationObserver>
      </div>
    </section>
  );
}
