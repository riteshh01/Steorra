import React, { useState } from 'react'
import { Clock, Users, Award, ArrowRight } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'Share Market Trading Masterclass',
    description: 'Master advanced trading strategies and portfolio management',
    duration: '12 weeks',
    students: '450+',
    level: 'Advanced',
    category: 'Trading',
    price: '₹299',
  },
  {
    id: 2,
    title: 'Digital Marketing Pro Bundle',
    description: 'Complete guide to modern digital marketing techniques',
    duration: '8 weeks',
    students: '680+',
    level: 'Intermediate',
    category: 'Marketing',
    price: '₹199',
  },
  {
    id: 3,
    title: 'HR Excellence & Talent Management',
    description: 'Develop expertise in modern HR practices',
    duration: '10 weeks',
    students: '320+',
    level: 'Beginner',
    category: 'HR',
    price: '₹249',
  },
]

export default function FeaturedCourses() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { label: 'All Courses', value: 'all' },
    { label: 'Trading', value: 'Trading' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'HR', value: 'HR' },
  ]

  const filteredCourses =
    selectedCategory === 'all'
      ? courses
      : courses.filter((course) => course.category === selectedCategory)

  return (
    <section id="courses" className="py-20 md:py-28 bg-stone-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="section-title mb-4">Featured Courses</h2>
          <p className="section-subtitle">
            Industry-leading training programs designed by experts
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-white text-navy-950 border-2 border-gray-200 hover:border-teal-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-medium transition-all duration-300 border border-gray-100 hover:border-teal-200 animate-fade-in group"
            >
              {/* Badge */}
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 inline-block m-4 rounded-full text-sm font-medium">
                {course.level}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy-950 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock size={16} className="text-teal-500" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Users size={16} className="text-teal-500" />
                    <span>{course.students} students enrolled</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-navy-950">
                    {course.price}
                  </span>
                  <button className="p-2 rounded-lg bg-teal-500/10 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn-primary inline-block">
            View All Courses
          </a>
        </div>
      </div>
    </section>
  )
}
