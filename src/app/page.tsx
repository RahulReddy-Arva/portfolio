'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Components
import Sidebar from '@/components/Sidebar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SidebarProvider } from '@/components/SidebarProvider'
import { ErrorBoundary, SectionErrorBoundary } from '@/components/ErrorBoundary'
import { SectionSkeleton } from '@/components/LoadingSpinner'

// Dynamically import heavy components with better loading states
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'), {
  loading: () => (
    <div className="p-6 bg-white dark:bg-black">
      <SectionSkeleton className="h-96" />
    </div>
  ),
  ssr: false
})

const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  loading: () => (
    <div className="p-6 bg-gray-50 dark:bg-gray-900">
      <SectionSkeleton className="h-96" />
    </div>
  ),
  ssr: false
})

const EducationSection = dynamic(() => import('@/components/sections/EducationSection'), {
  loading: () => (
    <div className="p-6 bg-white dark:bg-black">
      <SectionSkeleton className="h-64" />
    </div>
  ),
  ssr: false
})

const CertificationsSection = dynamic(() => import('@/components/sections/CertificationsSection'), {
  loading: () => (
    <div className="p-6 bg-gray-50 dark:bg-gray-900">
      <SectionSkeleton className="h-64" />
    </div>
  ),
  ssr: false
})

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => (
    <div className="p-6 bg-gray-900 dark:bg-black">
      <SectionSkeleton className="h-96" />
    </div>
  ),
  ssr: false
})

export default function HomePage() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <SidebarProvider>
          <div className="relative min-h-screen">
            {/* Sidebar */}
            <ErrorBoundary>
              <Sidebar />
            </ErrorBoundary>
            
            {/* Main Content */}
            <MainContent />
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

function MainContent() {
  return (
    <main className="md:ml-80 transition-none">
      {/* Hero Section */}
      <SectionErrorBoundary sectionName="Hero">
        <HeroSection />
      </SectionErrorBoundary>
      
      {/* About Section */}
      <SectionErrorBoundary sectionName="About">
        <AboutSection />
      </SectionErrorBoundary>
      
      {/* Experience Section */}
      <SectionErrorBoundary sectionName="Experience">
        <ExperienceSection />
      </SectionErrorBoundary>
      
      {/* Skills Section */}
      <SectionErrorBoundary sectionName="Skills">
        <Suspense fallback={
          <div className="p-6 bg-white dark:bg-black">
            <SectionSkeleton className="h-96" />
          </div>
        }>
          <SkillsSection />
        </Suspense>
      </SectionErrorBoundary>
      
      {/* Education Section */}
      <SectionErrorBoundary sectionName="Education">
        <Suspense fallback={
          <div className="p-6 bg-white dark:bg-black">
            <SectionSkeleton className="h-64" />
          </div>
        }>
          <EducationSection />
        </Suspense>
      </SectionErrorBoundary>
      
      {/* Projects Section */}
      <SectionErrorBoundary sectionName="Projects">
        <Suspense fallback={
          <div className="p-6 bg-gray-50 dark:bg-gray-900">
            <SectionSkeleton className="h-96" />
          </div>
        }>
          <ProjectsSection />
        </Suspense>
      </SectionErrorBoundary>
      
      {/* Certifications Section */}
      <SectionErrorBoundary sectionName="Certifications">
        <Suspense fallback={
          <div className="p-6 bg-gray-50 dark:bg-gray-900">
            <SectionSkeleton className="h-64" />
          </div>
        }>
          <CertificationsSection />
        </Suspense>
      </SectionErrorBoundary>
      
      {/* Contact Section */}
      <SectionErrorBoundary sectionName="Contact">
        <Suspense fallback={
          <div className="p-6 bg-gray-900 dark:bg-black">
            <SectionSkeleton className="h-96" />
          </div>
        }>
          <ContactSection />
        </Suspense>
      </SectionErrorBoundary>
    </main>
  )
}