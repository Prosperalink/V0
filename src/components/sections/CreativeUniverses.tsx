'use client';

import AnimationObserver from '@/components/AnimationObserver';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Video } from 'lucide-react';

interface ICreativeUniverse {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  projects: {
    title: string;
    description: string;
    image: string;
    results: string[];
  }[];
  techniques: string[];
  cta: string;
}

const creativeUniverses: ICreativeUniverse[] = [
  {
    id: 'cinematic-storytelling',
    title: 'Cinematic Storytelling',
    subtitle: 'Where every frame tells a story',
    description:
      'We transform ordinary moments into extraordinary narratives through the art of cinematic storytelling, creating emotional connections that resonate deeply with audiences.',
    icon: '🎬',
    color: 'from-red-600 to-pink-500',
    bgColor: 'bg-gradient-to-br from-red-900/20 to-pink-800/20',
    projects: [
      {
        title: 'The Wedding Chronicle',
        description:
          'A cinematic wedding film that captures the essence of true love through sophisticated storytelling.',
        image: '/assets/portfolio/wedding-story.jpg',
        results: [
          '4.9/5 Client Rating',
          'Featured in Wedding Magazine',
          '500+ Social Shares',
        ],
      },
      {
        title: 'Brand Evolution',
        description:
          'A dramatic brand transformation story that showcases the power of authentic storytelling.',
        image: '/assets/portfolio/brand-story.jpg',
        results: [
          '300% Brand Awareness',
          'Industry Award Winner',
          'Featured in Forbes',
        ],
      },
    ],
    techniques: [
      'Emotional Storytelling',
      'Cinematic Color Grading',
      'Professional Audio',
      'Artistic Direction',
    ],
    cta: 'Tell Your Story',
  },
  {
    id: 'visual-artistry',
    title: 'Visual Artistry',
    subtitle: 'Crafting beauty in every pixel',
    description:
      'Our visual artists create stunning imagery that captures attention and communicates your message with artistic precision and creative excellence.',
    icon: '🎨',
    color: 'from-purple-600 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-purple-900/20 to-indigo-800/20',
    projects: [
      {
        title: 'Fashion Photography',
        description:
          'Sophisticated fashion photography that elevates brand perception and drives engagement.',
        image: '/assets/portfolio/fashion-art.jpg',
        results: ['200% Engagement', 'Viral Social Media', 'Brand Recognition'],
      },
      {
        title: 'Product Showcase',
        description:
          'Cinematic product photography that transforms ordinary items into desirable objects.',
        image: '/assets/portfolio/product-art.jpg',
        results: [
          '150% Sales Increase',
          'Award-Winning Design',
          'Industry Recognition',
        ],
      },
    ],
    techniques: [
      'Cinematic Composition',
      'Lighting Mastery',
      'Color Theory',
      'Visual Hierarchy',
    ],
    cta: 'Create Visual Magic',
  },
  {
    id: 'motion-craft',
    title: 'Motion Craft',
    subtitle: 'Bringing static to life',
    description:
      'We breathe life into static elements through sophisticated animation and motion design, creating dynamic experiences that captivate and engage.',
    icon: '🎭',
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-900/20 to-cyan-800/20',
    projects: [
      {
        title: 'Logo Animation',
        description:
          'Dynamic logo animations that create memorable brand experiences and enhance recognition.',
        image: '/assets/portfolio/logo-motion.jpg',
        results: ['300% Brand Recall', 'Viral Marketing', 'Industry Awards'],
      },
      {
        title: 'Explainer Videos',
        description:
          'Engaging explainer videos that simplify complex concepts through visual storytelling.',
        image: '/assets/portfolio/explainer-motion.jpg',
        results: [
          '85% Understanding',
          'Increased Conversions',
          'Client Satisfaction',
        ],
      },
    ],
    techniques: [
      'Motion Design',
      'Animation Principles',
      'Visual Effects',
      'Sound Design',
    ],
    cta: 'Animate Your Vision',
  },
  {
    id: 'digital-innovation',
    title: 'Digital Innovation',
    subtitle: 'Pushing creative boundaries',
    description:
      'We combine cutting-edge technology with artistic vision to create digital experiences that are both beautiful and functional.',
    icon: '⚡',
    color: 'from-green-600 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-900/20 to-emerald-800/20',
    projects: [
      {
        title: 'Interactive Website',
        description:
          'Immersive web experiences that engage users and drive conversions through innovative design.',
        image: '/assets/portfolio/interactive-web.jpg',
        results: [
          '200% User Engagement',
          '50% Conversion Rate',
          'Industry Recognition',
        ],
      },
      {
        title: 'VR Experience',
        description:
          "Virtual reality experiences that transport users into your brand's world.",
        image: '/assets/portfolio/vr-experience.jpg',
        results: [
          'Immersive Engagement',
          'Brand Innovation',
          'Technology Leadership',
        ],
      },
    ],
    techniques: [
      'Interactive Design',
      'User Experience',
      'Technology Integration',
      'Performance Optimization',
    ],
    cta: 'Innovate Digitally',
  },
];

export default function CreativeUniverses() {
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
              Creative Universes
            </h2>
            <p className="text-xl sm:text-2xl text-text-white mb-4 max-w-3xl mx-auto">
              Where imagination meets execution in perfect harmony
            </p>
            <p className="text-lg text-text-subtle max-w-2xl mx-auto">
              Each creative universe represents a specialized domain where we
              excel, combining artistic vision with technical mastery to deliver
              exceptional results.
            </p>
          </motion.div>

          {/* Creative Universes Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {creativeUniverses.map((universe, index) => (
              <motion.div
                key={universe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border border-golden-accent/20 ${universe.bgColor} backdrop-blur-sm hover:border-golden-accent/40 transition-all duration-500 group`}
              >
                {/* Universe Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`text-4xl bg-gradient-to-r ${universe.color} bg-clip-text text-transparent`}
                  >
                    {universe.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-2">
                      {universe.title}
                    </h3>
                    <p className="text-golden-accent/80 text-sm font-medium mb-2">
                      {universe.subtitle}
                    </p>
                    <p className="text-text-white leading-relaxed">
                      {universe.description}
                    </p>
                  </div>
                </div>

                {/* Projects Preview */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-golden-accent mb-4 flex items-center gap-2">
                    <Video className="w-5 h-5" />
                    Featured Projects
                  </h4>
                  <div className="space-y-4">
                    {universe.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className="bg-deep-blue/30 rounded-lg p-4"
                      >
                        <h5 className="text-text-white font-semibold mb-2">
                          {project.title}
                        </h5>
                        <p className="text-text-subtle text-sm mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.results.map((result, resultIndex) => (
                            <span
                              key={resultIndex}
                              className="text-xs bg-golden-accent/20 text-golden-accent px-2 py-1 rounded"
                            >
                              {result}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Techniques */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-golden-accent mb-3 flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Creative Techniques
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {universe.techniques.map((technique, techniqueIndex) => (
                      <div
                        key={techniqueIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-golden-accent rounded-full" />
                        <span className="text-text-white text-sm">
                          {technique}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${universe.color} text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300`}
                >
                  {universe.cta}
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
              Explore Creative Universes
            </motion.button>
          </motion.div>
        </AnimationObserver>
      </div>
    </section>
  );
}
