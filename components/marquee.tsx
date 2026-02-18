'use client'

import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'

import { cn } from '@/lib/utils'

interface MarqueeItem {
  text: string
  link?: string
}

interface MarqueeProps {
  items: MarqueeItem[]
  speed?: number
  className?: string
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  speed = 40,
  className = '',
}) => {
  const controls = useAnimation()

  // Duplicate items to ensure seamless loop
  const duplicatedItems = [...items, ...items]

  useEffect(() => {
    controls.start({
      x: [0, '-50%'],
      transition: {
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
      },
    })
  }, [speed, controls])

  return (
    <div
      className={cn(
        'relative flex overflow-hidden bg-primary py-4 select-none',
        className,
      )}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          x: [0, '-50%'],
          transition: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        })
      }
    >
      <motion.div
        className='flex min-w-full shrink-0 items-center justify-around gap-12'
        animate={controls}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className='flex shrink-0 items-center gap-4 text-sm font-bold tracking-widest text-white uppercase md:text-base'
          >
            {item.link ? (
              <a
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
            <span className='size-1.5 rounded-full bg-white/40' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
