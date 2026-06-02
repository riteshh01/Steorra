import React from 'react'
import { CheckCircle2, Search, BookOpen, Zap } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Discovery',
    description:
      'Understand your goals, learning style, and current expertise level through our comprehensive assessment.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Learn',
    description:
      'Access structured courses with real-world examples, live sessions, and interactive learning modules.',
    icon: BookOpen,
  },
  {
    id: 3,
    title: 'Practice',
    description:
      'Apply your knowledge through hands-on projects, assignments, and live trading/marketing simulations.',
    icon: Zap,
  },
  {
    id: 4,
    title: 'Succeed',
    description:
      'Get certified, receive job placement assistance, or launch your consulting services with our support.',
    icon: CheckCircle2,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="section-subtitle">
            A structured path to achieving your professional goals
          </p>
        </div>

        {/* Steps with connectors */}
        <div className="relative">
          {/* Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-500 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.id} className="relative animate-fade-in">
                  {/* Step Number Circle */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold shadow-lg">
                      {step.id}
                      <Icon className="absolute w-8 h-8 opacity-30" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="font-serif text-xl font-bold text-navy-950 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop (between steps) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-8 text-teal-500">
                      <svg
                        className="w-8 h-8"
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
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
