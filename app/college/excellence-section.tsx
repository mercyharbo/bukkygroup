'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    title: 'Professional Programs',
    description:
      'Curriculum designed by industry experts to ensure technical mastery.',
  },
  {
    title: 'Career Placement',
    description:
      'Direct pipelines to Bukky Group brands and global industry partners.',
  },
  {
    title: 'Modern Studios',
    description:
      'State-of-the-art facilities mimicking real-world professional environments.',
  },
]

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
            className='relative w-full lg:w-1/2 aspect-4/3'
          >
            <Image
              src='https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop'
              alt='Students in studio'
              fill
              className='object-cover rounded-none'
            />
            {/* Decorative Overlay Box Inspired by reference */}
            <div className='absolute -bottom-8 -right-8 size-48 md:size-64 border-8 border-primary/20 pointer-events-none' />
          </motion.div>

          {/* Text Side */}
          <div className='w-full lg:w-1/2 space-y-10'>
            <div className='space-y-6'>
              <h2 className='font-serif text-4xl md:text-5xl font-bold text-black leading-tight'>
                Defined by Excellence <br />
                <span className='italic text-primary'>and Achievement.</span>
              </h2>
              <p className='text-zinc-600 text-lg font-normal leading-relaxed'>
                At 3S College, we don&apos;t just teach skills; we cultivate
                visionaries. Our holistic approach to education combines
                technical precision with business acumen, ensuring every
                graduate is ready to lead.
              </p>
            </div>

            <div className='space-y-8'>
              {features.map((feature, idx) => (
                <div key={idx} className='flex flex-col gap-2'>
                  <div className='flex items-center gap-4 group cursor-pointer'>
                    <h3 className='text-xl md:text-2xl font-semibold text-black group-hover:text-primary transition-colors'>
                      {feature.title}
                    </h3>
                    <span className='text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0'>
                      →
                    </span>
                  </div>
                  <p className='text-zinc-500 font-normal leading-relaxed max-w-lg'>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
