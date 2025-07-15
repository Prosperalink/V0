'use client';

import {
  ArrowRight,
  Briefcase,
  Building2,
  Globe,
  GraduationCap,
  Heart,
  Palette,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useLanguage } from '@/contexts/LanguageContext';

const cinematicUniverses = [
  {
    icon: <Heart size={20} className="text-pink-400" />,
    title: 'Weddings & Events',
    desc: 'Cinematic love stories that capture authentic emotions and timeless moments.',
    image:
      '/assets/homepage/solutions_matrix/content_creation/images/content_creation_storytelling_01.jpg',
    href: '/cinematic-universes/weddings',
    color: 'from-pink-500 to-red-600',
  },
  {
    icon: <GraduationCap size={20} className="text-blue-400" />,
    title: 'Education & Schools',
    desc: 'Compelling narratives that inspire students, parents, and communities.',
    image:
      '/assets/homepage/solutions_matrix/content_creation/images/content_creation_storytelling_02.jpg',
    href: '/cinematic-universes/education',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: <Building2 size={20} className="text-green-400" />,
    title: 'Small Business & SMEs',
    desc: 'Authentic brand storytelling that builds trust and drives growth.',
    image:
      '/assets/homepage/solutions_matrix/creative_design/images/creative_design_branding_01.jpg',
    href: '/cinematic-universes/small-business',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: <Briefcase size={20} className="text-purple-400" />,
    title: 'Corporate & Enterprise',
    desc: 'Humanizing corporate brands through compelling visual narratives.',
    image:
      '/assets/homepage/solutions_matrix/strategic_consulting/images/strategic_consulting_analysis_01.jpg',
    href: '/cinematic-universes/corporate',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: <Palette size={20} className="text-amber-400" />,
    title: 'Artisan & Craft',
    desc: 'Bringing the soul of craftsmanship to the digital world.',
    image:
      '/assets/homepage/solutions_matrix/creative_design/images/creative_design_branding_02.jpg',
    href: '/cinematic-universes/artisan',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: <Globe size={20} className="text-teal-400" />,
    title: 'Tourism & Hospitality',
    desc: 'Immersive digital experiences that showcase destinations worldwide.',
    image:
      '/assets/homepage/solutions_matrix/digital_innovation/images/digital_innovation_technology_01.jpg',
    href: '/cinematic-universes/tourism',
    color: 'from-teal-500 to-cyan-600',
  },
];

export default function CinematicUniversesSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-20 flex flex-col items-center bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('nav.cinematicUniverses')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each sector has its own unique story, challenges, and opportunities.
            We adapt our cinematic humanism approach to create experiences that
            resonate deeply within your specific universe.
          </p>
        </div>

        <div className="w-full overflow-x-auto hide-scrollbar">
          <div className="flex gap-6 px-4 pb-4 min-w-max">
            {cinematicUniverses.map((universe, idx) => (
              <Link key={universe.title} href={universe.href}>
                <div className="relative w-80 h-64 rounded-xl overflow-hidden flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <Image
                    src={universe.image}
                    alt={universe.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="320px"
                    priority={idx < 2}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300`}
                  />
                  <div
                    className={`absolute top-4 left-4 bg-gradient-to-r ${universe.color} text-white p-2 rounded-lg`}
                  >
                    {universe.icon}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      {universe.icon}
                      {universe.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {universe.desc}
                    </p>
                    <div className="mt-3 flex items-center text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                      <span>Explore Universe</span>
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/cinematic-universes">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors duration-200 mx-auto">
              Explore All Universes
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
