'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * ImpactSection Component
 * Section with bg-yellow-700.
 */
export const ImpactSection = () => {
  return (
    <section className='w-full py-24 px-5 lg:px-10 bg-foundation-primary text-black overflow-hidden relative'>
      {/* Decorative patterns could go here */}
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <h2 className='text-4xl lg:text-6xl font-bold leading-tight text-black'>
              A Movement of <br />
              <span className='underline decoration-black/40'>
                Love & Leadership
              </span>
            </h2>
            <p className='text-lg text-black max-w-md font-medium'>
              Through mentorship and empowerment programs, we are raising
              confident leaders and changemakers for tomorrow. Because kindness
              still matters.
            </p>
            <div className='grid grid-cols-2 gap-8 pt-4'>
              <div className='space-y-2'>
                <p className='text-4xl lg:text-5xl font-black text-black'>
                  100%
                </p>
                <p className='text-sm font-bold uppercase tracking-widest text-black'>
                  Passion Driven
                </p>
              </div>
              <div className='space-y-2'>
                <p className='text-4xl lg:text-5xl font-black text-black'>
                  #Love
                </p>
                <p className='text-sm font-bold uppercase tracking-widest text-black'>
                  Kindness Always
                </p>
              </div>
            </div>
          </div>

          <div className='relative'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className='relative aspect-video rounded-3xl overflow-hidden shadow-2xl'
            >
              <Image
                src='https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop'
                alt='Empowerment'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-linear-to-t from-foundation-dark/60 via-transparent to-transparent' />
            </motion.div>

            {/* Absolute element to break the layout slightly */}
            <div className='hidden lg:block absolute -bottom-10 -left-10 p-8 bg-foundation-dark rounded-2xl shadow-2xl border border-white/10 space-y-2'>
              <p className='text-xl font-bold text-white italic'>
                &quot;The future starts with guidance.&quot;
              </p>
              <div className='space-y-0.5'>
                <p className='text-sm font-bold text-white uppercase'>
                  Bukky Anny
                </p>
                <p className='text-xs text-foundation-primary'>
                  Founder, Get Busy Foundation Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
