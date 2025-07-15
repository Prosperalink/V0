'use client';

import Button from '@/components/ui/Button';
import Card, { CardBody } from '@/components/ui/Card';
import { CINEMATIC_QUERIES, PexelsAPI, PexelsPhoto } from '@/lib/pexels-api';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      'The Art of Cinematic Web Design: How Dark Aesthetics Transform User Experience',
    excerpt:
      'Discover how sophisticated dark themes and cinematic design principles create immersive digital experiences that captivate and convert.',
    category: 'Design Insights',
    date: 'December 15, 2024',
    readTime: '5 min read',
    author: 'Sarah Chen',
    slug: 'cinematic-web-design-dark-aesthetics',
  },
  {
    id: 2,
    title:
      'Behind the Scenes: Crafting Digital Stories with Hollywood Precision',
    excerpt:
      'Explore our cinematic approach to digital storytelling and learn how we bring Hollywood-level production values to every project.',
    category: 'Process & Methodology',
    date: 'December 12, 2024',
    readTime: '7 min read',
    author: 'Marcus Rodriguez',
    slug: 'behind-scenes-digital-storytelling-hollywood-precision',
  },
  {
    id: 3,
    title:
      'From Storyboard to Screen: Our Cinematic Approach to Digital Solutions',
    excerpt:
      'Learn how we transform client visions into compelling digital experiences through our proven cinematic methodology.',
    category: 'Case Studies',
    date: 'December 10, 2024',
    readTime: '6 min read',
    author: 'Aisha Thompson',
    slug: 'storyboard-screen-cinematic-approach-digital-solutions',
  },
];

export default function LatestInsightsSection() {
  const [postImages, setPostImages] = useState<Record<number, PexelsPhoto>>({});

  useEffect(() => {
    const fetchPostImages = async () => {
      try {
        const imagePromises = blogPosts.map(async post => {
          const queries = CINEMATIC_QUERIES.blog;
          const query =
            queries[Math.floor(Math.random() * queries.length)] || 'cinematic';
          const photos = await PexelsAPI.searchPhotos(query, 1);
          return { postId: post.id, photo: photos[0] };
        });

        const results = await Promise.all(imagePromises);
        const imagesMap = results.reduce(
          (acc, { postId, photo }) => {
            if (photo) acc[postId] = photo;
            return acc;
          },
          {} as Record<number, PexelsPhoto>
        );

        setPostImages(imagesMap);
      } catch (error) {
        console.error('Error fetching post images:', error);
      }
    };

    fetchPostImages();
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
            Latest Insights
          </h2>
          <p className="text-xl md:text-2xl text-text-white max-w-4xl mx-auto leading-relaxed">
            Discover the latest trends, techniques, and insights in cinematic
            digital solutions.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {blogPosts.map(post => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card
                variant="elevated"
                className="h-full group cursor-pointer"
                onClick={() => (window.location.href = `/blog/${post.slug}`)}
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  {postImages[post.id]?.src?.large ? (
                    <Image
                      src={postImages[post.id]!.src.large}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-deep-blue flex items-center justify-center">
                      <span className="text-4xl">📝</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-golden-accent text-deep-blue px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardBody className="flex flex-col h-full">
                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-sm text-text-subtle mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Post Title */}
                  <h3 className="font-cinematic text-xl font-bold text-golden-accent mb-4 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p className="text-text-subtle leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-subtle">
                      By {post.author}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-golden-accent hover:text-yellow-400"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <Card variant="elevated" className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Featured Post Image */}
              <div className="relative h-80 lg:h-full min-h-[400px]">
                {postImages[1]?.src?.large ? (
                  <Image
                    src={postImages[1]!.src.large}
                    alt="Featured blog post"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-deep-blue flex items-center justify-center">
                    <span className="text-6xl">📖</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/80 to-transparent lg:from-transparent lg:to-deep-blue/80" />
              </div>

              {/* Featured Post Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-golden-accent font-semibold text-sm uppercase tracking-wide">
                    Featured Article
                  </span>
                  <h3 className="font-cinematic text-3xl font-bold text-golden-accent mt-2">
                    The Future of Cinematic Digital Experiences
                  </h3>
                </div>

                <p className="text-text-subtle leading-relaxed mb-6">
                  Explore how emerging technologies and cinematic design
                  principles are shaping the future of digital experiences.
                  Discover the trends that will define the next generation of
                  sophisticated web design and user experience.
                </p>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-text-subtle">
                    By Sarah Chen • December 18, 2024 • 8 min read
                  </span>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    (window.location.href =
                      '/blog/future-cinematic-digital-experiences')
                  }
                >
                  Read Featured Article
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = '/blog')}
            className="mr-4"
          >
            View All Articles
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = '/contact')}
          >
            Subscribe to Insights
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
