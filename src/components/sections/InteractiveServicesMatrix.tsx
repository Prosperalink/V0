'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Camera,
  CheckCircle,
  Code,
  Globe,
  Palette,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { useRef, useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  features: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  caseStudies: {
    title: string;
    client: string;
    description: string;
    imageUrl: string;
  }[];
  technologies: string[];
  duration: string;
  deliverables: string[];
}

interface InteractiveServicesMatrixProps {
  services: Service[];
  showPricing?: boolean;
  showCaseStudies?: boolean;
}

export default function InteractiveServicesMatrix({
  services,
  showPricing = true,
  showCaseStudies = true,
}: InteractiveServicesMatrixProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    'all',
    ...Array.from(new Set(services.map(s => s.category))),
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter(service => service.category === selectedCategory);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  const getIconComponent = (iconName: string) => {
    const iconMap = {
      camera: <Camera className="w-6 h-6" />,
      code: <Code className="w-6 h-6" />,
      palette: <Palette className="w-6 h-6" />,
      trending: <TrendingUp className="w-6 h-6" />,
      smartphone: <Smartphone className="w-6 h-6" />,
      globe: <Globe className="w-6 h-6" />,
      zap: <Zap className="w-6 h-6" />,
      users: <Users className="w-6 h-6" />,
    };
    return (
      iconMap[iconName as keyof typeof iconMap] || <Star className="w-6 h-6" />
    );
  };

  return (
    <section className="relative min-h-screen bg-deep-blue overflow-hidden">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/50 to-deep-blue/80 z-10" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-4">
            Our Cinematic Services
          </h2>
          <p className="text-xl text-text-white max-w-2xl mx-auto">
            Explore our comprehensive range of digital solutions, each crafted
            with Hollywood-level precision
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-golden-accent text-deep-blue shadow-lg'
                    : 'bg-background-blue-deep text-text-white border border-text-subtle/30 hover:border-golden-accent/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {category === 'all' ? 'All Services' : category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div ref={containerRef} className="relative">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="group cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <motion.div
                    className="relative bg-background-blue-deep border border-text-subtle/30 rounded-lg p-6 h-full hover:border-golden-accent/50 transition-all duration-300 overflow-hidden"
                    whileHover={{
                      boxShadow: '0 20px 40px rgba(212, 175, 55, 0.1)',
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-golden-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Service Icon */}
                    <motion.div
                      className="text-golden-accent mb-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {getIconComponent(service.icon as string)}
                    </motion.div>

                    {/* Service Title */}
                    <h3 className="text-xl font-playfair font-bold text-golden-accent mb-3">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-text-white mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Service Features */}
                    <div className="space-y-2 mb-6">
                      {service.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.5 + featureIndex * 0.1,
                            }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-golden-accent" />
                            <span className="text-text-subtle text-sm">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                    </div>

                    {/* Service Meta */}
                    <div className="flex items-center justify-between text-sm text-text-subtle">
                      <span>{service.duration}</span>
                      <span>{service.category}</span>
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      className="absolute top-4 right-4 text-golden-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={handleClose}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.4 }}
                className="relative bg-deep-blue border border-golden-accent/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-text-subtle/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-golden-accent">
                        {getIconComponent(selectedService.icon as string)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-playfair font-bold text-golden-accent">
                          {selectedService.title}
                        </h3>
                        <p className="text-text-subtle">
                          {selectedService.category}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-text-subtle hover:text-golden-accent transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-golden-accent mb-3">
                      Description
                    </h4>
                    <p className="text-text-white leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-golden-accent mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-golden-accent" />
                          <span className="text-text-white">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-golden-accent mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="px-3 py-1 bg-golden-accent/20 text-golden-accent rounded-full text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-lg font-semibold text-golden-accent mb-3">
                      Deliverables
                    </h4>
                    <div className="space-y-2">
                      {selectedService.deliverables.map(
                        (deliverable, index) => (
                          <motion.div
                            key={deliverable}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-2 h-2 bg-golden-accent rounded-full" />
                            <span className="text-text-white">
                              {deliverable}
                            </span>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  {showPricing && (
                    <div>
                      <h4 className="text-lg font-semibold text-golden-accent mb-3">
                        Pricing
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.entries(selectedService.pricing).map(
                          ([plan, price], index) => (
                            <motion.div
                              key={plan}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="p-4 bg-background-blue-deep rounded-lg border border-text-subtle/30"
                            >
                              <h5 className="font-semibold text-golden-accent capitalize mb-2">
                                {plan}
                              </h5>
                              <p className="text-text-white">{price}</p>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Case Studies */}
                  {showCaseStudies &&
                    selectedService.caseStudies.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-golden-accent mb-3">
                          Case Studies
                        </h4>
                        <div className="space-y-4">
                          {selectedService.caseStudies.map(
                            (caseStudy, index) => (
                              <motion.div
                                key={caseStudy.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: index * 0.1,
                                }}
                                className="p-4 bg-background-blue-deep rounded-lg border border-text-subtle/30"
                              >
                                <h5 className="font-semibold text-golden-accent mb-2">
                                  {caseStudy.title}
                                </h5>
                                <p className="text-text-subtle text-sm mb-2">
                                  {caseStudy.client}
                                </p>
                                <p className="text-text-white">
                                  {caseStudy.description}
                                </p>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-center pt-6 border-t border-text-subtle/20"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-golden-accent text-deep-blue px-8 py-3 rounded-lg font-semibold hover:bg-golden-accent/90 transition-colors"
                    >
                      Start Your Project
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
