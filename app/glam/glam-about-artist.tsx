'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const GlamAboutArtist = () => {
  return (
    <section className='w-full py-24 bg-black overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
          {/* Visual Side */}
          <div className='w-full lg:w-1/2 relative'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className='relative aspect-square md:aspect-4/5 rounded-2xl overflow-hidden shadow-2xl group'
            >
              <Image
                src='/bukky5.jpeg'
                alt='Aura the Makeup Artist'
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
              {/* Decorative Play Button/Badge Style from reference */}
              <div className='absolute top-6 left-6 size-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/20'>
                <div className='border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1' />
              </div>
            </motion.div>

            {/* Small Floating Gallery Elements */}
            <div className='absolute -bottom-8 -right-8 flex gap-4'>
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className='size-24 md:size-32 rounded-xl border-4 border-white overflow-hidden shadow-xl'
                >
                  <Image
                    src={`https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop&v=${i}`}
                    alt='Work preview'
                    width={128}
                    height={128}
                    className='object-cover'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Text Side */}
          <div className='w-full lg:w-1/2 space-y-8'>
            <div className='space-y-4'>
              <span className='text-sm font-medium tracking-widest text-gray-300 uppercase'>
                Behind the artistry
              </span>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight'>
                Meet Anny: The Artist <br />
                <span className='italic text-black'>Behind the Beauty.</span>
              </h2>
              <p className='text-gray-300 text-lg leading-relaxed'>
                With over 15 years in the industry, Aura has mastered the subtle
                balance between transformation and preservation. Her philosophy
                is simple: use makeup to reveal, not to mask.
              </p>
              <p className='text-gray-300 text-base leading-relaxed'>
                Aura&apos;s journey began in high-fashion editorial houses,
                leading her to become a sought-after artist for bespoke bridal
                and events artistry across Africa.
              </p>
            </div>

            <Button
              asChild
              className='bg-white text-black hover:bg-white/90 transition-all px-10 h-14 rounded-full font-medium'
            >
              <Link href='/bookings'>Learn her story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
