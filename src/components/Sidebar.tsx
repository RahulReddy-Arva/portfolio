'use client'

import React, { useState, useEffect } from 'react'
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  FolderOpen, 
  Award, 
  Code, 
  Menu, 
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { cn, scrollToSection } from '@/lib/utils'
import { useSidebar } from '@/components/SidebarProvider'
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
]


export default function Sidebar({ className }: SidebarProps) {
  const { isMobileOpen, setIsMobileOpen } = useSidebar()
  const [activeSection, setActiveSection] = useState('about')

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    scrollToSection(sectionId)
    setIsMobileOpen(false)
  }

  useEffect(() => {
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
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection])

  const SidebarContent = () => (
    <div className="h-full flex flex-col backdrop-blur-smooth">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-6 border-b border-gray-200 dark:border-white/10">
        <div className="text-center">
          <div className="relative mx-auto mb-4 w-24 h-24">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-red-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/images/profile.jpg"
                  alt="Rahul Reddy Arva"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          <div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
              Rahul Reddy Arva
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Senior Software Engineer
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              AI Platform Architect | Security & Compliance Leader
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        <div>
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon
            const isActive = activeSection === item.id
            
            return (
              <div key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    'group relative w-full',
                    'flex items-center rounded-lg px-4 py-3',
                    'text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400',
                    'hover:bg-orange-500/10',
                    isActive && 'text-orange-500 dark:text-orange-400 bg-orange-500/20 font-semibold'
                  )}
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                  
                  {isActive && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-r-full" />
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </nav>

    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="glass"
          size="icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="backdrop-blur-xl border border-gray-200 dark:border-white/20 hover:border-orange-500/50"
        >
          {isMobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex fixed left-0 top-0 h-full w-80 glass-sidebar z-40 backdrop-blur-2xl",
          className
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
          
          <aside className="fixed left-0 top-0 h-full w-80 glass-sidebar z-50 md:hidden backdrop-blur-2xl">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  )
}