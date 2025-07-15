'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { CINEMATIC_QUERIES, PexelsAPI, PexelsPhoto } from '@/lib/pexels-api';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface SuccessStory {
  id: number;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  image: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    clientName: 'LuxeTech Solutions',
    industry: 'Technology',
    challenge:
      'A struggling tech startup needed to establish a premium brand presence and increase investor confidence through sophisticated visual storytelling.',
    solution:
      'We crafted a cinematic brand identity with dramatic video content, sophisticated website design, and compelling investor presentations that positioned them as industry leaders.',
    results: [
      {
        metric: 'Investor Interest',
        value: '300%',
        description: 'increase in qualified investor inquiries',
      },
      {
        metric: 'Brand Recognition',
        value: '85%',
        description: 'improvement in brand perception scores',
      },
      {
        metric: 'Funding Success',
        value: '$2.5M',
        description: 'in secured funding within 6 months',
      },
    ],
    image: 'tech-startup',
  },
  {
    id: 2,
    clientName: 'Artisan Boutique',
    industry: 'Fashion & Retail',
    challenge:
      'A luxury fashion brand needed to transition from traditional retail to a sophisticated digital presence that maintained their premium aesthetic.',
    solution:
      'We developed a cinematic e-commerce experience with stunning product photography, immersive video content, and sophisticated user experience that elevated their online presence.',
    results: [
      {
        metric: 'Online Sales',
        value: '450%',
        description: 'increase in online revenue',
      },
      {
        metric: 'Customer Engagement',
        value: '200%',
        description: 'improvement in time spent on site',
      },
      {
        metric: 'Conversion Rate',
        value: '180%',
        description: 'increase in purchase conversion',
      },
    ],
    image: 'fashion-boutique',
  },
  {
    id: 3,
    clientName: 'Culinary Masters',
    industry: 'Hospitality',
    challenge:
      'A high-end restaurant group needed to create compelling digital content that showcased their culinary artistry and attracted discerning clientele.',
    solution:
      'We produced cinematic food photography and video content that captured the artistry of their dishes, along with a sophisticated website that told their culinary story.',
    results: [
      {
        metric: 'Reservation Rate',
        value: '250%',
        description: 'increase in online reservations',
      },
      {
        metric: 'Social Engagement',
        value: '400%',
        description: 'growth in social media following',
      },
      {
        metric: 'Customer Satisfaction',
        value: '98%',
        description: 'positive customer feedback score',
      },
    ],
    image: 'culinary-arts',
  },
];

export default function ClientSuccessStoriesSection() {
  const [storyImages, setStoryImages] = useState<Record<number, PexelsPhoto>>(
    {}
  );

  useEffect(() => {
    const fetchStoryImages = async () => {
      try {
        const imagePromises = successStories.map(async story => {
          const queries = CINEMATIC_QUERIES.success;
          const query =
            queries[Math.floor(Math.random() * queries.length)] ||
            'business success';
          const photos = await PexelsAPI.searchPhotos(query, 1);
          return { storyId: story.id, photo: photos[0] };
        });

        const results = await Promise.all(imagePromises);
        const imagesMap = results.reduce(
          (acc, { storyId, photo }) => {
            if (photo) acc[storyId] = photo;
            return acc;
          },
          {} as Record<number, PexelsPhoto>
        );

        setStoryImages(imagesMap);
      } catch (error) {
        console.error('Error fetching story images:', error);
      }
    };

    fetchStoryImages();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
            Client Success Stories
          </h2>
          <p className="text-xl md:text-2xl text-text-white max-w-4xl mx-auto leading-relaxed">
            Discover how our cinematic solutions have transformed businesses and
            delivered extraordinary results.
          </p>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {successStories.map((story, index) => (
            <motion.div key={story.id} variants={itemVariants}>
              <Card variant="elevated" className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Story Image */}
                  <div className="relative h-80 lg:h-full min-h-[400px]">
                    {storyImages[story.id]?.src?.large ? (
                      <Image
                        src={storyImages[story.id]!.src.large}
                        alt={`${story.clientName} success story`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-accent flex items-center justify-center">
                        <span className="text-6xl">🏆</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/80 to-transparent lg:from-transparent lg:to-deep-blue/80" />
                  </div>

                  {/* Story Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="text-golden-accent font-semibold text-sm uppercase tracking-wide">
                        {story.industry}
                      </span>
                      <h3 className="font-cinematic text-3xl font-bold text-golden-accent mt-2">
                        {story.clientName}
                      </h3>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-text-white mb-3">
                        The Challenge
                      </h4>
                      <p className="text-text-subtle leading-relaxed mb-6">
                        {story.challenge}
                      </p>

                      <h4 className="font-semibold text-text-white mb-3">
                        Our Cinematic Solution
                      </h4>
                      <p className="text-text-subtle leading-relaxed">
                        {story.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-text-white">
                        Impressive Results
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {story.results.map((result, resultIndex) => (
                          <div
                            key={resultIndex}
                            className="text-center p-4 bg-accent rounded-lg"
                          >
                            <div className="text-2xl font-bold text-golden-accent mb-1">
                              {result.value}
                            </div>
                            <div className="text-sm font-semibold text-text-white mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-text-subtle">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          (window.location.href = `/case-studies/${story.id}`)
                        }
                      >
                        Read Full Case Study
                      </Button>
                    </div>
                  </div>
                </div>
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
            onClick={() => (window.location.href = '/case-studies')}
            className="mr-4"
          >
            View All Case Studies
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = '/contact')}
          >
            Start Your Success Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
