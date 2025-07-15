'use client';

import AnimationObserver from '@/components/AnimationObserver';
import { motion } from 'framer-motion';
import { Award, Play, Star, Target, TrendingUp, Users } from 'lucide-react';

interface ISuccessStory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  results: {
    metric: string;
    value: string;
    icon: React.ReactNode;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
  };
  videoUrl?: string;
}

const successStories: ISuccessStory[] = [
  {
    id: 'wedding-chronicle',
    title: 'The Royal Wedding Chronicle',
    subtitle: 'A Cinematic Love Story',
    description:
      'Transformed a traditional wedding into a cinematic masterpiece that captured every emotion, every moment, creating a timeless film that tells a unique love story.',
    image: '/assets/portfolio/wedding-story.jpg',
    category: 'Wedding & Events',
    results: [
      {
        metric: 'Client Rating',
        value: '4.9/5',
        icon: <Star className="w-5 h-5" />,
      },
      {
        metric: 'Social Shares',
        value: '500+',
        icon: <Users className="w-5 h-5" />,
      },
      {
        metric: 'Featured In',
        value: 'Wedding Magazine',
        icon: <Award className="w-5 h-5" />,
      },
    ],
    testimonial: {
      quote:
        'Our wedding film is absolutely magical. It captures every emotion and moment perfectly. We watch it every anniversary and it brings tears to our eyes every time.',
      author: 'Sarah & Michael',
      role: 'Newlyweds',
      company: 'Private Wedding',
      rating: 5,
    },
  },
  {
    id: 'institut-francais',
    title: 'Institut Français Transformation',
    subtitle: 'Educational Innovation Through Cinematic Storytelling',
    description:
      "A comprehensive rebranding project that transformed the institution's digital presence and student engagement through sophisticated visual storytelling.",
    image: '/assets/portfolio/education-story.jpg',
    category: 'Education',
    results: [
      {
        metric: 'Enrollment Increase',
        value: '200%',
        icon: <TrendingUp className="w-5 h-5" />,
      },
      {
        metric: 'Student Engagement',
        value: '85%',
        icon: <Target className="w-5 h-5" />,
      },
      { metric: 'Awards Won', value: '3', icon: <Award className="w-5 h-5" /> },
    ],
    testimonial: {
      quote:
        'Orson Vision transformed our educational content into engaging cinematic experiences. Our students are more engaged than ever before.',
      author: 'Dr. Marie Dubois',
      role: 'Director',
      company: 'Institut Français',
      rating: 5,
    },
  },
  {
    id: 'le-gourmet',
    title: 'Le Gourmet Culinary Story',
    subtitle: 'From Local Restaurant to Culinary Destination',
    description:
      'A cinematic transformation that elevated a local restaurant into a culinary destination through sophisticated visual storytelling and brand elevation.',
    image: '/assets/portfolio/hospitality-story.jpg',
    category: 'Hospitality',
    results: [
      {
        metric: 'Revenue Increase',
        value: '300%',
        icon: <TrendingUp className="w-5 h-5" />,
      },
      {
        metric: 'Social Media Reach',
        value: '1M+',
        icon: <Users className="w-5 h-5" />,
      },
      {
        metric: 'Featured In',
        value: 'Food Magazine',
        icon: <Award className="w-5 h-5" />,
      },
    ],
    testimonial: {
      quote:
        'Orson Vision captured the soul of our restaurant. Their cinematic approach made our food look as amazing as it tastes.',
      author: 'Chef Pierre Dubois',
      role: 'Owner & Head Chef',
      company: 'Le Gourmet',
      rating: 5,
    },
  },
  {
    id: 'techstart-revolution',
    title: 'TechStart Digital Revolution',
    subtitle: 'From Startup to Market Leader',
    description:
      'A comprehensive digital transformation that propelled a startup to market leadership through strategic branding and cinematic content.',
    image: '/assets/portfolio/business-story.jpg',
    category: 'Business Growth',
    results: [
      {
        metric: 'Revenue Growth',
        value: '500%',
        icon: <TrendingUp className="w-5 h-5" />,
      },
      {
        metric: 'User Acquisition',
        value: '10K+',
        icon: <Users className="w-5 h-5" />,
      },
      {
        metric: 'Market Position',
        value: 'Leader',
        icon: <Award className="w-5 h-5" />,
      },
    ],
    testimonial: {
      quote:
        'Orson Vision transformed our entire digital presence. Their strategic approach combined with cinematic quality delivered incredible results.',
      author: 'Alex Chen',
      role: 'CEO',
      company: 'TechStart',
      rating: 5,
    },
  },
  {
    id: 'modern-artist',
    title: 'Modern Artist Brand Evolution',
    subtitle: 'From Emerging Artist to International Recognition',
    description:
      'A comprehensive brand transformation that elevated an emerging artist to international recognition through sophisticated visual storytelling.',
    image: '/assets/portfolio/creative-story.jpg',
    category: 'Creative Industries',
    results: [
      {
        metric: 'Gallery Representation',
        value: '5+',
        icon: <Award className="w-5 h-5" />,
      },
      {
        metric: 'Collector Network',
        value: '200+',
        icon: <Users className="w-5 h-5" />,
      },
      {
        metric: 'International Recognition',
        value: 'Yes',
        icon: <Star className="w-5 h-5" />,
      },
    ],
    testimonial: {
      quote:
        'Orson Vision understood my artistic vision perfectly. They created a brand that truly represents my work and connects with my audience.',
      author: 'Sofia Martinez',
      role: 'Contemporary Artist',
      company: 'Independent',
      rating: 5,
    },
  },
  {
    id: 'innovatetech-launch',
    title: 'InnovateTech Product Launch',
    subtitle: 'Complex Technology Made Simple',
    description:
      'A cinematic product launch that transformed a complex tech solution into an engaging story, driving massive user adoption and investor interest.',
    image: '/assets/portfolio/tech-story.jpg',
    category: 'Technology',
    results: [
      {
        metric: 'User Growth',
        value: '1000%',
        icon: <TrendingUp className="w-5 h-5" />,
      },
      {
        metric: 'Investor Funding',
        value: '$2M+',
        icon: <Award className="w-5 h-5" />,
      },
      {
        metric: 'Patent Success',
        value: '3',
        icon: <Star className="w-5 h-5" />,
      },
    ],
    testimonial: {
      quote:
        'Orson Vision made our complex technology accessible and engaging. Their cinematic approach helped us secure funding and users.',
      author: 'Sarah Johnson',
      role: 'CEO',
      company: 'InnovateTech',
      rating: 5,
    },
  },
];

export default function SuccessStories() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationObserver>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-6">
              Success Stories
            </h2>
            <p className="text-xl sm:text-2xl text-text-white mb-4 max-w-3xl mx-auto">
              Every project is a story of transformation, innovation, and
              cinematic excellence
            </p>
            <p className="text-lg text-text-subtle max-w-2xl mx-auto">
              Discover how we've helped clients across industries achieve their
              goals through sophisticated storytelling and strategic execution.
            </p>
          </motion.div>

          {/* Success Stories Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-background-blue-deep to-deep-blue rounded-2xl border border-golden-accent/20 overflow-hidden group hover:border-golden-accent/40 transition-all duration-500"
              >
                {/* Story Image */}
                <div className="relative h-64 bg-gradient-to-br from-golden-accent/20 to-transparent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-16 h-16 text-golden-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-golden-accent/20 text-golden-accent text-sm rounded-full border border-golden-accent/30">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-2">
                    {story.title}
                  </h3>
                  <p className="text-golden-accent/80 text-sm font-medium mb-4">
                    {story.subtitle}
                  </p>
                  <p className="text-text-white mb-6 leading-relaxed">
                    {story.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {story.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          {result.icon}
                        </div>
                        <div className="text-golden-accent font-bold text-lg">
                          {result.value}
                        </div>
                        <div className="text-text-subtle text-xs">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="border-t border-golden-accent/20 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(story.testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-golden-accent fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-text-white italic mb-4">
                      "{story.testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-semibold text-golden-accent">
                        {story.testimonial.author}
                      </div>
                      <div className="text-text-subtle text-sm">
                        {story.testimonial.role} at {story.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Success Stories
            </motion.button>
          </motion.div>
        </AnimationObserver>
      </div>
    </section>
  );
}
