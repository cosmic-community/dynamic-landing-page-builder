// app/[slug]/page.tsx
import { Metadata } from 'next'
import { getLandingPage, getAllLandingPages } from '@/lib/cosmic'
import LandingPageBuilder from '@/components/LandingPageBuilder'
import type { LandingPage } from '@/lib/types'

export async function generateStaticParams() {
  const pages = await getAllLandingPages()
  return pages.map((page: LandingPage) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const page = await getLandingPage(slug)
  
  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }
  
  return {
    title: page.metadata.page_title || page.title,
    description: page.metadata.meta_description,
    openGraph: {
      images: page.metadata.og_image?.imgix_url ? [page.metadata.og_image.imgix_url] : [],
    },
  }
}

export default async function LandingPageRoute({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const page = await getLandingPage(slug)
  
  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600">
            The landing page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    )
  }
  
  return <LandingPageBuilder data={page.metadata} />
}