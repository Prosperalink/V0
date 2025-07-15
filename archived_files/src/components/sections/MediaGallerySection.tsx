'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const gallery = [
  // Cinematic Humanism
  {
    image:
      '/assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_01.svg',
    caption: 'Behind the scenes: Cinematic Humanism in action',
  },
  {
    image:
      '/assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_02.svg',
    caption: 'Creative storytelling at its finest',
  },
  {
    image:
      '/assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_03.svg',
    caption: 'Where technology meets artistry',
  },
  {
    image:
      '/assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_04.svg',
    caption: 'Cinematic Humanism: Office moments',
  },
  {
    image:
      '/assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_05.svg',
    caption: 'Teamwork in a cinematic setting',
  },
  // Mission
  {
    image: '/assets/about/mission/images/about_mission_cinematic_office_01.svg',
    caption: 'Mission-driven creativity in motion',
  },
  {
    image: '/assets/about/mission/images/about_mission_cinematic_office_02.svg',
    caption: 'Strategic vision meets creative execution',
  },
  {
    image: '/assets/about/mission/images/about_mission_cinematic_office_03.svg',
    caption: 'Mission: Innovation and impact',
  },
  {
    image: '/assets/about/mission/images/about_mission_cinematic_office_04.svg',
    caption: 'Collaboration for a greater mission',
  },
  {
    image: '/assets/about/mission/images/about_mission_cinematic_office_05.svg',
    caption: 'Purposeful work, creative results',
  },
  // Team
  {
    image: '/assets/about/team/images/about_team_cinematic_office_01.svg',
    caption: 'Our creative team at work',
  },
  {
    image: '/assets/about/team/images/about_team_cinematic_office_02.svg',
    caption: 'Collaboration and innovation',
  },
  {
    image: '/assets/about/team/images/about_team_cinematic_office_03.svg',
    caption: 'Team spirit in a cinematic office',
  },
  {
    image: '/assets/about/team/images/about_team_cinematic_office_04.svg',
    caption: 'Creative minds, united',
  },
  {
    image: '/assets/about/team/images/about_team_cinematic_office_05.svg',
    caption: 'Celebrating our team culture',
  },
];

export default function MediaGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + gallery.length) % gallery.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 flex flex-col items-center bg-transparent">
      <div className="text-4xl font-bold text-white mb-12 text-center">
        Cinematic Media Gallery
      </div>
      <div className="w-full max-w-5xl relative">
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
          {gallery.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: idx === currentIndex ? 1 : 0.7,
                scale: idx === currentIndex ? 1 : 0.9,
              }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 w-80 bg-[var(--bg-secondary)]/70 backdrop-blur-md rounded-2xl p-0 flex flex-col items-center shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer border border-white/10 min-h-[260px] overflow-hidden"
            >
              <div className="w-full h-56 relative">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <div className="p-4 flex flex-col items-center w-full">
                <div className="text-[var(--color-subtext)] text-center text-base">
                  {`Cinematic Storytelling: ${item.caption}`}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {gallery.map((_, idx) => (
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
