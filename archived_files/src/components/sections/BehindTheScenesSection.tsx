'use client';

import Button from '@/components/ui/Button';
import Card, { CardBody } from '@/components/ui/Card';
import { getAssetUrl } from '@/utils/asset-fallbacks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  expertise: string;
  philosophy: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Cinematic Approach',
    description:
      'We begin every project with a cinematic vision, carefully crafting the story and visual narrative that will captivate your audience.',
    icon: '🎬',
  },
  {
    id: 2,
    title: 'Professional Execution',
    description:
      'Our team brings Hollywood-level expertise to every detail, ensuring precision and quality in every deliverable.',
    icon: '⚡',
  },
  {
    id: 3,
    title: 'Sophisticated Delivery',
    description:
      'We deliver results that exceed expectations, with sophisticated presentation and ongoing support for lasting impact.',
    icon: '✨',
  },
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Creative Director',
    expertise: 'Visual Storytelling & Brand Strategy',
    philosophy:
      'Every frame tells a story. I believe in creating visual narratives that resonate deeply with audiences and drive meaningful connections.',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Technical Director',
    expertise: 'Digital Innovation & Development',
    philosophy:
      'Technology should serve creativity. I focus on building sophisticated digital solutions that bring cinematic visions to life.',
  },
  {
    id: 3,
    name: 'Aisha Thompson',
    role: 'Production Manager',
    expertise: 'Project Management & Client Relations',
    philosophy:
      'Excellence is in the details. I ensure every project meets our cinematic standards while exceeding client expectations.',
  },
];

export default function BehindTheScenesSection() {
  const [teamPhotos, setTeamPhotos] = useState<
    Record<number, { src: { large: string } }>
  >({});
  const [processImages, setProcessImages] = useState<
    Record<number, { src: { large: string } }>
  >({});

  useEffect(() => {
    const loadAssets = () => {
      // Load team photos using asset system
      const teamPhotosMap = teamMembers.reduce(
        (acc, member) => {
          const memberNumber = ((member.id - 1) % 3) + 1; // Cycle through 3 team members
          acc[member.id] = {
            src: {
              large: getAssetUrl(`team-member-${memberNumber}-image`, 'image'),
            },
          };
          return acc;
        },
        {} as Record<number, { src: { large: string } }>
      );

      // Load process images using asset system
      const processImagesMap = processSteps.reduce(
        (acc, step) => {
          acc[step.id] = {
            src: {
              large: getAssetUrl(`process-step-${step.id}-image`, 'image'),
            },
          };
          return acc;
        },
        {} as Record<number, { src: { large: string } }>
      );

      setTeamPhotos(teamPhotosMap);
      setProcessImages(processImagesMap);
    };

    loadAssets();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 bg-accent">
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
            Behind the Scenes
          </h2>
          <p className="text-xl md:text-2xl text-text-white max-w-4xl mx-auto leading-relaxed">
            Discover our cinematic process and meet the talented team behind
            every masterpiece.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20"
        >
          <h3 className="font-cinematic text-3xl font-bold text-golden-accent mb-12 text-center">
            Our Cinematic Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative"
              >
                <Card className="h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-golden-accent rounded-full flex items-center justify-center text-deep-blue font-bold text-xl z-10">
                    {step.id}
                  </div>

                  {/* Process Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    {processImages[step.id]?.src?.large ? (
                      <Image
                        src={processImages[step.id]!.src.large}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        onError={e => {
                          e.currentTarget.src =
                            '/assets/images/placeholder.jpg';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-deep-blue flex items-center justify-center">
                        <span className="text-4xl">{step.icon}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                  </div>

                  <CardBody className="text-center">
                    <div className="flex justify-center mb-4">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <h4 className="font-cinematic text-2xl font-bold text-golden-accent mb-4">
                      {step.title}
                    </h4>
                    <p className="text-text-subtle leading-relaxed">
                      {step.description}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="font-cinematic text-3xl font-bold text-golden-accent mb-12 text-center">
            The Cinematic Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <motion.div key={member.id} variants={itemVariants}>
                <Card className="h-full">
                  {/* Team Member Photo */}
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    {teamPhotos[member.id]?.src?.large ? (
                      <Image
                        src={teamPhotos[member.id]!.src.large}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        onError={e => {
                          e.currentTarget.src =
                            '/assets/images/placeholder.jpg';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-deep-blue flex items-center justify-center">
                        <span className="text-6xl">👤</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                  </div>

                  <CardBody className="text-center">
                    <h4 className="font-cinematic text-2xl font-bold text-golden-accent mb-2">
                      {member.name}
                    </h4>
                    <p className="text-golden-accent font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-text-subtle text-sm mb-4">
                      {member.expertise}
                    </p>
                    <p className="text-text-subtle text-sm italic leading-relaxed">
                      "{member.philosophy}"
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
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
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = '/about')}
          >
            Meet Our Full Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
