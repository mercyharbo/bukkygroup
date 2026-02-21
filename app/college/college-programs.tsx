'use client'

import { motion } from 'framer-motion'
import {
  RiBriefcaseFill,
  RiBrushFill,
  RiHandHeartFill,
  RiHeartsFill,
  RiLayoutFill,
  RiScissorsFill,
  RiStarFill,
  RiUserStarFill,
} from 'react-icons/ri'

const programs = [
  {
    title: 'Professional Makeup Artistry',
    icon: RiBrushFill,
    description:
      'Master the art of color, technique, and creative expression from bridal to editorial.',
  },
  {
    title: 'Hairstyling & Wig Making',
    icon: RiStarFill,
    description:
      'Specialized training in modern styling, wig construction, and luxury hair care.',
  },
  {
    title: 'Fashion Design & Sewing',
    icon: RiScissorsFill,
    description:
      'From sketching to final stitch, learn the fundamentals of garment construction.',
  },
  {
    title: 'Beauty Business & Entrepreneurship',
    icon: RiBriefcaseFill,
    description:
      'Equipping you with the strategies needed to launch and lead your own beauty brand.',
  },
  {
    title: 'Nail Technology',
    icon: RiHandHeartFill,
    description:
      'Precision training in luxury nail care, creative art, and structural enhancements.',
  },
  {
    title: 'Bridal & Luxury Glam Training',
    icon: RiHeartsFill,
    description:
      'Exclusive masterclasses focused on the high-demand world of luxury weddings.',
  },
  {
    title: 'Personal Branding',
    icon: RiUserStarFill,
    description:
      'Constructing a professional identity and digital presence for industry authority.',
  },
  {
    title: 'Runway & Styling Training',
    icon: RiLayoutFill,
    description:
      'Advanced techniques in creative direction, catwalk presentation, and editorial styling.',
  },
]

export const CollegePrograms = () => {
  return (
    <section id='programs' className='w-full py-24 md:py-32 bg-zinc-50'>
      <div className='container mx-auto px-5 lg:px-10 space-y-20'>
        <div className='flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto'>
          <h2 className='text-xs font-semibold uppercase tracking-[0.3em] text-gray-500'>
            Curriculum
          </h2>
          <h3 className='text-4xl md:text-5xl font-bold text-black'>
            What We Offer <br />
            <span className='italic text-black'>at 3S College.</span>
          </h3>
          <p className='text-zinc-500 text-lg leading-relaxed'>
            Our institution is designed for aspiring creatives who want to turn
            their passion into a professional career through practical,
            luxury-standard training.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='bg-white p-8 space-y-6 group hover:shadow-2xl transition-all duration-500 border border-gray-300 rounded-xl flex flex-col items-center text-center'
            >
              <div className='size-16 rounded-full bg-gray-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-500'>
                <program.icon className='size-8' />
              </div>
              <div className='space-y-3'>
                <h4 className='text-lg font-semibold text-black leading-tight'>
                  {program.title}
                </h4>
                <p className='text-sm text-gray-600'>{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
