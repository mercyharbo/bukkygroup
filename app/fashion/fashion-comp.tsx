'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import { HiArrowLeft, HiArrowRight, HiArrowUpRight } from 'react-icons/hi2'

export default function FashionComp() {
  return (
    <main className='relative min-h-screen bg-white pt-40 pb-32 overflow-hidden selection:bg-brand-fashion/20'>
      <div className='container mx-auto px-6 flex flex-col gap-24'>
        {/* Header Section */}
        <div className='flex flex-col items-center gap-6 text-center uppercase tracking-[0.3em]'>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-xs sm:text-sm font-medium text-gray-900 group'
          >
            Elegance defined in every stitch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className='text-6xl sm:text-7xl md:text-9xl font-black tracking-tight text-gray-900'
          >
            SIGNATURE <span className='inline-block'>COUTURE</span>
          </motion.h1>
        </div>

        {/* Collections Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          {/* Women Collection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className='lg:col-span-4 flex flex-col gap-6'
          >
            <div className='relative aspect-4/5 overflow-hidden rounded-sm bg-gray-100 group'>
              <NextImage
                src='/fashionn (5).heic'
                alt='Women Collection'
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
            </div>
            <div className='flex flex-col gap-8'>
              <h2 className='text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-gray-900'>
                Emerald Couture
              </h2>
              <div className='flex gap-4'>
                <Button
                  variant='outline'
                  size='icon'
                  className='size-12 rounded-full'
                >
                  <HiArrowLeft className='size-5' />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  className='size-12 rounded-full'
                >
                  <HiArrowRight className='size-5' />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Men Collection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='lg:col-span-4 flex flex-col gap-6'
          >
            <div className='relative aspect-4/5 overflow-hidden rounded-sm bg-gray-100 group'>
              <NextImage
                src='/fashionn (6).heic'
                alt='Men Collection'
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
            </div>
            <h2 className='text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-gray-900'>
              The Velvet Essence
            </h2>
          </motion.div>

          {/* Children Collection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='lg:col-span-4 flex flex-col gap-8 lg:pt-32'
          >
            <p className='text-[10px] leading-relaxed font-bold tracking-widest uppercase text-gray-500 max-w-[200px] mx-auto lg:mx-0 text-center lg:text-left'>
              Discover the pinnacle of bespoke tailoring and shimmering silk
              silhouettes
            </p>
            <div className='relative aspect-[0.85/1] w-full max-w-[340px] overflow-hidden rounded-sm bg-gray-100 group mx-auto lg:mx-0'>
              <NextImage
                src='/fashionn (8).heic'
                alt='Lumina Collection'
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
              <div className='absolute bottom-6 right-6 z-10 size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity'>
                <HiArrowUpRight className='size-5' />
              </div>
            </div>
            <h2 className='text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-gray-900 text-center lg:text-left'>
              Lumina Silk
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Atelier Story Section */}
      <section className='mt-32 lg:mt-48 bg-zinc-950 py-24 lg:py-32 text-white overflow-hidden'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 lg:items-center'>
            {/* Image Column */}
            <div className='relative flex flex-col gap-6 order-2 lg:order-1'>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='relative aspect-4/5 w-full rounded-sm overflow-hidden z-20'
              >
                <NextImage
                  src='/fashionn (7).heic'
                  alt='Craftsmanship'
                  fill
                  className='object-cover opacity-80'
                />
              </motion.div>
              {/* Accents */}
              <div className='absolute -top-10 -left-10 size-40 bg-brand-fashion/20 blur-3xl rounded-full' />
              <div className='absolute -bottom-10 -right-10 size-64 bg-brand-fashion/10 blur-3xl rounded-full' />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='absolute -bottom-12 -right-12 z-30 hidden lg:block bg-brand-fashion p-10 rounded-sm shadow-2xl'
              >
                <p className='text-3xl font-black tracking-widest uppercase'>
                  SA
                </p>
              </motion.div>
            </div>

            {/* Text Content Column */}
            <div className='flex flex-col gap-10 order-1 lg:order-2'>
              <div className='flex flex-col gap-4'>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='text-xs font-bold tracking-[0.4em] uppercase text-brand-fashion'
                >
                  Our Atelier
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='font-serif text-5xl lg:text-7xl font-light leading-tight'
                >
                  The Lumina <br />
                  <span className='italic font-medium'>Vogue Story</span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='flex flex-col gap-8 text-zinc-400 text-lg leading-relaxed max-w-xl'
              >
                <p>
                  What began as{' '}
                  <span className='text-white font-medium'>WearsByBukky</span>—a
                  humble pursuit of celebration and cultural expression—has
                  ascended into{' '}
                  <span className='text-brand-fashion font-medium'>
                    Lumina Vogue
                  </span>
                  : Centurion’s premier destination for modern royalty.
                </p>
                <p>
                  We craft the silent language of luxury. Our designs bridge the
                  rich textures of African heritage with the precision of global
                  couture. From the architectural lines of our sculpted suits to
                  the ethereal movement of our signature gowns, every piece is a
                  deliberate collision of art and identity.
                </p>
                <p className='text-zinc-300 italic'>
                  Whether you are commanding a red carpet or celebrating
                  life&apos;s greatest milestones, we dress your boldest dreams.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='pt-6 border-t border-white/10'
              >
                <p className='text-sm font-bold tracking-widest uppercase text-white'>
                  At Lumina Vogue, we don’t just design clothes. <br />
                  <span className='text-brand-fashion'>
                    We illuminate the soul.
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
