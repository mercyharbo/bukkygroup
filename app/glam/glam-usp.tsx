'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { RiCheckFill } from 'react-icons/ri'

const usps = [
  'Premium Quality Products',
  'Safe & Gentle Skin Techniques',
  'Unique & Custom Style Guide',
  'Seamless Team Working Process',
]

export const GlamUSP = () => {
  return (
    <section className='w-full py-24 bg-white overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
          {/* Text Side */}
          <div className='w-full lg:w-1/2 space-y-10'>
            <div className='space-y-4'>
              <span className='text-sm font-medium tracking-widest text-orange-500 uppercase'>
                The Faceglam Advantage
              </span>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-tight'>
                Why Customers Love <br />
                <span className='italic text-orange-500'>Working with Us.</span>
              </h2>
              <p className='text-gray-500 text-lg leading-relaxed'>
                We combine industry-leading techniques with a client-first
                approach to ensure you not only look beautiful but feel
                empowered.
              </p>
            </div>

            <ul className='space-y-5'>
              {usps.map((usp, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className='flex items-center gap-4 text-black font-medium text-lg'
                >
                  <div className='size-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500'>
                    <RiCheckFill className='size-4' />
                  </div>
                  {usp}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image Side (Arched frame) */}
          <div className='w-full lg:w-1/2 relative flex justify-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className='relative w-[300px] h-[450px] md:w-[400px] md:h-[550px] rounded-t-full overflow-hidden'
            >
              <Image
                src='https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop'
                alt='Makeup application close-up'
                fill
                className='object-cover'
              />
              {/* Decorative Circle from reference */}
              <div className='absolute bottom-12 -right-8 size-24 border-2 border-orange-500/20 rounded-full' />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
