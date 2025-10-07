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
  hero_layout?: { key: string; value: string }
  hero_headline?: string
  hero_subheadline?: string
  hero_description?: string
  hero_image?: CosmicImage | null
  hero_image_prompt?: string | null
  hero_image_alt?: string | null
  hero_overlay?: Overlay
  hero_decorative_elements?: CosmicImage[] | null
  hero_decorative_prompts?: string | null
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
  features_headline?: string | null
  features_subheadline?: string | null
  features_layout?: { key: string; value: string }
  feature_items?: FeatureItem[] | Record<string, never>
}

// Gallery section metadata
export interface GallerySection {
  gallery_enabled?: boolean
  gallery_title?: string | null
  gallery_subtitle?: string | null
  gallery_layout?: { key: string; value: string }
  gallery_images?: CosmicImage[] | null
  gallery_prompts?: string | null
  gallery_captions?: { text: string; link?: string }[] | Record<string, never>
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
  testimonials_headline?: string | null
  testimonials_subheadline?: string | null
  testimonials_layout?: { key: string; value: string }
  testimonials_items?: TestimonialItem[] | Record<string, never>
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
  stats_title?: string | null
  stats_background?: CosmicImage | null
  stats_background_prompt?: string | null
  stats_overlay?: Overlay | Record<string, never>
  stats_items?: StatItem[] | Record<string, never>
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
  cta_blocks?: CTABlock[] | Record<string, never>
}

// Logo wall section metadata
export interface LogosSection {
  logos_enabled?: boolean
  logos_title?: string
  logos_style?: { key: string; value: string }
  company_logos?: CosmicImage[] | null
  logo_prompts?: string | null
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
  floating_shapes?: CosmicImage[] | null
  shape_prompts?: string | null
  shape_positions?: ShapePosition[] | Record<string, never>
  pattern_overlays?: CosmicImage[] | null
  pattern_prompts?: string | null
}

// Mobile settings metadata
export interface MobileSettings {
  mobile_hero_image?: CosmicImage | null
  mobile_hero_prompt?: string | null
  mobile_hidden_sections?: string[] | null
}

// Animation settings metadata
export interface AnimationSettings {
  scroll_animations_enabled?: boolean
  animation_style?: { key: string; value: string }
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
  footer_style?: { key: string; value: string }
  footer_logo?: CosmicImage | null
  footer_logo_prompt?: string | null
  footer_tagline?: string | null
  footer_description?: string | null
  footer_columns?: FooterColumn[] | Record<string, never>
  footer_social?: SocialLink[] | Record<string, never>
  newsletter_enabled?: boolean
  newsletter_headline?: string | null
  newsletter_description?: string | null
}

// Visual style guide metadata
export interface StyleGuide {
  primary_style?: { key: string; value: string }
  color_temperature?: { key: string; value: string }
  lighting_preference?: { key: string; value: string }
  prompt_suffix?: string
  brand_keywords?: string
}

// Complete landing page metadata
export interface LandingPageMetadata {
  page_title?: string
  meta_description?: string
  og_image?: CosmicImage | null
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