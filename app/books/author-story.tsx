'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const AuthorStory = () => {
  return (
    <section className='w-full py-24 md:py-32 bg-black'>
      <div className='container mx-auto px-5 lg:px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center'>
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='space-y-8 md:space-y-12'
          >
            <div className='space-y-6'>
              <h2 className='font-cinzel text-xs uppercase tracking-[0.4em] text-gray-400 font-bold'>
                About the Author
              </h2>
              <h3 className='font-cinzel text-4xl md:text-5xl font-black text-white leading-tight'>
                BUKKY ANNY: STORIES OF <br />
                <span className='italic font-serif font-normal text-primary'>
                  LOVE, LAUGHTER, AND LEGACY.
                </span>
              </h3>
            </div>

            <div className='space-y-6 max-w-xl'>
              <p className='text-gray-400 text-lg leading-relaxed'>
                Bukky Anny is the creative force and visionary leader of the
                Bukky Group—a multi-faceted empire dedicated to prestige,
                education, and community empowerment.
              </p>
              <p className='text-gray-400 text-lg leading-relaxed'>
                Her journey began with a mission to bridge the gap between
                traditional African heritage and the global stage of luxury.
                Through 3S Books, she explores the intersection of modern
                royalty and timeless craftsmanship.
              </p>
            </div>

            <Button
              variant='outline'
              className='rounded-none px-12 py-6 bg-transparent border-white text-white hover:bg-white hover:text-black transition-all text-xs uppercase tracking-widest'
            >
              Full Story
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='relative aspect-[4/5] w-full overflow-hidden shadow-2xl'>
              <Image
                src='/bukky-pic1.png'
                alt='Sonali Dev Portrait'
                fill
                className='object-cover'
              />
            </div>
            {/* Minimalist Border Accent */}
            <div className='absolute -top-6 -right-6 bottom-6 left-6 border-2 border-primary/20 pointer-events-none -z-10' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
