'use client'

import { motion } from 'framer-motion'
import { optimizeImage, ensureArray } from '@/lib/utils'
import type { StatsSection } from '@/lib/types'
import AnimatedSection from '../ui/AnimatedSection'

interface StatsProps {
  data: StatsSection
}

export default function Stats({ data }: StatsProps) {
  // Ensure stats_items is an array
  const stats = ensureArray(data.stats_items)
  
  if (stats.length === 0) {
    return null
  }
  
  const backgroundImage = data.stats_background
  
  return (
    <section className="relative py-20 overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={optimizeImage(backgroundImage, { w: 2400, h: 800, fit: 'crop', auto: 'format,compress' })}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      
      <AnimatedSection className="relative z-10 section-container">
        {data.stats_title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white"
          >
            {data.stats_title}
          </motion.h2>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-white/90 font-medium">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-sm text-white/70 mt-1">
                  {stat.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}