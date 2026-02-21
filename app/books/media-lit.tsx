'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

const mediaItems = [
  {
    title: 'Tracy Brogan on Lit with Love',
    description:
      'A deep dive into romantic fiction and the power of storytelling.',
    image: '/gallery (1).jpg',
    category: 'Interview',
  },
  {
    title: 'Sally Kilpatrick on Lit with Love',
    description: 'Discussing regional settings and character depth.',
    image: '/gallery (2).jpg',
    category: 'Discussion',
  },
  {
    title: 'Brenda Horrocks on Lit with Love',
    description: 'The journey from outline to bestseller.',
    image: '/gallery (10).jpg',
    category: 'Live Session',
  },
]

export const LitMedia = () => {
  return (
    <section className='w-full py-24 md:py-32 bg-white'>
      <div className='container mx-auto px-5 lg:px-10 space-y-16'>
        <div className='text-center space-y-4'>
          <span className='text-xs uppercase tracking-widest text-gray-400 font-bold'>
            Podcast & Interviews
          </span>
          <h2 className='font-cinzel text-4xl md:text-5xl font-black text-black uppercase'>
            LIT WITH LOVE
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
              <div className='relative aspect-video overflow-hidden bg-zinc-100 shadow-xl'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20'>
                  <div className='size-14 rounded-full border border-white flex items-center justify-center'>
                    <div className='border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1' />
                  </div>
                </div>
              </div>
              <div className='space-y-3'>
                <p className='text-[10px] uppercase tracking-widest text-primary font-bold'>
                  {item.category}
                </p>
                <h3 className='text-lg font-cinzel font-bold text-black group-hover:text-primary transition-colors leading-tight'>
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
            Watch All Episodes
          </Button>
        </div>
      </div>
    </section>
  )
}
