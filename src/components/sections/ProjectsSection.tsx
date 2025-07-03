'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe, Database, Brain, ShoppingCart, Heart, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Book Recommendation System',
    description: 'Developed a system to give recommendations based on item-item similarity like Amazon recommendation system. Input data set is of one million entries and gives top-k recommendations for each user, with a web interface to show recommendations.',
    icon: Brain,
    category: 'Machine Learning',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Web Interface', 'Recommendation Engine'],
    link: 'https://sites.google.com/view/bookspot/home',
    github: 'https://github.com/RahulReddy-Arva/Book-Recommendation-System',
    features: [
      'Item-item collaborative filtering',
      'Processing 1M+ data entries',
      'Top-k recommendations',
      'Interactive web interface'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Agile Times - Time Tracking Platform',
    description: 'Developed an Angular 4 web application for project time tracking using PrimeNG components. Implemented Alexa skillset for voice-controlled time entry and GraphQL backend integration.',
    icon: BarChart3,
    category: 'Full-Stack Development',
    technologies: ['Angular 4', 'PrimeNG', 'GraphQL', 'AWS Lambda', 'Alexa Skills', 'Firebase'],
    link: 'https://fir-mutation.firebaseapp.com/#/dashboard',
    github: 'https://github.com/RahulReddy-Arva/NestCam',
    features: [
      'Time sheet management',
      'Voice-controlled entry via Alexa',
      'GraphQL mutations',
      'Real-time data synchronization'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Novant Health Care System',
    description: 'Developed a comprehensive healthcare portal using servlets and JSP where patients, pharmacists, and doctors can register and interact. Hosted on AWS with complete booking and prescription management.',
    icon: Heart,
    category: 'Healthcare Platform',
    technologies: ['Java', 'JSP', 'Servlets', 'AWS', 'MySQL', 'Healthcare Integration'],
    github: 'https://github.com/RahulReddy-Arva/Novant-Health-System',
    features: [
      'Patient booking system',
      'Doctor prescription management',
      'Pharmacy integration',
      'AWS cloud deployment'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Online Shoe Store E-commerce',
    description: 'Full-featured e-commerce web application with comprehensive business functions including deals of the day, multiple payment methods, cart management, and admin access.',
    icon: ShoppingCart,
    category: 'E-commerce',
    technologies: ['Java', 'JSP', 'MySQL', 'E-commerce', 'Payment Gateway', 'Admin Panel'],
    link: 'https://www.youtube.com/watch?v=ABwKMrmJIpo',
    github: 'https://github.com/RahulReddy-Arva/Shoe-Store',
    features: [
      'Complete shopping cart functionality',
      'Multiple payment methods',
      'Daily deals management',
      'User authentication & admin panel'
    ],
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'YouTube React App',
    description: 'Developed a React application that replicates YouTube functionality using YouTube Data v3 API for video data retrieval and playback capabilities.',
    icon: Globe,
    category: 'Media Platform',
    technologies: ['React', 'YouTube API', 'JavaScript', 'API Integration', 'Video Streaming'],
    github: 'https://github.com/RahulReddy-Arva/React-Youtube-App',
    features: [
      'YouTube API integration',
      'Video search and playback',
      'Responsive design',
      'React component architecture'
    ],
    color: 'from-red-500 to-red-600'
  },
  {
    title: 'San Francisco Crime Data Analysis',
    description: 'Comprehensive crime data analysis project that predicts top crime locations and times based on crime categories, and classifies crime categories based on time and location data.',
    icon: BarChart3,
    category: 'Data Analytics',
    technologies: ['Python', 'Data Analysis', 'Machine Learning', 'Predictive Modeling', 'Visualization'],
    link: 'https://sites.google.com/view/sfcda/home',
    github: 'https://github.com/RahulReddy-Arva/San-Fransisco-Crime-Analysis',
    features: [
      'Crime location prediction',
      'Time-based pattern analysis',
      'Category classification',
      'Data visualization dashboard'
    ],
    color: 'from-indigo-500 to-indigo-600'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A showcase of diverse projects spanning machine learning, full-stack development, 
            healthcare platforms, and data analytics.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift group overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 bg-gradient-to-br ${project.color} rounded-lg`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {project.category}
                        </div>
                        <CardTitle className="text-lg text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                    
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Key Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={feature} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-2 pt-2">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.github, '_blank')}
                          className="flex-1"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      )}
                      
                      {project.link && (
                        <Button
                          size="sm"
                          onClick={() => window.open(project.link, '_blank')}
                          className={`flex-1 bg-gradient-to-r ${project.color} text-white hover:opacity-90`}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Project Categories Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="inline-block p-8 bg-gradient-to-br from-gray-50 to-blue-50 border-blue-200 max-w-4xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Project Portfolio Highlights
            </h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              My project portfolio demonstrates versatility across multiple domains, from machine learning 
              and data analytics to full-stack development and enterprise healthcare solutions. Each project 
              showcases different aspects of modern software development and problem-solving approaches.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Technologies Used', count: '25+' },
                { label: 'Project Categories', count: '6' },
                { label: 'Years of Development', count: '6+' },
                { label: 'Live Deployments', count: '4' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {stat.count}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}