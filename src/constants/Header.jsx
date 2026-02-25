
import React from 'react'

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#f8f5f2]/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
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

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 tracking-wide uppercase">
          <a href="#research" className="hover:text-[#721073] transition-colors">Research</a>
          <a href="#consulting" className="hover:text-[#721073] transition-colors">Consulting</a>
          <a href="#ecommerce" className="hover:text-[#721073] transition-colors">E-Commerce</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#portal" className="bg-[#721073] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#5a0c5b] transition-colors flex items-center gap-2 shadow-lg shadow-[#721073]/20">
            Client Portal
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
