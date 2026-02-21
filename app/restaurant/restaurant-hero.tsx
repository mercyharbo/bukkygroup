'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RiInstagramFill } from 'react-icons/ri'

export const RestaurantHero = () => {
  return (
    <section className='relative w-full h-[80vh] md:h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black'>
      {/* Background Cinematic Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/foods/foodie (4).jpg'
          alt='3S Restaurant Ambiance'
          fill
          className='object-cover opacity-50 scale-105 animate-subtle-zoom'
          priority
        />
        <div className='absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black' />
      </div>

      <div className='container mx-auto px-5 lg:px-10 relative z-10'>
        <div className='max-w-4xl mx-auto text-center space-y-10'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-white text-lg md:text-xl italic max-w-2xl mx-auto'
          >
            Experience the pinnacle of culinary excellence where legend meets
            luxury on every plate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex flex-col items-center gap-8 pt-4'
          >
            <div className='flex flex-wrap items-center justify-center gap-6'>
              <Button
                variant='outline'
                className='rounded-none px-12 py-7 bg-transparent border-white text-white hover:bg-white hover:text-black transition-all text-xs uppercase tracking-widest'
                asChild
              >
                <Link href='#menu'>View Menu</Link>
              </Button>
              <Button
                className='rounded-none px-12 py-7 bg-white text-black hover:bg-white/90 transition-all text-xs uppercase tracking-widest'
                asChild
              >
                <Link href='#booking'>Book Experience</Link>
              </Button>
            </div>

            <Link
              href='https://www.instagram.com/3srestuarant/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 text-white hover:text-gray-300 transition-colors group'
            >
              <RiInstagramFill className='size-6 translate-y-[-1px]' />
              <span className='text-xs uppercase tracking-widest font-bold border-b border-transparent group-hover:border-white transition-all'>
                @3srestuarant
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4'
      >
        <div className='w-px h-12 bg-linear-to-b from-white to-transparent' />
        <span className='text-[10px] uppercase tracking-widest text-white font-bold'>
          The Journey
        </span>
      </motion.div>
    </section>
  )
}
