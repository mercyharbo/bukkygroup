'use client'
import FAQSection from '@/components/faq-section'
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
import NextImage from 'next/image'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import { RiDoubleQuotesL, RiQuillPenLine } from 'react-icons/ri'
import { Marquee } from '../components/marquee'

const flagshipBrands = [
  {
    name: 'Bukky Beauty World - Salon',
    description:
      'Unisex salon offering luxurious hair, nail, and makeup services. Experience world-class haircare, nail treatments, and makeup artistry all in a welcoming, family-friendly environment in Centurion.',
    link: '/salon',
    image: '/gallery (21).jpg',
    bgColor: 'bg-zinc-900',
    borderColor: 'border-primary/50',
    accentColor: 'text-primary',
  },
  {
    name: '3SRESTURANT',
    description:
      'Exquisite culinary experiences and bespoke catering for every occasion. From intimate private meals to grand corporate events, we bring world-class flavor and elegance to your table.',
    link: '/catering',
    image: '/resturant.jpg',
    bgColor: 'bg-zinc-900',
    borderColor: 'border-brand-restaurant/50',
    accentColor: 'text-brand-restaurant',
  },
  {
    name: 'Get Busy Foundation',
    description:
      'Dedicated to empowering teenagers and youth to unlock their true potential. Through strategic mentorship and visionary leadership training, we nurture the next generation of impact.',
    link: '/academy',
    image: '/foundation.heic',
    bgColor: 'bg-zinc-900',
    borderColor: 'border-brand-foundation/50',
    accentColor: 'text-brand-foundation',
  },
  {
    name: '3SBOOKS',
    description:
      'A collection of inspirational literature focused on resilience, beauty, and purpose. Featuring transformative works like "SLAVE BOSS" and "THE FLAGS" by visionary author Bukky Anny.',
    link: '/about',
    image: '/books.jpeg',
    bgColor: 'bg-zinc-900',
    borderColor: 'border-brand-books/50',
    accentColor: 'text-brand-books',
  },
]

const updateItems = [
  {
    text: 'New Book "THE FLAGS" Now Available',
    link: 'https://www.instagram.com/3sbooks',
  },
  { text: 'Bukky Fashion Week Coming Soon' },
  { text: 'Get Busy Foundation Fall Enrollment' },
  { text: 'Experience the Bukky Group Ecosystem' },
]

export default function Home() {
  return (
    <main className='relative min-h-screen overflow-hidden bg-zinc-50 selection:bg-group-primary/20 selection:text-group-primary dark:bg-zinc-950'>
      {/* Background Glows */}
      <div className='pointer-events-none absolute -top-24 -left-20 size-96 rounded-full bg-group-primary/20 blur-3xl' />
      <div className='pointer-events-none absolute top-1/2 -right-20 size-96 -translate-y-1/2 rounded-full bg-group-primary/10 blur-3xl' />

      {/* Hero Section */}
      <section className='container relative mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-6 pt-40 pb-12 lg:flex-row lg:pt-48 lg:pb-20'>
        <div className='relative z-10 flex w-full flex-col gap-6 text-center lg:flex-1 lg:text-left'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 self-center rounded-full border border-group-primary/20 bg-group-primary/5 px-4 py-1.5 text-sm font-semibold text-group-primary lg:self-start'
          >
            Welcome to Bukky Group
          </motion.div>

          <div className='flex flex-col gap-6'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='font-serif text-4xl font-medium leading-tight text-zinc-900 md:text-5xl lg:text-7xl dark:text-white'
            >
              Shaping Lives Through{' '}
              <span className='text-group-primary italic'>Vision</span> &{' '}
              <span className='text-group-primary italic'>Excellence</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl lg:mx-0 dark:text-zinc-400'
            >
              Bukky Group is a multi-brand empire dedicated to beauty,
              lifestyle, education, and empowerment. Founded by Bukky Anny, we
              nurture growth and inspire a legacy of excellence across every
              venture.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-col items-center gap-4 sm:flex-row lg:justify-start'
          >
            <Button
              asChild
              size='xl'
              className='group bg-group-primary hover:bg-group-primary/90 h-14 rounded-full px-8 text-lg font-bold transition-all hover:scale-105 active:scale-95'
            >
              <Link href='#brands'>
                Explore Brands
                <HiArrowRight className='size-5 transition-transform group-hover:translate-x-1' />
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='xl'
              className='h-14 rounded-full px-8 text-lg font-bold transition-all active:scale-95'
            >
              <Link href='/about'>Learn Our Story</Link>
            </Button>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <div className='relative w-full lg:flex-1'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[3rem] bg-zinc-200 shadow-2xl dark:bg-zinc-800'
          >
            <div className='absolute inset-0 bg-linear-to-tr from-group-primary/30 via-transparent to-transparent' />
            <NextImage
              src='/gallery (21).jpg'
              alt='Bukky Group Vision'
              fill
              className='object-cover'
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section
        className='relative mt-12 overflow-hidden bg-group-primary/5 py-24 md:py-32'
        id='about'
      >
        <div className='pointer-events-none absolute -right-24 top-0 size-128 rounded-full bg-group-primary/5 blur-3xl' />
        <div className='pointer-events-none absolute -left-24 bottom-0 size-128 rounded-full bg-primary/5 blur-3xl' />

        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col items-center gap-16 lg:flex-row'>
            <div className='relative w-full lg:flex-1'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-[3rem] bg-zinc-200 shadow-2xl dark:bg-zinc-800'
              >
                <div className='absolute inset-0 bg-linear-to-t from-group-primary/20 via-transparent to-transparent' />
                <div className='flex h-full w-full items-center justify-center text-zinc-400'>
                  <p className='text-sm italic'>[Portrait: Bukky Anny]</p>
                </div>
                <div className='absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md'>
                  <div className='text-xs font-semibold text-white/70 uppercase tracking-widest'>
                    The Visionary
                  </div>
                  <div className='text-2xl font-bold text-white'>
                    Bukky Anny
                  </div>
                </div>
              </motion.div>
            </div>

            <div className='flex w-full flex-col gap-8 lg:flex-1'>
              <div className='flex flex-col gap-4 text-center lg:text-left'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='inline-flex items-center gap-2 self-center rounded-full border border-group-primary/20 bg-group-primary/5 px-4 py-1.5 text-sm font-semibold text-group-primary lg:self-start'
                >
                  <RiQuillPenLine className='size-4' />
                  Meet the Founder
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='font-serif text-3xl font-medium text-zinc-900 md:text-5xl dark:text-white'
                >
                  A Legacy of{' '}
                  <span className='text-group-primary italic'>Impact</span> &{' '}
                  <span className='text-group-primary italic'>Grace</span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='flex flex-col gap-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400'
              >
                <p>
                  Bukky Anny is a dynamic entrepreneur, author, peacemaker, and
                  the visionary behind Bukky Group. Her multi-brand empire is
                  shaping lives through beauty, fashion, lifestyle, education,
                  and empowerment.
                </p>
                <p>
                  As an author of influential works like{' '}
                  <i>&quot;Slave Boss&quot;</i> and <i>&quot;THE FLAGS&quot;</i>
                  , she inspires resilience and purpose. Her commitment to youth
                  development through the Get Busy Foundation has empowered
                  countless teenagers to unlock their potential.
                </p>
                <p>
                  A Vice President at Toastmasters International, Bukky fosters
                  warm personality that radiates humor and love.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Brands Section */}
      <section
        className='relative overflow-hidden bg-zinc-950 py-24 md:py-32'
        id='brands'
      >
        <div className='pointer-events-none absolute left-1/2 top-1/2 size-240 -translate-x-1/2 -translate-y-1/2 rounded-full bg-group-primary/5 blur-[120px]' />
        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col items-center gap-4 text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 rounded-full border border-group-primary/30 bg-group-primary/20 px-4 py-1.5 text-sm font-semibold text-white'
              >
                Our Core Ventures
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-3xl font-medium text-white md:text-5xl'
              >
                The Pillars of{' '}
                <span className='text-group-primary italic'>Bukky Group</span>
              </motion.h2>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
              {flagshipBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='h-full'
                >
                  <Card
                    className={cn(
                      'group flex py-0 h-full gap-2 flex-col overflow-hidden border-2 transition-all hover:shadow-2xl hover:shadow-primary/10',
                      brand.bgColor,
                      brand.borderColor,
                    )}
                  >
                    <div className='relative aspect-square w-full overflow-hidden'>
                      <NextImage
                        src={brand.image}
                        alt={brand.name}
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-zinc-900/20' />
                    </div>
                    <CardHeader className='px-3 py-2'>
                      <CardTitle className='text-lg font-semibold capitalize text-white'>
                        {brand.name}
                      </CardTitle>
                      <CardDescription className='text-sm leading-relaxed text-zinc-300'>
                        {brand.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='mt-auto px-3 py-0 pb-5'>
                      <Button
                        asChild
                        className={cn(
                          'h-10 w-full rounded-full bg-linear-to-r px-4 text-sm text-white transition-all hover:scale-105 active:scale-95',
                          brand.name === 'Bukky Beauty World - Salon'
                            ? 'from-primary to-primary/80 shadow-primary/20'
                            : brand.name === '3SRESTURANT'
                              ? 'from-brand-restaurant to-brand-restaurant/80 shadow-brand-restaurant/20'
                              : brand.name === 'Get Busy Foundation'
                                ? 'from-brand-foundation to-brand-foundation/80 shadow-brand-foundation/20'
                                : 'from-brand-books to-brand-books/80 shadow-brand-books/20',
                        )}
                      >
                        <Link href={brand.link}>
                          Visit Brand <HiArrowRight className='ml-2 size-4' />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className='mt-12 flex justify-center'>
              <Button
                asChild
                variant='outline'
                size='xl'
                className='rounded-full px-12 text-xl font-bold transition-all active:scale-95'
              >
                <Link href='/ecosystem'>See All Brands & Ecosystem</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className='relative mt-12 overflow-hidden py-16 md:py-24'>
        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col items-center gap-12'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex flex-col items-center gap-3 text-center'
            >
              <h3 className='text-sm font-bold tracking-widest text-group-primary uppercase'>
                Trusted By & Partnered With
              </h3>
              <div className='h-1 w-12 rounded-full bg-group-primary/30' />
            </motion.div>

            <div className='grid grid-cols-2 items-center justify-center gap-x-8 gap-y-12 md:flex md:flex-wrap md:gap-20'>
              {[
                { src: '/logo (1).png', alt: 'ISO Logo' },
                { src: '/logo (1).webp', alt: 'OSHA Logo' },
                { src: '/logo (2).png', alt: 'BBB Accredited Business' },
                {
                  src: '/logo (3).png',
                  alt: 'Consumer Goods Council of South Africa',
                },
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='group relative flex h-16 items-center justify-center transition-all duration-500 md:h-20 md:w-40'
                >
                  <NextImage
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className='h-full w-full object-contain transition-transform duration-300 group-hover:scale-110'
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className='relative mt-12 overflow-hidden py-24 md:py-32'>
        <div className='pointer-events-none absolute top-1/2 left-1/2 size-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-group-primary/10 blur-[100px]' />
        <div className='container relative mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='relative overflow-hidden rounded-[3rem] bg-zinc-900 px-6 py-20 text-center shadow-2xl lg:py-32 dark:bg-zinc-900/50'
          >
            <RiDoubleQuotesL className='mx-auto mb-8 size-16 text-group-primary/20' />
            <p className='mx-auto max-w-4xl font-serif text-2xl leading-relaxed text-white md:text-4xl'>
              &quot;Our mission transcends aesthetics; we are here to nurture
              confidence and inspire a legacy of excellence in everything we
              do.&quot;
            </p>
            <div className='mt-8 text-xl font-bold text-group-primary italic'>
              — Bukky Anny
            </div>
          </motion.div>
        </div>
      </section>

      <FAQSection />

      {/* Pulse Bar */}
      <Marquee items={updateItems} className='bg-group-primary z-20' />
    </main>
  )
}
