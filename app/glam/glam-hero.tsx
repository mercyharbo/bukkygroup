'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RiPaletteFill, RiStarFill } from 'react-icons/ri'

/**
 * GlamHero Component
 * Refined asymmetric layout inspired by Aura Beauty UI.
 */
export const GlamHero = () => {
  return (
    <section className='relative w-full min-h-screen py-20 pt-38 flex items-center bg-black overflow-hidden'>
      {/* Decorative Background Glow */}
      <div className='absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] rounded-full pointer-events-none' />

      <div className='container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10'>
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-10'
        >
          <div className='space-y-4'>
            <span className='text-sm font-medium tracking-[0.4em] text-gray-500 uppercase'>
              3S Faceglam
            </span>
            <h1 className='text-5xl md:text-6xl lg:text-6xl font-medium text-white tracking-tighter leading-tight'>
              Unleash <span className='italic'>Inner Glow</span> with <br />
              <span className='text-white'>Faceglam Artistry.</span>
            </h1>
            <p className='max-w-xl text-gray-400 text-base font-normal leading-relaxed text-pretty'>
              Professional makeup artistry designed to bring out your natural
              radiance. Bridal, Soft Glam, Matric Dance, and Editorial
              excellence.
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-6'>
            <Button
              size='xl'
              asChild
              className='bg-white text-black hover:bg-white/90 transition-all px-12 h-16 rounded-full font-medium'
            >
              <Link href='/glam/bookings'>Book your look</Link>
            </Button>

            <div className='flex items-center -space-x-4'>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className='size-12 rounded-full border-2 border-black overflow-hidden bg-gray-900'
                >
                  <Image
                    src={`https://i.pravatar.cc/150?u=${i + 10}`}
                    alt={`Client ${i}`}
                    width={48}
                    height={48}
                    className='object-cover'
                  />
                </div>
              ))}
              <div className='pl-6 flex flex-col'>
                <span className='text-white font-medium text-sm'>500+</span>
                <span className='text-gray-500 text-xs'>Happy Clients</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Visual Frame */}
        <div className='relative flex justify-center lg:justify-end'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='relative'
          >
            {/* Main Image Frame (Arched/Circular) */}
            <div className='relative w-[300px] h-[450px] md:w-[450px] md:h-[600px] rounded-t-full overflow-hidden border-8 border-white/10'>
              <Image
                src='https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop'
                alt='Professional makeup portrait'
                fill
                className='object-cover'
                priority
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent' />
            </div>

            {/* Floating Makeup Icons inspired by reference */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className='absolute -top-6 -left-12 size-24 bg-gray-900/50 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white shadow-2xl'
            >
              <RiPaletteFill className='size-10' />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className='absolute bottom-24 -right-8 size-20 bg-gray-900/50 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl'
            >
              <RiStarFill className='size-8' />
            </motion.div>

            {/* Accent Shapes */}
            <div className='absolute -z-10 -bottom-8 -left-8 size-32 border-2 border-white/10 rounded-full' />
            <div className='absolute -z-10 top-12 -right-12 size-64 border-2 border-white/5 rounded-full' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
