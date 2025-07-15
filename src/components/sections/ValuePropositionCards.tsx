'use client';

import { motion } from 'framer-motion';
import { Globe, Heart, Shield, Star, Target, Zap } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: <Star size={32} className="text-blue-400" />,
    title: 'Excellence',
    description:
      'We pursue perfection in every pixel, every interaction, every moment.',
    image:
      '/assets/homepage/hero_section/images/homepage_hero_section_cinematic_office_01.jpg',
  },
  {
    icon: <Zap size={32} className="text-blue-400" />,
    title: 'Innovation',
    description:
      'Pushing boundaries with cutting-edge technology and creative solutions.',
    image:
      '/assets/homepage/hero_section/images/homepage_hero_section_cinematic_office_02.jpg',
  },
  {
    icon: <Heart size={32} className="text-blue-400" />,
    title: 'Human-Centered',
    description:
      'Every decision is made with people and their experiences in mind.',
    image: '/assets/about/mission/images/about_mission_cinematic_office_01.jpg',
  },
  {
    icon: <Shield size={32} className="text-blue-400" />,
    title: 'Trust',
    description:
      'Building lasting partnerships through transparency and reliability.',
    image: '/assets/about/values/images/about_values_cinematic_office_01.jpg',
  },
  {
    icon: <Target size={32} className="text-blue-400" />,
    title: 'Results',
    description: 'Delivering measurable impact that drives business growth.',
    image: '/assets/about/values/images/about_values_cinematic_office_02.jpg',
  },
  {
    icon: <Globe size={32} className="text-blue-400" />,
    title: 'Global Impact',
    description:
      'Creating solutions that resonate across cultures and markets.',
    image: '/assets/about/values/images/about_values_cinematic_office_03.jpg',
  },
];

export default function ValuePropositionCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % values.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + values.length) % values.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 flex flex-col items-center bg-transparent">
      <div className="text-4xl font-bold text-white mb-4 text-center">
        Why Choose Us
      </div>
      <div className="text-lg text-[var(--color-subtext)] mb-12 text-center max-w-2xl">
        Our values drive everything we do, from concept to delivery.
      </div>
      <div className="w-full max-w-6xl relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-hidden py-4"
          style={{
            scrollBehavior: 'smooth',
          }}
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: idx === currentIndex ? 1 : 0.7,
                scale: idx === currentIndex ? 1 : 0.9,
              }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 w-80 bg-[var(--bg-secondary)]/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 min-h-[400px] flex flex-col"
            >
              <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="mb-3">{value.icon}</div>
                <div className="text-xl font-bold text-white mb-3">
                  {value.title}
                </div>
                <div className="text-[var(--color-subtext)] text-base flex-1">
                  {value.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {values.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex
                  ? 'bg-[var(--golden-accent)]'
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
