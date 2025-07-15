'use client';

import { PexelsAPI } from '@/lib/pexels-api';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, TrendingUp, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ProjectMetrics {
  engagement: number;
  conversion: number;
  performance: number;
  satisfaction: number;
}

export default function FeaturePresentation() {
  const [backgroundVideo, setBackgroundVideo] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Final copy for 'The Feature Presentation' - Flagship Project Showcase
  const projectData = {
    title: 'Luxury Fashion House Digital Transformation',
    subtitle: 'A Hollywood-Level Digital Transformation',
    description:
      'Transformed a traditional luxury fashion brand into a cinematic digital experience, achieving unprecedented engagement and conversion rates through sophisticated storytelling and immersive design. This project represents the pinnacle of our cinematic approach to digital design.',
    client: 'Luxury Fashion House',
    duration: '6 months',
    team: '8 specialists',
    metrics: {
      engagement: 94,
      conversion: 87,
      performance: 96,
      satisfaction: 98,
    },
    testimonial: {
      quote:
        "Orson Vision didn't just build us a website—they created a cinematic experience that elevated our brand to new heights. The results exceeded our wildest expectations and transformed our digital presence completely.",
      author: 'Sarah Chen',
      role: 'Chief Marketing Officer',
      company: 'Luxury Fashion House',
    },
    directorCommentary:
      'This project represents the pinnacle of our cinematic approach to digital design. We treated every user interaction like a carefully choreographed scene, ensuring that every moment contributes to the overall narrative of the brand experience. The result is a digital platform that feels more like an immersive film than a traditional website.',
  };

  useEffect(() => {
    const fetchBackgroundVideo = async () => {
      try {
        const query = 'luxury fashion cinematic digital experience';
        const videos = await PexelsAPI.searchVideos(query, 1);
        if (videos.length > 0 && videos[0]?.video_files?.[0]?.link) {
          setBackgroundVideo(videos[0].video_files[0].link);
        } else {
          setBackgroundVideo('/placeholder-video.mp4');
        }
      } catch (error) {
        console.error('Error fetching background video:', error);
        setBackgroundVideo('/placeholder-video.mp4');
      } finally {
        setLoading(false);
      }
    };

    fetchBackgroundVideo();
  }, []);

  return (
    <section className="relative py-24 bg-deep-blue overflow-hidden">
      {/* Full-Width Background Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue" />
        {!loading && backgroundVideo && (
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-30"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-deep-blue/70" />
          </div>
        )}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/6 w-1 h-1 bg-golden-accent rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute bottom-1/3 right-1/5 w-0.5 h-0.5 bg-golden-accent rounded-full"
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
            Our Feature Presentation
          </h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            A showcase of our philosophy in action. This is the culmination of
            strategy, story, and seamless production.
          </p>
        </motion.div>

        {/* Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Project Header */}
          <div className="bg-dark-tone/80 backdrop-blur-sm rounded-lg p-8 mb-8 border border-golden-accent/20">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Play className="w-6 h-6 text-golden-accent" />
                  <span className="text-golden-accent font-semibold">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-golden-accent mb-4">
                  {projectData.title}
                </h3>
                <p className="text-xl text-text-white mb-4">
                  {projectData.subtitle}
                </p>
                <p className="text-text-subtle leading-relaxed mb-6">
                  {projectData.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-golden-accent mb-1">
                      {projectData.client}
                    </div>
                    <div className="text-text-subtle text-sm">Client</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-golden-accent mb-1">
                      {projectData.duration}
                    </div>
                    <div className="text-text-subtle text-sm">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-golden-accent mb-1">
                      {projectData.team}
                    </div>
                    <div className="text-text-subtle text-sm">Team Size</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                label: 'Engagement Rate',
                value: projectData.metrics.engagement,
              },
              {
                icon: <Users className="w-6 h-6" />,
                label: 'Conversion Rate',
                value: projectData.metrics.conversion,
              },
              {
                icon: <Star className="w-6 h-6" />,
                label: 'Performance Score',
                value: projectData.metrics.performance,
              },
              {
                icon: <Star className="w-6 h-6" />,
                label: 'Client Satisfaction',
                value: projectData.metrics.satisfaction,
              },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dark-tone/60 backdrop-blur-sm rounded-lg p-6 border border-golden-accent/20 text-center"
              >
                <div className="text-golden-accent mb-3 flex justify-center">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-golden-accent mb-2">
                  {metric.value}%
                </div>
                <div className="text-text-subtle text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial and Commentary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Client Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-dark-tone/60 backdrop-blur-sm rounded-lg p-8 border border-golden-accent/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-golden-accent fill-current" />
                <span className="text-golden-accent font-semibold">
                  Client Testimonial
                </span>
              </div>
              <blockquote className="text-lg text-text-white mb-6 italic">
                "{projectData.testimonial.quote}"
              </blockquote>
              <div className="border-l-2 border-golden-accent pl-4">
                <div className="text-golden-accent font-semibold">
                  {projectData.testimonial.author}
                </div>
                <div className="text-text-subtle text-sm">
                  {projectData.testimonial.role},{' '}
                  {projectData.testimonial.company}
                </div>
              </div>
            </motion.div>

            {/* Director's Commentary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-dark-tone/60 backdrop-blur-sm rounded-lg p-8 border border-golden-accent/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <Play className="w-5 h-5 text-golden-accent" />
                <span className="text-golden-accent font-semibold">
                  Director's Commentary
                </span>
              </div>
              <p className="text-text-white leading-relaxed mb-6">
                {projectData.directorCommentary}
              </p>
              <div className="flex items-center gap-2 text-golden-accent font-semibold">
                <span>Creative Director</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button
              onClick={() =>
                (window.location.href = '/portfolio/featured-project')
              }
              className="bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 mx-auto hover:shadow-xl transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              View Full Case Study
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
