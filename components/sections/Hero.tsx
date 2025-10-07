'use client'

import { motion } from 'framer-motion'
import { optimizeImage } from '@/lib/utils'
import type { HeroSection } from '@/lib/types'
import Button from '../ui/Button'
import AnimatedSection from '../ui/AnimatedSection'

interface HeroProps {
  data: HeroSection
}

export default function Hero({ data }: HeroProps) {
  const layout = data.hero_layout || 'Centered'
  const backgroundImage = data.hero_image?.imgix_url
  
  const overlayStyle = data.hero_overlay ? {
    background: data.hero_overlay.type === 'gradient'
      ? `linear-gradient(${data.hero_overlay.direction || '135deg'}, ${data.hero_overlay.colors?.join(', ') || ''})`
      : data.hero_overlay.colors?.[0] || 'rgba(0,0,0,0.4)',
    opacity: data.hero_overlay.opacity || 0.4,
  } : {}
  
  const getLayoutClasses = () => {
    switch (layout) {
      case 'Centered':
        return 'text-center items-center justify-center'
      case 'Split Left':
        return 'text-left items-start justify-start lg:grid-cols-2'
      case 'Split Right':
        return 'text-left items-start justify-start lg:grid-cols-2'
      case 'Full Overlay':
        return 'text-center items-center justify-center'
      default:
        return 'text-center items-center justify-center'
    }
  }
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={optimizeImage(backgroundImage, { w: 2400, h: 1600, fit: 'crop', auto: 'format,compress' })}
            alt={data.hero_image_alt || ''}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0" style={overlayStyle} />
        </div>
      )}
      
      {/* Content */}
      <AnimatedSection className="relative z-10 w-full">
        <div className={`section-container grid ${getLayoutClasses()}`}>
          <div className="max-w-4xl">
            {data.hero_headline && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                {data.hero_headline}
              </motion.h1>
            )}
            
            {data.hero_subheadline && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                {data.hero_subheadline}
              </motion.p>
            )}
            
            {data.hero_description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/80 mb-8"
                dangerouslySetInnerHTML={{ __html: data.hero_description }}
              />
            )}
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {data.hero_primary_cta && (
                <Button
                  href={data.hero_primary_cta.url}
                  variant="primary"
                >
                  {data.hero_primary_cta.text}
                </Button>
              )}
              
              {data.hero_secondary_cta && (
                <Button
                  href={data.hero_secondary_cta.url}
                  variant="secondary"
                >
                  {data.hero_secondary_cta.text}
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Decorative Elements */}
      {data.hero_decorative_elements && data.hero_decorative_elements.length > 0 && (
        <div className="absolute inset-0 pointer-events-none z-5">
          {data.hero_decorative_elements.map((element, index) => (
            <motion.img
              key={index}
              src={optimizeImage(element.imgix_url, { w: 400, h: 400, auto: 'format,compress' })}
              alt=""
              className="absolute"
              style={{
                top: `${(index * 20) % 80}%`,
                left: `${(index * 30) % 90}%`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          ))}
        </div>
      )}
    </section>
  )
}