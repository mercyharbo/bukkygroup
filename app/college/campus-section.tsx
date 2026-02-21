'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const CampusSection = () => {
  return (
    <section className='w-full py-24 md:py-32 bg-zinc-50'>
      <div className='container mx-auto px-5 lg:px-10'>
        <div className='flex flex-col lg:flex-row items-end justify-between gap-12 mb-16'>
          <div className='max-w-2xl space-y-4'>
            <h2 className='font-serif text-4xl md:text-6xl font-bold text-black leading-tight'>
              The World is <br />
              <span className='italic text-primary'>Your Classroom.</span>
            </h2>
            <p className='text-zinc-600 text-lg font-normal leading-relaxed'>
              Located at the heart of the creative district, 3S College offers
              an environment that inspires collaboration and forward-thinking.
              From studio sessions to on-site industry visits, your journey is
              limitless.
            </p>
          </div>
          <div className='flex items-center gap-8'>
            <div className='hidden md:block h-px w-32 bg-zinc-200' />
            <div className='flex flex-col gap-2'>
              <span className='text-sm uppercase tracking-widest text-primary font-bold'>
                Join the Community
              </span>
              <span className='text-zinc-400 font-normal'>
                5,000+ Alumni Worldwide
              </span>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='md:col-span-8 aspect-video relative overflow-hidden group'
          >
            <Image
              src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
              alt='Campus collaboration'
              fill
              className='object-cover transition-transform duration-1000 group-hover:scale-105'
            />
            <div className='absolute bottom-10 left-10 p-6 bg-white shadow-xl max-w-sm hidden lg:block'>
              <h4 className='text-xl font-bold text-black'>Active Learning</h4>
              <p className='text-zinc-500 font-normal text-sm mt-2'>
                Engage in direct peer-to-peer mentoring and creative workshops
                led by Bukky Anny.
              </p>
            </div>
          </motion.div>

          {/* Side Stack */}
          <div className='md:col-span-4 flex flex-col gap-6'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='flex-1 aspect-square relative overflow-hidden group'
            >
              <Image
                src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
                alt='Lab environment'
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-110'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='flex-1 aspect-square relative overflow-hidden group'
            >
              <Image
                src='https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop'
                alt='Student project'
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-110'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
