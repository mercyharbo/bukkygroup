'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const ExcellenceSection = () => {
  return (
    <section className='w-full py-24 md:py-32 bg-white overflow-hidden'>
      <div className='container mx-auto px-5 lg:px-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='relative w-full lg:w-1/2 aspect-square md:aspect-4/3'
          >
            <Image
              src='https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop'
              alt='Students in studio'
              fill
              className='object-cover rounded-none shadow-2xl'
            />
            {/* Decorative Overlay Box Inspired by reference */}
            <div className='absolute -bottom-8 -right-8 size-48 md:size-64 border-8 border-black/20 pointer-events-none' />
          </motion.div>

          {/* Text Side */}
          <div className='w-full lg:w-1/2 space-y-12'>
            <div className='space-y-6'>
              <div className='space-y-2'>
                <h2 className='text-xs font-semibold uppercase tracking-[0.3em] text-black'>
                  About 3S College
                </h2>
                <h3 className='font-serif text-4xl md:text-5xl font-bold text-black leading-tight'>
                  Building Vision, <br />
                  <span className='italic text-black'>
                    Discipline & Excellence.
                  </span>
                </h3>
              </div>
              <p className='text-gray-600 text-lg font-normal leading-relaxed text-pretty'>
                At 3S College, we don&apos;t just teach beauty and fashion — we
                build vision, discipline, and excellence. Our institution is
                designed for aspiring creatives who want to turn their passion
                into a professional career.
              </p>
              <p className='text-gray-500 text-base font-normal leading-relaxed'>
                With a strong focus on practical training, luxury standards, and
                real-world experience, students are equipped with the skills
                needed to succeed in salons, fashion houses, studios, and global
                beauty brands.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-100'>
              <div className='space-y-4'>
                <h4 className='text-xs font-bold uppercase tracking-widest text-black'>
                  Our Mission
                </h4>
                <p className='text-gray-600 text-sm leading-relaxed italic'>
                  To empower students with world-class beauty and fashion
                  education, hands-on training, and entrepreneurial knowledge
                  that prepares them to lead, create, and excel.
                </p>
              </div>
              <div className='space-y-4'>
                <h4 className='text-xs font-bold uppercase tracking-widest text-black'>
                  Our Vision
                </h4>
                <p className='text-gray-600 text-sm leading-relaxed italic'>
                  To become Africa&apos;s leading beauty and fashion college
                  known for excellence, innovation, creativity, and professional
                  grooming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
