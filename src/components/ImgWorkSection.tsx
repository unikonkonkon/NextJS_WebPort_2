'use client';

import '../app/css/ImgWorkSection.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { memo, useMemo } from 'react';

interface WorkImage {
  src: string;
  title: string;
  description: string;
}

function ImgWorkSection() {
  // Memoize work images data to prevent recalculation
  const workImages = useMemo((): WorkImage[] => [
    {
      src: 'https://picsum.photos/400/300',
      title: 'Development Environment',
      description: 'Professional coding workspace with multiple monitors and modern development tools',
    },
    {
      src: 'https://picsum.photos/400/300',
      title: 'Multi-Monitor Setup',
      description: 'Efficient workflow with multiple screens for enhanced productivity',
    },
    {
      src: 'https://picsum.photos/400/300',
      title: 'Team Collaboration',
      description: 'Working closely with team members in a modern office environment',
    },
    {
      src: 'https://picsum.photos/400/300',
      title: 'Interactive Prototyping',
      description: 'Testing and prototyping with tactile interfaces and hardware integration',
    },
    {
      src: 'https://picsum.photos/400/300',
      title: 'Code Development',
      description: 'Deep focus coding sessions with ChatGPT assistance and modern development tools',
    },
    {
      src: 'https://picsum.photos/400/300',
      title: 'Research & Development',
      description: 'Continuous learning and exploring new technologies in a professional setting',
    },
  ], []);

  return (
    <motion.section id="work-gallery" className="work-gallery-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Work Environment Gallery
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            A glimpse into my professional workspace and development environment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workImages.map((image, index) => (
            <motion.div
              key={index}
              className="work-image-card group relative overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                <p className="text-sm opacity-90">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            This is where the magic happens - creating innovative solutions in a professional environment
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(ImgWorkSection);