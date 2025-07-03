'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Award, TrendingUp, Shield, Code } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const experiences = [
  {
    company: 'Findem',
    role: 'Senior Engineer',
    type: 'AI Talent Intelligence Platform',
    duration: 'Dec 2021 - Present (3+ years)',
    location: 'San Francisco Bay Area',
    logo: '/images/companies/findem.jpg',
    description: 'Building next-generation AI talent intelligence platform serving enterprise customers with advanced search, analytics, and talent insights capabilities.',
    achievements: [
      {
        icon: Code,
        title: 'Platform Architecture',
        description: 'Designed and scaled dynamic attribute library used by all customers, enabling enhanced data insights and decision-making capabilities across the platform'
      },
      {
        icon: TrendingUp,
        title: 'Data Pipeline Excellence',
        description: 'Built robust Python ETL pipelines processing internal REST APIs with 99.9% reliability, supporting complex business requirements and real-time data processing'
      },
      {
        icon: Shield,
        title: 'Security Leadership',
        description: 'Spearheaded SOC 2 Type II certification process, conducted comprehensive penetration tests, and established ongoing security programs ensuring enterprise-grade compliance'
      },
      {
        icon: Award,
        title: 'Performance Optimization',
        description: 'Applied advanced data analysis techniques to optimize feature development and improve platform performance by 35%'
      }
    ],
    technologies: ['Python', 'TypeScript', 'REST APIs', 'Data Engineering', 'ETL Pipelines', 'SOC 2', 'Security Compliance', 'AWS', 'Docker', 'PostgreSQL'],
    link: 'https://findem.ai'
  },
  {
    company: 'TIBCO',
    role: 'Data Virtualization Engineer',
    type: 'Subject Matter Expert - Enterprise Messaging & Data Platform',
    duration: 'Sep 2019 - Dec 2021 (2+ years)',
    location: 'Palo Alto, CA',
    logo: '/images/companies/tibco.jpg',
    description: 'Subject Matter Expert for enterprise messaging and data virtualization solutions, providing advanced engineering support for Fortune 500 clients and high-throughput messaging environments.',
    achievements: [
      {
        icon: TrendingUp,
        title: 'Performance Engineering',
        description: 'Resolved complex scalability challenges on TIBCO Data Virtualization platform, achieving up to 40% improvement in query performance and system throughput'
      },
      {
        icon: Code,
        title: 'Enterprise Messaging SME',
        description: 'Provided tier-3 support for TIBCO EMS, optimizing high-throughput messaging environments processing 10M+ messages daily for enterprise clients'
      },
      {
        icon: Shield,
        title: 'Network Optimization',
        description: 'Conducted deep traffic analysis using Wireshark and Fiddler, resolving critical connectivity issues and reducing message latency by 25%'
      },
      {
        icon: Award,
        title: 'Team Development',
        description: 'Mentored 8+ junior engineers on middleware architecture, enterprise patterns, and customer management best practices'
      }
    ],
    technologies: ['TIBCO Data Virtualization', 'TIBCO EMS', 'Python', 'SQL', 'REST/SOAP APIs', 'Wireshark', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'LDAP', 'Kerberos'],
    link: 'https://tibco.com'
  },
  {
    company: 'Walmart',
    role: 'Software Engineer',
    type: 'Financial Services SME - Point of Sale Systems',
    duration: 'Jun 2018 - Jul 2019 (1+ year)',
    location: 'Bentonville, AR',
    logo: '/images/companies/walmart.jpg',
    description: 'Subject Matter Expert for Walmart\'s Financial Services at Point of Sale across 6,000+ global retail locations, specializing in Money Orders, Check Cashing, Bill Pay, and Money Transfer services.',
    achievements: [
      {
        icon: TrendingUp,
        title: 'Performance Optimization',
        description: 'Led Acxiom integration optimization delivering 2x increase in customer data processing efficiency and improved transaction validation speed'
      },
      {
        icon: Award,
        title: 'Transaction Excellence',
        description: 'Reduced checkout latency by 16% for MoneyCenter services, significantly enhancing customer experience during high-volume financial interactions'
      },
      {
        icon: Shield,
        title: 'Reliability Engineering',
        description: 'Achieved 21% reduction in device failures through comprehensive root cause analysis of debit readers, printers, and handheld scanners'
      },
      {
        icon: Code,
        title: 'Global Scale Impact',
        description: 'Modernized financial service operations affecting 6,000+ retail locations worldwide with improved system reliability and customer experience'
      }
    ],
    technologies: ['IBM 4690', 'Java', 'C/C++', 'JavaScript', 'PCI DSS', 'Verifone', 'Ingenico', 'Cloud Migration', 'Financial Services', 'Payment Processing'],
    link: 'https://walmart.com'
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-black smooth-transition">
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
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Track record of delivering enterprise-grade solutions across AI platforms, 
            messaging systems, and financial technologies.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-32 w-0.5 h-full bg-gradient-to-b from-orange-500 to-red-500 z-0" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10" />
              
              <Card className="ml-16 card-hover group bg-white dark:bg-black border-gray-200 dark:border-gray-800 smooth-transition">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {exp.logo && (
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-white shadow-sm flex-shrink-0">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <CardTitle className="text-2xl text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                          {exp.company}
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(exp.link, '_blank')}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-1">
                        {exp.role}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {exp.type}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed italic mt-4">
                    {exp.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      Key Achievements & Impact
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, achIndex) => {
                        const IconComponent = achievement.icon
                        
                        return (
                          <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors duration-300"
                          >
                            <IconComponent className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                {achievement.title}
                              </h5>
                              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {achievement.description}
                              </p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="skill-tag"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}