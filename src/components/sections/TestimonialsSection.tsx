'use client';

import { TESTIMONIALS } from '@/constants';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-deep-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-golden-accent mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-text-white max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. Our cinematic approach delivers
            measurable impact and lasting partnerships.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-dark-tone rounded-lg p-8 border border-text-subtle/20 hover:border-golden-accent/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-golden-accent text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-text-white leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center text-golden-accent font-semibold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-golden-accent font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-text-subtle text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Success Metrics */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-golden-accent mb-2">
              95%
            </div>
            <div className="text-text-white">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-golden-accent mb-2">
              40%
            </div>
            <div className="text-text-white">Average Performance Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-golden-accent mb-2">
              100+
            </div>
            <div className="text-text-white">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
