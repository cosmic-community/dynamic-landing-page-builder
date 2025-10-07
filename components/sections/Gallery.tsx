'use client'

import { motion } from 'framer-motion'
import { optimizeImage, ensureArray } from '@/lib/utils'
import type { GallerySection } from '@/lib/types'
import AnimatedSection from '../ui/AnimatedSection'

interface GalleryProps {
  data: GallerySection
}

export default function Gallery({ data }: GalleryProps) {
  // Ensure gallery_images and gallery_captions are arrays
  const images = ensureArray(data.gallery_images)
  const captions = ensureArray(data.gallery_captions)
  
  if (images.length === 0) {
    return null
  }
  
  const layoutKey = data.gallery_layout?.key || 'grid-3'
  
  const gridCols = layoutKey === 'grid-4' 
    ? 'md:grid-cols-2 lg:grid-cols-4'
    : 'md:grid-cols-2 lg:grid-cols-3'
  
  return (
    <section className="py-20">
      <AnimatedSection className="section-container">
        {data.gallery_title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
          >
            {data.gallery_title}
          </motion.h2>
        )}
        
        {data.gallery_subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          >
            {data.gallery_subtitle}
          </motion.p>
        )}
        
        <div className={`grid gap-4 ${gridCols}`}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg group"
            >
              <img
                src={optimizeImage(image, { w: 1200, h: 800, fit: 'crop', auto: 'format,compress' })}
                alt={captions[index]?.text || `Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {captions[index]?.text && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">
                    {captions[index].text}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}