'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowUpRight,
  HiChevronDown,
} from 'react-icons/hi2'
import { RiInstagramFill } from 'react-icons/ri'

const collections = [
  {
    title: 'Emerald Couture',
    image: '/fashionn (5).heic',
    description: 'Elegance defined in every stitch.',
    type: 'Women',
  },
  {
    title: 'The Velvet Essence',
    image: '/fashion1.jpeg',
    description: 'Modern royalty for the bold.',
    type: 'Men',
  },
  {
    title: 'Lumina Silk',
    image: '/fashionn (8).heic',
    description: 'Shimmering silhouettes of silk.',
    type: 'Children',
  },
  {
    title: 'Ivory Grace',
    image: '/fashion (1).jpg',
    description: 'Timeless beauty in every curve.',
    type: 'Women',
  },
  {
    title: 'Azure Midnight',
    image: '/fashion (2).jpg',
    description: 'Sophistication for the evening.',
    type: 'Men',
  },
  {
    title: 'Golden Aura',
    image: '/fashion (3).jpg',
    description: 'Radiate confidence and style.',
    type: 'Women',
  },
  {
    title: 'Ruby Regalia',
    image: '/fashion (4).jpg',
    description: 'Command the room with presence.',
    type: 'Women',
  },
]

const services = [
  {
    title: 'Bespoke Tailoring',
    description: 'Architectural precision for the modern individual.',
  },
  {
    title: 'Ready-To-Wear',
    description: 'Instant elegance for every occasion.',
  },
  {
    title: 'Bridal Couture',
    description: 'Ethereal gowns for your timeless moment.',
  },
  {
    title: 'Style Consultation',
    description: 'Curating your unique aesthetic identity.',
  },
]

const testimonials = [
  {
    quote:
      "The architectural precision of Lumina Vogue's tailoring is unmatched. I felt like modern royalty the moment I stepped into my bespoke suit.",
    author: 'Alexander Van Wyk',
    role: 'Executive Director',
  },
  {
    quote:
      'Every stitch tells a story of elegance and cultural pride. Their bridal couture turned my wedding into an ethereal dream.',
    author: 'Sarah Mensah',
    role: 'High Fashion Enthusiast',
  },
  {
    quote:
      'Lumina Vogue doesn’t just design clothes; they illuminate your soul. The velvet textures and gold accents are pure luxury.',
    author: 'Dr. Elizabeth Zulu',
    role: 'Philanthropist',
  },
]

const faqs = [
  {
    question: 'How long does a bespoke garment take?',
    answer:
      'Typically, our custom couture pieces require 4 to 8 weeks to perfect, depending on the complexity of the design and fabric sourcing.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship our ready-to-wear collections and completed bespoke pieces worldwide via secure, insured luxury couriers.',
  },
  {
    question: 'Can I provide my own fabrics?',
    answer:
      'While we curate a selection of the world’s finest textiles, we are open to working with unique, high-quality fabrics provided during your consultation.',
  },
]

export default function FashionComp() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % collections.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex(
      (prev) => (prev - 1 + collections.length) % collections.length,
    )
  }

  // Get visible items for the current layout
  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(collections[(currentIndex + i) % collections.length])
    }
    return items
  }

  const visibleItems = getVisibleItems()

  return (
    <main className='relative min-h-screen pt-40 pb-32 overflow-hidden selection:bg-brand-fashion/20 flex flex-col gap-32 lg:gap-48'>
      <div className='container mx-auto px-6 flex flex-col gap-24'>
        {/* Header Section */}
        <div className='flex flex-col items-center gap-6 text-center uppercase tracking-[0.3em]'>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-xs sm:text-sm font-medium text-white group'
          >
            Elegance defined in every stitch
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <Link
              href='https://www.instagram.com/bukkybeautyworld/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-[10px] font-bold tracking-widest text-zinc-400 hover:text-primary transition-colors group'
            >
              <RiInstagramFill className='size-4' />
              <span className='border-b border-transparent group-hover:border-primary transition-all uppercase'>
                @bukkybeautyworld
              </span>
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className='text-6xl sm:text-7xl md:text-9xl font-black tracking-tight text-white'
          >
            SIGNATURE <span className='inline-block'>COUTURE</span>
          </motion.h1>
        </div>

        {/* Carousel Controls & Info */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-sm sm:text-base font-bold tracking-extra uppercase text-white'>
              Featured Collections
            </h2>
            <p className='text-[10px] font-bold tracking-widest uppercase text-zinc-400'>
              {currentIndex + 1} — {collections.length}
            </p>
          </div>
          <div className='flex gap-4'>
            <Button
              variant='outline'
              size='icon'
              className='size-12 rounded-full border-white/10 hover:text-white hover:bg-white/5 transition-all active:scale-95 text-white'
              onClick={prevSlide}
            >
              <HiArrowLeft className='size-5' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              className='size-12 rounded-full border-white/10 hover:text-white hover:bg-white/5 transition-all active:scale-95 text-white'
              onClick={nextSlide}
            >
              <HiArrowRight className='size-5' />
            </Button>
          </div>
        </div>

        {/* Collections Grid - Animated Shifting window */}
        <div className='relative'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
            <AnimatePresence
              mode='popLayout'
              initial={false}
              custom={direction}
            >
              {visibleItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${currentIndex + index}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                    duration: 0.4,
                  }}
                  className={`flex flex-col gap-6 ${index === 2 ? 'hidden lg:flex' : ''} ${
                    index === 1 ? 'hidden md:flex' : ''
                  }`}
                >
                  <div className='group relative aspect-4/5 overflow-hidden rounded-sm bg-gray-100'>
                    <NextImage
                      src={item.image}
                      alt={item.title}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                    {item.type === 'Children' && (
                      <div className='absolute bottom-6 right-6 z-10 size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity'>
                        <HiArrowUpRight className='size-5' />
                      </div>
                    )}
                  </div>
                  <div className='flex flex-col gap-4'>
                    <h2 className='text-sm sm:text-base font-bold tracking-extra uppercase text-white'>
                      {item.title}
                    </h2>
                    <p className='text-[10px] leading-relaxed font-bold tracking-widest uppercase text-zinc-400 max-w-[200px]'>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Services List Section */}
      <section className=''>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col gap-12 lg:gap-20'>
            <div className='flex flex-col gap-4 text-center lg:text-left'>
              <span className='text-xs font-medium tracking-[0.4em] uppercase text-primary'>
                Signature Services
              </span>
              <h2 className='font-serif text-5xl lg:text-8xl font-light tracking-tighter text-white'>
                The Craft
              </h2>
            </div>

            <div className='flex flex-col border-t border-white/10'>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 10 }}
                  className='group flex flex-col lg:flex-row lg:items-center justify-between py-12 lg:py-16 border-b border-white/10 transition-colors hover:bg-white/5'
                >
                  <div className='flex flex-col gap-3'>
                    <span className='font-serif text-sm italic text-primary'>
                      0{index + 1}
                    </span>
                    <h3 className='font-serif text-4xl lg:text-7xl font-light tracking-tight text-white'>
                      {service.title}
                    </h3>
                  </div>
                  <div className='flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12'>
                    <p className='font-serif text-base lg:text-lg text-zinc-400 max-w-xs leading-relaxed'>
                      {service.description}
                    </p>
                    <div className='hidden lg:flex size-14 rounded-full border border-white/10 items-center justify-center transition-transform group-hover:rotate-45'>
                      <HiArrowUpRight className='size-6 text-zinc-500' />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tighter spacing for lower sections */}
      <div className='flex flex-col gap-8 lg:gap-10'>
        {/* Atelier Story Section */}
        <section className='py-24 lg:py-28 text-white overflow-hidden'>
          <div className='container mx-auto px-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 lg:items-center'>
              {/* Image Column */}
              <div className='relative flex flex-col gap-6 order-2 lg:order-1'>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className='relative aspect-4/5 w-full rounded-sm overflow-hidden z-20'
                >
                  <NextImage
                    src='/fashionn (7).heic'
                    alt='Craftsmanship'
                    fill
                    className='object-cover opacity-80'
                  />
                </motion.div>
                {/* Accents */}
                <div className='absolute -top-10 -left-10 size-40 bg-brand-fashion/20 blur-3xl rounded-full' />
                <div className='absolute -bottom-10 -right-10 size-64 bg-brand-fashion/10 blur-3xl rounded-full' />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='absolute -bottom-12 -right-12 z-30 hidden lg:block bg-primary p-10 rounded-sm shadow-2xl'
                >
                  <p className='text-3xl font-black tracking-widest uppercase text-white'>
                    SA
                  </p>
                </motion.div>
              </div>

              {/* Text Content Column */}
              <div className='flex flex-col gap-10 order-1 lg:order-2'>
                <div className='flex flex-col gap-4'>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-xs font-bold tracking-[0.4em] uppercase text-primary'
                  >
                    Our Atelier
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className='font-serif text-5xl lg:text-7xl font-light leading-tight'
                  >
                    The Lumina <br />
                    <span className='italic font-medium'>Vogue Story</span>
                  </motion.h2>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className='flex flex-col gap-8 text-zinc-400 text-lg leading-relaxed max-w-xl'
                >
                  <p>
                    What began as{' '}
                    <span className='text-white font-medium'>WearsByBukky</span>
                    —a humble pursuit of celebration and cultural expression—has
                    ascended into{' '}
                    <span className='text-primary font-medium'>
                      Lumina Vogue
                    </span>
                    : Centurion’s premier destination for modern royalty.
                  </p>
                  <p>
                    We craft the silent language of luxury. Our designs bridge
                    the rich textures of African heritage with the precision of
                    global couture. From the architectural lines of our sculpted
                    suits to the ethereal movement of our signature gowns, every
                    piece is a deliberate collision of art and identity.
                  </p>
                  <p className='text-zinc-300 italic'>
                    Whether you are commanding a red carpet or celebrating
                    life&apos;s greatest milestones, we dress your boldest
                    dreams.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className='pt-6 border-t border-white/10'
                >
                  <p className='text-sm font-bold tracking-widest uppercase text-white'>
                    At Lumina Vogue, we don’t just design clothes. <br />
                    <span className='text-primary'>
                      We illuminate the soul.
                    </span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-28'>
          <div className='container mx-auto px-6'>
            <div className='flex flex-col gap-16'>
              <div className='flex flex-col items-center text-center gap-4'>
                <span className='text-xs font-medium tracking-[0.4em] uppercase text-primary'>
                  Social Proof
                </span>
                <h2 className='font-serif text-5xl lg:text-7xl font-light tracking-tight text-white'>
                  Modern <span className='italic'>Royalty</span>
                </h2>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                {testimonials.map((testi, index) => (
                  <motion.div
                    key={testi.author}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className='flex flex-col gap-8 p-10 rounded-sm bg-white shadow-xl'
                  >
                    <p className='text-lg leading-relaxed text-black italic'>
                      &quot;{testi.quote}&quot;
                    </p>
                    <div className='flex flex-col gap-1'>
                      <span className='text-base text-primary'>
                        {testi.author}
                      </span>
                      <span className='text-sm text-zinc-600'>
                        {testi.role}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ & CTA Sections Wrapper */}
        <div className='flex flex-col gap-8 lg:gap-10 pb-32'>
          {/* FAQ Section */}
          <section className='container mx-auto px-6'>
            <div className='max-w-3xl mx-auto flex flex-col gap-16'>
              <div className='flex flex-col gap-4 text-center'>
                <span className='text-xs font-medium tracking-[0.4em] uppercase text-primary'>
                  Inquiries
                </span>
                <h2 className='font-serif text-4xl lg:text-6xl font-light tracking-tight text-white'>
                  Common <span className='italic'>Questions</span>
                </h2>
              </div>

              <div className='flex flex-col border-t border-white/10'>
                {faqs.map((faq, index) => (
                  <div key={index} className='border-b border-white/10'>
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className='w-full py-8 flex items-center justify-between text-left group'
                    >
                      <span className='font-serif text-xl lg:text-2xl text-white transition-colors group-hover:text-primary'>
                        {faq.question}
                      </span>
                      <HiChevronDown
                        className={`size-5 text-zinc-500 transition-transform duration-300 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='overflow-hidden'
                        >
                          <p className='pb-8 font-serif text-lg text-zinc-400 leading-relaxed'>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className='container mx-auto px-6'>
            <div className='relative py-24 lg:py-40 rounded-sm overflow-hidden border border-white/5 bg-white/2 flex flex-col items-center text-center gap-12'>
              <div className='relative z-10 flex flex-col gap-6 max-w-2xl'>
                <span className='text-xs font-medium tracking-[0.6em] uppercase text-primary'>
                  Your Transformation Awaits
                </span>
                <h2 className='font-serif text-5xl lg:text-8xl font-light tracking-tighter text-white leading-tight'>
                  Reserve Your <br />
                  <span className='italic'>Private Session</span>
                </h2>
                <p className='font-serif text-lg lg:text-xl text-zinc-400 max-w-lg mx-auto leading-relaxed'>
                  Step into the world of bespoke luxury. Whether for a wedding,
                  red carpet, or signature suit, your journey begins here.
                </p>
              </div>

              <div className='relative z-10 flex flex-col sm:flex-row items-center gap-6'>
                <Button
                  asChild
                  className='h-16 px-10 rounded-full bg-primary text-white hover:bg-primary/90 transition-all text-sm tracking-extra uppercase font-medium group'
                >
                  <Link href='/bookings'>
                    Book Appointment
                    <HiArrowRight className='ml-2 size-4 transition-transform group-hover:translate-x-1' />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  className='h-16 px-10 rounded-full border-white/10 hover:bg-white/5 hover:text-white text-white transition-all text-sm tracking-extra uppercase font-medium flex items-center gap-3'
                >
                  <Link
                    href='https://wa.me/27603314739'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaWhatsapp className='size-5 text-zinc-400' />
                    WhatsApp Us
                  </Link>
                </Button>
              </div>

              <div className='pt-8 border-t border-white/5 w-full max-w-xs'>
                <Link
                  href='https://www.instagram.com/bukkybeautyworld/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-3 text-zinc-400 hover:text-primary transition-colors group'
                >
                  <RiInstagramFill className='size-6' />
                  <span className='text-xs uppercase tracking-widest font-bold border-b border-transparent group-hover:border-primary transition-all'>
                    @bukkybeautyworld
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
