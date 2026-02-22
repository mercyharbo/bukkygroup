'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'amazon', logo: '/logo (1).png' },
  { name: 'apple books', logo: '/logo (2).png' },
  { name: 'barnes & noble', logo: '/logo (3).png' },
  { name: 'kobo', logo: '/logo (1).png' },
  { name: 'google play', logo: '/logo.png' },
]

export const PartnerLogos = () => {
  return (
    <section className='w-full py-16 md:py-24 bg-black'>
      <div className='container mx-auto px-5 lg:px-10 space-y-12'>
        <div className='text-center'>
          <h2 className='font-cinzel text-xs uppercase tracking-[0.4em] text-gray-500 font-bold'>
            BOOKS ARE AVAILABLE ON
          </h2>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-12 md:gap-24'>
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='relative h-8 md:h-12 w-32 grayscale hover:grayscale-0 transition-all duration-500'
            >
              <div className='flex items-center justify-center h-full text-white font-cinzel font-bold text-lg uppercase tracking-widest'>
                {partner.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
