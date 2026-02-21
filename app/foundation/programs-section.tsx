'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiOutlineArrowRight } from 'react-icons/hi2'

/**
 * ProgramsSection Component
 * Detailed focus areas for the foundation.
 */
export const ProgramsSection = () => {
  const programs = [
    {
      title: 'Teen Mentorship',
      description:
        'Every teen deserves mentorship. We believe every dream deserves a chance and the guidance to thrive.',
      image: '/getbusy/foundationn%20(1).jpg',
      color: 'bg-foundation-primary',
    },
    {
      title: 'Women Support',
      description:
        'Empowering women to lead, heal, and find their purpose through dedicated support programs.',
      image: '/getbusy/foundationn%20(2).jpg',
      color: 'bg-foundation-accent',
    },
    {
      title: 'Safe-Space Initiatives',
      description:
        'Creating environments where individuals can navigate life challenges without feeling alone.',
      image: '/getbusy/foundationn%20(3).jpg',
      color: 'bg-foundation-dark',
    },
  ]

  return (
    <section className='w-full py-24 bg-gray-100'>
      <div className='container mx-auto px-5 lg:px-10 space-y-16'>
        <div className='max-w-3xl space-y-4'>
          <h2 className='text-4xl lg:text-5xl font-bold text-black leading-tight'>
            Building Sustainable <br />
            <span className='text-foundation-primary'>Solutions</span> for Every
            Challenge
          </h2>
          <p className='text-lg text-gray-700 max-w-xl'>
            We don&apos;t just provide temporary aid; we invest in systems that
            create long-term independence and growth.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className='group bg-white py-0'>
                <CardContent className='p-0'>
                  <div className='relative h-64 overflow-hidden'>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className='object-cover rounded-t-xl transition-transform duration-700 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent' />
                    <div className='absolute bottom-4 left-6'>
                      <span className='px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium tracking-wider border border-white/30'>
                        Program
                      </span>
                    </div>
                  </div>
                  <div className='p-4 space-y-6'>
                    <div className='space-y-3'>
                      <h3 className='text-2xl font-semibold text-black'>
                        {program.title}
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        {program.description}
                      </p>
                    </div>
                    <button className='flex items-center gap-2 text-black font-medium hover:gap-4 transition-all'>
                      Learn More <HiOutlineArrowRight className='size-5' />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
