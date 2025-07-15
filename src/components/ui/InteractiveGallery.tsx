'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description?: string;
  videoUrl?: string;
}

interface InteractiveGalleryProps {
  items: GalleryItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function InteractiveGallery({
  items,
  title = 'Cinematic Gallery',
  subtitle = 'Explore our creative universe',
  className = '',
}: InteractiveGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--golden-accent)] mb-4">
            {title}
          </h2>
          <p className="text-xl text-[var(--text-subtle)] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-[var(--dark-tone)] border border-[var(--golden-accent)]/20">
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredItem === item.id ? 1 : 0,
                      y: hoveredItem === item.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 left-4 bg-[var(--golden-accent)]/90 backdrop-blur-sm text-[var(--deep-blue)] px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {item.category}
                  </motion.div>

                  {/* Play Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredItem === item.id ? 1 : 0,
                      scale: hoveredItem === item.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-[var(--golden-accent)]/90 backdrop-blur-sm rounded-full p-4">
                      <svg
                        className="w-6 h-6 text-[var(--deep-blue)]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--golden-accent)] mb-2 group-hover:text-[var(--golden-accent)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-[var(--text-subtle)] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-[var(--golden-accent)]/0 rounded-xl pointer-events-none"
                  animate={{
                    borderColor:
                      hoveredItem === item.id
                        ? 'rgba(245, 158, 11, 0.3)'
                        : 'rgba(245, 158, 11, 0)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Selected Item */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[var(--deep-blue)]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--dark-tone)] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="aspect-video relative">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 bg-[var(--deep-blue)]/90 backdrop-blur-sm text-[var(--golden-accent)] p-2 rounded-full hover:bg-[var(--golden-accent)] hover:text-[var(--deep-blue)] transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-[var(--golden-accent)] mb-4">
                    {selectedItem.title}
                  </h2>
                  <p className="text-[var(--text-subtle)] text-lg leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
