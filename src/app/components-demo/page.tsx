'use client';

import AnimatedLens from '@/components/AnimatedLens';
import ApertureLens from '@/components/ApertureLens';
import CinematicLens from '@/components/CinematicLens';
import CinematicLoadingScreen from '@/components/CinematicLoadingScreen';
import ClientJourney from '@/components/ClientJourney';
import CreativeUniverses from '@/components/CreativeUniverses';
import DemoNavigation from '@/components/DemoNavigation';
import DirectorsInterface from '@/components/DirectorsInterface';
import FilmReel from '@/components/FilmReel';
import MediaCarousel from '@/components/MediaCarousel';
import MediaGrid from '@/components/MediaGrid';
import ProcessSection from '@/components/ProcessSection';
import SolutionsMatrix from '@/components/SolutionsMatrix';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';
import AboutSection from '@/components/sections/AboutSection';
import CinematicContactForm from '@/components/sections/CinematicContactForm';
import CinematicShowcase from '@/components/sections/CinematicShowcase';
import CinematicUniversesSection from '@/components/sections/CinematicUniversesSection';
import ClientJourneySection from '@/components/sections/ClientJourney';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import InteractiveServicesMatrix from '@/components/sections/InteractiveServicesMatrix';
import {
  default as PortfolioSection,
  default as PortfolioSectionSection,
} from '@/components/sections/PortfolioSection';
import {
  default as ServicesCarouselSection,
  default as ServicesCarouselSectionSection,
} from '@/components/sections/ServicesCarouselSection';
import ServicesSection from '@/components/sections/ServicesSection';
import {
  default as SolutionsMatrixSection,
  default as SolutionsMatrixSectionSection,
} from '@/components/sections/SolutionsMatrixSection';
import SuccessStories from '@/components/sections/SuccessStories';
import SuccessStoriesSection from '@/components/sections/SuccessStoriesSection';
import ValueCardsSection from '@/components/sections/ValueCardsSection';
import ValuePropositionCards from '@/components/sections/ValuePropositionCards';
import CinematicButton from '@/components/ui/CinematicButton';
import CinematicCard from '@/components/ui/CinematicCard';
import InteractiveGallery from '@/components/ui/InteractiveGallery';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Camera,
  Film,
  Play,
  Star,
  Target,
  Zap,
} from 'lucide-react';

export default function ComponentsDemoPage() {
  const galleryItems = [
    {
      id: '1',
      image: '/assets/gallery/images/gallery_image_01.jpg',
      title: 'Cinematic Storytelling',
      category: 'Video Production',
      description:
        'Immersive brand storytelling with Hollywood-level production values.',
    },
    {
      id: '2',
      image: '/assets/gallery/images/gallery_image_02.jpg',
      title: 'Creative Process',
      category: 'Behind the Scenes',
      description: 'Explore our creative workflow and team collaboration.',
    },
    {
      id: '3',
      image: '/assets/gallery/images/gallery_image_03.jpg',
      title: 'Digital Innovation',
      category: 'Web Development',
      description: 'Cutting-edge digital solutions with cinematic precision.',
    },
    {
      id: '4',
      image: '/assets/gallery/images/gallery_image_04.jpg',
      title: 'Brand Transformation',
      category: 'Branding',
      description: 'Complete brand evolution with strategic storytelling.',
    },
    {
      id: '5',
      image: '/assets/gallery/images/gallery_image_05.jpg',
      title: 'Interactive Experiences',
      category: 'UX/UI Design',
      description: 'Engaging user experiences that captivate and convert.',
    },
    {
      id: '6',
      image: '/assets/gallery/images/gallery_image_06.jpg',
      title: 'Motion Design',
      category: 'Animation',
      description: 'Dynamic animations that bring brands to life.',
    },
  ];

  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow',
      image: '/assets/testimonials/sarah-johnson.jpg',
      quote:
        'Orson Vision transformed our brand with cinematic storytelling that captivated our audience.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Creative Director, InnovateCorp',
      image: '/assets/testimonials/michael-chen.jpg',
      quote:
        'The level of creativity and attention to detail exceeded all expectations.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Marketing Manager, StartupHub',
      image: '/assets/testimonials/emily-rodriguez.jpg',
      quote:
        'Our conversion rates increased by 300% after implementing their cinematic approach.',
      rating: 5,
    },
  ];

  const services = [
    {
      id: '1',
      title: 'Video Production',
      description:
        'Cinematic storytelling with Hollywood-level production values',
      icon: <Camera className="w-8 h-8" />,
      category: 'Production',
    },
    {
      id: '2',
      title: 'Web Design',
      description: 'Interactive experiences that engage and convert',
      icon: <Film className="w-8 h-8" />,
      category: 'Design',
    },
    {
      id: '3',
      title: 'Brand Strategy',
      description: 'Strategic storytelling that resonates with audiences',
      icon: <Target className="w-8 h-8" />,
      category: 'Strategy',
    },
    {
      id: '4',
      title: 'Digital Innovation',
      description: 'Cutting-edge solutions with cinematic precision',
      icon: <Zap className="w-8 h-8" />,
      category: 'Innovation',
    },
  ];

  const portfolioItems = [
    {
      id: '1',
      title: 'Cinematic Web Design',
      category: 'Web Design',
      image: '/assets/portfolio/cinematic-web-design.jpg',
      description: 'Immersive website design with cinematic storytelling',
    },
    {
      id: '2',
      title: 'Digital Marketing Campaign',
      category: 'Marketing',
      image: '/assets/portfolio/digital-marketing.jpg',
      description: 'Multi-channel campaign with compelling video content',
    },
    {
      id: '3',
      title: 'Mobile App Development',
      category: 'Development',
      image: '/assets/portfolio/mobile-app.jpg',
      description: 'User-centric mobile experience with smooth animations',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--deep-blue)]">
      {/* Navigation */}
      <Navigation />

      {/* Demo Navigation */}
      <DemoNavigation />

      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--golden-accent)] mb-6">
            Cinematic Components
          </h1>
          <p className="text-xl text-[var(--text-subtle)] max-w-3xl mx-auto mb-8">
            Explore our premium UI components designed for creative agencies and
            cinematic experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CinematicButton
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Exploring
            </CinematicButton>
            <CinematicButton
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              View Documentation
            </CinematicButton>
          </div>
        </motion.div>
      </section>

      {/* Cinematic Hero Section Demo */}
      <section id="hero" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Cinematic Hero Section
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Immersive hero sections with dynamic backgrounds and animations
            </p>
          </motion.div>
        </div>
        <CinematicShowcase />
      </section>

      {/* Cinematic Cards Demo */}
      <section id="cards" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Cinematic Cards
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Sophisticated cards with hover effects and cinematic animations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CinematicCard
              image="/assets/gallery/images/gallery_image_01.jpg"
              title="Video Production"
              subtitle="Cinematic storytelling"
              description="Create compelling video content with Hollywood-level production values."
              category="Production"
              duration="2:30"
            />

            <CinematicCard
              image="/assets/gallery/images/gallery_image_02.jpg"
              title="Web Design"
              subtitle="Interactive experiences"
              description="Build immersive websites that engage and convert visitors."
              category="Design"
              aspectRatio="portrait"
            />

            <CinematicCard
              image="/assets/gallery/images/gallery_image_03.jpg"
              title="Brand Strategy"
              subtitle="Strategic storytelling"
              description="Develop powerful brand narratives that resonate with audiences."
              category="Strategy"
              aspectRatio="square"
            />
          </div>
        </div>
      </section>

      {/* Interactive Gallery Demo */}
      <section id="gallery" className="py-20">
        <InteractiveGallery
          items={galleryItems}
          title="Interactive Gallery"
          subtitle="Click to explore our creative universe"
        />
      </section>

      {/* Cinematic Buttons Demo */}
      <section id="buttons" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Cinematic Buttons
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Premium buttons with sophisticated animations and hover effects
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-6 justify-center">
            <CinematicButton
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Project
            </CinematicButton>

            <CinematicButton
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Learn More
            </CinematicButton>

            <CinematicButton variant="outline" size="md">
              View Portfolio
            </CinematicButton>

            <CinematicButton
              variant="ghost"
              size="sm"
              icon={<Star className="w-4 h-4" />}
            >
              Favorite
            </CinematicButton>

            <CinematicButton variant="primary" size="lg" loading>
              Processing...
            </CinematicButton>
          </div>
        </div>
      </section>

      {/* Cinematic Lens Components Demo */}
      <section id="lens" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Cinematic Lens Components
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Interactive lens effects and cinematic visual elements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex justify-center">
              <CinematicLens />
            </div>

            <div className="flex justify-center">
              <AnimatedLens />
            </div>
            <div className="flex justify-center">
              <ApertureLens />
            </div>
          </div>
        </div>
      </section>

      {/* Film Reel Demo */}
      <section id="film-reel" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Film Reel Component
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Dynamic film reel with cinematic animations
            </p>
          </motion.div>
        </div>
        <FilmReel />
      </section>

      {/* Directors Interface Demo */}
      <section id="directors" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Directors Interface
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Interactive interface for creative project management
            </p>
          </motion.div>
        </div>
        <DirectorsInterface />
      </section>

      {/* Solutions Matrix Demo */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Solutions Matrix
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Interactive matrix showcasing our service solutions
            </p>
          </motion.div>
        </div>
        <SolutionsMatrix />
      </section>

      {/* Client Journey Demo */}
      <section id="journey" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Client Journey
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Interactive journey mapping for client experiences
            </p>
          </motion.div>
        </div>
        <ClientJourney />
      </section>

      {/* Creative Universes Demo */}
      <section id="universes" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Creative Universes
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Explore different creative universes and styles
            </p>
          </motion.div>
        </div>
        <CreativeUniverses />
      </section>

      {/* Media Components Demo */}
      <section id="media" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Media Components
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Media cards, carousels, and grids for content display
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Media Carousel */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--golden-accent)] mb-6">
                Media Carousel
              </h3>
              <MediaCarousel items={galleryItems} />
            </div>

            {/* Media Grid */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--golden-accent)] mb-6">
                Media Grid
              </h3>
              <MediaGrid items={galleryItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Section Components Demo */}
      <section id="sections" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Section Components
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Complete section components for full-page experiences
            </p>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <ServicesSection />
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <TestimonialsSection />
        </div>

        {/* Portfolio Section */}
        <div className="mb-20">
          <PortfolioSection />
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <ProcessSection />
        </div>

        {/* Contact Section */}
        <div className="mb-20">
          <ContactSection />
        </div>
      </section>

      {/* Advanced Section Components */}
      <section id="advanced" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Advanced Section Components
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Sophisticated section components with advanced interactions
            </p>
          </motion.div>
        </div>

        {/* Cinematic Showcase */}
        <div className="mb-20">
          <CinematicShowcase />
        </div>

        {/* Interactive Services Matrix */}
        <div className="mb-20">
          <InteractiveServicesMatrix />
        </div>

        {/* Cinematic Contact Form */}
        <div className="mb-20">
          <CinematicContactForm />
        </div>

        {/* Value Proposition Cards */}
        <div className="mb-20">
          <ValuePropositionCards />
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <SuccessStories />
        </div>

        {/* About Section */}
        <div className="mb-20">
          <AboutSection />
        </div>

        {/* Services Carousel Section */}
        <div className="mb-20">
          <ServicesCarouselSection />
        </div>

        {/* Solutions Matrix Section */}
        <div className="mb-20">
          <SolutionsMatrixSection />
        </div>

        {/* Success Stories Section */}
        <div className="mb-20">
          <SuccessStoriesSection />
        </div>

        {/* Value Cards Section */}
        <div className="mb-20">
          <ValueCardsSection />
        </div>

        {/* Cinematic Universes Section */}
        <div className="mb-20">
          <CinematicUniversesSection />
        </div>

        {/* Client Journey Section */}
        <div className="mb-20">
          <ClientJourneySection />
        </div>

        {/* Portfolio Section */}
        <div className="mb-20">
          <PortfolioSectionSection />
        </div>

        {/* Services Carousel Section */}
        <div className="mb-20">
          <ServicesCarouselSectionSection />
        </div>

        {/* Solutions Matrix Section */}
        <div className="mb-20">
          <SolutionsMatrixSectionSection />
        </div>

        {/* Footer Section */}
        <div className="mb-20">
          <FooterSection />
        </div>
      </section>

      {/* Loading Screen Demo */}
      <section id="loading" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Loading Screen
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              Cinematic loading screen with premium animations
            </p>
          </motion.div>
        </div>
        <CinematicLoadingScreen />
      </section>

      {/* Usage Examples */}
      <section id="usage" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--golden-accent)] mb-4">
              Implementation Guide
            </h2>
            <p className="text-xl text-[var(--text-subtle)]">
              How to use these components in your projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[var(--dark-tone)] rounded-xl p-8 border border-[var(--golden-accent)]/20">
              <h3 className="text-2xl font-bold text-[var(--golden-accent)] mb-4">
                CinematicCard Usage
              </h3>
              <pre className="text-[var(--text-subtle)] text-sm overflow-x-auto">
                {`import CinematicCard from '@/components/ui/CinematicCard';

<CinematicCard
  image="/path/to/image.jpg"
  title="Project Title"
  subtitle="Category • Duration"
  description="Project description"
  category="Production"
  duration="2:30"
  aspectRatio="landscape"
  onClick={() => handleClick()}
/>`}
              </pre>
            </div>

            <div className="bg-[var(--dark-tone)] rounded-xl p-8 border border-[var(--golden-accent)]/20">
              <h3 className="text-2xl font-bold text-[var(--golden-accent)] mb-4">
                InteractiveGallery Usage
              </h3>
              <pre className="text-[var(--text-subtle)] text-sm overflow-x-auto">
                {`import InteractiveGallery from '@/components/ui/InteractiveGallery';

const items = [
  {
    id: '1',
    image: '/path/to/image.jpg',
    title: 'Project Title',
    category: 'Category',
    description: 'Description'
  }
];

<InteractiveGallery
  items={items}
  title="Gallery Title"
  subtitle="Gallery subtitle"
/>`}
              </pre>
            </div>

            <div className="bg-[var(--dark-tone)] rounded-xl p-8 border border-[var(--golden-accent)]/20">
              <h3 className="text-2xl font-bold text-[var(--golden-accent)] mb-4">
                CinematicButton Usage
              </h3>
              <pre className="text-[var(--text-subtle)] text-sm overflow-x-auto">
                {`import CinematicButton from '@/components/ui/CinematicButton';
import { Play } from 'lucide-react';

<CinematicButton
  variant="primary"
  size="lg"
  icon={<Play className="w-5 h-5" />}
  onClick={() => handleClick()}
>
  Start Project
</CinematicButton>`}
              </pre>
            </div>

            <div className="bg-[var(--dark-tone)] rounded-xl p-8 border border-[var(--golden-accent)]/20">
              <h3 className="text-2xl font-bold text-[var(--golden-accent)] mb-4">
                CinematicLens Usage
              </h3>
              <pre className="text-[var(--text-subtle)] text-sm overflow-x-auto">
                {`import CinematicLens from '@/components/CinematicLens';

<CinematicLens
  size={200}
  intensity={0.8}
  color="golden"
  animated={true}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
