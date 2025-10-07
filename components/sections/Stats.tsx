'use client'

import { motion } from 'framer-motion'
import { optimizeImage, safeJSONParse } from '@/lib/utils'
import type { StatsSection, StatItem } from '@/lib/types'
import AnimatedSection from '../ui/AnimatedSection'

interface StatsProps {
  data: StatsSection
}

export default function Stats({ data }: StatsProps) {
  const items = safeJSONParse<StatItem[]>(data.stats_items, [])
  const backgroundImage = data.stats_background?.imgix_url
  
  if (!items || items.length === 0) {
    return null
  }
  
  const overlayStyle = data.stats_overlay ? {
    background: data.stats_overlay.type === 'gradient'
      ? `linear-gradient(${data.stats_overlay.direction || '135deg'}, ${data.stats_overlay.colors?.join(', ') || ''})`
      : data.stats_overlay.colors?.[0] || 'rgba(0,0,0,0.7)',
    opacity: data.stats_overlay.opacity || 0.7,
  } : { background: 'rgba(0,0,0,0.7)' }
  
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={optimizeImage(backgroundImage, { w: 2400, h: 800, fit: 'crop', auto: 'format,compress' })}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={overlayStyle} />
        </div>
      )}
      
      <AnimatedSection className="relative z-10 section-container">
        {data.stats_title && (
          <h2 className="section-title text-white text-center mb-12">
            {data.stats_title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {item.icon && (
                <img
                  src={optimizeImage(item.icon, { w: 128, h: 128, auto: 'format,compress' })}
                  alt=""
                  className="w-16 h-16 mx-auto mb-4"
                />
              )}
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {item.number}
              </div>
              <div className="text-xl text-white/90 font-semibold mb-2">
                {item.label}
              </div>
              {item.description && (
                <p className="text-white/70">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}