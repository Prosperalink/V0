'use client';

import AnimationObserver from '@/components/AnimationObserver';
import { useJourney } from '@/contexts/JourneyContext';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, TrendingUp } from 'lucide-react';

interface IPersonalizedContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  services: {
    title: string;
    description: string;
    icon: string;
    results: string[];
  }[];
  caseStudy: {
    title: string;
    description: string;
    results: string[];
    image: string;
  };
  testimonials: {
    name: string;
    role: string;
    company: string;
    quote: string;
    rating: number;
  }[];
  nextSteps: string[];
}

const personalizedContent: Record<string, IPersonalizedContent> = {
  'wedding-events': {
    id: 'wedding-events',
    title: 'Your Cinematic Wedding Journey',
    subtitle: 'Where Love Meets Cinematic Magic',
    description:
      'Transform your special day into a timeless cinematic masterpiece. Our documentary-style approach captures every emotion, every moment, creating a film that tells your unique love story.',
    heroImage: '/assets/portfolio/wedding-cinematic.jpg',
    services: [
      {
        title: 'Cinematic Wedding Films',
        description: 'Hollywood-level production with emotional storytelling',
        icon: '🎬',
        results: [
          '4.9/5 Client Rating',
          'Featured in Wedding Magazine',
          '500+ Social Shares',
        ],
      },
      {
        title: 'Event Coverage',
        description: 'Comprehensive event documentation with cinematic flair',
        icon: '📸',
        results: [
          'Complete Event Story',
          'Professional Editing',
          'Multiple Formats',
        ],
      },
      {
        title: 'Documentary Style',
        description: 'Authentic storytelling that captures real moments',
        icon: '🎭',
        results: ['Emotional Connection', 'Natural Moments', 'Timeless Appeal'],
      },
    ],
    caseStudy: {
      title: 'The Royal Wedding Chronicle',
      description:
        'A cinematic wedding film that captured the essence of true love through sophisticated storytelling and emotional depth.',
      results: [
        '4.9/5 Client Rating',
        'Featured in Wedding Magazine',
        '500+ Social Shares',
        'Viral Social Media',
      ],
      image: '/assets/portfolio/wedding-story.jpg',
    },
    testimonials: [
      {
        name: 'Sarah & Michael',
        role: 'Newlyweds',
        company: 'Private Wedding',
        quote:
          'Our wedding film is absolutely magical. It captures every emotion and moment perfectly. We watch it every anniversary.',
        rating: 5,
      },
      {
        name: 'Emma Johnson',
        role: 'Event Planner',
        company: 'Luxury Events Co.',
        quote:
          'Orson Vision delivers cinematic quality that elevates every event. Their storytelling approach is unmatched.',
        rating: 5,
      },
    ],
    nextSteps: [
      'Schedule a consultation to discuss your vision',
      'View our wedding portfolio and case studies',
      'Learn about our cinematic approach and process',
      'Get a personalized quote for your special day',
    ],
  },
  education: {
    id: 'education',
    title: 'Your Educational Innovation Journey',
    subtitle: 'Inspiring Learning Through Visual Storytelling',
    description:
      'Create compelling educational content that engages students and elevates institutional branding. Our cinematic approach makes learning an immersive experience.',
    heroImage: '/assets/portfolio/education-cinematic.jpg',
    services: [
      {
        title: 'Educational Videos',
        description: 'Engaging content that makes learning memorable',
        icon: '📚',
        results: [
          '85% Student Engagement',
          'Improved Retention',
          'Interactive Learning',
        ],
      },
      {
        title: 'Institutional Branding',
        description: 'Sophisticated branding that elevates your institution',
        icon: '🎓',
        results: [
          'Enhanced Reputation',
          'Increased Enrollment',
          'Brand Recognition',
        ],
      },
      {
        title: 'Student Engagement',
        description: 'Interactive content that captivates young minds',
        icon: '🌟',
        results: [
          'Higher Participation',
          'Better Understanding',
          'Lasting Impact',
        ],
      },
    ],
    caseStudy: {
      title: 'Institut Français Transformation',
      description:
        "A comprehensive rebranding project that transformed the institution's digital presence and student engagement.",
      results: [
        '200% Enrollment Increase',
        'Award-Winning Design',
        'Industry Recognition',
        'Student Satisfaction',
      ],
      image: '/assets/portfolio/education-story.jpg',
    },
    testimonials: [
      {
        name: 'Dr. Marie Dubois',
        role: 'Director',
        company: 'Institut Français',
        quote:
          'Orson Vision transformed our educational content into engaging cinematic experiences. Our students are more engaged than ever.',
        rating: 5,
      },
      {
        name: 'Prof. Ahmed Benali',
        role: 'Academic Director',
        company: 'University of Tunis',
        quote:
          'Their cinematic approach to educational content has revolutionized how we present information to our students.',
        rating: 5,
      },
    ],
    nextSteps: [
      'Schedule an educational consultation',
      'View our educational content portfolio',
      'Learn about our learning-focused approach',
      'Get a customized proposal for your institution',
    ],
  },
  hospitality: {
    id: 'hospitality',
    title: 'Your Hospitality Excellence Journey',
    subtitle: 'Where Culinary Art Meets Cinematic Storytelling',
    description:
      'Elevate your restaurant or hotel brand with cinematic content that captures the essence of your hospitality experience and drives customer engagement.',
    heroImage: '/assets/portfolio/hospitality-cinematic.jpg',
    services: [
      {
        title: 'Restaurant Branding',
        description:
          'Sophisticated branding that showcases your culinary excellence',
        icon: '🍽️',
        results: [
          '150% Customer Engagement',
          'Increased Reservations',
          'Brand Recognition',
        ],
      },
      {
        title: 'Culinary Photography',
        description: 'Stunning food photography that makes dishes irresistible',
        icon: '📸',
        results: ['Viral Social Media', 'Menu Appeal', 'Customer Attraction'],
      },
      {
        title: 'Hotel Marketing',
        description:
          'Cinematic content that showcases your hospitality experience',
        icon: '🏨',
        results: ['Increased Bookings', 'Brand Elevation', 'Customer Loyalty'],
      },
    ],
    caseStudy: {
      title: 'Le Gourmet Culinary Story',
      description:
        'A cinematic transformation that elevated a local restaurant into a culinary destination through sophisticated visual storytelling.',
      results: [
        '300% Revenue Increase',
        'Featured in Food Magazine',
        'Viral Social Media',
        'Award Recognition',
      ],
      image: '/assets/portfolio/hospitality-story.jpg',
    },
    testimonials: [
      {
        name: 'Chef Pierre Dubois',
        role: 'Owner & Head Chef',
        company: 'Le Gourmet',
        quote:
          'Orson Vision captured the soul of our restaurant. Their cinematic approach made our food look as amazing as it tastes.',
        rating: 5,
      },
      {
        name: 'Maria Santos',
        role: 'Marketing Director',
        company: 'Luxury Hotels Group',
        quote:
          'Their hospitality content is unmatched. It perfectly captures the luxury and comfort we provide to our guests.',
        rating: 5,
      },
    ],
    nextSteps: [
      'Schedule a hospitality consultation',
      'View our restaurant and hotel portfolio',
      'Learn about our culinary storytelling approach',
      'Get a customized hospitality marketing proposal',
    ],
  },
  'business-growth': {
    id: 'business-growth',
    title: 'Your Business Transformation Journey',
    subtitle: 'Where Strategy Meets Cinematic Excellence',
    description:
      'Transform your business with strategic digital solutions that combine cinematic storytelling with powerful business outcomes. Scale your presence and drive growth.',
    heroImage: '/assets/portfolio/business-cinematic.jpg',
    services: [
      {
        title: 'Digital Transformation',
        description: 'Complete digital overhaul with cinematic presentation',
        icon: '🚀',
        results: [
          '200% Digital Growth',
          'Enhanced User Experience',
          'Competitive Advantage',
        ],
      },
      {
        title: 'Brand Elevation',
        description: 'Sophisticated branding that positions you as a leader',
        icon: '⭐',
        results: ['Market Leadership', 'Brand Recognition', 'Customer Trust'],
      },
      {
        title: 'Marketing Strategy',
        description: 'Strategic marketing with cinematic execution',
        icon: '📈',
        results: [
          'Increased Conversions',
          'Higher Engagement',
          'ROI Improvement',
        ],
      },
    ],
    caseStudy: {
      title: 'TechStart Digital Revolution',
      description:
        'A comprehensive digital transformation that propelled a startup to market leadership through strategic branding and cinematic content.',
      results: [
        '500% Revenue Growth',
        'Market Leadership',
        'Industry Awards',
        'Investor Interest',
      ],
      image: '/assets/portfolio/business-story.jpg',
    },
    testimonials: [
      {
        name: 'Alex Chen',
        role: 'CEO',
        company: 'TechStart',
        quote:
          'Orson Vision transformed our entire digital presence. Their strategic approach combined with cinematic quality delivered incredible results.',
        rating: 5,
      },
      {
        name: 'Lisa Rodriguez',
        role: 'Marketing Director',
        company: 'GrowthCorp',
        quote:
          'Their business-focused approach with cinematic execution helped us achieve market leadership in just 6 months.',
        rating: 5,
      },
    ],
    nextSteps: [
      'Schedule a business consultation',
      'View our business transformation portfolio',
      'Learn about our strategic approach',
      'Get a comprehensive business growth proposal',
    ],
  },
  'creative-industries': {
    id: 'creative-industries',
    title: 'Your Creative Amplification Journey',
    subtitle: 'Where Artistic Vision Meets Cinematic Mastery',
    description:
      'Partner with fellow creatives to bring your artistic vision to life through sophisticated visual storytelling and brand development that amplifies your creative voice.',
    heroImage: '/assets/portfolio/creative-cinematic.jpg',
    services: [
      {
        title: 'Artist Branding',
        description:
          'Sophisticated branding that amplifies your artistic voice',
        icon: '🎨',
        results: [
          '200% Brand Recognition',
          'Gallery Interest',
          'Collector Engagement',
        ],
      },
      {
        title: 'Portfolio Development',
        description:
          'Cinematic portfolio presentation that showcases your work',
        icon: '📷',
        results: [
          'Exhibition Opportunities',
          'Client Attraction',
          'Professional Recognition',
        ],
      },
      {
        title: 'Creative Marketing',
        description: 'Strategic marketing that connects with your audience',
        icon: '🎭',
        results: ['Audience Growth', 'Sales Increase', 'Community Building'],
      },
    ],
    caseStudy: {
      title: 'Modern Artist Brand Evolution',
      description:
        'A comprehensive brand transformation that elevated an emerging artist to international recognition through sophisticated visual storytelling.',
      results: [
        'International Recognition',
        'Gallery Representation',
        'Collector Network',
        'Award Winner',
      ],
      image: '/assets/portfolio/creative-story.jpg',
    },
    testimonials: [
      {
        name: 'Sofia Martinez',
        role: 'Contemporary Artist',
        company: 'Independent',
        quote:
          'Orson Vision understood my artistic vision perfectly. They created a brand that truly represents my work and connects with my audience.',
        rating: 5,
      },
      {
        name: 'David Kim',
        role: 'Gallery Director',
        company: 'Modern Art Gallery',
        quote:
          'Their creative content is exceptional. It perfectly captures the essence of each artist and their work.',
        rating: 5,
      },
    ],
    nextSteps: [
      'Schedule a creative consultation',
      'View our artist and creative portfolio',
      'Learn about our creative storytelling approach',
      'Get a personalized creative branding proposal',
    ],
  },
  technology: {
    id: 'technology',
    title: 'Your Tech Innovation Journey',
    subtitle: 'Where Innovation Meets Cinematic Storytelling',
    description:
      'Help tech companies and startups create compelling digital experiences that showcase innovation and drive user engagement. Transform complex technology into engaging stories.',
    heroImage: '/assets/portfolio/tech-cinematic.jpg',
    services: [
      {
        title: 'Startup Branding',
        description:
          'Sophisticated branding that positions startups for success',
        icon: '⚡',
        results: [
          'Investor Interest',
          'User Acquisition',
          'Market Positioning',
        ],
      },
      {
        title: 'Product Showcases',
        description: 'Cinematic product presentations that drive adoption',
        icon: '📱',
        results: [
          'User Engagement',
          'Feature Adoption',
          'Customer Satisfaction',
        ],
      },
      {
        title: 'Tech Marketing',
        description: 'Strategic marketing that simplifies complex technology',
        icon: '🎯',
        results: [
          'Market Understanding',
          'User Growth',
          'Competitive Advantage',
        ],
      },
    ],
    caseStudy: {
      title: 'InnovateTech Product Launch',
      description:
        'A cinematic product launch that transformed a complex tech solution into an engaging story, driving massive user adoption.',
      results: [
        '1000% User Growth',
        'Investor Funding',
        'Industry Recognition',
        'Patent Success',
      ],
      image: '/assets/portfolio/tech-story.jpg',
    },
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'InnovateTech',
        quote:
          'Orson Vision made our complex technology accessible and engaging. Their cinematic approach helped us secure funding and users.',
        rating: 5,
      },
      {
        name: 'Mike Chen',
        role: 'Product Manager',
        company: 'TechFlow',
        quote:
          'Their ability to translate technical features into compelling stories is unmatched. Our user adoption increased dramatically.',
        rating: 5,
      },
    ],
    nextSteps: [
      'Schedule a tech consultation',
      'View our technology portfolio',
      'Learn about our tech storytelling approach',
      'Get a customized tech marketing proposal',
    ],
  },
};

export default function PersonalizedExperience() {
  const { selectedPath } = useJourney();
  const content = selectedPath ? personalizedContent[selectedPath] : null;

  if (!content) {
    return (
      <section
        id="personalized-experience"
        className="relative py-20 bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-golden-accent text-xl"
          >
            Please select your journey path above to continue...
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="personalized-experience"
      className="relative py-20 bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationObserver>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-6">
              {content.title}
            </h2>
            <p className="text-xl sm:text-2xl text-text-white mb-4 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
            <p className="text-lg text-text-subtle max-w-2xl mx-auto">
              {content.description}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {content.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-background-blue-deep to-deep-blue p-8 rounded-2xl border border-golden-accent/20"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-4">
                  {service.title}
                </h3>
                <p className="text-text-white mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-golden-accent" />
                      <span className="text-text-white text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-background-blue-deep to-deep-blue p-8 rounded-2xl border border-golden-accent/20 mb-16"
          >
            <h3 className="text-3xl font-playfair font-bold text-golden-accent mb-6">
              Featured Case Study
            </h3>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-playfair font-bold text-golden-accent mb-4">
                  {content.caseStudy.title}
                </h4>
                <p className="text-text-white mb-6">
                  {content.caseStudy.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {content.caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-golden-accent" />
                      <span className="text-text-white text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-golden-accent/20 to-transparent rounded-lg flex items-center justify-center">
                  <Play className="w-16 h-16 text-golden-accent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-playfair font-bold text-golden-accent mb-8 text-center">
              What Our Clients Say
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {content.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-background-blue-deep to-deep-blue p-8 rounded-2xl border border-golden-accent/20"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-golden-accent fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-text-white mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-golden-accent">
                      {testimonial.name}
                    </div>
                    <div className="text-text-subtle text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl font-playfair font-bold text-golden-accent mb-8">
              Ready to Begin Your Journey?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              {content.nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-golden-accent/20"
                >
                  <div className="w-8 h-8 bg-golden-accent rounded-full flex items-center justify-center text-deep-blue font-bold">
                    {index + 1}
                  </div>
                  <span className="text-text-white">{step}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Cinematic Journey
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </AnimationObserver>
      </div>
    </section>
  );
}
