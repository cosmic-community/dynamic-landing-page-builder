/**
 * Parses a multi-line string of prompts into an array
 */
export function parsePrompts(promptsText?: string): string[] {
  if (!promptsText) return []
  return promptsText
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
}

/**
 * Safely parses JSON metadata fields
 */
export function safeJSONParse<T>(data: unknown, fallback: T): T {
  if (!data) return fallback
  if (typeof data === 'object') return data as T
  if (typeof data === 'string') {
    try {
      return JSON.parse(data) as T
    } catch {
      return fallback
    }
  }
  return fallback
}

/**
 * Generates optimized imgix URL for images
 */
export function optimizeImage(
  imgixUrl: string,
  options: {
    w?: number
    h?: number
    fit?: 'crop' | 'cover' | 'fill'
    auto?: string
  } = {}
): string {
  const params = new URLSearchParams()
  
  if (options.w) params.append('w', options.w.toString())
  if (options.h) params.append('h', options.h.toString())
  if (options.fit) params.append('fit', options.fit)
  if (options.auto) params.append('auto', options.auto)
  
  const separator = imgixUrl.includes('?') ? '&' : '?'
  return `${imgixUrl}${separator}${params.toString()}`
}

/**
 * Applies brand colors as CSS custom properties
 */
export function applyBrandColors(colors?: {
  primary?: string
  secondary?: string
  accent?: string
  background?: string
}): Record<string, string> {
  if (!colors) return {}
  
  return {
    '--brand-primary': colors.primary || '#FF6B35',
    '--brand-secondary': colors.secondary || '#004E89',
    '--brand-accent': colors.accent || '#F7B801',
    '--brand-background': colors.background || '#FFFFFF',
  }
}

/**
 * Checks if a section should be hidden on mobile
 */
export function isHiddenOnMobile(
  section: string,
  hiddenSections?: string[]
): boolean {
  if (!hiddenSections) return false
  return hiddenSections.includes(section)
}