'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// Components
import Sidebar from '@/components/Sidebar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'

// Dynamically import heavy components to improve initial load
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const EducationSection = dynamic(() => import('@/components/sections/EducationSection'), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />
})

const CertificationsSection = dynamic(() => import('@/components/sections/CertificationsSection'), {
  loading: () => <div className="h-64 bg-white animate-pulse" />
})

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
})

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="md:ml-80">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Education Section */}
        <EducationSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Certifications Section */}
        <CertificationsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  )
}