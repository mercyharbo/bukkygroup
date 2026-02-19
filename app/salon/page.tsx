'use client'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiArrowRight } from 'react-icons/hi2'
import { RiStarFill } from 'react-icons/ri'

const services = [
  {
    title: 'Haircuts',
    image: '/gallery (21).jpg',
    bgColor: '#a33833', // Deep red
  },
  {
    title: 'Hairstyles',
    image: '/gallery (12).jpg',
    bgColor: '#e3d5ca', // Light beige
  },
  {
    title: 'Coloring',
    image: '/gallery (15).jpg',
    bgColor: '#d4a373', // Muted brown/gold
  },
  {
    title: 'Nailcare',
    image: '/gallery (2).webp',
    bgColor: '#7c6a0a', // Deep gold/brown
  },
  {
    title: 'Makeup',
    image: '/gallery (13).jpg',
    bgColor: '#b7b7a4', // Sage
  },
  {
    title: 'Brows & Lashes',
    image: '/gallery (10).jpg',
    bgColor: '#cb997e', // Terra Cotta
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Client',
    quote:
      'The attention to detail at Bukky Salon is unmatched. I came in for a transformation and left feeling like a new person. Truly the best in the city!',
    stars: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Groom-to-be',
    quote:
      'I was nervous about my wedding day look, but the team here made me feel completely at ease. The results were perfect and natural.',
    stars: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Fashion Stylist',
    quote:
      'As someone in the industry, I have high standards. Bukky Group consistently exceeds them with their innovative techniques and premium care.',
    stars: 5,
  },
]

const outcomes = [
  { label: 'Successful Sessions', value: '1,500+' },
  { label: 'Return Rate', value: '98%' },
  { label: 'Style Masteries', value: '50+' },
]

const galleryImages = [
  { id: 21, ext: 'jpg' },
  { id: 12, ext: 'jpg' },
  { id: 13, ext: 'jpg' },
  { id: 14, ext: 'jpg' },
  { id: 2, ext: 'webp' },
]

export default function SalonPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const mainImage = `/gallery (${galleryImages[currentIndex].id}).${galleryImages[currentIndex].ext}`

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className='relative min-h-screen overflow-hidden selection:bg-primary/20 selection:text-primary'>
      {/* Background Glows */}
      <section className='relative min-h-[90vh] w-full overflow-hidden pt-32 pb-20 lg:pt-40'>
        {/* Background Landscape Image */}
        <div className='absolute inset-0 z-0'>
          <NextImage
            src='https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop'
            alt='Luxury Salon Background'
            fill
            className='object-cover'
            priority
          />
          {/* Brand Purple Overlay */}
          <div className='absolute inset-0 bg-brand-foundation/95 mix-blend-multiply' />
          <div className='absolute inset-0 bg-linear-to-b from-brand-foundation/20 via-transparent to-brand-foundation/40' />
        </div>

        <div className='container relative z-10 mx-auto px-6 h-full'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 h-full'>
            {/* Left Content */}
            <div className='relative flex flex-1 flex-col items-start gap-10 text-left order-2 lg:order-1'>
              {/* Local contrast mask for readability */}
              <div className='absolute -top-20 -left-20 size-160 rounded-full bg-black/20 blur-3xl pointer-events-none' />

              <div className='relative z-10 flex flex-col gap-8 max-w-3xl'>
                <div className='flex flex-col gap-6'>
                  <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className='font-serif text-5xl md:text-7xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] drop-shadow-2xl'
                  >
                    Beauty Isn&apos;t Just A Service, <br />
                    It&apos;s An{' '}
                    <span className='italic opacity-90'>Experience</span>.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='text-lg leading-relaxed text-white font-medium drop-shadow-md max-w-xl'
                  >
                    Bukky Beauty World is a luxury destination in Centurion
                    dedicated to making you look and feel your best. From
                    flawless hair and elegant nails to stunning makeup, we
                    create experiences that leave you confident, radiant, and
                    ready to shine.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Button
                    asChild
                    size='lg'
                    className='h-14 rounded-full bg-white px-10 text-lg font-semibold text-brand-foundation hover:bg-white/90 transition-all active:scale-95'
                  >
                    <Link href='/bookings'>Book appointment</Link>
                  </Button>
                </motion.div>
              </div>

              {/* Bottom Cards Widget */}
              <div className='flex flex-wrap items-center gap-4 mt-8'>
                {/* Style Gallery Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='group relative flex aspect-[1.3/1] w-56 flex-col items-center justify-center overflow-hidden rounded-3xl bg-white shadow-2xl'
                >
                  <NextImage
                    src='/gallery (12).jpg'
                    alt='Salon Style'
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  {/* Hover Overlay */}
                  <div className='absolute inset-0 flex items-center justify-center bg-brand-foundation/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'>
                    <span className='rounded-lg bg-white/20 px-4 py-2 text-lg font-bold text-white backdrop-blur-md border border-white/20'>
                      Braiding Artistry
                    </span>
                  </div>
                  {/* Permanent Icon */}
                  <div className='absolute bottom-5 right-5 z-10'>
                    <div className='flex size-10 items-center justify-center rounded-full bg-white text-brand-foundation shadow-lg transition-transform group-hover:scale-110'>
                      <HiArrowRight className='size-5' />
                    </div>
                  </div>
                </motion.div>

                {/* Couture Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className='group relative flex aspect-[1.3/1] w-56 flex-col items-center justify-center overflow-hidden rounded-3xl bg-white/10 shadow-2xl backdrop-blur-md border border-white/20'
                >
                  <NextImage
                    src='/gallery (13).jpg'
                    alt='Nail Couture'
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  {/* Hover Overlay */}
                  <div className='absolute inset-0 flex items-center justify-center bg-brand-foundation/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'>
                    <span className='rounded-lg bg-white/20 px-4 py-2 text-lg font-bold text-white backdrop-blur-md border border-white/20'>
                      Bridal Glam
                    </span>
                  </div>
                  {/* Permanent Icon */}
                  <div className='absolute bottom-5 right-5 z-10'>
                    <div className='flex size-10 items-center justify-center rounded-full bg-white text-brand-foundation shadow-lg transition-transform group-hover:scale-110'>
                      <HiArrowRight className='size-5' />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className='relative flex flex-1 items-center justify-center order-1 lg:order-2 w-full lg:w-auto min-h-[500px] lg:min-h-0'>
              <div className='relative aspect-4/5 w-full max-w-[500px] overflow-hidden rounded-4xl lg:rounded-card-giant'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={mainImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className='relative h-full w-full'
                  >
                    <NextImage
                      src={mainImage}
                      alt='Luxury Hair Style'
                      fill
                      className='object-cover'
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Gallery Image Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='absolute -bottom-6 -right-4 lg:right-0 z-20 flex flex-col items-end gap-3'
              >
                <div className='flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-2.5 backdrop-blur-xl'>
                  <div className='flex -space-x-4'>
                    {galleryImages.map((img, index) => {
                      const isActive = currentIndex === index
                      return (
                        <motion.button
                          key={img.id}
                          whileHover={{ scale: 1.1, zIndex: 10, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setCurrentIndex(index)}
                          className={`group relative size-14 md:size-16 overflow-hidden rounded-full transition-all duration-300 ${
                            isActive
                              ? 'ring-4 ring-brand-foundation ring-offset-2 ring-offset-white/10 z-10'
                              : 'border-0 hover:z-10'
                          } bg-gray-200`}
                        >
                          <NextImage
                            src={`/gallery (${img.id}).${img.ext}`}
                            alt='Salon Preview'
                            fill
                            className='object-cover'
                          />
                        </motion.button>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Services Section - Redesigned to match attachment */}
      <section
        id='services'
        className='relative overflow-hidden bg-soft-sand py-24 lg:py-32'
      >
        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
            {/* Left Content */}
            <div className='flex flex-col gap-6 max-w-sm lg:shrink-0'>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='font-serif text-5xl md:text-6xl font-medium tracking-tight text-gray-900'
              >
                Our Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='text-base leading-relaxed text-gray-600'
              >
                At Bukky Beauty World, we believe in a holistic approach to
                beauty. Beyond precision haircuts, our sanctuary offers a
                curated suite of high-end treatments—ranging from expert color
                transformations and couture hair extensions to professional nail
                artistry and flawless editorial makeup. Our master artisans
                combine technical excellence with premium products to ensure
                every visit leaves you feeling empowered, radiant, and
                completely transformed.
              </motion.p>
            </div>

            {/* Right Cards Grid */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3 w-full'>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className='group relative aspect-square md:aspect-[0.85/1] w-full overflow-hidden rounded-card-xl shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl'
                  style={{ backgroundColor: service.bgColor }}
                >
                  {/* Floating Label */}
                  <div className='absolute top-6 left-6 z-20'>
                    <span className='inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-bold tracking-wide text-gray-900 shadow-lg'>
                      {service.title}
                    </span>
                  </div>

                  {/* Service Image */}
                  <div className='relative h-full w-full'>
                    <NextImage
                      src={service.image}
                      alt={service.title}
                      fill
                      className='object-cover object-center transition-transform duration-700 group-hover:scale-110'
                    />
                    {/* Subtle mask to integrate image better if needed */}
                    <div className='absolute inset-0 bg-black/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity' />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section - Precise Match to Attachment */}
      <section
        id='booking'
        className='relative overflow-hidden bg-brand-foundation py-24 lg:py-32'
      >
        <div className='container relative mx-auto px-6'>
          <div className='grid grid-cols-1 gap-16 lg:grid-cols-3 lg:items-start'>
            {/* Left Column: Info & Image */}
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-6'>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='font-serif text-5xl font-bold tracking-tight text-white md:text-6xl'
                >
                  Booking
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='text-base leading-relaxed text-white/90'
                >
                  Ready for a transformative experience? Book your appointment
                  now at Bukky Beauty World and let us craft a style that
                  defines you.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='relative aspect-4/3 overflow-hidden rounded-card-large bg-white/10'
              >
                <NextImage
                  src='/gallery (21).jpg'
                  alt='Booking Experience'
                  fill
                  className='object-cover opacity-90'
                />
              </motion.div>
            </div>

            {/* Middle Column: Calendar & Hours */}
            <div className='flex flex-col gap-0 overflow-hidden rounded-card-large bg-white shadow-sm'>
              {/* Calendar Widget */}
              <div className='p-8'>
                <div className='mb-6 overflow-hidden rounded-2xl bg-brand-foundation/5 py-4 text-center border border-brand-foundation/10'>
                  <span className='text-lg font-bold text-brand-foundation'>
                    {new Date().toLocaleString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <div className='grid grid-cols-7 gap-y-4 text-center'>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                    (day) => (
                      <span
                        key={day}
                        className='text-xs font-bold text-gray-900'
                      >
                        {day}
                      </span>
                    ),
                  )}
                  {(() => {
                    const now = new Date()
                    const year = now.getFullYear()
                    const month = now.getMonth()
                    const firstDayOfMonth = new Date(year, month, 1).getDay() // 0 is Sunday
                    const daysInMonth = new Date(year, month + 1, 0).getDate()
                    const currentDay = now.getDate()

                    // Convert to 0=Mon, 6=Sun
                    const startingOffset = (firstDayOfMonth + 6) % 7

                    const cells = []
                    // Add empty cells for the offset
                    for (let i = 0; i < startingOffset; i++) {
                      cells.push(<div key={`empty-${i}`} />)
                    }
                    // Add actual day cells
                    for (let date = 1; date <= daysInMonth; date++) {
                      const isToday = currentDay === date
                      cells.push(
                        <div
                          key={date}
                          className='flex items-center justify-center py-2'
                        >
                          <span
                            className={`inline-flex size-10 items-center justify-center rounded-xl text-sm font-medium transition-colors ${
                              isToday
                                ? 'bg-brand-foundation text-white font-bold shadow-lg shadow-brand-foundation/30'
                                : 'text-gray-900 hover:bg-brand-foundation/5'
                            }`}
                          >
                            {date}
                          </span>
                        </div>,
                      )
                    }
                    return cells
                  })()}
                </div>
              </div>

              {/* Working Hours */}
              <div className='flex flex-col gap-8 p-10 pt-4'>
                <h3 className='font-serif text-3xl font-medium text-gray-900'>
                  Working Hours
                </h3>
                <div className='flex flex-col gap-6'>
                  <div className='flex items-center justify-between border-b border-gray-100 pb-4'>
                    <span className='text-gray-600 font-medium'>
                      Working Days
                    </span>
                    <span className='font-bold text-brand-foundation'>
                      9AM - 9PM
                    </span>
                  </div>
                  <div className='flex items-center justify-between border-b border-gray-100 pb-4'>
                    <span className='text-gray-600 font-medium'>Saturday</span>
                    <span className='font-bold text-brand-foundation'>
                      10AM - 8PM
                    </span>
                  </div>
                  <div className='flex items-center justify-between border-b border-gray-100 pb-4'>
                    <span className='text-gray-600 font-medium'>Sunday</span>
                    <span className='font-bold text-brand-foundation'>
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className='flex flex-col gap-10 rounded-card-large bg-white p-10 text-gray-900 shadow-2xl lg:min-h-[600px] border border-white/20'>
              <h3 className='font-serif text-3xl font-medium text-brand-foundation'>
                We will call you
              </h3>

              <form className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm text-gray-500 font-medium uppercase tracking-wider'>
                    First Name
                  </label>
                  <input
                    type='text'
                    className='border-b border-gray-200 bg-transparent py-2 outline-none transition-colors focus:border-brand-foundation'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm text-gray-500 font-medium uppercase tracking-wider'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    className='border-b border-gray-200 bg-transparent py-2 outline-none transition-colors focus:border-brand-foundation'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm text-gray-500 font-medium uppercase tracking-wider'>
                    Phone
                  </label>
                  <input
                    type='tel'
                    className='border-b border-gray-200 bg-transparent py-2 outline-none transition-colors focus:border-brand-foundation'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm text-gray-500 font-medium uppercase tracking-wider'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='border-b border-gray-200 bg-transparent py-2 outline-none transition-colors focus:border-brand-foundation'
                  />
                </div>

                <div className='mt-4'>
                  <Button
                    size='lg'
                    className='w-full rounded-full bg-brand-foundation px-10 py-7 text-lg font-bold text-white hover:bg-brand-foundation/90 active:scale-95 transition-all shadow-xl shadow-brand-foundation/20'
                  >
                    Confirm Appointment
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Radiance (Keep for social proof) */}
      <section className='py-24 bg-soft-sand lg:py-32'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col gap-20'>
            {/* Header */}
            <div className='flex flex-col items-center gap-6 text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 rounded-full border border-brand-foundation/20 bg-brand-foundation/5 px-5 py-2 text-sm font-bold tracking-wide text-brand-foundation uppercase'
              >
                <RiStarFill className='size-4' />
                Stories of Radiance
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-5xl font-medium text-gray-900 md:text-7xl'
              >
                Shared{' '}
                <span className='text-brand-foundation italic opacity-90'>
                  Journeys
                </span>
              </motion.h2>
            </div>

            {/* Testimonials Grid */}
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='group relative flex h-full flex-col gap-8 rounded-card-large bg-white p-10 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-hover'
                >
                  <div className='flex flex-col gap-6'>
                    <div className='flex gap-1 text-brand-foundation'>
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <RiStarFill key={i} className='size-4' />
                      ))}
                    </div>

                    <div className='relative'>
                      <span className='absolute -top-4 -left-2 text-6xl font-serif text-brand-foundation/10'>
                        &ldquo;
                      </span>
                      <p className='relative z-10 text-base leading-relaxed text-gray-700 font-medium italic text-balance'>
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>

                  <div className='mt-auto flex items-center gap-4 border-t border-gray-50 pt-8'>
                    <div className='flex flex-col gap-1'>
                      <span className='text-xl font-medium text-gray-900'>
                        {testimonial.name}
                      </span>
                      <span className='text-sm font-medium tracking-wide text-brand-foundation opacity-80'>
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Outcomes/Stats - Integrated Layout */}
            <div className='mt-16 pt-16 border-t border-brand-foundation/10'>
              <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={outcome.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className='flex flex-col items-center gap-1 text-center'
                  >
                    <span className='text-4xl font-bold tracking-tight text-brand-foundation md:text-5xl'>
                      {outcome.value}
                    </span>
                    <span className='text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase'>
                      {outcome.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='bg-soft-sand py-24 lg:py-32'>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='relative overflow-hidden rounded-card-giant bg-brand-foundation px-6 py-20 text-center shadow-2xl lg:py-32'
          >
            {/* Subtle Atmospheric Glows */}
            <div className='pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-[100px]' />
            <div className='pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-white/5 blur-[100px]' />

            <div className='relative z-10 flex flex-col items-center gap-12'>
              <div className='flex flex-col gap-4'>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='font-serif text-5xl font-medium leading-tight text-white md:text-7xl'
                >
                  Ready for Your <br />
                  <span className='italic'>Transformation?</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className='mx-auto max-w-xl text-base text-white/80 md:text-lg'
                >
                  Join over 10,000 clients who have discovered their most
                  radiant selves. Book your bespoke session today.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  asChild
                  size='lg'
                  className='h-16 rounded-full bg-white px-12 text-lg text-brand-foundation hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10'
                >
                  <Link href='/bookings'>Book an appointment</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
