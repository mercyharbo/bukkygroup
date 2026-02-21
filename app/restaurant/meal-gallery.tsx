'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const mealShowcase = [
  { src: '/foods/foodie (4).jpg', title: 'Signature Jollof', category: 'Rice' },
  {
    src: '/foods/foodie (5).webp',
    title: 'Royal Breakfast',
    category: 'Morning',
  },
  {
    src: '/foods/foodie (4).webp',
    title: 'Goat Meat Special',
    category: 'Special',
  },
  { src: '/foods/foodie (1).heic', title: 'Village Native', category: 'Rice' },
  {
    src: '/foods/foodie (12).webp',
    title: 'Exotic Drinks',
    category: 'Beverage',
  },
  {
    src: '/foods/foodie (14).webp',
    title: 'Imperial Combo',
    category: 'Platter',
  },
]

export const MealGallery = () => {
  return (
    <section className='w-full py-24 md:py-32 bg-black overflow-hidden'>
      <div className='container mx-auto px-5 lg:px-10 space-y-16'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-8'>
          <div className='space-y-4'>
            <span className='text-xs uppercase tracking-[0.5em] text-gray-300 font-semibold'>
              Visual Feast
            </span>
            <h2 className='font-cinzel text-4xl md:text-5xl font-black text-white uppercase leading-none'>
              WHAT <br /> WE DO
            </h2>
          </div>
          <p className='max-w-md text-gray-300 text-sm leading-relaxed italic'>
            &quot;A visual testament to our commitment to culinary brilliance
            and the art of fine dining.&quot;
          </p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
          {mealShowcase.map((meal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className='group relative aspect-square overflow-hidden bg-zinc-900'
            >
              <Image
                src={meal.src}
                alt={meal.title}
                fill
                className='object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 space-y-2 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0'>
                <span className='text-[10px] uppercase tracking-widest text-black font-semibold'>
                  {meal.category}
                </span>
                <h3 className='font-cinzel text-white text-lg font-black uppercase tracking-tight'>
                  {meal.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
