'use client'

import { motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'

const brandPillars = [
  {
    id: '01',
    title: '3S THE LABEL',
    description: 'Bespoke couture and modern royalty fashion.',
    image: '/fashionn (5).heic',
    href: '/fashion',
  },
  {
    id: '02',
    title: 'Bukky beauty world',
    description: 'Exceptional salon and glam studio experiences.',
    image: '/bbw/bukky-beauty-world.jpeg',
    href: '/salon',
  },
  {
    id: '03',
    title: '3S college',
    description: 'Empowering future leaders through education.',
    image: '/college.jpeg',
    href: '/college',
  },
  {
    id: '04',
    title: 'Get Busy Foundation',
    description: 'Philanthropic impact and community support.',
    image: '/getbusy/getbusy.jpeg',
    href: '/foundation',
  },
]

export default function AboutComp() {
  return (
    <main className='relative min-h-screen pt-50 pb-32 overflow-hidden '>
      <div className='container mx-auto flex flex-col gap-32 lg:gap-20'>
        {/* Hero Section */}
        <section className='flex flex-col gap-16 px-5 lg:px-10'>
          <div className='flex flex-col gap-6'>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-sm font-bold tracking-[0.6em] uppercase text-gray-500'
            >
              The Visionary
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className='font-cinzel text-6xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter text-white'
            >
              BUKKY <br />
              <span className='italic font-light'>ANNY</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className='relative aspect-video lg:aspect-21/9 w-full rounded-sm overflow-hidden'
          >
            <NextImage
              src='/fashionn (6).heic'
              alt='Bukky Anny'
              fill
              className='object-cover object-top opacity-90'
              priority
            />
            <div className='absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent' />
          </motion.div>
        </section>

        {/* Narrative Section - Asymmetric Grid */}
        <section className='grid grid-cols-1 px-5 lg:px-10 lg:grid-cols-12 gap-16 lg:gap-24 items-start'>
          <div className='lg:col-span-4 flex flex-col gap-10'>
            <h2 className='font-cinzel text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase'>
              Inside <br /> The LEGACY
            </h2>
            <p className='text-sm font-bold tracking-[0.3em] uppercase text-gray-200'>
              01 — The Ascension
            </p>
          </div>

          <div className='lg:col-span-8 flex flex-col gap-12 text-gray-200 text-lg lg:text-xl leading-relaxed font-serif'>
            <p>
              Bukky Anny is the creative force and visionary leader of the{' '}
              <span className='text-white'>Bukky Group</span>—a multi-faceted
              empire dedicated to prestige, education, and community
              empowerment.
            </p>
            <p>
              Her journey began with a simple yet profound mission: to bridge
              the gap between traditional African heritage and the global stage
              of luxury. What started as{' '}
              <span className='italic'>WearsByBukky</span> expanded into a
              comprehensive ecosystem of excellence, spanning haute couture,
              premium beauty services, and world-class training.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 text-sm uppercase tracking-widest font-bold text-white'>
              <div className='flex flex-col gap-4 border-t border-white/10 pt-8'>
                <span className='text-gray-300'>Excellence</span>
                <p className='text-sm text-gray-200 font-medium leading-loose'>
                  Uncompromising quality across all brand touchpoints, from
                  bespoke tailoring to culinary arts.
                </p>
              </div>
              <div className='flex flex-col gap-4 border-t border-white/10 pt-8'>
                <span className='text-gray-300'>Innovation</span>
                <p className='text-sm text-gray-200 font-medium leading-loose'>
                  Constantly redefining the standards of luxury through modern
                  technology and timeless craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Statement - High Contrast */}
        <section className='relative px-5 lg:px-10 py-20 lg:py-30 bg-white overflow-hidden'>
          <div className='container mx-auto max-w-5xl relative z-10'>
            <div className='flex flex-col gap-16 items-center text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='flex flex-col gap-6'
              >
                <span className='text-sm font-bold tracking-[0.4em] uppercase text-gray-500'>
                  The Mental Shift
                </span>
                <h2 className='font-serif text-5xl lg:text-6xl font-light tracking-tighter text-black italic leading-[1.1]'>
                  &quot;Modern Royalty is not about a crown—it is a commitment
                  to excellence in every silent detail.&quot;
                </h2>
              </motion.div>
              <div className='w-20 h-px bg-gray-200' />
              <p className='font-cinzel text-lg tracking-widest text-gray-600 uppercase'>
                — Bukky Anny
              </p>
            </div>
          </div>
          {/* Decorative Background Text */}
          <div className='absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden'>
            <span className='text-[30rem] font-cinzel font-black tracking-tighter text-black'>
              BUKKY
            </span>
          </div>
        </section>

        {/* Pillars Section */}
        <section className='flex flex-col gap-10 px-5 lg:px-10'>
          <div className='flex flex-col gap-4'>
            <span className='text-sm font-bold tracking-[0.6em] uppercase text-primary'>
              Global Ecosystem
            </span>
            <h2 className='font-cinzel text-5xl lg:text-8xl font-black tracking-tight text-white uppercase'>
              The PILLARS
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {brandPillars.map((pillar, index) => (
              <Link key={pillar.title} href={pillar.href} className='group'>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className='flex flex-col gap-8'
                >
                  <div className='relative aspect-square w-full rounded-sm overflow-hidden bg-gray-200/5'>
                    <NextImage
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100'
                    />
                    <div className='absolute bottom-6 right-6 z-10 size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity'>
                      <HiArrowUpRight className='size-5' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <span className='font-serif text-sm italic text-gray-300'>
                      {pillar.id}
                    </span>
                    <h3 className='font-cinzel text-2xl font-bold text-white uppercase'>
                      {pillar.title}
                    </h3>
                    <p className='text-gray-200 text-sm tracking-widest font-medium uppercase'>
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Decorative Title Component - Large Text Background */}
        <section className='relative py-8 border-t border-white/5'>
          <div className='flex flex-col gap-12'>
            <div className='overflow-hidden relative'>
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className='flex whitespace-nowrap gap-24 text-[10rem] lg:text-[18rem] font-cinzel font-black text-white/10 tracking-tighter uppercase'
              >
                <span>LEGACY</span>
                <span>CRAFTSMANSHIP</span>
                <span>EXCELLENCE</span>
                <span>VISIONARY</span>
                {/* Duplicate for seamless loop */}
                <span>LEGACY</span>
                <span>CRAFTSMANSHIP</span>
                <span>EXCELLENCE</span>
                <span>VISIONARY</span>
              </motion.div>
            </div>
            <div className='container mx-auto flex flex-col items-center gap-12 text-center relative z-10'>
              <h2 className='font-serif text-4xl lg:text-7xl font-light tracking-tight text-white italic'>
                Empowering the next generation <br /> of Modern Royalty.
              </h2>
              <div className='flex gap-12 pt-12 border-t border-white/10 w-full justify-center'>
                <div className='flex flex-col gap-2'>
                  <span className='text-white  text-3xl font-black'>15+</span>
                  <span className='text-sm tracking-widest text-gray-200 uppercase font-bold'>
                    Years of Impact
                  </span>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-white  text-3xl font-black'>20k+</span>
                  <span className='text-sm tracking-widest text-gray-200 uppercase font-bold'>
                    Lives Touched
                  </span>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-white  text-3xl font-black'>4</span>
                  <span className='text-sm tracking-widest text-gray-200 uppercase font-bold'>
                    Global Brands
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
