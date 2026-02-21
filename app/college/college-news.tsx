'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const news = [
  {
    category: 'Innovation',
    date: 'Oct 24, 2023',
    title: 'New Fashion Tech Lab Opens for 2024 Semester',
    image:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: 'Community',
    date: 'Oct 15, 2023',
    title: 'Bukky Anny Welcomes New Students for Orientation',
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop',
  },
  {
    category: 'Achievement',
    date: 'Sep 28, 2023',
    title: 'Alumni Showcase: Success in the Global Fashion Market',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
  },
]

export const NewsSection = () => {
  return (
    <section className='w-full py-24 md:py-32 '>
      <div className='container mx-auto px-5 lg:px-10 space-y-16'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-100 pb-12'>
          <div className='space-y-4'>
            <h2 className='font-serif text-4xl md:text-5xl font-bold text-white'>
              Latest News
            </h2>
            <p className='text-gray-300 font-normal max-w-lg'>
              Stay informed about everything happening at 3S College, from
              groundbreaking initiatives to student achievements.
            </p>
          </div>
          <Button
            variant='outline'
            className='rounded-none px-10 bg-transparent border-white text-white hover:bg-white hover:text-black transition-all w-fit'
            asChild
          >
            <Link href='#news'>View More News</Link>
          </Button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12'>
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='flex flex-col gap-6 group cursor-pointer'
            >
              <div className='aspect-video relative overflow-hidden bg-gray-100'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
              </div>
              <div className='space-y-4'>
                <div className='flex items-center gap-3 text-xs uppercase tracking-widest font-bold'>
                  <span className='text-gray-300'>{item.category}</span>
                  <span className='size-1 rounded-full bg-gray-300' />
                  <span className='text-gray-300'>{item.date}</span>
                </div>
                <h3 className='text-sm md:text-base font-semibold text-white leading-tight group-hover:text-primary transition-colors'>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
