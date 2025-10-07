import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
})

export async function getLandingPage(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'landing-pages',
        slug: slug,
      })
      .props('id,slug,title,metadata')
      .depth(1)
    
    return response.object
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && (error as { status: number }).status === 404) {
      return null
    }
    throw new Error('Failed to fetch landing page')
  }
}

export async function getAllLandingPages() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'landing-pages',
      })
      .props('id,slug,title,metadata')
    
    return response.objects
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'status' in error && (error as { status: number }).status === 404) {
      return []
    }
    throw new Error('Failed to fetch landing pages')
  }
}