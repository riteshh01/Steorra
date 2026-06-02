import React from 'react'
import {
  Briefcase,
  TrendingUp,
  BookOpen,
  Users,
  Megaphone,
  BarChart3,
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Placement Services',
    description:
      'Connecting job seekers with opportunities and businesses with top talent.',
    icon: Briefcase,
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
  },
  {
    id: 2,
    title: 'Share Market Trading Services',
    description: 'Personalized trading solutions and expert portfolio management.',
    icon: TrendingUp,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 3,
    title: 'Share Market Courses',
    description: 'Expert-led strategies and analysis for all experience levels.',
    icon: BarChart3,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 4,
    title: 'HR Courses',
    description: 'Specialized training in talent management and employee engagement.',
    icon: Users,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 5,
    title: 'Digital Marketing Services',
    description: 'Performance-driven campaigns and brand building.',
    icon: Megaphone,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    id: 6,
    title: 'Digital Marketing Courses',
    description: 'Training in the latest marketing tools and techniques.',
    icon: BookOpen,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="section-title mb-4">Our Expertise</h2>
          <p className="section-subtitle">
            Comprehensive solutions designed to elevate your career and business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-xl p-8 border border-gray-200 shadow-subtle hover:shadow-medium transition-all duration-300 hover:border-teal-200 hover:-translate-y-2 animate-fade-in overflow-hidden"
              >
                {/* Background accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${service.bgColor} opacity-0 group-hover:opacity-100 rounded-full -z-10 transition-opacity duration-300 blur-2xl`}
                ></div>

                {/* Icon Container */}
                <div
                  className={`mb-6 w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-navy-950 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
