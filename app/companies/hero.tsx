'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * CompaniesHero Component
 * Cinematic introduction to the Bukky Group ecosystem.
 */
export const CompaniesHero = () => {
  return (
    <section className='relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
          alt='Luxury Corporate Architecture'
          fill
          className='object-cover opacity-60'
          priority
        />
        <div className='absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80' />
        <div className='absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60' />
      </div>

      <div className='container relative z-10 mx-auto px-6 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col items-center gap-8'
        >
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-muted/30 bg-black/40 backdrop-blur-md shadow-2xl'>
            <span className='size-1.5 rounded-full bg-white animate-pulse' />
            <span className='text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300'>
              Strategic Excellence
            </span>
          </div>

          <h1 className='font-serif text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight text-white leading-[1.1]'>
            Defining the <br />
            <span className='italic font-light'>
              Future of Luxury
            </span>
          </h1>

          <p className='max-w-2xl text-lg md:text-xl text-gray-300 font-normal leading-relaxed text-pretty'>
            Bukky Group is more than a collective of businesses. We are a
            visionary movement dedicated to excellence, innovation, and the
            empowerment of individuals through transformative experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
