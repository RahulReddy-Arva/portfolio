'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github, ExternalLink, Send } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rahulreddy.arva55@gmail.com',
    href: 'mailto:rahulreddy.arva55@gmail.com',
    description: 'Send me an email for professional inquiries',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rarva',
    href: 'https://linkedin.com/in/rarva',
    description: 'Connect with me on LinkedIn',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'RahulReddy-Arva',
    href: 'https://github.com/rahulreddy-arva',
    description: 'Check out my code repositories',
    color: 'from-gray-500 to-gray-600'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco Bay Area, CA',
    href: '#',
    description: 'Available for local and remote opportunities',
    color: 'from-green-500 to-green-600'
  }
]

const availability = [
  {
    type: 'Full-time Opportunities',
    status: 'Open to discussions',
    description: 'Senior engineering roles in AI platforms, security, and enterprise solutions'
  },
  {
    type: 'Consulting Projects',
    status: 'Available',
    description: 'SOC 2 compliance, security audits, and system architecture consulting'
  },
  {
    type: 'Speaking Engagements',
    status: 'Interested',
    description: 'Tech talks on AI platforms, security compliance, and enterprise architecture'
  }
]

export default function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="contact" className="py-24 bg-gray-900 dark:bg-gray-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to architect your next breakthrough solution? I bring proven expertise in AI platforms, 
            enterprise security, and scalable system design. Let's discuss how we can drive measurable 
            impact for your organization.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            
            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 card-hover group backdrop-blur-xl">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      animate={{ 
                        scale: hoveredCard === index ? 1.1 : 1,
                        rotate: hoveredCard === index ? 5 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className={`p-3 bg-gradient-to-br ${method.color} rounded-xl mx-auto mb-4 w-fit`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <CardTitle className="text-white text-lg mb-2">
                      {method.label}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-300 text-sm">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    {method.href !== '#' ? (
                      <Button
                        variant="ghost"
                        onClick={() => window.open(method.href, method.href.startsWith('http') ? '_blank' : '_self')}
                        className="text-white hover:text-orange-400 hover:bg-white/5 w-full justify-center"
                      >
                        <span className="truncate mr-2">{method.value}</span>
                        {method.href.startsWith('http') && <ExternalLink className="w-4 h-4" />}
                      </Button>
                    ) : (
                      <div className="text-white text-sm">
                        {method.value}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Current Availability
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {availability.map((item, index) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 bg-white/5 border-white/10 hover:bg-white/10 card-hover backdrop-blur-xl">
                  <h4 className="font-semibold text-white mb-2">
                    {item.type}
                  </h4>
                  <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm mb-3">
                    {item.status}
                  </div>
                  <p className="text-gray-300 text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Card className="inline-block p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30 max-w-2xl">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Connect?
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Whether you're looking to build next-generation AI platforms, implement enterprise security, 
              or architect scalable systems, I'd love to discuss how we can work together to achieve your goals.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => window.open('mailto:rahulreddy.arva55@gmail.com', '_self')}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </motion.div>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <div className="flex items-center gap-4">
              {contactMethods.slice(0, 3).map((method, index) => {
                const IconComponent = method.icon
                
                return (
                  <motion.button
                    key={method.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.open(method.href, method.href.startsWith('http') ? '_blank' : '_self')}
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5 text-gray-300 hover:text-white" />
                  </motion.button>
                )
              })}
            </div>
          </div>
          
          <div className="text-sm text-gray-400 space-y-2">
            <p>&copy; 2025 Rahul Reddy Arva. Professional Portfolio</p>
            <p>Senior Software Engineer | AI Platform Architect | Security & Compliance Leader</p>
            <p className="text-xs">
              Specializing in enterprise solutions, scalable system architecture, and security compliance
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}