'use client'

import { motion } from 'framer-motion'
import { optimizeImage, safeJSONParse } from '@/lib/utils'
import type { FeaturesSection, FeatureItem } from '@/lib/types'
import AnimatedSection from '../ui/AnimatedSection'

interface FeaturesProps {
  data: FeaturesSection
}

export default function Features({ data }: FeaturesProps) {
  const layout = data.features_layout || 'Grid'
  const items = safeJSONParse<FeatureItem[]>(data.feature_items, [])
  
  if (!items || items.length === 0) {
    return null
  }
  
  const getLayoutClasses = () => {
    switch (layout) {
      case 'Grid':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      case 'Alternating Image/Text':
        return 'space-y-16'
      case 'Centered':
        return 'flex flex-col items-center space-y-12'
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
    }
  }
  
  return (
    <AnimatedSection className="section-container bg-white">
      <div className="text-center mb-12">
        {data.features_headline && (
          <h2 className="section-title">{data.features_headline}</h2>
        )}
        {data.features_subheadline && (
          <p className="section-subtitle">{data.features_subheadline}</p>
        )}
      </div>
      
      <div className={getLayoutClasses()}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            {item.image && (
              <img
                src={optimizeImage(item.image, { w: 800, h: 600, fit: 'crop', auto: 'format,compress' })}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            
            {item.icon && (
              <div className="w-12 h-12 mb-4">
                <img
                  src={optimizeImage(item.icon, { w: 96, h: 96, auto: 'format,compress' })}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            )}
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}