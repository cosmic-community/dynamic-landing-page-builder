'use client'

import { applyBrandColors, isHiddenOnMobile, ensureArray } from '@/lib/utils'
import type { LandingPageMetadata } from '@/lib/types'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Stats from './sections/Stats'
import CTABlock from './sections/CTABlock'
import LogoWall from './sections/LogoWall'
import Footer from './sections/Footer'

interface LandingPageBuilderProps {
  data: LandingPageMetadata
}

export default function LandingPageBuilder({ data }: LandingPageBuilderProps) {
  const brandStyles = applyBrandColors(data.brand_colors)
  
  // Ensure cta_blocks is an array
  const ctaBlocks = ensureArray(data.cta_sections?.cta_blocks)
  
  return (
    <div style={brandStyles} className="min-h-screen">
      {/* Hero Section */}
      {data.hero_section?.hero_enabled && (
        <Hero data={data.hero_section} />
      )}
      
      {/* Features Section */}
      {data.feature_sections?.features_enabled && (
        <Features data={data.feature_sections} />
      )}
      
      {/* Gallery Section */}
      {data.gallery_section?.gallery_enabled && 
        !isHiddenOnMobile('gallery', data.mobile_settings?.mobile_hidden_sections) && (
        <Gallery data={data.gallery_section} />
      )}
      
      {/* Testimonials Section */}
      {data.testimonials_section?.testimonials_enabled && (
        <Testimonials data={data.testimonials_section} />
      )}
      
      {/* Stats Section */}
      {data.stats_section?.stats_enabled && 
        !isHiddenOnMobile('stats', data.mobile_settings?.mobile_hidden_sections) && (
        <Stats data={data.stats_section} />
      )}
      
      {/* CTA Blocks */}
      {ctaBlocks.map((cta, index) => (
        <CTABlock key={index} data={cta} />
      ))}
      
      {/* Logo Wall Section */}
      {data.logos_section?.logos_enabled && 
        !isHiddenOnMobile('logos', data.mobile_settings?.mobile_hidden_sections) && (
        <LogoWall data={data.logos_section} />
      )}
      
      {/* Footer */}
      {data.footer && (
        <Footer data={data.footer} />
      )}
    </div>
  )
}