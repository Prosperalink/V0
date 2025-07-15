'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Vision',
      description:
        'We begin by understanding your brand story, goals, and vision. Our cinematic approach ensures we capture the essence of your narrative.',
      icon: '🎯',
    },
    {
      number: '02',
      title: 'Cinematic Planning',
      description:
        'Every project is storyboarded with precision. We plan each element with the same care as a master filmmaker crafting a scene.',
      icon: '📋',
    },
    {
      number: '03',
      title: 'Production Excellence',
      description:
        'Our team executes with Hollywood-level precision. Every pixel, every frame, every interaction is crafted with cinematic quality.',
      icon: '🎬',
    },
    {
      number: '04',
      title: 'Sophisticated Delivery',
      description:
        'We finalize your content with professional quality and sophisticated presentation. Your story deserves nothing less than cinematic excellence.',
      icon: '✨',
    },
  ];

  return (
    <section className="py-20 bg-dark-tone">
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
            Our Cinematic Process
          </h2>
          <p className="text-xl text-text-white max-w-3xl mx-auto leading-relaxed">
            We approach every project with the precision of a master filmmaker,
            ensuring your story is told with cinematic excellence and
            sophisticated design.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Step Number */}
              <div className="w-16 h-16 bg-golden-accent text-deep-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>

              {/* Step Icon */}
              <div className="text-4xl mb-4">{step.icon}</div>

              {/* Step Title */}
              <h3 className="text-xl font-playfair font-semibold text-golden-accent mb-4">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-text-white leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Philosophy */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-deep-blue rounded-lg p-8 border border-golden-accent/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-golden-accent mb-4">
              Cinematic Quality Guarantee
            </h3>
            <p className="text-text-white leading-relaxed">
              Our cinematic approach ensures complete transparency at every
              stage. We believe in showing rather than telling, delivering real
              results with sophisticated presentation that speaks for itself.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
