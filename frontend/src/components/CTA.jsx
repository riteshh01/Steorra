import React from 'react'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-28 bg-gradient-to-r from-navy-950 via-teal-900 to-navy-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl -z-10"></div>

      <div className="container-max text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-lg p-4 rounded-full border border-white/20">
              <Zap size={32} className="text-gold-500" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Career?
          </h2>

          {/* Subheading */}
          <p className="text-lg text-gray-200 mb-10 leading-relaxed">
            Join thousands of professionals who've already elevated their expertise with Steorra.
            Start your journey today and unlock unlimited potential in HR, Trading, or Digital Marketing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-navy-950 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group">
              Get Started Now
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>

          {/* Trust Text */}
          <p className="text-sm text-gray-300 mt-8 pt-8 border-t border-white/20">
            Trusted by 5000+ learners. No credit card required. Start free today.
          </p>
        </div>
      </div>
    </section>
  )
}
