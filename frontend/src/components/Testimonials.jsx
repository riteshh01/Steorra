import React, { useState } from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../assets/assets'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const displayTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
    testimonials[(activeIndex + 2) % testimonials.length],
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-stone-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="section-title mb-4">Success Stories</h2>
          <p className="section-subtitle">
            Hear from our students and clients who've transformed their careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {displayTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="bg-white rounded-lg p-8 border border-gray-200 shadow-subtle hover:shadow-medium transition-all duration-300 animate-fade-in"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote size={24} className="text-teal-500/20 mb-4" />

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mb-2"
                />
                <h4 className="font-serif font-bold text-navy-950">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-xs text-teal-600 font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg border-2 border-gray-300 hover:border-teal-500 hover:bg-teal-50 transition-colors"
            aria-label="Previous testimonials"
          >
            <svg
              className="w-6 h-6 text-navy-950"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-teal-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-lg border-2 border-gray-300 hover:border-teal-500 hover:bg-teal-50 transition-colors"
            aria-label="Next testimonials"
          >
            <svg
              className="w-6 h-6 text-navy-950"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
