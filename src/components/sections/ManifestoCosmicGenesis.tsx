'use client';

import Image from 'next/image';

export default function ManifestoCosmicGenesis() {
  return (
    <section className="py-20 bg-gradient-to-r from-deep-blue via-dark-tone to-deep-blue relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Test: Remove motion effects temporarily to isolate blur issue */}
          <div className="text-cream-white">
            <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-8 text-golden-accent">
              The Cosmic Genesis
            </h2>

            <p className="text-xl leading-relaxed mb-8 text-text-white">
              Every pixel is a star. Every interaction, a gravitational pull.
              Every project, a new dimension brought to life. Our philosophy,
              'Cinematic Solutions,' is the fundamental force guiding the
              creation of digital experiences that rival the grandeur of
              cinematic epics. From our Tunisian nexus, we fuse artistic vision
              with technical mastery to expand your brand's cosmic footprint.
            </p>

            <p className="text-lg text-text-subtle">
              In the vast expanse of digital possibility, we craft universes
              where technology meets storytelling, where innovation dances with
              imagination, and where every solution becomes a portal to new
              dimensions of human experience.
            </p>

            {/* Golden Accent Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-golden-accent to-yellow-400 mt-8" />
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/homepage/manifesto/manifesto-background.jpg"
                alt="Cosmic Blueprint"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              {/* Overlay with cinematic glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-golden-accent rounded-full shadow-lg pointer-events-none" />
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-golden-accent rounded-full shadow-lg pointer-events-none" />
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-golden-accent/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-golden-accent/5 rounded-full blur-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
