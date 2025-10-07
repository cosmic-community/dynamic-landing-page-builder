'use client'

import { optimizeImage, safeJSONParse } from '@/lib/utils'
import type { FooterSection, FooterColumn, SocialLink } from '@/lib/types'

interface FooterProps {
  data: FooterSection
}

export default function Footer({ data }: FooterProps) {
  const columns = safeJSONParse<FooterColumn[]>(data.footer_columns, [])
  const socialLinks = safeJSONParse<SocialLink[]>(data.footer_social, [])
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Footer Logo and Description */}
          <div className="lg:col-span-1">
            {data.footer_logo && (
              <img
                src={optimizeImage(data.footer_logo.imgix_url, { w: 400, h: 200, auto: 'format,compress' })}
                alt="Logo"
                className="h-10 mb-4"
              />
            )}
            {data.footer_tagline && (
              <p className="font-semibold mb-2">{data.footer_tagline}</p>
            )}
            {data.footer_description && (
              <p className="text-gray-400 text-sm">{data.footer_description}</p>
            )}
          </div>
          
          {/* Footer Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        {data.newsletter_enabled && (
          <div className="mb-8 p-6 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">
              {data.newsletter_headline || 'Subscribe to our newsletter'}
            </h3>
            <p className="text-gray-400 mb-4">
              {data.newsletter_description || 'Get the latest updates'}
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        )}
        
        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon && (
                  <img
                    src={optimizeImage(social.icon, { w: 64, h: 64, auto: 'format,compress' })}
                    alt={social.platform}
                    className="w-6 h-6"
                  />
                )}
              </a>
            ))}
          </div>
        )}
        
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-800">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}