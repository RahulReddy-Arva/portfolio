'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of North Carolina at Charlotte',
    location: 'Charlotte, NC',
    duration: '2016 - 2017',
    gpa: '3.6',
    description: 'Advanced coursework in software engineering, data structures, algorithms, and computer systems. Focus on enterprise software development and system architecture.',
    highlights: [
      'Advanced Software Engineering',
      'Data Structures & Algorithms',
      'Database Systems',
      'Computer Networks',
      'Software Project Management',
      'Machine Learning Fundamentals'
    ],
    link: 'https://www.uncc.edu/',
    color: 'from-blue-500 to-blue-600'
  },
  {
    degree: 'Bachelor of Technology in Computer Science Engineering',
    institution: 'St. Martin\'s Engineering College',
    location: 'Hyderabad, India',
    duration: '2012 - 2016',
    gpa: '3.85',
    description: 'Comprehensive foundation in computer science fundamentals, programming languages, and software development methodologies.',
    highlights: [
      'Object-Oriented Programming',
      'Data Structures',
      'Operating Systems',
      'Computer Graphics',
      'Software Engineering',
      'Web Technologies'
    ],
    link: 'http://www.smec.ac.in/',
    color: 'from-green-500 to-green-600'
  }
]

const academicAchievements = [
  {
    title: 'Academic Excellence',
    description: 'Maintained high GPA throughout both degree programs',
    icon: Award,
    metric: '3.6+ GPA'
  },
  {
    title: 'Research Focus',
    description: 'Conducted research in software engineering and system optimization',
    icon: GraduationCap,
    metric: 'Multiple Projects'
  },
  {
    title: 'International Education',
    description: 'Cross-cultural academic experience across India and United States',
    icon: MapPin,
    metric: '2 Countries'
  }
]

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-black smooth-transition">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strong academic foundation in computer science with international experience 
            and focus on practical software engineering.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 last:mb-0"
            >
              <Card className="card-hover group overflow-hidden bg-white dark:bg-black border-gray-200 dark:border-gray-800 smooth-transition">
                <div className={`h-2 bg-gradient-to-r ${edu.color}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 bg-gradient-to-br ${edu.color} rounded-lg`}>
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-xl text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                          {edu.degree}
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(edu.link, '_blank')}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {edu.institution}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Key Coursework & Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, hlIndex) => (
                        <motion.span
                          key={highlight}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: hlIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="skill-tag"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Academic Highlights
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {academicAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 card-hover bg-white dark:bg-black border-gray-200 dark:border-gray-800 smooth-transition">
                    <IconComponent className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {achievement.description}
                    </p>
                    <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
                      {achievement.metric}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Education Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="inline-block p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700 max-w-3xl">
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Continuous Learning Philosophy
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My educational journey has instilled a passion for continuous learning and innovation. 
              I believe that strong academic fundamentals, combined with practical industry experience, 
              create the foundation for solving complex engineering challenges and driving technological advancement.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}