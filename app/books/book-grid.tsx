'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const allBooks = [
  {
    title: "There's Something About Mira",
    category: 'New Release',
    image: '/books.jpeg',
    slug: 'something-about-mira',
  },
  {
    title: 'The Vibrant Years',
    category: 'Novel',
    image:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop',
    slug: 'vibrant-years',
  },
  {
    title: 'The Wedding Setup',
    category: 'Short Story',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1948&auto=format&fit=crop',
    slug: 'wedding-setup',
  },
  {
    title: 'The Emma Project',
    category: 'Novel',
    image:
      'https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=1929&auto=format&fit=crop',
    slug: 'emma-project',
  },
]

export const BookGrid = () => {
  return (
    <section id='programs' className='w-full py-24 md:py-32 bg-white'>
      <div className='container mx-auto px-5 lg:px-10 space-y-16'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-100 pb-12'>
          <div className='space-y-4'>
            <span className='text-xs uppercase tracking-widest text-gray-500 font-bold'>
              Shelf
            </span>
            <h2 className='font-cinzel text-4xl md:text-5xl font-bold text-black'>
              DISCOVER ALL MY BOOKS <br />
              <span className='text-primary'>YOU WERE LOOKING FOR</span>
            </h2>
          </div>
          <div className='flex gap-2'>
            {/* Slider controls can be added here if needed */}
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
          {allBooks.map((book, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='group flex flex-col gap-6'
            >
              <Link
                href={`/books/${book.slug}`}
                className='relative aspect-3/4 block overflow-hidden bg-zinc-50 shadow-lg group-hover:shadow-2xl transition-shadow duration-500'
              >
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
              </Link>
              <div className='space-y-2 text-center'>
                <p className='text-[10px] uppercase tracking-widest text-gray-400 font-bold'>
                  {book.category}
                </p>
                <h3 className='text-base md:text-lg font-cinzel font-bold text-black group-hover:text-primary transition-colors line-clamp-2'>
                  {book.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
