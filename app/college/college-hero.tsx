'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RiInstagramFill } from 'react-icons/ri'

/**
 * CollegeHero Component
 * Inspired by UAB layout with an overlapping central focus card.
 */
export const CollegeHero = () => {
  return (
    <section className='relative w-full flex flex-col items-center bg-white'>
      {/* Top Image Banner */}
      <div className='relative w-full h-[40vh] md:h-[55vh] lg:h-[65vh] overflow-hidden'>
        <Image
          src='https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='3S College Graduation Day'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/30' />
      </div>

      {/* Overlapping Welcome Card - Half-size padding and overlap */}
      <div className='container relative mx-auto px-5 lg:px-10 z-20 -mt-12 md:-mt-16 lg:-mt-24'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-2xl mx-auto'
        >
          <Card className='bg-white rounded-none border-none shadow-xl overflow-hidden'>
            <CardContent className='p-6 md:p-8 lg:p-10 text-center space-y-6 md:space-y-8'>
              <div className='space-y-3'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a4a3e] tracking-tight'>
                  Welcome to 3S College
                </h1>
                <p className='max-w-xl mx-auto text-zinc-600 text-sm md:text-base font-normal leading-relaxed text-pretty'>
                  3S College is a premier Beauty and Fashion College founded
                  under Bukky Group, created to raise a new generation of
                  confident, skilled, and creative professionals in the beauty
                  and fashion industry.
                </p>
              </div>

              <div className='flex flex-wrap items-center justify-center gap-4 md:gap-8'>
                <Link
                  href='#programs'
                  className='text-xs font-semibold uppercase tracking-widest text-[#1a4a3e] hover:text-primary transition-colors flex items-center gap-2'
                >
                  Browse Majors <span>→</span>
                </Link>
                <Link
                  href='#visit'
                  className='text-xs font-semibold uppercase tracking-widest text-[#1a4a3e] hover:text-primary transition-colors flex items-center gap-2'
                >
                  Visit Campus <span>→</span>
                </Link>
                <Link
                  href='/contact'
                  className='text-xs font-semibold uppercase tracking-widest text-[#1a4a3e] hover:text-primary transition-colors flex items-center gap-2'
                >
                  Request Info <span>→</span>
                </Link>
              </div>

              <div className='pt-4 border-t border-zinc-100 flex justify-center'>
                <Link
                  href='https://www.instagram.com/3scollege/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 text-[#1a4a3e] hover:text-primary transition-colors group'
                >
                  <RiInstagramFill className='size-6 translate-y-[-1px]' />
                  <span className='text-xs uppercase tracking-widest font-bold border-b border-transparent group-hover:border-primary transition-all'>
                    @3scollege
                  </span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
