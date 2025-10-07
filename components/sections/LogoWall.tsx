'use client'

import { motion } from 'framer-motion'
import { optimizeImage } from '@/lib/utils'
import type { LogosSection } from '@/lib/types'
import AnimatedSection from '../ui/AnimatedSection'

interface LogoWallProps {
  data: LogosSection
}

export default function LogoWall({ data }: LogoWallProps) {
  const logos = data.company_logos || []
  
  if (!logos || logos.length === 0) {
    return null
  }
  
  return (
    <AnimatedSection className="section-container bg-gray-50">
      {data.logos_title && (
        <h2 className="section-title text-center mb-12">
          {data.logos_title}
        </h2>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src={optimizeImage(logo.imgix_url, { w: 400, h: 200, fit: 'crop', auto: 'format,compress' })}
              alt=""
              className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            />
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}