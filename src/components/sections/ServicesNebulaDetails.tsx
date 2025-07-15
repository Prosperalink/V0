'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const nebulas = [
  {
    id: 'video-production',
    title: 'Production Vidéo Nebula',
    description:
      "Within the Production Vidéo Nebula, we sculpt raw light and sound into compelling visual dimensions. We capture your brand's authentic narrative through documentary-style cinematography, infused with sophisticated dark aesthetics. Our focus is on real moments, genuine emotions, and compelling narratives—creating visual stories that resonate with your audience through cinematic elegance.",
    specializations: [
      "Couverture d'Événements: Documenting cosmic gatherings with unparalleled visual clarity.",
      "Vidéo d'Entreprise: Crafting corporate sagas that resonate across galactic networks.",
      'Création de Contenus Numériques: Generating captivating content for all digital dimensions.',
      'Vidéo Marketing: Propelling your message through compelling visual narratives.',
    ],
    perfectFor:
      'Brands on the Corporate Planet, SMEs & Startups Planet, Tourism Planet, Schools & Universities Planet, Non-Profits Planet seeking authentic, emotionally resonant video content that tells their story with cinematic sophistication.',
    video:
      'https://placehold.co/800x450/1A1A2E/D4AF37?text=Cosmic+Film+Sequence',
    image: '/assets/services/nebulas/video-thumbnail.jpg',
  },
  {
    id: 'cinematic-production',
    title: 'Production Cinématographique Nebula',
    description:
      "Elevate your brand's cosmic profile with high-end cinematic productions, featuring dramatic lighting and professional filmmaking techniques honed in the heart of Tunisia. Our artistic vision, combined with technical excellence, delivers premium video content that transforms brand perception into a stellar event.",
    specializations: [
      'Clips Musicaux: Composing visual harmonies for sonic explorations.',
      'Spots Publicitaires: Launching captivating campaigns with inter-dimensional reach.',
      'Film de Marque: Crafting epic brand sagas that echo through the universe.',
    ],
    perfectFor:
      'Corporate Planet, Fashion & Artisans Planet, Artists Planet requiring premium, cinematic-quality video content that makes a lasting impression and elevates their market position to cosmic heights.',
    video: 'https://placehold.co/800x450/0A0F1A/FFED4E?text=Stellar+Epic+Video',
    image: '/assets/services/nebulas/cinematic-thumbnail.jpg',
  },
  {
    id: 'motion-design',
    title: 'Motion Design & Animation Nebula',
    description:
      'Bring your brand to life with dynamic visual storytelling through sophisticated animation within the Motion Design & Animation Nebula. We create engaging animated content that captivates audiences with smooth, professional animations and cinematic quality, propelling your message across digital dimensions.',
    specializations: [
      'Motion Graphique 2D/3D: Sculpting dynamic visuals across two and three dimensions.',
      'Animation Logo: Bringing cosmic identity to life with fluid motion.',
      'Vidéos Explicatives: Demystifying complex concepts with engaging animated journeys.',
      'Effets Visuels Cinématographiques: Adding Hollywood-level cosmic flair to any visual.',
    ],
    perfectFor:
      'SMEs & Startups Planet, Healthcare Planet, Schools & Universities Planet, Corporate Planet looking to add dynamic, engaging visual elements to their digital presence with cinematic sophistication.',
    video:
      'https://placehold.co/800x450/0F3460/F0F0F0?text=Animated+Celestials+Video',
    image: '/assets/services/nebulas/motion-thumbnail.jpg',
  },
  {
    id: 'photography',
    title: 'Shooting Photos & Contenu Nebula',
    description:
      "Within the Shooting Photos & Contenu Nebula, we capture your brand's essence through sophisticated photography that tells compelling visual stories. Every image is crafted with cinematic precision, creating content that resonates with your audience across all light frequencies.",
    specializations: [
      'Photos Produit: Capturing stellar product details with cosmic clarity.',
      'Photos Culinaire: Creating appetizing visuals that tantalize across dimensions.',
      'Photos Fashion & Beauty: Illuminating cosmic beauty with captivating imagery.',
      "Couverture d'Événements: Documenting memorable cosmic events with authentic visuals.",
      'Podcasts: Producing interstellar audio content that resonates.',
    ],
    perfectFor:
      "Tourism Planet, Healthcare Planet, Schools & Universities Planet, Fashion & Artisans Planet, Artists Planet needing high-quality visual and audio content that reflects their brand's sophistication and tells their story effectively across the universe.",
    video: 'https://placehold.co/800x450/1C1C1C/FFED4E?text=Cosmic+Still+Video',
    image: '/assets/services/nebulas/photography-thumbnail.jpg',
  },
  {
    id: 'graphic-design',
    title: 'Design Graphique & Identité Nebula',
    description:
      'We craft sophisticated brand identities within the Design Graphique & Identité Nebula that tell compelling visual stories across the digital cosmos. Our design philosophy combines artistic vision with strategic thinking to create memorable brand experiences that form galactic impressions.',
    specializations: [
      'Logo & Charte Graphique: Forging iconic cosmic identities.',
      'Supports de Communication: Designing interstellar communication vessels.',
      'Packing & Habillage: Creating dimensional packaging that captivates.',
      'Création de Contenus Numériques: Architecting content for infinite digital realms.',
    ],
    perfectFor:
      'All Planets of Partnership seeking to establish or refresh their brand identity with sophisticated, memorable design that reflects their cosmic values and vision.',
    video: 'https://placehold.co/800x450/1A1A2E/B0B0B0?text=Cosmic+Brand+Video',
    image:
      'https://placehold.co/800x600/0F3460/F0F0F0?text=Galactic+Identity+Image',
  },
  {
    id: 'web-creation',
    title: 'Création de Site Web Nebula',
    description:
      'We engineer high-performance digital gateways within the Création de Site Web Nebula that deliver cinematic user experiences. Our development process combines cutting-edge technology with sophisticated design to create digital experiences that captivate and convert users across all cosmic dimensions.',
    specializations: [
      'Sites Vitrine: Building stellar showcases for your cosmic presence.',
      'E-commerce: Designing inter-galactic marketplaces with seamless transactions.',
      'SEO & Visibilité: Optimizing your cosmic coordinates for universal discovery.',
      "Gestion Réseaux Sociaux: Managing your brand's inter-dimensional broadcasts.",
    ],
    perfectFor:
      "All Planets of Partnership requiring professional, high-performance websites that reflect their brand's sophistication and drive measurable results across the digital cosmos.",
    video:
      'https://placehold.co/800x450/16213E/FFFFFF?text=Cosmic+Website+Video',
    image:
      'https://placehold.co/800x600/1C1C1C/FFED4E?text=Digital+Gateway+Image',
  },
  {
    id: 'digital-marketing',
    title: 'Marketing Digital Nebula',
    description:
      'We craft strategic digital marketing campaigns within the Marketing Digital Nebula that transmit compelling brand stories and drive measurable results across the vast digital cosmos. Our approach combines data-driven cosmic insights with creative storytelling to launch campaigns that resonate and convert.',
    specializations: [
      'Référencement Naturel (SEO): Optimizing your cosmic visibility for universal search.',
      "Inbound Marketing: Attracting cosmic travelers to your brand's orbit.",
      'Google Ads & Facebook Ads: Launching targeted interstellar campaigns.',
      'Email Marketing: Broadcasting direct cosmic messages to your audience.',
    ],
    perfectFor:
      'All Planets of Partnership seeking to increase their digital presence and drive measurable growth through strategic, creative marketing campaigns across the Cinematic Universe.',
    video:
      'https://placehold.co/800x450/0A0A0F/E0E0E0?text=Cosmic+Marketing+Video',
    image:
      'https://placehold.co/800x600/1A1A2E/B0B0B0?text=Interstellar+Campaign+Image',
  },
  {
    id: 'specialized-services',
    title: 'Services Spécialisés Nebula',
    description:
      'Within the Services Spécialisés Nebula, we provide custom digital solutions tailored to your unique cosmic needs. Our specialized services combine technical expertise with creative vision to solve complex challenges with cinematic precision, ensuring every mission is a success.',
    specializations: [
      'Mariage (Photos & Vidéos): Documenting celestial unions with timeless visual artistry.',
      'Organisation Événementielle: Orchestrating cosmic events with seamless execution.',
      "Conseil Stratégique: Providing galactic guidance for your brand's trajectory.",
    ],
    perfectFor:
      'Weddings Planet, Tourism Planet, Healthcare Planet, Corporate Planet, Artists Planet with unique digital challenges requiring custom solutions and specialized expertise to navigate their cosmic journey.',
    video:
      'https://placehold.co/800x450/0F3460/FFD700?text=Cosmic+Custom+Video',
    image:
      'https://placehold.co/800x600/16213E/F0F0F0?text=Tailored+Solution+Image',
  },
];

export default function ServicesNebulaDetails() {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/50 via-dark-tone/30 to-deep-blue/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-20" />

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
            Our Nebulas of Expertise
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Each nebula represents a specialized cluster of services, designed
            to illuminate your path through the digital cosmos with cinematic
            precision and stellar results.
          </p>
        </motion.div>

        {/* Nebulas Grid */}
        <div className="space-y-16">
          {nebulas.map((nebula, index) => (
            <motion.div
              key={nebula.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-12 items-center`}
            >
              {/* Content */}
              <div
                className={`text-cream-white ${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-golden-accent mb-6 font-cinematic">
                  {nebula.title}
                </h3>
                <p className="text-lg leading-relaxed mb-8 text-text-white">
                  {nebula.description}
                </p>

                {/* Specializations */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-golden-accent mb-4">
                    Constellations of Specialization:
                  </h4>
                  <ul className="space-y-3 text-text-subtle">
                    {nebula.specializations.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-golden-accent rounded-full mt-2 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Perfect For */}
                <div className="bg-gradient-to-r from-golden-accent/10 to-transparent p-6 rounded-xl border border-golden-accent/20">
                  <h4 className="text-lg font-bold text-golden-accent mb-3">
                    Perfect For:
                  </h4>
                  <p className="text-text-subtle leading-relaxed">
                    {nebula.perfectFor}
                  </p>
                </div>
              </div>

              {/* Media */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="space-y-6">
                  {/* Video */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <video
                      className="w-full h-auto"
                      poster={nebula.image}
                      controls
                    >
                      <source src={nebula.video} type="video/mp4" />
                    </video>
                  </div>

                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={nebula.image}
                      alt={nebula.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-golden-accent mb-8 font-cinematic">
            Ready to Explore Your Nebula?
          </h3>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Let's align our cosmic coordinates and discover which nebula of
            expertise will illuminate your path to digital success.
          </p>
          <button className="bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Request Cosmic Consultation
          </button>
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-golden-accent rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-golden-accent rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-golden-accent rounded-full opacity-50 animate-pulse" />
      </div>
    </section>
  );
}
