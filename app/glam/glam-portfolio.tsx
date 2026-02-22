'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const portfolio = [
  {
    src: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop',
    alt: 'Bridal Transformation',
  },
  {
    src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop',
    alt: 'Evening Glam',
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',
    alt: 'High Fashion Artistry',
  },
  {
    src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop',
    alt: 'Editorial Look',
  },
  {
    src: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1964&auto=format&fit=crop',
    alt: 'Soft Radiance',
  },
  {
    src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop',
    alt: 'Classic Glam',
  },
]

/**
 * GlamPortfolio Component
 * Visual gallery showcasing the artist's range.
 */
export const GlamPortfolio = () => {
  return (
    <section className='w-full py-24 bg-black overflow-hidden'>
      <div className='container mx-auto px-6 space-y-16'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-8'>
          <div className='space-y-4'>
            <span className='text-sm font-medium tracking-widest text-gray-400 uppercase'>
              The Portfolio
            </span>
            <h2 className='text-4xl lg:text-5xl font-medium text-white tracking-tight'>
              Visual proof of <br />
              <span className='italic text-gray-300'>transformation.</span>
            </h2>
          </div>
          <p className='text-gray-400 text-base max-w-sm leading-relaxed'>
            Browse through our selected works—where every face is a new
            masterpiece and every look is a celebration of individuality.
          </p>
        </div>

        <div className='columns-1 md:columns-2 lg:columns-3 gap-6'>
          {portfolio.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='relative break-inside-avoid mb-6 overflow-hidden rounded-3xl group'
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={1200}
                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-100'
              />
              <div className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
