'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import AnimationObserver from '@/components/AnimationObserver';

interface IUniverse {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  solutions: string[];
  clientNeeds: string[];
  benefits: string[];
}

const universes: IUniverse[] = [
  {
    id: 'digital-innovation',
    title: 'Digital Innovation',
    subtitle: 'Transforming Ideas into Digital Reality',
    description:
      'We bridge the gap between imagination and implementation, creating seamless digital experiences that drive business growth and user engagement. Our innovative approach combines cutting-edge technology with human-centered design principles.',
    icon: '🚀',
    color: 'from-[#1e3a8a] to-[#3b82f6]',
    bgColor: 'bg-gradient-to-br from-[#1e3a8a]/20 to-[#3b82f6]/20',
    solutions: [
      'Custom Web Applications',
      'Progressive Web Apps',
      'Mobile-First Solutions',
      'E-commerce Platforms',
      'API Development & Integration',
    ],
    clientNeeds: [
      'Digital Transformation',
      'Process Automation',
      'User Experience Optimization',
      'Technology Integration',
      'Performance Optimization',
    ],
    benefits: [
      'Increased Conversion Rates',
      'Improved User Engagement',
      'Streamlined Operations',
      'Enhanced Brand Perception',
      'Competitive Advantage',
    ],
  },
  {
    id: 'visual-storytelling',
    title: 'Visual Storytelling',
    subtitle: 'Crafting Cinematic Brand Narratives',
    description:
      'We create compelling visual narratives that connect with audiences on an emotional level, building lasting relationships and driving brand loyalty. Every design element tells a story that resonates with your target audience.',
    icon: '🎬',
    color: 'from-[#F59E0B] to-[#FBBF24]',
    bgColor: 'bg-gradient-to-br from-[#F59E0B]/20 to-[#FBBF24]/20',
    solutions: [
      'Brand Identity Design',
      'Visual Design Systems',
      'Motion Graphics',
      'Video Production',
      'Photography & Imagery',
    ],
    clientNeeds: [
      'Brand Recognition',
      'Market Differentiation',
      'Customer Engagement',
      'Brand Consistency',
      'Emotional Connection',
    ],
    benefits: [
      'Stronger Brand Recognition',
      'Increased Customer Loyalty',
      'Enhanced Market Position',
      'Improved Conversion Rates',
      'Memorable Brand Experiences',
    ],
  },
  {
    id: 'brand-evolution',
    title: 'Brand Evolution',
    subtitle: "Guiding Your Brand's Digital Journey",
    description:
      'We help brands evolve and adapt in the digital landscape, creating cohesive brand experiences that grow with your business. Our strategic approach ensures your brand remains relevant and competitive.',
    icon: '🌟',
    color: 'from-[#8B5CF6] to-[#A78BFA]',
    bgColor: 'bg-gradient-to-br from-[#8B5CF6]/20 to-[#A78BFA]/20',
    solutions: [
      'Brand Strategy Development',
      'Digital Brand Guidelines',
      'Brand Experience Design',
      'Marketing Campaigns',
      'Social Media Strategy',
    ],
    clientNeeds: [
      'Brand Positioning',
      'Market Expansion',
      'Customer Acquisition',
      'Brand Consistency',
      'Digital Presence',
    ],
    benefits: [
      'Clear Brand Positioning',
      'Expanded Market Reach',
      'Increased Customer Acquisition',
      'Consistent Brand Experience',
      'Stronger Market Presence',
    ],
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    subtitle: 'Modernizing Your Business Operations',
    description:
      'We guide businesses through complete digital transformation, optimizing operations and creating sustainable competitive advantages. Our comprehensive approach ensures long-term success in the digital economy.',
    icon: '⚡',
    color: 'from-[#059669] to-[#10B981]',
    bgColor: 'bg-gradient-to-br from-[#059669]/20 to-[#10B981]/20',
    solutions: [
      'Digital Strategy Consulting',
      'Process Automation',
      'Cloud Infrastructure',
      'Data Analytics',
      'Change Management',
    ],
    clientNeeds: [
      'Operational Efficiency',
      'Cost Reduction',
      'Scalability',
      'Data-Driven Decisions',
      'Competitive Advantage',
    ],
    benefits: [
      'Improved Operational Efficiency',
      'Reduced Operational Costs',
      'Enhanced Scalability',
      'Data-Driven Insights',
      'Sustainable Growth',
    ],
  },
  {
    id: 'creative-technology',
    title: 'Creative Technology',
    subtitle: 'Pushing the Boundaries of Digital Innovation',
    description:
      'We explore emerging technologies and creative solutions that set your business apart. From AI integration to immersive experiences, we create cutting-edge solutions that capture attention and drive results.',
    icon: '🎯',
    color: 'from-[#DC2626] to-[#EF4444]',
    bgColor: 'bg-gradient-to-br from-[#DC2626]/20 to-[#EF4444]/20',
    solutions: [
      'AI-Powered Solutions',
      'Immersive Experiences',
      'Interactive Applications',
      'Advanced Analytics',
      'Emerging Technology Integration',
    ],
    clientNeeds: [
      'Innovation Leadership',
      'Technology Differentiation',
      'Advanced Capabilities',
      'Future-Proofing',
      'Competitive Edge',
    ],
    benefits: [
      'Market Innovation Leadership',
      'Technology Differentiation',
      'Enhanced User Experiences',
      'Future-Proof Solutions',
      'Competitive Advantage',
    ],
  },
];

export default function CreativeUniverses() {
  const [selectedUniverse, setSelectedUniverse] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1e3a8a]/50 to-[#111827]">
        <div className="absolute inset-0 bg-[url('/hero-poster.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-[#111827]/80" />
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
              Our Creative Universes
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Five specialized domains where cinematic creativity meets
              cutting-edge technology. Each universe is designed to address your
              unique challenges and transform your digital aspirations into
              reality.
            </p>
          </motion.div>
        </AnimationObserver>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {universes.map((universe, index) => (
            <AnimationObserver key={universe.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group cursor-pointer transition-all duration-500 hover:scale-105`}
                onClick={() =>
                  setSelectedUniverse(
                    selectedUniverse === universe.id ? null : universe.id
                  )
                }
              >
                <div
                  className={`relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm ${universe.bgColor} hover:border-[#F59E0B]/30 transition-all duration-500`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${universe.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  />

                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{universe.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {universe.title}
                    </h3>
                    <p className="text-[#F59E0B] mb-4 font-medium">
                      {universe.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {universe.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>
              </motion.div>
            </AnimationObserver>
          ))}
        </div>

        {/* Detailed View */}
        {selectedUniverse && (
          <AnimationObserver>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F59E0B]/20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-[#F59E0B]">Solutions We Offer</span>
                    </h3>
                    <ul className="space-y-3">
                      {universes
                        .find(u => u.id === selectedUniverse)
                        ?.solutions.map((solution, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center text-gray-300"
                          >
                            <span className="w-2 h-2 bg-[#F59E0B] rounded-full mr-3" />
                            {solution}
                          </motion.li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-[#F59E0B]">
                        Client Needs We Address
                      </span>
                    </h3>
                    <ul className="space-y-3">
                      {universes
                        .find(u => u.id === selectedUniverse)
                        ?.clientNeeds.map((need, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center text-gray-300"
                          >
                            <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3" />
                            {need}
                          </motion.li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-[#F59E0B]">Expected Benefits</span>
                    </h3>
                    <ul className="space-y-3">
                      {universes
                        .find(u => u.id === selectedUniverse)
                        ?.benefits.map((benefit, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center text-gray-300"
                          >
                            <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3" />
                            {benefit}
                          </motion.li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* CTA for Selected Universe */}
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                    Explore{' '}
                    {universes.find(u => u.id === selectedUniverse)?.title}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimationObserver>
        )}
      </div>
    </section>
  );
}
