'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  FolderOpen, 
  Award, 
  Code, 
  Mail, 
  Menu, 
  X,
  ExternalLink,
  MapPin,
  Github,
  Linkedin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn, scrollToSection } from '@/lib/utils'
import Image from 'next/image'

interface SidebarProps {
  className?: string
}

const navigationItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'contact', label: 'Connect', icon: Mail },
]

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:rahulreddy.arva55@gmail.com',
    icon: Mail,
    value: 'rahulreddy.arva55@gmail.com'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rarva',
    icon: Linkedin,
    value: 'linkedin.com/in/rarva'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rahulreddy-arva',
    icon: Github,
    value: 'RahulReddy-Arva'
  },
  {
    label: 'Location',
    href: '#',
    icon: MapPin,
    value: 'San Francisco Bay Area'
  }
]

export default function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="relative mx-auto mb-4 w-24 h-24">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-red-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl font-bold text-orange-600 backdrop-blur-sm">
                RA
              </div>
            </div>
          </div>
          
          <h1 className="text-xl font-bold text-white mb-1">
            Rahul Reddy Arva
          </h1>
          <p className="text-sm text-gray-300 mb-2">
            Senior Software Engineer
          </p>
          <p className="text-xs text-gray-400">
            AI Platform Architect | Security & Compliance Leader
          </p>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    'nav-link w-full',
                    isActive && 'active'
                  )}
                >
                  <IconComponent className="w-4 h-4 mr-3" />
                  <span>{item.label}</span>
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </nav>

      {/* Social Links */}
      <div className="p-4 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-3"
        >
          <h3 className="text-sm font-semibold text-gray-300 mb-3">
            Connect
          </h3>
          
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                {link.href !== '#' ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-2 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 group"
                  >
                    <IconComponent className="w-3 h-3 mr-2 group-hover:text-orange-400" />
                    <span className="truncate">{link.value}</span>
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                ) : (
                  <div className="flex items-center p-2 text-xs text-gray-400">
                    <IconComponent className="w-3 h-3 mr-2" />
                    <span className="truncate">{link.value}</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="p-4">
        <Button
          onClick={() => handleNavClick('contact')}
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium transition-all duration-300 hover:scale-105"
        >
          <Mail className="w-4 h-4 mr-2" />
          Get in Touch
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="glass"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </Button>

      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden md:flex fixed left-0 top-0 h-full w-80 glass-sidebar z-40",
        className
      )}>
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-80 glass-sidebar z-50 md:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}