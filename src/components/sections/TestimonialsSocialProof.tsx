'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  id: string;
  quote: string;
  clientName: string;
  title: string;
  company: string;
  image: string;
  rating: number;
}

const TestimonialCard = ({
  id,
  quote,
  clientName,
  title,
  company,
  image,
  rating,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative bg-gradient-to-br from-dark-tone to-mid-tone rounded-xl p-8 border border-border-card hover:border-border-golden transition-all duration-500 group"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-golden-accent/30">
        <Quote className="h-8 w-8" />
      </div>

      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-golden-accent fill-current" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg text-text-primary mb-6 italic leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Client Info */}
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={clientName}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <div className="font-semibold text-text-primary">{clientName}</div>
          <div className="text-sm text-text-secondary">{title}</div>
          <div className="text-sm text-golden-accent font-medium">
            {company}
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-golden-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
    </motion.div>
  );
};

const testimonials: TestimonialCardProps[] = [
  {
    id: 'sarah-johnson',
    quote:
      'Orson Vision transformed our digital presence with cinematic precision. Their storytelling approach elevated our brand to new heights. The results exceeded our expectations.',
    clientName: 'Sarah Johnson',
    title: 'Directrice Marketing',
    company: 'TechFlow Solutions',
    image: '/assets/testimonials/sarah-johnson.jpg',
    rating: 5,
  },
  {
    id: 'michael-chen',
    quote:
      "Working with Orson Vision was like collaborating with a master filmmaker. They understood our vision and created a digital experience that truly represents our brand's sophistication.",
    clientName: 'Michael Chen',
    title: 'CEO & Fondateur',
    company: 'InnovateCorp',
    image: '/assets/testimonials/michael-chen.jpg',
    rating: 5,
  },
  {
    id: 'emily-rodriguez',
    quote:
      'The level of detail and cinematic quality they brought to our project was extraordinary. Our conversion rates increased by 300% within the first month.',
    clientName: 'Emily Rodriguez',
    title: 'Directrice des Opérations',
    company: 'StartupHub',
    image: '/assets/testimonials/emily-rodriguez.jpg',
    rating: 5,
  },
];

export default function TestimonialsSocialProof() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-dark-tone via-mid-tone to-dark-tone overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-tone/60 via-mid-tone/40 to-dark-tone/60 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-cinematic">
            Transmissions From Our Partners
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover what our clients say about their cinematic journey with
            Orson Vision. Every partnership is a story of transformation and
            success.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-golden-accent mb-2">
              500+
            </div>
            <div className="text-text-secondary">Digital Universes Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-golden-accent mb-2">
              98%
            </div>
            <div className="text-text-secondary">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-golden-accent mb-2">
              15+
            </div>
            <div className="text-text-secondary">
              Years of Cinematic Excellence
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
