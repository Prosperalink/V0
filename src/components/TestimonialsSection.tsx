'use client';

import { motion } from 'framer-motion';
import { Play, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael',
    role: 'Wedding Clients',
    company: 'Private Wedding',
    content:
      'Digital Vérité captured our wedding day with such authenticity and beauty. The cinematic film they created exceeded our expectations and perfectly captured our story.',
    rating: 5,
    video: '/testimonials/sarah-michael-wedding.mp4',
  },
  {
    id: 2,
    name: 'Dr. Ahmed Ben Salem',
    role: 'School Director',
    company: 'Educational Institution',
    content:
      "Our student recruitment campaign with Digital Vérité resulted in a 40% increase in inquiries and significantly improved our school's online presence.",
    rating: 5,
    video: '/testimonials/ahmed-ben-salem-school.mp4',
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    role: 'Restaurant Owner',
    company: 'Restaurant Tunis',
    content:
      'Their Digital Vérité approach is exactly what we needed. No hidden costs, no surprises, just honest work that gets results.',
    rating: 5,
    video: '/testimonials/maria-rodriguez-restaurant.mp4',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-alabaster relative overflow-hidden"
    >
      {/* Soft background gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-cobalt-blue/5 via-alabaster/60 to-cobalt-dark/5 opacity-80" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cobalt-blue/20 text-cobalt-blue text-sm font-medium mb-6 shadow-md"
          >
            Client Testimonials
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-lg">
            What Our Clients
            <span className="text-cobalt-blue"> Say</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from real clients who have experienced our Digital
            Vérité approach.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="testimonial-card group bg-white/90 border border-cobalt-blue/10 rounded-2xl shadow-xl p-8 relative transition-all duration-300 hover:shadow-2xl hover:border-cobalt-blue/30"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote size={32} className="text-cobalt-blue opacity-60" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic drop-shadow-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cobalt-blue via-blue-400 to-cobalt-dark rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-cobalt-blue">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Video Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-10 h-10 bg-cobalt-blue rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
              >
                <Play size={16} className="text-white" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-700"
        >
          {[
            { label: 'Projects Completed', value: '150+' },
            { label: 'Client Satisfaction', value: '98%' },
            { label: 'Average ROI', value: '340%' },
            { label: 'Years Experience', value: '8+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-cobalt-blue mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
