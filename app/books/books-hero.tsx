'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RiInstagramFill } from 'react-icons/ri'

export const BooksHero = () => {
  return (
    <section className='relative w-full h-[80vh] md:h-screen min-h-[700px] flex items-center justify-center bg-white overflow-hidden'>
      {/* Background Subtle Elements */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] select-none'>
          <p className='text-[30vh] font-serif italic text-black whitespace-nowrap leading-none'>
            Bukky Anny Bukky Anny Bukky Anny
          </p>
        </div>
      </div>

      <div className='container mx-auto px-5 lg:px-10 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-16 lg:gap-24'>
          {/* Text Content */}
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='space-y-4'
            >
              <span className='text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold'>
                New Release
              </span>
              <h1 className='font-cinzel text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[0.9]'>
                NEW <br />
                RELEASES
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='max-w-md space-y-6'
            >
              <div className='space-y-2'>
                <p className='text-xl md:text-2xl font-serif italic text-primary'>
                  VISIONARY LEADER & AUTHOR
                </p>
              </div>
              <p className='text-gray-500 text-base md:text-lg leading-relaxed text-pretty'>
                The creative force behind the Bukky Group, embarking on a
                literary journey to empower the next generation of modern
                royalty through stories of excellence and legacy.
              </p>

              <div className='flex flex-col items-center lg:items-start gap-8'>
                <Button
                  variant='outline'
                  className='rounded-none px-12 py-6 bg-transparent border-black text-black hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest'
                >
                  Buy Now
                </Button>

                <Link
                  href='https://www.instagram.com/3sbooks/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 text-black hover:text-primary transition-colors group'
                >
                  <RiInstagramFill className='size-6 translate-y-[-1px]' />
                  <span className='text-xs uppercase tracking-widest font-bold border-b border-transparent group-hover:border-primary transition-all'>
                    @3sbooks
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Book Image Spotlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='relative aspect-3/4 w-full max-w-[450px] mx-auto order-1 lg:order-2 group'
          >
            <div className='absolute inset-0 bg-primary/5 -rotate-6 transition-transform group-hover:rotate-0 duration-700' />
            <div className='absolute inset-0 bg-black/5 rotate-3 transition-transform group-hover:rotate-0 duration-700' />
            <div className='relative w-full h-full shadow-2xl overflow-hidden'>
              <Image
                src='/books.jpeg'
                alt='There is something about Mira'
                fill
                className='object-cover'
                priority
              />
            </div>
            {/* Signature Accent */}
            <div className='absolute -bottom-10 -right-10 hidden md:block'>
              <p className='font-serif italic text-4xl text-primary opacity-60 rotate-[-15deg]'>
                Bukky Anny
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
