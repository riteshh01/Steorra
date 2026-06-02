import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#fafcff] relative overflow-hidden min-h-[90vh] flex flex-col justify-center"
    >
      {/* 1. Subtle Grid Pattern (Lowest Layer) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 2. Top Right Blue Ambient Glow */}
      <div className="absolute top-10 right-[15%] w-80 h-80 bg-sky-400/30 rounded-full blur-[100px] z-0 animate-pulse"></div>

      {/* 3. Bottom Left Yellow Ambient Glow */}
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-amber-300/30 rounded-full blur-[100px] z-0"></div>

      {/* 4. Main Ambient Green Half-Circle Layer (Moved to Top) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-[1100px] h-[350px] md:h-[450px] bg-gradient-to-b from-emerald-300/40 to-emerald-200/10 rounded-b-[1000px] blur-[2px] border-b border-emerald-100/50 shadow-[0_20px_120px_rgba(52,211,153,0.25)] z-0 pointer-events-none"></div>

      <div className="container-max relative z-10">
        <div className="text-center max-w-4xl mx-auto mt-10 md:mt-16">
          {/* Badge */}
          <div className="mb-8 animate-fade-in inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-emerald-200 rounded-full shadow-sm">
            <Sparkles size={16} className="text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800">Welcome to Excellence in Learning</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 text-balance leading-tight animate-fade-in">
            Empowering Growth in Digital, HR, and Financial Sectors
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 text-balance leading-relaxed max-w-2xl mx-auto animate-fade-in">
            Expert training, premium consulting, and strategic placement services to help
            individuals and businesses thrive in a competitive market.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <a
              href="#services"
              className="px-6 py-3 rounded-md bg-slate-800 text-white font-medium hover:bg-slate-900 transition-colors inline-flex items-center justify-center gap-2 group shadow-lg shadow-slate-900/20"
            >
              Explore Services
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a href="#courses" className="px-6 py-3 rounded-md bg-white/80 backdrop-blur-sm text-slate-700 font-medium hover:bg-white border border-slate-200 transition-colors shadow-sm">
              Browse Courses
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-600 pt-8 animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="text-xl">👥</span>
              <span className="font-medium">5000+ Happy Learners</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <span className="font-medium">98% Success Rate</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span className="font-medium">Expert-Led Training</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}