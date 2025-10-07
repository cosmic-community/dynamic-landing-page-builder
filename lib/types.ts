// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  type: string
  created_at: string
  modified_at: string
}

// Brand colors structure
export interface BrandColors {
  primary: string
  secondary: string
  accent: string
  background: string
}

// Image with imgix URL
export interface CosmicImage {
  url: string
  imgix_url: string
}

// Button/CTA structure
export interface CTAButton {
  text: string
  url: string
  style: 'primary' | 'secondary'
}

// Overlay configuration
export interface Overlay {
  type: 'gradient' | 'solid'
  opacity: number
  colors: string[]
  direction?: string
}

// Hero section metadata
export interface HeroSection {
  hero_enabled?: boolean
  hero_layout?: 'Centered' | 'Split Left' | 'Split Right' | 'Full Overlay'
  hero_headline?: string
  hero_subheadline?: string
  hero_description?: string
  hero_image?: CosmicImage
  hero_image_prompt?: string
  hero_image_alt?: string
  hero_overlay?: Overlay
  hero_decorative_elements?: CosmicImage[]
  hero_decorative_prompts?: string
  hero_primary_cta?: CTAButton
  hero_secondary_cta?: CTAButton
}

// Feature item structure
export interface FeatureItem {
  title: string
  description: string
  image?: string
  image_prompt?: string
  icon?: string
  icon_prompt?: string
}

// Features section metadata
export interface FeaturesSection {
  features_enabled?: boolean
  features_headline?: string
  features_subheadline?: string
  features_layout?: 'Grid' | 'Alternating Image/Text' | 'Centered'
  feature_items?: FeatureItem[]
}

// Gallery section metadata
export interface GallerySection {
  gallery_enabled?: boolean
  gallery_title?: string
  gallery_subtitle?: string
  gallery_layout?: 'Masonry' | 'Grid 3 Column' | 'Grid 4 Column' | 'Carousel' | 'Bento Box'
  gallery_images?: CosmicImage[]
  gallery_prompts?: string
  gallery_captions?: { text: string; link?: string }[]
}

// Testimonial item structure
export interface TestimonialItem {
  quote: string
  author: string
  title: string
  avatar?: string
  avatar_prompt?: string
  rating?: number
}

// Testimonials section metadata
export interface TestimonialsSection {
  testimonials_enabled?: boolean
  testimonials_headline?: string
  testimonials_subheadline?: string
  testimonials_layout?: 'Carousel' | 'Grid' | 'Masonry' | 'Featured'
  testimonials_items?: TestimonialItem[]
}

// Stat item structure
export interface StatItem {
  number: string
  label: string
  description?: string
  icon?: string
  icon_prompt?: string
}

// Stats section metadata
export interface StatsSection {
  stats_enabled?: boolean
  stats_title?: string
  stats_background?: CosmicImage
  stats_background_prompt?: string
  stats_overlay?: Overlay
  stats_items?: StatItem[]
}

// CTA block structure
export interface CTABlock {
  placement: string
  headline: string
  description: string
  buttons: CTAButton[]
  background_image?: string
  background_prompt?: string
}

// CTA sections metadata
export interface CTASections {
  cta_blocks?: CTABlock[]
}

// Logo wall section metadata
export interface LogosSection {
  logos_enabled?: boolean
  logos_title?: string
  logos_style?: 'Grid' | 'Marquee Scroll' | 'Carousel'
  company_logos?: CosmicImage[]
  logo_prompts?: string
}

// Shape position structure
export interface ShapePosition {
  section: string
  x: string
  y: string
  z_index: number
  animation?: string
}

// Decorative elements metadata
export interface DecorativeElements {
  floating_shapes?: CosmicImage[]
  shape_prompts?: string
  shape_positions?: ShapePosition[]
  pattern_overlays?: CosmicImage[]
  pattern_prompts?: string
}

// Mobile settings metadata
export interface MobileSettings {
  mobile_hero_image?: CosmicImage
  mobile_hero_prompt?: string
  mobile_hidden_sections?: string[]
}

// Animation settings metadata
export interface AnimationSettings {
  scroll_animations_enabled?: boolean
  animation_style?: 'Subtle' | 'Dynamic' | 'Minimal' | 'None'
  hover_effects?: boolean
  parallax_enabled?: boolean
}

// Footer link structure
export interface FooterLink {
  text: string
  url: string
}

// Footer column structure
export interface FooterColumn {
  title: string
  links: FooterLink[]
}

// Social link structure
export interface SocialLink {
  platform: string
  url: string
  icon?: string
  icon_prompt?: string
}

// Footer metadata
export interface FooterSection {
  footer_style?: 'Minimal' | 'Full' | 'Newsletter Focus'
  footer_logo?: CosmicImage
  footer_logo_prompt?: string
  footer_tagline?: string
  footer_description?: string
  footer_columns?: FooterColumn[]
  footer_social?: SocialLink[]
  newsletter_enabled?: boolean
  newsletter_headline?: string
  newsletter_description?: string
}

// Visual style guide metadata
export interface StyleGuide {
  primary_style?: 'Photorealistic' | 'Illustration' | '3D Render' | 'Mixed'
  color_temperature?: 'Warm' | 'Cool' | 'Neutral'
  lighting_preference?: 'Natural Light' | 'Studio Lighting' | 'Dramatic' | 'Soft Diffused'
  prompt_suffix?: string
  brand_keywords?: string
}

// Complete landing page metadata
export interface LandingPageMetadata {
  page_title?: string
  meta_description?: string
  og_image?: CosmicImage
  brand_colors?: BrandColors
  hero_section?: HeroSection
  feature_sections?: FeaturesSection
  gallery_section?: GallerySection
  testimonials_section?: TestimonialsSection
  stats_section?: StatsSection
  cta_sections?: CTASections
  logos_section?: LogosSection
  decorative_elements?: DecorativeElements
  mobile_settings?: MobileSettings
  animation_settings?: AnimationSettings
  footer?: FooterSection
  style_guide?: StyleGuide
}

// Landing page object
export interface LandingPage extends CosmicObject {
  type: 'landing-pages'
  metadata: LandingPageMetadata
}