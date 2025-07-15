import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Orson Vision | Cinematic Digital Insights',
  description:
    'Explore our latest insights on digital design, marketing strategies, and cinematic storytelling. Stay updated with industry trends and creative innovations.',
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Cinematic Web Design: Dark Themes and Golden Accents',
    excerpt:
      'Discover how sophisticated dark themes and cinematic design principles create immersive digital experiences that captivate and convert.',
    content: 'Full article content here...',
    author: 'Alex Chen',
    publishDate: '2024-12-19',
    readTime: '5 min read',
    category: 'Design',
    tags: ['Web Design', 'Dark Theme', 'Cinematic', 'UX'],
    image: '/assets/blog/cinematic-web-design.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Storytelling in Digital Marketing: Lessons from Hollywood',
    excerpt:
      'How cinematic storytelling techniques can transform your digital marketing campaigns and create emotional connections with your audience.',
    content: 'Full article content here...',
    author: 'Sarah Martinez',
    publishDate: '2024-12-15',
    readTime: '7 min read',
    category: 'Marketing',
    tags: ['Storytelling', 'Digital Marketing', 'Emotional Design', 'Branding'],
    image: '/assets/blog/storytelling-marketing.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Performance Optimization: The Cinematic Approach to Speed',
    excerpt:
      'Learn how we optimize websites for Hollywood-level performance while maintaining cinematic visual quality and user experience.',
    content: 'Full article content here...',
    author: 'Marcus Johnson',
    publishDate: '2024-12-12',
    readTime: '6 min read',
    category: 'Development',
    tags: ['Performance', 'Optimization', 'Speed', 'Technical'],
    image: '/assets/blog/performance-optimization.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Brand Identity in the Digital Age: Creating Memorable Experiences',
    excerpt:
      'How to build a compelling brand identity that resonates in the digital landscape through cinematic design and strategic storytelling.',
    content: 'Full article content here...',
    author: 'Elena Rodriguez',
    publishDate: '2024-12-08',
    readTime: '8 min read',
    category: 'Branding',
    tags: ['Brand Identity', 'Digital Branding', 'Visual Design', 'Strategy'],
    image: '/assets/blog/brand-identity.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'The Psychology of Color in Digital Design',
    excerpt:
      'Understanding how color psychology influences user behavior and how to use it effectively in cinematic digital experiences.',
    content: 'Full article content here...',
    author: 'Alex Chen',
    publishDate: '2024-12-05',
    readTime: '4 min read',
    category: 'Design',
    tags: [
      'Color Psychology',
      'Design Theory',
      'User Experience',
      'Visual Design',
    ],
    image: '/assets/blog/color-psychology.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'E-commerce Design: Creating Cinematic Shopping Experiences',
    excerpt:
      'How to design e-commerce experiences that feel like immersive films rather than traditional online stores.',
    content: 'Full article content here...',
    author: 'Sarah Martinez',
    publishDate: '2024-12-01',
    readTime: '9 min read',
    category: 'E-commerce',
    tags: ['E-commerce', 'Shopping Experience', 'Conversion', 'UX Design'],
    image: '/assets/blog/ecommerce-design.jpg',
    featured: false,
  },
];

const categories = [
  'All',
  'Design',
  'Marketing',
  'Development',
  'Branding',
  'E-commerce',
];

export default function BlogPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col justify-between group/design-root overflow-x-hidden bg-[var(--deep-blue)]">
      <div className="flex-grow">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[var(--deep-blue)]/80 backdrop-blur-sm border-b border-[var(--golden-accent)]/20">
          <div className="flex items-center p-4 justify-between">
            <div className="w-8" />
            <h1 className="text-xl font-bold text-[var(--golden-accent)] tracking-wider">
              ORSON VISION
            </h1>
            <button className="flex items-center justify-center rounded-full h-8 w-8 bg-transparent text-[var(--golden-accent)]">
              <svg
                fill="currentColor"
                height="20px"
                viewBox="0 0 256 256"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </button>
          </div>
        </header>

        <main className="pb-24">
          {/* Hero Section */}
          <div className="relative min-h-[40vh] flex flex-col justify-end bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)] via-transparent to-transparent" />
            <div className="relative z-10 p-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold leading-tight text-[var(--golden-accent)] mb-4"
              >
                Latest Insights
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[var(--text-subtle)] max-w-prose text-lg"
              >
                Explore our latest thoughts on digital design, marketing
                strategies, and cinematic storytelling. Stay updated with
                industry trends and creative innovations.
              </motion.p>
            </div>
          </div>

          {/* Featured Article */}
          {blogPosts
            .filter(post => post.featured)
            .map(featuredPost => (
              <motion.div
                key={featuredPost.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-6"
              >
                <Card
                  image={featuredPost.image}
                  title={featuredPost.title}
                  subtitle={`${featuredPost.category} • ${featuredPost.readTime}`}
                  description={featuredPost.excerpt}
                  className="w-full md:w-auto"
                  aspectRatio="landscape"
                >
                  <div className="absolute inset-0 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="text-lg font-bold">
                        {featuredPost.title}
                      </h3>
                      <p className="text-sm opacity-80">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

          {/* Category Filter */}
          <div className="px-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-[var(--golden-accent)] text-[var(--deep-blue)]'
                      : 'bg-[var(--dark-tone)]/50 text-[var(--text-subtle)] hover:text-[var(--golden-accent)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Blog Grid */}
          <div className="px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6"
            >
              <div className="flex items-start gap-4">
                {blogPosts
                  .filter(post => !post.featured)
                  .map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Card
                        image={post.image}
                        title={post.title}
                        subtitle={`${post.category} • ${post.readTime}`}
                        description={post.excerpt}
                        aspectRatio="portrait"
                      >
                        {null}
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[var(--dark-tone)]/90 backdrop-blur-sm border-t border-[var(--golden-accent)]/20">
        <nav className="flex justify-around items-center h-16">
          <Link
            className="flex flex-col items-center justify-center gap-1 text-[var(--text-subtle)]"
            href="/"
          >
            <svg
              fill="currentColor"
              height="24px"
              viewBox="0 0 256 256"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16H48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z" />
            </svg>
            <span className="text-xs">Home</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center gap-1 text-[var(--text-subtle)]"
            href="/portfolio"
          >
            <svg
              fill="currentColor"
              height="24px"
              viewBox="0 0 256 256"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM136.44,54.72,164.57,71l-58.9,15.55L77.55,70.27ZM208,200H48V120H208v80Z" />
            </svg>
            <span className="text-xs">Projects</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center gap-1 text-[var(--golden-accent)]"
            href="/blog"
          >
            <svg
              fill="currentColor"
              height="24px"
              viewBox="0 0 256 256"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM136.44,54.72,164.57,71l-58.9,15.55L77.55,70.27ZM208,200H48V120H208v80Z" />
            </svg>
            <span className="text-xs font-semibold">Blog</span>
          </Link>
        </nav>
      </footer>
    </div>
  );
}
