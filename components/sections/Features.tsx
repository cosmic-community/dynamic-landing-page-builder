'use client'

import { motion } from 'framer-motion'
import { optimizeImage, ensureArray } from '@/lib/utils'
import type { FeaturesSection } from '@/lib/types'
import AnimatedSection from '../ui/AnimatedSection'

interface FeaturesProps {
  data: FeaturesSection
}

export default function Features({ data }: FeaturesProps) {
  // Ensure feature_items is an array
  const features = ensureArray(data.feature_items)
  
  if (features.length === 0) {
    return null
  }
  
  const layoutKey = data.features_layout?.key || 'grid'
  
  return (
    <section className="py-20 bg-gray-50">
      <AnimatedSection className="section-container">
        {data.features_headline && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
          >
            {data.features_headline}
          </motion.h2>
        )}
        
        {data.features_subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          >
            {data.features_subheadline}
          </motion.p>
        )}
        
        <div className={`grid gap-8 ${
          layoutKey === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'md:grid-cols-1'
        }`}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {feature.image && (
                <img
                  src={optimizeImage(feature.image, { w: 800, h: 400, fit: 'crop', auto: 'format,compress' })}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}