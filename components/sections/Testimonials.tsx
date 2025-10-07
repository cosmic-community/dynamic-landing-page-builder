'use client'

import { motion } from 'framer-motion'
import { optimizeImage, safeJSONParse } from '@/lib/utils'
import type { TestimonialsSection, TestimonialItem } from '@/lib/types'
import AnimatedSection from '../ui/AnimatedSection'

interface TestimonialsProps {
  data: TestimonialsSection
}

export default function Testimonials({ data }: TestimonialsProps) {
  const layout = data.testimonials_layout || 'Grid'
  const items = safeJSONParse<TestimonialItem[]>(data.testimonials_items, [])
  
  if (!items || items.length === 0) {
    return null
  }
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating ? 'text-yellow-400' : 'text-gray-300'
      return { filled, index }
    })
  }
  
  return (
    <AnimatedSection className="section-container bg-white">
      <div className="text-center mb-12">
        {data.testimonials_headline && (
          <h2 className="section-title">{data.testimonials_headline}</h2>
        )}
        {data.testimonials_subheadline && (
          <p className="section-subtitle">{data.testimonials_subheadline}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-6"
          >
            {item.rating && (
              <div className="flex text-yellow-400 mb-4">
                {renderStars(item.rating).map(({ filled, index: starIndex }) => (
                  <svg
                    key={starIndex}
                    className={`w-5 h-5 ${filled}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            )}
            
            <p className="text-gray-700 mb-6 italic">
              "{item.quote}"
            </p>
            
            <div className="flex items-center">
              {item.avatar && (
                <img
                  src={optimizeImage(item.avatar, { w: 128, h: 128, fit: 'crop', auto: 'format,compress' })}
                  alt={item.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
              )}
              <div>
                <p className="font-semibold text-gray-900">{item.author}</p>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}