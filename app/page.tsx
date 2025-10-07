import Link from 'next/link'
import { getAllLandingPages } from '@/lib/cosmic'
import type { LandingPage } from '@/lib/types'

export default async function HomePage() {
  const pages = await getAllLandingPages()
  
  if (!pages || pages.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            No Landing Pages Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Create your first landing page in Cosmic CMS to get started.
          </p>
          <a
            href="https://app.cosmicjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Cosmic CMS
          </a>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Landing Page Builder
          </h1>
          <p className="text-lg text-gray-600">
            Choose a landing page to view
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page: LandingPage) => (
            <Link
              key={page.id}
              href={`/${page.slug}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {page.metadata.page_title || page.title}
              </h2>
              <p className="text-gray-600 line-clamp-2">
                {page.metadata.meta_description || 'No description available'}
              </p>
              <div className="mt-4 text-blue-600 font-medium">
                View Page →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}