'use client';

import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Target, Users } from 'lucide-react';

interface StoryboardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function StoryboardWall() {
  // Final copy for 'The Storyboard Wall' - Strategic Storytelling
  const storyboardItems: StoryboardItem[] = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Brand DNA Discovery',
      description:
        "We dive deep into your brand's DNA to unearth the stories that resonate, the emotions that drive action, and the moments that create lasting connections.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Narrative',
      description:
        'This is where strategy meets storytelling, where data meets drama, where your vision begins its transformation into cinematic reality.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Journey Mapping',
      description:
        "Every masterpiece begins with a brilliant script. Here, we map the narrative, crafting a powerful story that will guide every aspect of the user's journey.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Creative Vision',
      description:
        'Before we write a single line of code or frame a single shot, we craft the creative vision that will guide every decision and design choice.',
    },
  ];

  return (
    <section className="relative py-24 bg-dark-tone overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-tone via-deep-blue to-dark-tone" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.04),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-1/6 w-1 h-1 bg-golden-accent rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/5 w-0.5 h-0.5 bg-golden-accent rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-golden-accent mb-6">
            The Storyboard Wall
          </h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            Every masterpiece begins with a brilliant script. Here, we map the
            narrative, crafting a powerful story that will guide every aspect of
            the user's journey.
          </p>
        </motion.div>

        {/* Storyboard Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {storyboardItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-deep-blue/50 backdrop-blur-sm rounded-lg p-6 border border-golden-accent/20 hover:border-golden-accent/40 transition-all duration-300"
            >
              <div className="text-golden-accent mb-4">{item.icon}</div>
              <h3 className="text-xl font-playfair font-bold text-golden-accent mb-3">
                {item.title}
              </h3>
              <p className="text-text-subtle leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Process Steps */}
          <div className="bg-dark-tone/30 backdrop-blur-sm rounded-lg p-8 border border-golden-accent/20">
            <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-6">
              Our Storytelling Process
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Discovery & Research',
                  description:
                    "We dive deep into your brand's DNA to unearth the stories that resonate, the emotions that drive action, and the moments that create lasting connections.",
                },
                {
                  step: '02',
                  title: 'Strategic Planning',
                  description:
                    'This is where strategy meets storytelling, where data meets drama, where your vision begins its transformation into cinematic reality.',
                },
                {
                  step: '03',
                  title: 'Creative Development',
                  description:
                    'Before we write a single line of code or frame a single shot, we craft the creative vision that will guide every decision and design choice.',
                },
                {
                  step: '04',
                  title: 'Execution & Delivery',
                  description:
                    "Every masterpiece begins with a brilliant script. Here, we map the narrative, crafting a powerful story that will guide every aspect of the user's journey.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-golden-accent font-bold text-sm">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-text-subtle text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Storytelling Principles */}
          <div className="bg-dark-tone/30 backdrop-blur-sm rounded-lg p-8 border border-golden-accent/20">
            <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-6">
              Storytelling Principles
            </h3>
            <div className="space-y-4">
              {[
                {
                  principle: 'Emotional Resonance',
                  description:
                    'We believe that great products, like great films, are built on compelling narratives that create genuine emotional connection.',
                },
                {
                  principle: 'Visual Hierarchy',
                  description:
                    "Every interaction becomes a scene, every page a chapter in your brand's cinematic story.",
                },
                {
                  principle: 'Strategic Impact',
                  description:
                    "We don't rely on guesswork. Every creative decision is backed by comprehensive research and strategic thinking.",
                },
                {
                  principle: 'Cinematic Quality',
                  description:
                    'We approach digital solutions with the precision of a master filmmaker, crafting experiences that rival the sophistication of Hollywood productions.',
                },
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-golden-accent/30 pl-4"
                >
                  <h4 className="text-lg font-semibold text-golden-accent mb-2">
                    {principle.principle}
                  </h4>
                  <p className="text-text-subtle text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
