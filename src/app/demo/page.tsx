import Card from '@/components/ui/Card';
import CinematicButton from '@/components/ui/CinematicButton';
import { motion } from 'framer-motion';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[var(--deep-blue)] text-[var(--text-primary)]">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 cinematic-heading golden-text">
              Premium Cinematic Design
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-subtle)] mb-8 max-w-3xl mx-auto premium-text">
              Experience the sophisticated aesthetic of our premium cinematic
              design system, featuring golden accents, smooth animations, and
              immersive dark themes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CinematicButton variant="primary" size="lg" href="#components">
                Explore Components
              </CinematicButton>
              <CinematicButton variant="outline" size="lg" href="#examples">
                View Examples
              </CinematicButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Button Showcase */}
      <section id="components" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 cinematic-heading">
              Cinematic Buttons
            </h2>
            <p className="text-[var(--text-subtle)] text-lg">
              Premium button components with sophisticated hover effects and
              golden accents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="premium-card p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-[var(--golden-accent)]">
                Primary Buttons
              </h3>
              <div className="space-y-4">
                <CinematicButton variant="primary" size="sm">
                  Small Primary
                </CinematicButton>
                <CinematicButton variant="primary" size="md">
                  Medium Primary
                </CinematicButton>
                <CinematicButton variant="primary" size="lg">
                  Large Primary
                </CinematicButton>
              </div>
            </motion.div>

            {/* Secondary Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="premium-card p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-[var(--golden-accent)]">
                Secondary Buttons
              </h3>
              <div className="space-y-4">
                <CinematicButton variant="secondary" size="sm">
                  Small Secondary
                </CinematicButton>
                <CinematicButton variant="secondary" size="md">
                  Medium Secondary
                </CinematicButton>
                <CinematicButton variant="secondary" size="lg">
                  Large Secondary
                </CinematicButton>
              </div>
            </motion.div>

            {/* Outline Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="premium-card p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-[var(--golden-accent)]">
                Outline Buttons
              </h3>
              <div className="space-y-4">
                <CinematicButton variant="outline" size="sm">
                  Small Outline
                </CinematicButton>
                <CinematicButton variant="outline" size="md">
                  Medium Outline
                </CinematicButton>
                <CinematicButton variant="outline" size="lg">
                  Large Outline
                </CinematicButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Card Showcase */}
      <section id="examples" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 cinematic-heading">
              Premium Cards
            </h2>
            <p className="text-[var(--text-subtle)] text-lg">
              Cinematic card components with gradient backgrounds and hover
              effects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portrait Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card
                image="/assets/blog/cinematic-web-design.jpg"
                title="Cinematic Web Design"
                subtitle="Design • 5 min read"
                description="Discover how sophisticated dark themes and cinematic design principles create immersive digital experiences."
                aspectRatio="portrait"
              />
            </motion.div>

            {/* Landscape Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card
                image="/assets/blog/storytelling-marketing.jpg"
                title="Storytelling in Digital Marketing"
                subtitle="Marketing • 7 min read"
                description="How cinematic storytelling techniques can transform your digital marketing campaigns."
                aspectRatio="landscape"
              />
            </motion.div>

            {/* Square Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card
                image="/assets/blog/performance-optimization.jpg"
                title="Performance Optimization"
                subtitle="Development • 6 min read"
                description="Learn how we optimize websites for Hollywood-level performance while maintaining cinematic visual quality."
                aspectRatio="square"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 cinematic-heading">
              Design Features
            </h2>
            <p className="text-[var(--text-subtle)] text-lg">
              Premium features that elevate your digital experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Golden Accents',
                description:
                  'Sophisticated golden color palette for premium feel',
                icon: '✨',
              },
              {
                title: 'Smooth Animations',
                description:
                  'Hardware-accelerated animations for 60fps performance',
                icon: '🎬',
              },
              {
                title: 'Dark Theme',
                description:
                  'Immersive dark backgrounds for cinematic experience',
                icon: '🌙',
              },
              {
                title: 'Responsive Design',
                description: 'Optimized for all devices and screen sizes',
                icon: '📱',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="premium-card p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--golden-accent)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-subtle)] text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cinematic-heading">
              Ready to Experience Premium Design?
            </h2>
            <p className="text-xl text-[var(--text-subtle)] mb-8">
              Transform your digital presence with our cinematic design system
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CinematicButton variant="primary" size="lg" href="/contact">
                Start Your Project
              </CinematicButton>
              <CinematicButton variant="outline" size="lg" href="/portfolio">
                View Portfolio
              </CinematicButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
