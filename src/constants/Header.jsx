import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
]

const externalLinks = [
  { href: "https://research.wemanexus.com/", label: "Research" },
  { href: "https://ecommerce.wemanexus.com/", label: "E-Commerce" },
  { href: "https://counselling.wemanexus.com/", label: "Counselling" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path)

  return (
    <nav className="sticky top-0 z-50 bg-[#f8f5f2]/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="text-[#721073]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <span className="font-heading font-bold text-2xl tracking-tight text-gray-900">
            Wema<span className="text-[#721073] font-normal">Nexus</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 tracking-wide uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative pb-1 transition-colors ${
                isActive(link.to) ? "text-[#721073]" : "hover:text-[#721073]"
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-[#721073] rounded-full" />
              )}
            </Link>
          ))}

          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#721073] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-gray-900"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 border-t border-gray-200/50" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 sm:px-6 py-4 gap-1 text-sm font-medium text-gray-700 tracking-wide uppercase bg-[#f8f5f2]">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`py-3 border-b border-gray-200/50 transition-colors ${
                isActive(link.to) ? "text-[#721073] font-semibold" : "hover:text-[#721073]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {externalLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={`py-3 hover:text-[#721073] transition-colors ${
                i < externalLinks.length - 1 ? "border-b border-gray-200/50" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Header