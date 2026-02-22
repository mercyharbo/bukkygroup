'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    content:
      "The way Bukky Anny describes the intersection of culture and modern success is revolutionary. I couldn't put 'The Flags' down.",
    author: 'Dr. Amara Okoro',
    role: 'Cultural Historian',
  },
  {
    content:
      "A masterclass in storytelling. 'Slave Boss' isn't just a book; it's an experience that leaves you questioning everything you knew about leadership.",
    author: 'Marcus Tolen',
    role: 'Reader & Entrepreneur',
  },
  {
    content:
      "Elegant, sophisticated, and deeply moving. The Bukky Group's literary arm is setting a new standard for luxury publishing.",
    author: 'Sophia Laurent',
    role: 'Style Consultant',
  },
]

const reviewImages = [
  {
    src: '/books/books-instore.jpeg',
    alt: 'Books in store',
    caption: 'In-store showcase',
  },
  {
    src: '/books/book-testimony1.jpeg',
    alt: 'Reader review',
    caption: 'WhatsApp Feedback',
  },
  {
    src: '/books/book-testimony.jpeg',
    alt: 'Reader review',
    caption: 'WhatsApp Feedback',
  },
]

export const Testimonials = () => {
  return (
    <section className='w-full py-24 bg-black '>
      <div className='container mx-auto px-5 lg:px-10 space-y-24'>
        {/* Text Testimonials */}
        <div className='flex flex-col items-center text-center space-y-16'>
          <div className='space-y-4'>
            <span className='text-xs uppercase tracking-widest text-gray-500 font-bold'>
              Reader Praise
            </span>
            <h2 className='font-cinzel text-4xl md:text-5xl font-bold text-white uppercase'>
              Voices from the Shelf
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className='relative p-10 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center text-center space-y-6'
              >
                <FaQuoteLeft className='text-muted size-8' />
                <p className='text-gray-600 text-base leading-relaxed italic'>
                  "{item.content}"
                </p>
                <div className='space-y-1'>
                  <p className='text-black font-bold uppercase tracking-wider text-sm'>
                    {item.author}
                  </p>
                  <p className='text-gray-600 text-xs uppercase tracking-widest font-semibold'>
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Social Proof */}
        <div className='space-y-16'>
          <div className='text-center space-y-4'>
            <span className='text-xs uppercase tracking-widest text-gray-600 font-bold'>
              Social Impact
            </span>
            <h2 className='font-cinzel text-3xl md:text-4xl font-black text-white uppercase'>
              Reader Moments
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {reviewImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className='group relative aspect-4/5 overflow-hidden bg-white shadow-xl p-4'
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className='object-contain transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6'>
                  <p className='text-white text-xs uppercase tracking-widest font-bold'>
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
