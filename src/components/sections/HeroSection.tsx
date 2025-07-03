'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden animated-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Profile Image */}
            <div className="relative mx-auto mb-8 w-32 h-32 md:w-40 md:h-40">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/5 p-1 backdrop-blur-sm border border-white/20 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
                  RA
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow">
              <span className="block">Rahul Reddy</span>
              <span className="block bg-gradient-to-r from-orange-200 to-white bg-clip-text text-transparent">
                Arva
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
              Senior Software Engineer
            </p>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI Platform Architect | Security & Compliance Leader | Enterprise Solutions Expert
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              {[
                { value: '6+', label: 'Years Experience' },
                { value: '3', label: 'Fortune 500 Companies' },
                { value: '6K+', label: 'Retail Locations Impacted' },
                { value: '99.9%', label: 'System Reliability' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/70">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Card className="glass-card px-4 py-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-300" />
              <span className="text-white text-sm">rahulreddy.arva55@gmail.com</span>
            </Card>
            
            <Card className="glass-card px-4 py-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-300" />
              <span className="text-white text-sm">San Francisco Bay Area</span>
            </Card>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              size="lg"
              className="bg-white text-gray-900 hover:bg-white/90 font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            
            <Button
              variant="glass"
              size="lg"
              className="font-semibold px-8 py-3"
              onClick={() => {
                // This would typically link to a resume PDF
                console.log('Download resume clicked')
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center"
          >
            <p className="text-white/60 text-sm mb-4">Scroll to explore</p>
            <button
              onClick={scrollToNext}
              className="text-white/80 hover:text-white transition-colors duration-300 animate-bounce"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
    </section>
  )
}