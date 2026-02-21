'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * NaturalEssence Component
 * The high-contrast purple section.
 */
export const NaturalEssence = () => {
  return (
    <section className='w-full py-24 bg-purple-400 text-black overflow-hidden relative'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-12'>
            <div className='space-y-4'>
              <h2 className='text-4xl lg:text-6xl text-white font-medium leading-tight'>
                The architecture <br />
                of healthy skin
              </h2>
            </div>

            <p className='text-lg lg:text-xl text-white font-normal max-w-md leading-relaxed'>
              We believe in &quot;Skin Architecture&quot;&mdash;building health
              from the deepest layers. Our botanical infusions are designed to
              respect your skin&apos;s natural balance while delivering
              transformative results.
            </p>

            <div className='grid grid-cols-2 gap-12 pt-4 text-white'>
              <div className='space-y-2'>
                <p className='text-4xl lg:text-5xl font-medium'>100%</p>
                <p className='text-sm font-medium tracking-widest text-black/60'>
                  Botanical base
                </p>
              </div>
              <div className='space-y-2'>
                <p className='text-4xl lg:text-5xl font-medium'>Pure</p>
                <p className='text-sm font-medium tracking-widest text-black/60'>
                  No synthetics
                </p>
              </div>
            </div>
          </div>

          <div className='relative'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='relative aspect-square md:aspect-video lg:aspect-square bg-white shadow-2xl overflow-hidden rounded-sm p-4'
            >
              <div className='relative w-full h-full bg-gray-50 overflow-hidden'>
                <Image
                  src='https://images.unsplash.com/photo-1594132410311-66774640822e?q=80&w=2070&auto=format&fit=crop'
                  alt='Cosmetic ingredients'
                  fill
                  className='object-cover'
                />
              </div>
            </motion.div>

            {/* Absolute element */}
            <div className='hidden md:block absolute -bottom-10 -right-10 p-10 bg-black text-white rounded-sm shadow-2xl space-y-3 max-w-xs'>
              <p className='text-sm font-medium leading-relaxed italic'>
                &quot;Nature holds the blueprint for the most effective
                skincare. Our role is simply to translate it for your
                glow.&quot;
              </p>
              <p className='text-sm font-medium tracking-widest text-purple-400'>
                3S Cosmetic Philosophy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className='absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-15deg] translate-x-1/2 pointer-events-none' />
    </section>
  )
}
