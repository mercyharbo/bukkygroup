'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'

const allBrands = [
  {
    name: 'Bukky Beauty World',
    description:
      'Unisex salon offering luxurious hair, nail, and makeup services. Experience world-class haircare, nail treatments, and makeup artistry all in a welcoming, family-friendly environment in Centurion.',
    link: '/salon',
    bgColor: 'bg-primary/5 dark:bg-primary/10',
    borderColor: 'border-primary/20 dark:border-primary/30',
    accentColor: 'text-primary',
  },
  {
    name: '3SRESTURANT',
    description:
      'Exquisite culinary experiences and bespoke catering for every occasion. From intimate private meals to grand corporate events, we bring world-class flavor and elegance to your table.',
    link: '/catering',
    bgColor: 'bg-brand-restaurant/5 dark:bg-brand-restaurant/10',
    borderColor: 'border-brand-restaurant/20 dark:border-brand-restaurant/30',
    accentColor: 'text-brand-restaurant',
  },
  {
    name: 'Get Busy Foundation',
    description:
      'Dedicated to empowering teenagers and youth to unlock their true potential. Through strategic mentorship and visionary leadership training, we nurture the next generation of impact.',
    link: '/academy',
    bgColor: 'bg-brand-foundation/5 dark:bg-brand-foundation/10',
    borderColor: 'border-brand-foundation/20 dark:border-brand-foundation/30',
    accentColor: 'text-brand-foundation',
  },
  {
    name: '3SBOOKS',
    description:
      'A collection of inspirational literature focused on resilience, beauty, and purpose. Featuring transformative works like "SLAVE BOSS" and "THE FLAGS" by visionary author Bukky Anny.',
    link: '/about',
    bgColor: 'bg-brand-books/5 dark:bg-brand-books/10',
    borderColor: 'border-brand-books/20 dark:border-brand-books/30',
    accentColor: 'text-brand-books',
  },
  {
    name: 'Anny Motors',
    description:
      'A premium luxury automotive space dedicated to delivering excellence and expanding our impact through high-end vehicles and exceptional service.',
    link: '#',
    bgColor: 'bg-zinc-50/50 dark:bg-zinc-900/10',
    borderColor: 'border-zinc-200/50 dark:border-zinc-800/20',
  },
  {
    name: '3SFACEGLAM',
    description:
      'Modern beauty artistry and contemporary glam services. We specialize in high-end makeup and artistic transformations for every style and occasion.',
    link: '/fashion',
    bgColor: 'bg-pink-50/50 dark:bg-pink-950/10',
    borderColor: 'border-pink-200/50 dark:border-pink-800/20',
  },
]

export default function EcosystemPage() {
  return (
    <main className='min-h-screen bg-zinc-50 pt-32 pb-20 dark:bg-zinc-950'>
      <section className='container mx-auto px-6'>
        <div className='mb-16 flex flex-col items-center text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center gap-2 rounded-full border border-group-primary/20 bg-group-primary/5 px-4 py-1.5 text-sm font-semibold text-group-primary'
          >
            <HiSparkles className='size-4' />
            The Complete Bukky Ecosystem
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='mt-6 font-serif text-4xl font-medium text-zinc-900 md:text-6xl dark:text-white'
          >
            A World of{' '}
            <span className='text-group-primary italic'>Innovation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400'
          >
            Explore the diverse brands that make up the Bukky Group, each
            dedicated to excellence, empowerment, and style.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {allBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  'flex h-full flex-col border-2 transition-all hover:shadow-xl',
                  brand.bgColor,
                  brand.borderColor,
                )}
              >
                <CardHeader>
                  <CardTitle
                    className={cn(
                      'text-2xl font-bold dark:text-white',
                      brand.accentColor,
                    )}
                  >
                    {brand.name}
                  </CardTitle>
                  <CardDescription className='dark:text-zinc-400'>
                    {brand.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='mt-auto'>
                  <Button
                    asChild
                    variant='ghost'
                    className={cn(
                      '-ml-4 hover:bg-zinc-100 dark:hover:bg-zinc-800',
                      brand.accentColor || 'text-group-primary',
                    )}
                  >
                    <Link href={brand.link}>
                      Explore Brand <HiArrowRight className='ml-2 size-4' />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
