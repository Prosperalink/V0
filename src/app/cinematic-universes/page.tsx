'use client';

import { motion } from 'framer-motion';

export default function CinematicUniversesPage() {
  const universes = [
    {
      id: 'weddings',
      title: 'Weddings & Events',
      description:
        'Capturing love stories through cinematic digital experiences',
      icon: '💒',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-gradient-to-br from-pink-900/10 to-rose-800/10',
    },
    {
      id: 'education',
      title: 'Education & Learning',
      description:
        'Transforming education through immersive digital storytelling',
      icon: '🎓',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-900/10 to-indigo-800/10',
    },
    {
      id: 'smes',
      title: 'Small & Medium Enterprises',
      description: 'Empowering SMEs with cinematic digital solutions',
      icon: '🏢',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-green-900/10 to-emerald-800/10',
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Wellness',
      description:
        'Humanizing healthcare through compassionate digital experiences',
      icon: '🏥',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-gradient-to-br from-purple-900/10 to-violet-800/10',
    },
    {
      id: 'technology',
      title: 'Technology & Innovation',
      description: 'Pioneering the future with cutting-edge digital solutions',
      icon: '🚀',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-gradient-to-br from-orange-900/10 to-amber-800/10',
    },
    {
      id: 'culture',
      title: 'Culture & Heritage',
      description:
        'Preserving and celebrating cultural heritage through digital storytelling',
      icon: '🏛️',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-yellow-900/10 to-orange-800/10',
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cinematic-blue to-cinematic-gold" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Cinematic Universes
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-200">
              Where Stories Come to Life
            </h2>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our specialized cinematic universes, each crafted to
              serve specific industries and audiences with tailored digital
              experiences that resonate deeply and drive meaningful results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Universes Grid Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced Merged Background with Subtle Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)]/20 to-[var(--bg-primary)]" />

        {/* Floating 3D Elements for Cinematic Depth */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 rounded-full blur-xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-[var(--color-foreground)] mb-8"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              Our Cinematic Universes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-5xl mx-auto leading-relaxed"
            >
              Each universe represents a specialized domain where we apply our
              cinematic approach to create extraordinary digital experiences.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universes.map((universe, index) => (
              <motion.div
                key={universe.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  rotateY: 2,
                }}
                className="group cursor-pointer perspective-1000"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl ${universe.bgColor} backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl transform-gpu`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="p-8 text-center">
                    <div className="text-6xl mb-6">{universe.icon}</div>
                    <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                      {universe.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {universe.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
