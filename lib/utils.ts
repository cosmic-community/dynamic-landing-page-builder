import type { BrandColors } from './types'

export function applyBrandColors(colors?: BrandColors): React.CSSProperties {
  if (!colors) return {}
  
  return {
    '--color-primary': colors.primary,
    '--color-secondary': colors.secondary,
    '--color-accent': colors.accent,
    '--color-background': colors.background,
  } as React.CSSProperties
}

export function isHiddenOnMobile(section: string, hiddenSections?: string[] | null): boolean {
  if (!hiddenSections || !Array.isArray(hiddenSections)) return false
  return hiddenSections.includes(section)
}

interface ImageOptions {
  w?: number
  h?: number
  fit?: 'crop' | 'scale' | 'max' | 'fill'
  auto?: string
}

export function optimizeImage(
  image: string | { imgix_url?: string; url?: string } | null | undefined,
  options: ImageOptions = {}
): string {
  if (!image) return ''
  
  const url = typeof image === 'string' ? image : (image.imgix_url || image.url || '')
  if (!url) return ''
  
  const params = new URLSearchParams()
  if (options.w) params.append('w', options.w.toString())
  if (options.h) params.append('h', options.h.toString())
  if (options.fit) params.append('fit', options.fit)
  if (options.auto) params.append('auto', options.auto)
  
  const queryString = params.toString()
  return queryString ? `${url}?${queryString}` : url
}

/**
 * Ensures a value is an array. Converts empty objects to empty arrays.
 * This handles Cosmic CMS repeater fields that return {} instead of [] when empty.
 */
export function ensureArray<T>(value: T[] | Record<string, never> | null | undefined): T[] {
  if (!value) return []
  if (Array.isArray(value)) return value
  // If it's an empty object {}, return empty array
  if (typeof value === 'object' && Object.keys(value).length === 0) return []
  return []
}