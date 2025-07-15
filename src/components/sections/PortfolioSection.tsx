'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  video: string;
  description: string;
  tags: string[];
  client: string;
  results: string;
}

const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'video', name: 'Production Vidéo' },
  { id: 'web', name: 'Sites Web' },
  { id: 'design', name: 'Design' },
  { id: 'marketing', name: 'Marketing' },
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Campagne Vidéo Authentique',
    category: 'video',
    image: '/portfolio/project-1.jpg',
    video: '/portfolio/project-1.mp4',
    description:
      "Documentaire d'entreprise capturant les vraies histoires de nos clients avec authenticité et transparence.",
    tags: ['Production Vidéo', 'Documentaire', 'Authenticité'],
    client: 'Entreprise Tunisienne',
    results: "+150% d'engagement",
  },
  {
    id: 2,
    title: 'Site Web Performance',
    category: 'web',
    image: '/portfolio/project-2.jpg',
    video: '/portfolio/project-2.mp4',
    description:
      'Site web haute performance avec code maintenable et résultats mesurables pour une PME tunisienne.',
    tags: ['Développement Web', 'Performance', 'SEO'],
    client: 'PME Tunisienne',
    results: '+200% de conversions',
  },
  {
    id: 3,
    title: 'Identité Visuelle Transparente',
    category: 'design',
    image: '/portfolio/project-3.jpg',
    video: '/portfolio/project-3.mp4',
    description:
      "Design graphique fonctionnel qui reflète l'authenticité de la marque sans artifice.",
    tags: ['Design Graphique', 'Identité', 'Transparence'],
    client: 'Startup Tunisienne',
    results: '+80% de reconnaissance',
  },
  {
    id: 4,
    title: 'Stratégie Marketing Réelle',
    category: 'marketing',
    image: '/portfolio/project-4.jpg',
    video: '/portfolio/project-4.mp4',
    description:
      'Campagne marketing basée sur des données réelles et des résultats mesurables.',
    tags: ['Marketing Digital', 'Données', 'Résultats'],
    client: 'E-commerce Tunisien',
    results: '+120% de ventes',
  },
  {
    id: 5,
    title: 'Motion Design Authentique',
    category: 'video',
    image: '/portfolio/project-5.jpg',
    video: '/portfolio/project-5.mp4',
    description:
      'Animations qui racontent de vraies histoires avec émotion et authenticité.',
    tags: ['Motion Design', 'Animation', 'Storytelling'],
    client: 'Agence Tunisienne',
    results: '+90% de rétention',
  },
  {
    id: 6,
    title: 'Application Web Fonctionnelle',
    category: 'web',
    image: '/portfolio/project-6.jpg',
    video: '/portfolio/project-6.mp4',
    description:
      'Application web construite avec du code propre et des solutions durables.',
    tags: ['Application Web', 'Code Propre', 'Durabilité'],
    client: 'Institution Tunisienne',
    results: "+300% d'efficacité",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-cream-white to-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-true-blue/10 text-true-blue text-sm font-medium mb-6 shadow-md"
          >
            Notre Portfolio
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-deep-charcoal mb-6 drop-shadow-lg">
            Vrais Projets,
            <span className="text-true-blue"> Vrais Résultats</span>
          </h2>

          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Découvrez notre travail authentique qui génère des résultats
            mesurables pour nos clients dans tous les secteurs.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-true-blue text-cream-white shadow-lg'
                  : 'bg-white text-warm-gray hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="portfolio-grid">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-video">
                  {/* Placeholder for video/image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-true-blue/20 to-blue-600/20 flex items-center justify-center">
                    <Play size={48} className="text-white opacity-80" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play size={48} className="mx-auto mb-2" />
                      <p className="font-medium">Voir le Projet</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-deep-charcoal mb-2 group-hover:text-true-blue transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-warm-gray mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-true-blue/10 text-true-blue text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-lg px-8 py-4"
          >
            Voir Tous les Projets
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for Case Study */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-deep-charcoal">
                  {selectedItem.title}
                </h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-warm-gray hover:text-deep-charcoal"
                >
                  ×
                </button>
              </div>

              <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                <Play size={64} className="text-true-blue" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-deep-charcoal mb-2">
                    Détails du Projet
                  </h4>
                  <p className="text-warm-gray mb-4">
                    {selectedItem.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedItem.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-true-blue/10 text-true-blue text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-deep-charcoal mb-2">
                    Résultats
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-warm-gray">Client:</span>
                      <span className="font-medium">{selectedItem.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-gray">Résultats:</span>
                      <span className="font-medium text-true-blue">
                        {selectedItem.results}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
