'use client'

import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  fallback?: string
  name?: string
}

export function ImageWithFallback({ src, alt, className, fallback, name }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = () => {
    if (fallback) {
      setImgSrc(fallback)
    } else if (name) {
      setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=0891b2&color=fff&bold=true`)
    } else {
      setImgSrc('https://via.placeholder.com/400?text=Image')
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  )
}
