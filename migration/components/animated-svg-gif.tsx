'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AnimatedSvgGifProps {
  svgSrc: string
  gifSrc: string
  transitionTime?: number
  svgTime?: number
  alt: string
  width: number
  height: number
  className?: string
}

export const AnimatedSvgGif = ({
  svgSrc,
  gifSrc,
  alt,
  width,
  height,
  className,
  transitionTime = 10, // default from website
  svgTime = 2100, // default from website
  ...props
}: AnimatedSvgGifProps) => {
  const [isGifActive, setIsGifActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsGifActive(true), svgTime);
    return () => clearTimeout(timer);
  }, [svgTime]);

  return (
    <img
      src={svgSrc}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        'transition-opacity duration-[var(--transition-time)]',
        isGifActive && 'active',
        className
      )}
      style={{
        '--transition-time': `${transitionTime}ms`,
        opacity: 1
      } as React.CSSProperties}
      data-gif={gifSrc}
      data-svg={svgSrc}
      data-transition-time={transitionTime}
      data-svg-time={svgTime}
      {...props}
    />
  )
}

// Usage example:
/*
<AnimatedSvgGif
  svgSrc="/images/Connections-1-frame-end.svg"
  gifSrc="/images/Connections-1.gif"
  alt="Connections animation"
  width={400}
  height={300}
  transitionTime={10}
  svgTime={2100}
/>
*/
