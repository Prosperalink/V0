'use client';

import Button from '@/components/ui/Button';
import Card, { CardBody } from '@/components/ui/Card';
import { CINEMATIC_QUERIES, PexelsAPI, PexelsPhoto } from '@/lib/pexels-api';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  cinematicApproach: string;
  deliverables: string[];
  category: 'video' | 'creative' | 'digital';
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Production Vidéo',
    description:
      "Capture your brand's authentic story through documentary-style cinematography with sophisticated dark aesthetics.",
    cinematicApproach:
      'We focus on real moments, genuine emotions, and compelling narratives—creating visual stories that resonate with your audience through cinematic elegance.',
    deliverables: [
      'Professional video production with cinematic quality',
      'Documentary-style storytelling',
      'Sophisticated editing and post-production',
      'Multiple format deliverables (web, social, broadcast)',
    ],
    category: 'video',
    icon: '🎬',
  },
  {
    id: 2,
    title: 'Production Cinématographique',
    description:
      'Elevate your brand with high-end cinematic productions featuring dramatic lighting and professional filmmaking techniques.',
    cinematicApproach:
      'Our artistic vision combined with technical excellence delivers premium video content that transforms brand perception.',
    deliverables: [
      'Hollywood-level cinematic productions',
      'Dramatic lighting and professional cinematography',
      'Advanced post-production and color grading',
      'Cinematic sound design and music composition',
    ],
    category: 'video',
    icon: '🎭',
  },
  {
    id: 3,
    title: 'Motion Design & Animation',
    description:
      'Bring your brand to life with dynamic visual storytelling through sophisticated animation.',
    cinematicApproach:
      'We create engaging animated content that captivates audiences with smooth, professional animations and cinematic quality.',
    deliverables: [
      'Custom motion graphics and animations',
      'Brand identity animations',
      'Explainer videos with sophisticated design',
      'Social media animated content',
    ],
    category: 'creative',
    icon: '✨',
  },
  {
    id: 4,
    title: 'Photographie & Contenu',
    description:
      "Professional photography that captures your brand's essence with cinematic composition and lighting.",
    cinematicApproach:
      'Every shot is carefully composed to tell your brand story with sophisticated visual aesthetics.',
    deliverables: [
      'Professional product and lifestyle photography',
      'Corporate headshots and team photography',
      'Event coverage with cinematic quality',
      'Content creation for digital platforms',
    ],
    category: 'creative',
    icon: '📸',
  },
  {
    id: 5,
    title: 'Design Graphique & Identité',
    description:
      'Sophisticated brand design that creates lasting impressions through elegant visual identity.',
    cinematicApproach:
      'We craft visual identities that reflect the sophistication and quality of your brand with cinematic attention to detail.',
    deliverables: [
      'Complete brand identity design',
      'Logo design and brand guidelines',
      'Marketing materials and collateral',
      'Digital and print design solutions',
    ],
    category: 'creative',
    icon: '🎨',
  },
  {
    id: 6,
    title: 'Production Audio & Podcasts',
    description:
      'Professional audio content that engages and inspires your audience with cinematic sound design.',
    cinematicApproach:
      'We create immersive audio experiences that complement your visual content with professional sound production.',
    deliverables: [
      'Professional podcast production',
      'Voice-over and audio narration',
      'Sound design for video content',
      'Audio branding and jingles',
    ],
    category: 'creative',
    icon: '🎵',
  },
  {
    id: 7,
    title: 'Création de Sites Web',
    description:
      'High-performance websites that blend cinematic visuals with seamless user experience.',
    cinematicApproach:
      'We approach web design with the same precision as cinematography, creating immersive digital experiences.',
    deliverables: [
      'Custom website design and development',
      'Responsive and mobile-optimized design',
      'E-commerce and business solutions',
      'Performance optimization and SEO',
    ],
    category: 'digital',
    icon: '🌐',
  },
  {
    id: 8,
    title: 'Marketing Digital',
    description:
      'Strategic digital marketing campaigns that amplify your story and drive measurable results.',
    cinematicApproach:
      'We craft marketing strategies that tell compelling stories and create emotional connections with your audience.',
    deliverables: [
      'Comprehensive digital marketing strategies',
      'Social media management and content',
      'Email marketing and automation',
      'Analytics and performance tracking',
    ],
    category: 'digital',
    icon: '📈',
  },
  {
    id: 9,
    title: 'Services Spécialisés',
    description:
      'Custom digital solutions tailored to your unique business needs with cinematic quality.',
    cinematicApproach:
      'We provide specialized services that combine technical expertise with creative vision for unique challenges.',
    deliverables: [
      'Custom software development',
      'API integration and automation',
      'Technical consulting and strategy',
      'Specialized digital solutions',
    ],
    category: 'digital',
    icon: '⚙️',
  },
];

export default function EnhancedServicesSection() {
  const [serviceImages, setServiceImages] = useState<
    Record<number, PexelsPhoto>
  >({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceImages = async () => {
      try {
        const imagePromises = services.map(async service => {
          const queries = CINEMATIC_QUERIES.services;
          const query =
            queries[Math.floor(Math.random() * queries.length)] || 'cinematic';
          const photos = await PexelsAPI.searchPhotos(query, 1);
          return { serviceId: service.id, photo: photos[0] };
        });

        const results = await Promise.all(imagePromises);
        const imagesMap = results.reduce(
          (acc, { serviceId, photo }) => {
            if (photo) acc[serviceId] = photo;
            return acc;
          },
          {} as Record<number, PexelsPhoto>
        );

        setServiceImages(imagesMap);
      } catch (error) {
        console.error('Error fetching service images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceImages();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-deep-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinematic text-4xl md:text-5xl lg:text-6xl font-bold text-golden-accent mb-6">
            Our Digital Services
          </h2>
          <p className="text-xl md:text-2xl text-text-white max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cinematic solutions, each
            crafted with Hollywood-level precision and sophisticated design.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map(service => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card variant="elevated" className="h-full">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  {serviceImages[service.id]?.src?.large ? (
                    <Image
                      src={serviceImages[service.id]!.src.large}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-accent flex items-center justify-center">
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent" />
                </div>

                {/* Service Content */}
                <CardBody className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{service.icon}</span>
                    <h3 className="font-cinematic text-2xl font-bold text-golden-accent">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-text-subtle mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-golden-accent mb-2">
                      Cinematic Approach
                    </h4>
                    <p className="text-sm text-text-subtle leading-relaxed">
                      {service.cinematicApproach}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-golden-accent mb-2">
                      What We Deliver
                    </h4>
                    <ul className="text-sm text-text-subtle space-y-1">
                      {service.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-golden-accent mr-2">•</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() =>
                        (window.location.href = `/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`)
                      }
                    >
                      Learn More
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = '/services')}
            className="mr-4"
          >
            View All Services
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = '/contact')}
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
