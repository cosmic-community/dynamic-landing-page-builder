'use client'

import { motion } from 'framer-motion'
import { optimizeImage, parsePrompts, safeJSONParse } from '@/lib/utils'
import type { GallerySection } from '@/lib/types'
import AnimatedSection from '../ui/AnimatedSection'

interface GalleryProps {
  data: GallerySection
}

export default function Gallery({ data }: GalleryProps) {
  const layout = data.gallery_layout || 'Grid 3 Column'
  const images = data.gallery_images || []
  const prompts = parsePrompts(data.gallery_prompts)
  const captions = safeJSONParse<{ text: string; link?: string }[]>(data.gallery_captions, [])
  
  if (!images || images.length === 0) {
    return null
  }
  
  const getLayoutClasses = () => {
    switch (layout) {
      case 'Masonry':
        return 'columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4'
      case 'Grid 3 Column':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
      case 'Grid 4 Column':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
      case 'Carousel':
        return 'flex overflow-x-auto gap-4 snap-x snap-mandatory'
      case 'Bento Box':
        return 'grid grid-cols-2 md:grid-cols-4 gap-4'
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
    }
  }
  
  return (
    <AnimatedSection className="section-container bg-gray-50">
      <div className="text-center mb-12">
        {data.gallery_title && (
          <h2 className="section-title">{data.gallery_title}</h2>
        )}
        {data.gallery_subtitle && (
          <p className="section-subtitle">{data.gallery_subtitle}</p>
        )}
      </div>
      
      <div className={getLayoutClasses()}>
        {images.map((image, index) => {
          const caption = captions[index]
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={optimizeImage(image.imgix_url, { w: 1200, h: 900, fit: 'crop', auto: 'format,compress' })}
                alt={caption?.text || ''}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              
              {caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">
                    {caption.text}
                  </p>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </AnimatedSection>
  )
}