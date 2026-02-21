'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  {
    value: '95%',
    label: 'Placement Rate',
    description: 'Of graduates employed within 6 months.',
  },
  {
    value: '500+',
    label: 'Creative Leaders',
    description: 'Empowered through our vocational programs.',
  },
  {
    value: '12+',
    label: 'Major Courses',
    description: 'From fashion couture to business management.',
  },
]

export const CollegeStats = () => {
  return (
    <section className='relative w-full py-24 md:py-32 bg-brand-deep overflow-hidden flex flex-col items-center justify-center'>
      {/* Background with Dark Green/Teal accent like the reference */}
      <div className='absolute inset-0 z-0 bg-linear-to-br from-[#0a1f1a] to-[#0a0a0a]' />

      <div className='container relative z-10 mx-auto px-5 lg:px-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <div className='w-full lg:w-1/2 space-y-12'>
            <div className='space-y-4'>
              <h4 className='text-xs font-bold uppercase tracking-[0.3em] text-primary'>
                Real Impact
              </h4>
              <h2 className='font-serif text-4xl md:text-6xl font-bold text-white'>
                By the Numbers
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16'>
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className='space-y-3'
                >
                  <div className='text-4xl md:text-6xl font-bold text-primary'>
                    {stat.value}
                  </div>
                  <div className='space-y-1'>
                    <p className='text-xl font-semibold text-white'>
                      {stat.label}
                    </p>
                    <p className='text-zinc-400 font-normal leading-relaxed'>
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='w-full lg:w-1/2 aspect-square relative'
          >
            <Image
              src='https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop'
              alt='College Campus'
              fill
              className='object-cover rounded-none grayscale transition-all duration-700 hover:grayscale-0'
            />
            {/* Visual connector like the green line in reference */}
            <div className='absolute bottom-10 -left-10 w-32 h-2 bg-primary' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
