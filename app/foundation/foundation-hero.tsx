'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineHeart } from 'react-icons/hi2'

/**
 * FoundationHero Component
 * Inspired by the "Together We Support" layout but without a background as requested.
 */
export const FoundationHero = () => {
  return (
    <section className='relative w-full px-5 lg:px-10 py-40 lg:py-48 overflow-hidden'>
      <div className='container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col gap-6'
        >
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foundation-primary/30 bg-foundation-primary/10 w-fit shadow-sm'>
            <span className='size-2 rounded-full bg-foundation-primary animate-pulse' />
            <span className='text-xs tracking-wider text-foundation-primary'>
              Get Busy Foundation Africa
            </span>
          </div>

          <h1 className='text-5xl lg:text-6xl font-bold text-balance leading-tight'>
            A Safe Place. <br />
            <span className='text-foundation-primary'>A Listening Ear.</span> A
            Guiding Light.
          </h1>

          <p className='text-lg text-gray-200 max-w-xl text-pretty leading-relaxed'>
            Founded with love by{' '}
            <span className='font-bold italic'>Bukky Anny</span>, we are
            committed to empowering teens, supporting women, and creating a safe
            haven for those navigating emotional, personal, or life challenges.
          </p>

          <div className='flex flex-wrap gap-4 pt-4'>
            <Button
              size='xl'
              className='bg-foundation-primary text-black font-semibold transition-all transform hover:scale-105 active:scale-95 '
            >
              Donate Now
            </Button>
            <Button
              size='xl'
              variant='outline'
              className='border-2 border-foundation-primary/20 text-foundation-primary font-semibold hover:bg-foundation-primary/5 hover:text-white transition-all'
              asChild
            >
              <Link href='/contact'>Learn More</Link>
            </Button>
          </div>
        </motion.div>

        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative aspect-square lg:aspect-4/3 rounded-card-foundation overflow-hidden group shadow-2xl'
          >
            <Image
              src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop'
              alt='Foundation support'
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent' />
          </motion.div>

          {/* Floating Impact Widget */}
          <Card className='absolute -bottom-28 -right-4 sm:-bottom-20 sm:-right-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-[280px] sm:max-w-xs border border-white/50 animate-in fade-in slide-in-from-bottom-10 duration-1000 origin-bottom-right scale-100 sm:scale-105 z-20'>
            <CardContent className='flex flex-col gap-3 sm:gap-4 p-5 sm:p-6'>
              <div className='flex items-center gap-4'>
                <div className='size-10 sm:size-12 rounded-full bg-foundation-primary/10 flex items-center justify-center shrink-0'>
                  <HiOutlineHeart className='size-6 sm:size-7 text-foundation-primary' />
                </div>
                <div>
                  <h4 className='font-bold text-gray-900 text-base sm:text-lg'>
                    Make an Impact
                  </h4>
                  <p className='text-xs sm:text-sm text-gray-500'>
                    Join our mission today
                  </p>
                </div>
              </div>
              <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                Your support directly fuels local community programs that change
                lives every day.
              </p>
              <Button
                size='lg'
                className='w-full bg-foundation-primary text-black text-sm sm:text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]'
              >
                Impact Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
