'use client'

import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'

import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  gap?: number
  pauseOnHover?: boolean
  direction?: 'left' | 'right'
  className?: string
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 40,
  gap = 48,
  pauseOnHover = true,
  direction = 'left',
  className = '',
}) => {
  const controls = useAnimation()

  const startAnimation = () => {
    controls.start({
      x: direction === 'left' ? [0, '-50%'] : ['-50%', 0],
      transition: {
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
      },
    })
  }

  useEffect(() => {
    startAnimation()
  }, [speed, direction, controls])

  return (
    <div
      className={cn('relative flex overflow-hidden select-none', className)}
      onMouseEnter={() => pauseOnHover && controls.stop()}
      onMouseLeave={() => pauseOnHover && startAnimation()}
    >
      <motion.div
        className='flex min-w-full shrink-0 items-center justify-start'
        style={{ gap: `${gap}px` }}
        animate={controls}
      >
        {/* Render children twice for seamless loop */}
        {children}
        {children}
      </motion.div>
    </div>
  )
}
