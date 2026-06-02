import React from 'react'
import { Users, Award, TrendingUp, Briefcase } from 'lucide-react'

const stats = [
  {
    id: 1,
    label: 'Active Learners',
    value: '5000+',
    icon: Users,
  },
  {
    id: 2,
    label: 'Success Rate',
    value: '98%',
    icon: Award,
  },
  {
    id: 3,
    label: 'Placements',
    value: '2500+',
    icon: Briefcase,
  },
  {
    id: 4,
    label: 'Portfolio Growth',
    value: '35%',
    icon: TrendingUp,
  },
]

export default function Stats() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.id}
                className="text-center p-8 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-400 transition-all duration-300 animate-fade-in"
              >
                <div className="flex justify-center mb-4">
                  <Icon size={32} className="text-teal-600" strokeWidth={1.5} />
                </div>
                <div className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                  {stat.value}
                </div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}