'use client'

import { motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Brand {
  name: string
  logo: string
  link: string
  cardColor: string
}

interface LogoOrbitProps {
  brands: Brand[]
}

export function LogoOrbit({ brands }: LogoOrbitProps) {
  // We'll limit to 8 brands for the orbit as per the design reference
  const orbitBrands = brands.slice(0, 8)
  const [radius, setRadius] = useState(380)

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(175)
      } else if (window.innerWidth < 1024) {
        setRadius(280)
      } else {
        setRadius(380)
      }
    }

    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  return (
    <div className='relative size-[400px] sm:size-[650px] lg:size-[850px] flex items-center justify-center'>
      {/* Connecting Chain / Orbit Path Backdrop */}
      <div className='absolute inset-0 rounded-full border-2 sm:border-4 border-dashed border-zinc-500/20 scale-95' />

      {/* Central Hub Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 15, stiffness: 100 }}
        className='relative z-20 size-28 sm:size-48 lg:size-80 flex items-center justify-center'
      >
        <div className='relative size-full flex flex-col items-center justify-center gap-1 sm:gap-2'>
          <NextImage
            src='/bukkyflower2.png'
            alt='Bukky Group Logo'
            width={300}
            height={300}
            className='w-12 sm:w-24 lg:w-55 object-contain'
          />
          <div className='text-center space-y-1 sm:space-y-2 font-cinzel'>
            <span className='block text-lg sm:text-3xl lg:text-6xl uppercase font-extrabold tracking-[0.2em] text-white leading-tight'>
              Bukky Group
            </span>
            <span className='block text-[8px] sm:text-sm lg:text-base uppercase tracking-[0.4em] text-white/80 font-medium'>
              Of Companies
            </span>
          </div>
        </div>
      </motion.div>

      {/* Orbiting Brands */}
      {orbitBrands.map((brand, index) => {
        const total = orbitBrands.length
        const angle = (index / total) * (2 * Math.PI) - Math.PI / 2 // Start from top

        // Use CSS variables for position to avoid reactive issues with radius
        const x = radius * Math.cos(angle)
        const y = radius * Math.sin(angle)

        return (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x,
              y,
            }}
            transition={{
              delay: 0.2 + index * 0.1,
              type: 'spring',
              stiffness: 50,
            }}
            className='absolute z-30'
          >
            <Link href={brand.link} className='group relative block'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='flex flex-col items-center gap-2'
              >
                {/* Brand Name Text */}
                <div className='flex items-center justify-center transition-all group-hover:scale-110 text-center max-w-[100px] sm:max-w-[200px] lg:max-w-[250px]'>
                  <span className='font-cinzel text-[10px] sm:text-lg lg:text-2xl font-black uppercase tracking-[0.2em] text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]'>
                    {brand.name}
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        )
      })}

      {/* Rotating Background Ring */}
      {/* Rotating Background Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className='absolute pointer-events-none flex items-center justify-center'
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      >
        <svg viewBox='0 0 100 100' className='size-full opacity-40'>
          <circle
            cx='50'
            cy='50'
            r='50'
            fill='none'
            stroke='currentColor'
            strokeWidth='0.3'
            strokeDasharray='1 6'
            className='text-brand-teal'
          />
        </svg>
      </motion.div>
    </div>
  )
}
