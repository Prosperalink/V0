'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Code, Palette, Rocket, Search } from 'lucide-react';

interface ProcessPhase {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  deliverables: string[];
}

const processPhases: ProcessPhase[] = [
  {
    id: 'discovery-strategy',
    title: 'Discovery & Strategy',
    description:
      'We dive deep into your vision, market analysis, and competitive landscape to craft a comprehensive digital strategy that aligns with your business objectives.',
    icon: Search,
    duration: '1-2 weeks',
    deliverables: [
      'Brand analysis and positioning',
      'User persona development',
      'Competitive research',
      'Technical requirements',
      'Project roadmap',
    ],
  },
  {
    id: 'design-prototyping',
    title: 'Design & Prototyping',
    description:
      'Our cinematic approach transforms your strategy into visual storytelling. We create wireframes, mockups, and interactive prototypes that bring your vision to life.',
    icon: Palette,
    duration: '2-3 weeks',
    deliverables: [
      'Wireframes and user flows',
      'Visual design mockups',
      'Interactive prototypes',
      'Design system creation',
      'User experience optimization',
    ],
  },
  {
    id: 'production-development',
    title: 'Production & Development',
    description:
      'With cinematic precision, we build your digital universe using cutting-edge technologies and best practices. Every line of code is crafted for performance and excellence.',
    icon: Code,
    duration: '4-8 weeks',
    deliverables: [
      'Frontend development',
      'Backend integration',
      'Content management system',
      'Performance optimization',
      'Cross-platform testing',
    ],
  },
  {
    id: 'launch-iteration',
    title: 'Launch & Iteration',
    description:
      'We orchestrate a flawless launch and provide ongoing support to ensure your digital presence continues to evolve and perform at its peak.',
    icon: Rocket,
    duration: 'Ongoing',
    deliverables: [
      'Deployment and launch',
      'Performance monitoring',
      'User feedback integration',
      'Continuous optimization',
      'Ongoing support and maintenance',
    ],
  },
];

const ProcessPhaseCard = ({
  phase,
  index,
}: {
  phase: ProcessPhase;
  index: number;
}) => {
  const IconComponent = phase.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-golden-accent to-transparent" />

      <div className="relative bg-gradient-to-br from-dark-tone to-mid-tone rounded-xl p-8 border border-border-card hover:border-border-golden transition-all duration-500 group">
        {/* Phase Number */}
        <div className="absolute -top-4 left-8 w-8 h-8 bg-golden-accent rounded-full flex items-center justify-center text-deep-blue font-bold text-sm">
          {index + 1}
        </div>

        {/* Icon */}
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-golden-accent/20 rounded-lg flex items-center justify-center mr-4 border border-golden-accent/30">
            <IconComponent className="h-6 w-6 text-golden-accent" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-text-primary font-cinematic">
              {phase.title}
            </h3>
            <p className="text-golden-accent font-medium">{phase.duration}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary mb-6 leading-relaxed">
          {phase.description}
        </p>

        {/* Deliverables */}
        <div>
          <h4 className="text-text-primary font-semibold mb-3 flex items-center">
            <CheckCircle className="h-5 w-5 text-golden-accent mr-2" />
            Key Deliverables
          </h4>
          <ul className="space-y-2">
            {phase.deliverables.map((deliverable, idx) => (
              <li key={idx} className="flex items-start text-text-secondary">
                <span className="w-2 h-2 bg-golden-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                {deliverable}
              </li>
            ))}
          </ul>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-golden-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      </div>
    </motion.div>
  );
};

export default function ProcessTimeline() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/50 via-dark-tone/30 to-deep-blue/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 font-cinematic">
            The Voyage Map
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our cinematic approach to digital project development. Every phase
            is crafted with precision, storytelling mastery, and production
            excellence to ensure your vision becomes reality.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="space-y-12">
          {processPhases.map((phase, index) => (
            <ProcessPhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-dark-tone to-mid-tone rounded-xl p-8 border border-border-card">
            <h3 className="text-2xl font-bold text-text-primary mb-4 font-cinematic">
              Ready to Begin Your Cinematic Journey?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Let's discuss your vision and create a custom roadmap for your
              digital transformation. Our team is ready to bring your cinematic
              universe to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-golden-accent to-golden-subtle text-deep-blue font-bold rounded-lg hover:shadow-lg hover:shadow-golden-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <Rocket className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 text-text-primary font-semibold hover:text-golden-accent transition-colors duration-300 border border-border-golden rounded-lg hover:border-golden-accent"
              >
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
