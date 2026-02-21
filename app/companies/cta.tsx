'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const CompaniesCTA = () => {
  return (
    <section className='w-full py-24 md:py-32 bg-black overflow-hidden relative'>
      {/* Decorative Blur */}
      <div className='absolute -top-24 -left-24 size-96 rounded-full bg-primary/10 blur-[120px]' />

      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto text-center space-y-10'
        >
          <div className='space-y-6'>
            <h2 className='font-serif text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight'>
              Partner with the <br />
              <span className='italic'>
                Legacy of Excellence.
              </span>
            </h2>
            <p className='text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto'>
              We are always looking for visionary partners and innovative minds
              to join our growing ecosystem. Let&apos;s build the future
              together.
            </p>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-6'>
            <Button
              size='xl'
              className='rounded-full bg-white text-black px-10 hover:bg-white/90 hover:scale-105 transition-transform'
              asChild
            >
              <Link href='/contact'>Initiate Partnership</Link>
            </Button>
            <Button
              variant='outline'
              size='xl'
              className='rounded-full border-white/20 text-white hover:text-white hover:bg-white/10 px-10'
              asChild
            >
              <Link href='/about'>Learn Our Story</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
