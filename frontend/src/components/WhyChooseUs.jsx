import React from 'react'
import { CheckCircle, Award, Zap, Target } from 'lucide-react'

const benefits = [
  {
    id: 1,
    title: 'Expert-Led Guidance',
    description: 'Learn from industry veterans with 15+ years of experience.',
    icon: Award,
  },
  {
    id: 2,
    title: 'Tailored Business Solutions',
    description: 'Customized strategies aligned with your specific goals.',
    icon: Target,
  },
  {
    id: 3,
    title: 'Real-World Success Focus',
    description: 'Practical knowledge backed by proven methodologies.',
    icon: Zap,
  },
  {
    id: 4,
    title: 'Comprehensive Training Programs',
    description: 'Structured learning paths for every skill level.',
    icon: CheckCircle,
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-stone-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
              <Award size={16} className="text-teal-600" />
              <span className="text-sm font-medium text-teal-700">
                Why Industry Leaders Choose Us
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-950 mb-6">
              Why Choose Steorra?
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We stand out by combining industry expertise, personalized solutions, and a
              commitment to real-world success. Our team of seasoned professionals is
              dedicated to helping you achieve your goals with proven methodologies and
              continuous support.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10">
              Whether you're looking to advance your career, build your business, or master
              new skills, we provide the guidance and resources you need to succeed in today's
              competitive landscape.
            </p>

            {/* Stats highlight */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-serif text-3xl font-bold text-teal-600 mb-1">
                  500+
                </div>
                <p className="text-sm text-gray-600">Placement Success</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-serif text-3xl font-bold text-teal-600 mb-1">
                  98%
                </div>
                <p className="text-sm text-gray-600">Student Satisfaction</p>
              </div>
            </div>

            {/* CTA */}
            <a href="#contact" className="btn-primary inline-block">
              Get Started Today
            </a>
          </div>

          {/* Right: Benefits List */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.id}
                    className="group flex gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-teal-200 hover:shadow-medium transition-all duration-300 hover:bg-teal-50/30"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Icon
                        size={24}
                        className="text-teal-500 group-hover:scale-110 transition-transform duration-300"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-navy-950 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
