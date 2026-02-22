'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

const mediaItems = [
  {
    title: 'The Flags',
    description:
      'A journey through cultural heritage and the stories that define us.',
    image: '/books/cover%201.jpeg',
    category: 'Featured Novel',
  },
  {
    title: 'Bond Blood',
    description: 'An exploration of ties that bind and the strength of legacy.',
    image: '/books/cover%202.jpeg',
    category: 'Collection',
  },
  {
    title: 'Slave Boss',
    description:
      'A powerful narrative on leadership, grit, and transformation.',
    image: '/books/cover%203.png',
    category: 'New Arrival',
  },
]

export const LitMedia = () => {
  return (
    <section className='w-full py-24 md:py-32 bg-white'>
      <div className='container mx-auto px-5 lg:px-10 space-y-16'>
        <div className='text-center space-y-4'>
          <span className='text-xs uppercase tracking-widest text-gray-400 font-bold'>
            Our Collection
          </span>
          <h2 className='font-cinzel text-4xl md:text-5xl font-black text-black uppercase'>
            Featured Publications
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14'>
          {mediaItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='group flex flex-col gap-6'
            >
              <div className='relative aspect-video overflow-hidden bg-zinc-50 shadow-xl p-4'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-contain transition-all duration-700 group-hover:scale-105'
                />
              </div>
              <div className='space-y-3'>
                <p className='text-xs uppercase tracking-widest text-gray-500 font-bold'>
                  {item.category}
                </p>
                <h3 className='text-lg font-cinzel font-bold text-black group-hover:text-gray-500 transition-colors leading-tight'>
                  {item.title}
                </h3>
                <p className='text-gray-500 text-sm leading-relaxed line-clamp-2'>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='flex justify-center pt-8'>
          <Button
            variant='outline'
            className='rounded-none px-12 py-6 bg-transparent border-black text-black hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest'
          >
            View Collection
          </Button>
        </div>
      </div>
    </section>
  )
}
