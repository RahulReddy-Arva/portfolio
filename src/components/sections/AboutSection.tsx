'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Shield, TrendingUp, Users, Building, Award, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const highlights = [
  {
    icon: Brain,
    title: 'AI Platform Architecture',
    description: 'Currently architecting core platform features at Findem\'s talent intelligence platform, building scalable solutions that serve enterprise customers with dynamic attribute libraries and robust data pipelines.',
    stats: '99.9% reliability'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Led SOC 2 Type II certification processes, conducted penetration testing, and established ongoing security programs. Expert in OAuth2, Kerberos, LDAP, SAML, and PCI DSS compliance.',
    stats: 'SOC 2 certified'
  },
  {
    icon: TrendingUp,
    title: 'Scale & Performance',
    description: 'Modernized systems serving 6,000+ retail locations, optimized high-throughput messaging platforms, and improved transaction reliability with measurable performance gains up to 40%.',
    stats: '40% improvement'
  },
  {
    icon: Users,
    title: 'Cross-functional Leadership',
    description: 'Bridge engineering, product, and security teams to deliver enterprise-grade solutions. Experienced in mentoring junior engineers and collaborating with stakeholders across organizations.',
    stats: '8+ engineers mentored'
  }
]

const achievements = [
  {
    icon: Building,
    value: '3',
    label: 'Fortune 500 Companies',
    description: 'Findem, TIBCO, Walmart'
  },
  {
    icon: Target,
    value: '6K+',
    label: 'Retail Locations',
    description: 'Global impact at scale'
  },
  {
    icon: Award,
    value: '10M+',
    label: 'Daily Messages',
    description: 'High-throughput systems'
  },
  {
    icon: Shield,
    value: '99.9%',
    label: 'System Uptime',
    description: 'Enterprise reliability'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
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
            Professional Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Senior Software Engineer with <span className="font-semibold text-orange-600">6+ years</span> of proven expertise in building scalable AI-driven platforms, 
            enterprise messaging systems, and secure financial technologies.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">
                          {highlight.title}
                        </CardTitle>
                        <div className="text-sm font-semibold text-orange-600">
                          {highlight.stats}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Key Impact Metrics
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measurable results across enterprise environments and high-scale systems
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover-lift group">
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-orange-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm font-semibold text-orange-600 mb-2">
                      {achievement.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {achievement.description}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="inline-block p-8 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Something Extraordinary?
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl">
              I bring proven expertise in AI platforms, enterprise security, and scalable system design. 
              Let's discuss how we can drive measurable impact for your organization.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Connect
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}