'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const TransformSection = () => {
  return (
    <section className='w-full py-24 md:py-32 bg-white'>
      <div className='container mx-auto px-5 lg:px-10'>
        <div className='flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24'>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='relative w-full lg:w-1/2 aspect-video overflow-hidden group'
          >
            <Image
              src='https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop'
              alt='Professional training session'
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-105'
            />
            {/* Play Button Overlay Placeholder style from reference */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='size-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/50 transition-all'>
                <div className='border-t-10 border-t-transparent border-l-18 border-l-black border-b-10 border-b-transparent ml-2' />
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className='w-full lg:w-1/2 space-y-8'>
            <div className='space-y-6'>
              <h2 className='font-serif text-4xl md:text-5xl font-bold text-black leading-tight'>
                Transforming Lives, <br />
                <span className='italic text-black'>Every Day.</span>
              </h2>
              <p className='text-zinc-600 text-lg font-normal leading-relaxed'>
                Our integrated vocational pathways ensure that students gain
                both theoretical knowledge and hands-on experience. We transform
                ambition into expertise, empowering our students to create their
                own success stories in the global market.
              </p>
            </div>

            <div className='space-y-6'>
              {['Mentorship', 'Innovation', 'Internships'].map((item, idx) => (
                <div
                  key={idx}
                  className='flex items-center justify-between py-5 border-b border-zinc-100 group cursor-pointer'
                >
                  <span className='text-xl font-semibold text-black group-hover:text-black transition-colors'>
                    {item}
                  </span>
                  <span className='text-black transition-transform group-hover:translate-x-2'>
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
