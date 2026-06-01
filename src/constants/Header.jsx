import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#f8f5f2]/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="text-[#721073]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <span className="font-heading font-bold text-2xl tracking-tight text-gray-900">
            Wema<span className="text-[#721073] font-normal">Nexus</span>
          </span>
        </div>
        </a>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 tracking-wide uppercase">
          
          
          {/* External links - use <a> */}
          <a
            href="https://counselling.wemanexus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#721073] transition-colors"
          >
            Consulting
          </a>
          <a
            href="https://ecommerce.wemanexus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#721073] transition-colors"
          >
            E-Commerce
          </a>
          <a
            href="https://counselling.wemanexus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#721073] transition-colors"
          >
            Counselling
          </a>

        </div>

      </div>
    </nav>
  )
}

export default Header