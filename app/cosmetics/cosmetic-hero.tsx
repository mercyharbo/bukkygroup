'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

/**
 * CosmeticHero Component
 * Immersive entrance for 3S Cosmetic.
 */
export const CosmeticHero = () => {
  return (
    <section className='relative w-full h-screen min-h-[700px] flex items-center justify-center bg-black overflow-hidden'>
      {/* Cinematic Background */}
      <div className='absolute inset-0 opacity-60'>
        <Image
          src='https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2070&auto=format&fit=crop'
          alt='Botanical Beauty texture'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black' />
      </div>

      <div className='container relative z-10 mx-auto px-6 text-center space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-4'
        >
          <span className='text-sm font-medium tracking-widest text-gray-400'>
            Botanical excellence
          </span>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-none'>
            Elevate your <br /> beauty journey
          </h1>
          <p className='max-w-2xl mx-auto text-gray-100 text-base md:text-lg lg:text-xl font-semibold leading-relaxed text-pretty pt-4'>
            Discover the power of nature through our meticulously crafted
            skincare. Pure ingredients for a radiant, healthy glow that starts
            from within.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className='flex flex-col sm:flex-row items-center justify-center gap-6 pt-8'
        >
          <Button
            size='xl'
            asChild
            className='bg-white text-black hover:bg-white/80 hover:text-black transition-all px-10 h-16 rounded-full font-medium'
          >
            <Link href='#products'>Start browsing</Link>
          </Button>
          <Link
            href='/about'
            className='text-sm font-medium text-white hover:text-gray-400 transition-colors flex items-center gap-2'
          >
            Our story <span>→</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className='absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
      >
        <span className='text-sm font-medium text-gray-400 tracking-widest'>
          Scroll
        </span>
        <div className='w-px h-12 bg-linear-to-b from-gray-400 to-transparent' />
      </motion.div>
    </section>
  )
}
