'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ImageIcon, User } from 'lucide-react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackType?: 'icon' | 'placeholder' | 'avatar'
  priority?: boolean
  sizes?: string
  fill?: boolean
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackType = 'icon',
  priority = false,
  sizes,
  fill = false,
}) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleError = () => {
    setError(true)
    setLoading(false)
  }

  const handleLoad = () => {
    setLoading(false)
  }

  const renderFallback = () => {
    const baseClasses = `flex items-center justify-center bg-gray-200 dark:bg-gray-700 ${className}`
    
    switch (fallbackType) {
      case 'avatar':
        return (
          <div className={`${baseClasses} rounded-full`}>
            <User className="h-8 w-8 text-gray-400" />
          </div>
        )
      case 'placeholder':
        return (
          <div className={`${baseClasses} rounded-lg`}>
            <div className="text-center">
              <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500 dark:text-gray-400">Image not available</p>
            </div>
          </div>
        )
      default:
        return (
          <div className={`${baseClasses} rounded-lg`}>
            <ImageIcon className="h-8 w-8 text-gray-400" />
          </div>
        )
    }
  }

  if (error) {
    return renderFallback()
  }

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg ${fill ? 'h-full w-full' : ''}`}>
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${className}`}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        sizes={sizes}
        fill={fill}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh6MVN0U8IpqpP//Z"
      />
    </div>
  )
}

// Company logo component with specific fallback
export const CompanyLogo: React.FC<{
  src: string
  alt: string
  company: string
  className?: string
}> = ({ src, alt, company: _company, className = '' }) => {
  return (
    <ImageWithFallback
      src={src}
      alt={alt}
      width={32}
      height={32}
      className={`w-8 h-8 rounded-full object-contain bg-white shadow-sm ${className}`}
      fallbackType="placeholder"
    />
  )
}

// Profile image component
export const ProfileImage: React.FC<{
  src: string
  alt: string
  className?: string
}> = ({ src, alt, className = '' }) => {
  return (
    <ImageWithFallback
      src={src}
      alt={alt}
      width={200}
      height={200}
      className={`rounded-full object-cover ${className}`}
      fallbackType="avatar"
      priority={true}
    />
  )
}