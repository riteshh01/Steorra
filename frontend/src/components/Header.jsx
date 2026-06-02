import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? 'backdrop-blur-md shadow-soft bg-white/90' // Scroll karne par thoda white/blur taaki text visible rahe
          : 'bg-transparent' // Initial background transparent
      }`}
    >
      <nav className="container-max flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home" className="flex items-center group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">S</span>
              </div>
              <h1 className="font-serif text-2xl md:text-2xl font-bold text-navy-950 group-hover:text-teal-600 transition-colors">
                STEORRA
              </h1>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-10">
          <a
            href="#services"
            className="text-gray-700 font-medium hover:text-teal-600 transition-colors relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#courses"
            className="text-gray-700 font-medium hover:text-teal-600 transition-colors relative group"
          >
            Courses
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#why-us"
            className="text-gray-700 font-medium hover:text-teal-600 transition-colors relative group"
          >
            Why Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="#cta" className="btn-primary">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-navy-950" />
          ) : (
            <Menu size={24} className="text-navy-950" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-medium animate-fade-in">
          <div className="container-max py-4 flex flex-col gap-4">
            <a
              href="#services"
              onClick={closeMenu}
              className="text-gray-700 font-medium hover:text-teal-600 py-2 transition-colors"
            >
              Services
            </a>
            <a
              href="#courses"
              onClick={closeMenu}
              className="text-gray-700 font-medium hover:text-teal-600 py-2 transition-colors"
            >
              Courses
            </a>
            <a
              href="#why-us"
              onClick={closeMenu}
              className="text-gray-700 font-medium hover:text-teal-600 py-2 transition-colors"
            >
              Why Us
            </a>
            <a href="#cta" onClick={closeMenu} className="btn-primary block text-center">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}