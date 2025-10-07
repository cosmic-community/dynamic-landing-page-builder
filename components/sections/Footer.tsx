'use client'

import { optimizeImage, ensureArray } from '@/lib/utils'
import type { FooterSection } from '@/lib/types'

interface FooterProps {
  data: FooterSection
}

export default function Footer({ data }: FooterProps) {
  // Ensure footer_columns and footer_social are arrays
  const columns = ensureArray(data.footer_columns)
  const socialLinks = ensureArray(data.footer_social)
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            {data.footer_logo && (
              <img
                src={optimizeImage(data.footer_logo, { w: 400, h: 200, fit: 'max', auto: 'format,compress' })}
                alt="Logo"
                className="h-12 mb-4"
              />
            )}
            {data.footer_tagline && (
              <p className="font-bold mb-2">{data.footer_tagline}</p>
            )}
            {data.footer_description && (
              <p className="text-sm text-gray-400">{data.footer_description}</p>
            )}
          </div>
          
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {socialLinks.length > 0 && (
          <div className="border-t border-gray-800 pt-8 flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.platform}
              </a>
            ))}
          </div>
        )}
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}