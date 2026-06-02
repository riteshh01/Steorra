import React from 'react'
import { Mail, Phone, MapPin, Share, Heart, Code } from 'lucide-react'

const links = {
  Services: ['Placements', 'Trading Services', 'HR Courses', 'Digital Marketing', 'Consulting'],
  Learning: ['Course Catalog', 'Webinars', 'Resources', 'Community', 'Blog'],
  Company: ['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-max py-16 md:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="font-serif text-2xl font-bold mb-2">STEORRA</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premier consultancy and training partner for growth-oriented professionals.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="p-3 rounded-lg bg-white/10 hover:bg-teal-600 transition-all duration-300 group"
                aria-label="Share"
              >
                <Share size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-white/10 hover:bg-teal-600 transition-all duration-300 group"
                aria-label="Follow"
              >
                <Heart size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-white/10 hover:bg-teal-600 transition-all duration-300 group"
                aria-label="Code"
              >
                <Code size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-serif font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="font-serif font-bold text-white mb-4">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:hello@steorra.com"
                className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors group"
              >
                <Mail size={18} className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm">hello@steorra.com</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors group"
              >
                <Phone size={18} className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Copyright and extra links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Steorra Consultants Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
