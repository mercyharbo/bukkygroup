'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ambianceImages = [
  { src: '/fashion (1).jpg', title: 'The Royal Lounge' },
  { src: '/fashion (3).jpg', title: 'Private Dining' },
  { src: '/fashion (2).jpg', title: 'The Terrace' },
]

export const AmbianceSection = () => {
  return (
    <section className='w-full py-24 md:py-32 bg-[#F9F7F5]'>
      <div className='container mx-auto px-5 lg:px-10 space-y-16'>
        <div className='text-center space-y-4 max-w-2xl mx-auto'>
          <span className='text-xs uppercase tracking-widest text-primary font-bold'>
            The Atmosphere
          </span>
          <h2 className='font-cinzel text-4xl md:text-5xl font-black text-black uppercase'>
            ROYAL AMBIANCE
          </h2>
          <p className='text-gray-500 text-sm leading-relaxed'>
            Step into an environment designed for modern royalty. Every detail
            is a commitment to elegance and silent luxury.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {ambianceImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='group relative aspect-4/5 overflow-hidden bg-zinc-100 shadow-xl'
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className='object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
              <div className='absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0'>
                <p className='font-cinzel text-white text-lg font-bold uppercase tracking-widest'>
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
