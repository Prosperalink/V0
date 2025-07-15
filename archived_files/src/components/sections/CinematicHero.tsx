'use client';

import { CINEMATIC_QUERIES, PexelsAPI, PexelsVideo } from '@/lib/pexels-api';
import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CinematicHero() {
  const [backgroundVideo, setBackgroundVideo] = useState<PexelsVideo | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBackgroundVideo = async () => {
      try {
        const queries = CINEMATIC_QUERIES.hero;
        const query =
          queries[Math.floor(Math.random() * queries.length)] || 'cinematic';
        const videos = await PexelsAPI.searchVideos(query, 1);
        if (videos.length > 0 && videos[0]) {
          setBackgroundVideo(videos[0]);
        }
      } catch (error) {
        console.error('Error fetching background video:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBackgroundVideo();
  }, []);

  return (
    <section className="relative min-h-screen bg-deep-blue overflow-hidden pt-20">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.05),transparent_50%)]" />

        {/* Background Video */}
        {backgroundVideo && !loading && (
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-20"
              poster={backgroundVideo.image}
            >
              <source
                src={backgroundVideo.video_files[0]?.link}
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-deep-blue/60" />
          </div>
        )}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-2 h-2 bg-golden-accent rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-40 right-20 w-1 h-1 bg-golden-accent rounded-full opacity-40"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-golden-accent rounded-full opacity-50"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-6xl"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-cinematic font-bold text-golden-accent mb-8 leading-tight"
          >
            Experience Cinematic Creativity in Motion
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-text-white mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Dive into a world of immersive multimedia—where every frame, video,
            and image tells your brand story. Explore interactive galleries,
            cinematic showcases, and behind-the-scenes journeys crafted by our
            creative agency.
          </motion.p>

          {/* Golden Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="w-32 h-1 bg-gradient-to-r from-golden-accent to-yellow-400 mx-auto mb-12"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-golden-accent focus:ring-offset-2 focus:ring-offset-deep-blue"
              onClick={() => (window.location.href = '/gallery')}
            >
              <Play className="w-5 h-5" />
              Explore the Media Gallery
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-golden-accent text-golden-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-accent hover:text-deep-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-golden-accent focus:ring-offset-2 focus:ring-offset-deep-blue"
              onClick={() => (window.location.href = '/behind-the-scenes')}
            >
              Go Behind the Scenes
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-accent mb-2">
                500+
              </div>
              <div className="text-text-subtle">
                Cinematic Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-accent mb-2">
                98%
              </div>
              <div className="text-text-subtle">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-accent mb-2">
                15+
              </div>
              <div className="text-text-subtle">
                Years of Creative Excellence
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-golden-accent"
          >
            <span className="text-sm font-medium">Scroll to Discover</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
