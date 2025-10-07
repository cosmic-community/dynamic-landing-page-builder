'use client'

import { motion } from 'framer-motion'
import { optimizeImage, ensureArray } from '@/lib/utils'
import type { TestimonialsSection } from '@/lib/types'
import AnimatedSection from '../ui/AnimatedSection'

interface TestimonialsProps {
  data: TestimonialsSection
}

export default function Testimonials({ data }: TestimonialsProps) {
  // Ensure testimonials_items is an array
  const testimonials = ensureArray(data.testimonials_items)
  
  if (testimonials.length === 0) {
    return null
  }
  
  const layoutKey = data.testimonials_layout?.key || 'grid'
  
  return (
    <section className="py-20 bg-gray-50">
      <AnimatedSection className="section-container">
        {data.testimonials_headline && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
          >
            {data.testimonials_headline}
          </motion.h2>
        )}
        
        {data.testimonials_subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          >
            {data.testimonials_subheadline}
          </motion.p>
        )}
        
        <div className={`grid gap-8 ${
          layoutKey === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'md:grid-cols-1'
        }`}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              {testimonial.avatar && (
                <img
                  src={optimizeImage(testimonial.avatar, { w: 200, h: 200, fit: 'crop', auto: 'format,compress' })}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mb-4"
                />
              )}
              
              <p className="text-gray-700 italic mb-4">&quot;{testimonial.quote}&quot;</p>
              
              <div className="border-t pt-4">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                
                {testimonial.rating && (
                  <div className="flex mt-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={i < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}