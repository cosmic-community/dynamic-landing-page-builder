'use client'

import { motion } from 'framer-motion'
import { optimizeImage } from '@/lib/utils'
import type { CTABlock as CTABlockType } from '@/lib/types'
import Button from '../ui/Button'
import AnimatedSection from '../ui/AnimatedSection'

interface CTABlockProps {
  data: CTABlockType
}

export default function CTABlock({ data }: CTABlockProps) {
  const backgroundImage = data.background_image
  
  return (
    <section className="relative py-20 overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={optimizeImage(backgroundImage, { w: 2400, h: 800, fit: 'crop', auto: 'format,compress' })}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
        </div>
      )}
      
      <AnimatedSection className="relative z-10 section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          {data.headline}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
        >
          {data.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {data.buttons.map((button, index) => (
            <Button
              key={index}
              href={button.url}
              variant={button.style}
            >
              {button.text}
            </Button>
          ))}
        </motion.div>
      </AnimatedSection>
    </section>
  )
}