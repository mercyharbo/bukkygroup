'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AnimatePresence, motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { RiStarFill } from 'react-icons/ri'
import { SalonServices } from './salon-services'

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
  { src: '/gallery (21).jpg' },
  { src: '/bbw/salon-1.jpeg' },
  { src: '/bbw/salon-2.jpeg' },
  { src: '/bbw/salon-3.jpeg' },
  { src: '/bbw/salon-4.jpeg' },
]

export default function SalonPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const mainImage = galleryImages[currentIndex].src

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className='relative min-h-screen overflow-hidden'>
      {/* Background Glows */}
      <section className='relative min-h-[90vh] w-full pt-32 pb-20 lg:pt-40'>
        {/* Background Landscape Image */}
        <div className='absolute inset-0 z-0'>
          <NextImage
            src='/bbw/bukky-beauty-world.jpeg'
            alt='Bukky Beauty World'
            fill
            className='object-cover'
            priority
          />
          {/* Brand Purple Overlay */}
          <div className='absolute inset-0 bg-black/70 mix-blend-multiply' />
          <div className='absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-black/40' />
        </div>

        <div className='container relative z-10 mx-auto px-5 lg:px-10 h-full'>
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
                    className='font-serif text-5xl md:text-7xl lg:text-5xl 2xl:text-5xl 3xl:text-6xl font-medium tracking-tight text-white leading-[1.1] drop-shadow-2xl'
                  >
                    Beauty Isn&apos;t Just A Service, It&apos;s An{' '}
                    <span className='italic opacity-90'>Experience</span>.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='text-base leading-relaxed text-white drop-shadow-md max-w-xl'
                  >
                    Bukky Beauty World is a luxury, elegant unisex salon under
                    Bukky Group, created to deliver beauty, confidence, and
                    transformation in one refined space. Located in Centurion,
                    it serves as a one-stop beauty destination for hair, nails,
                    makeup, grooming, and total glam experiences. We are more
                    than a salon — we are a sanctuary of elegance, creativity,
                    and self-expression where every client is treated like
                    royalty.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='flex flex-wrap items-center gap-4'
                >
                  <Button
                    asChild
                    size='lg'
                    className='h-14 rounded-full bg-white px-10 text-lg font-semibold text-black hover:bg-white/90 transition-all active:scale-95'
                  >
                    <Link href='/bookings'>Book appointment</Link>
                  </Button>
                  <Button
                    asChild
                    size='lg'
                    variant='outline'
                    className='h-14 rounded-full border-white/20 bg-white/5 px-8 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/30 hover:text-white backdrop-blur-sm transition-all active:scale-95'
                  >
                    <Link
                      href='https://wa.me/27710354040'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2'
                      id='whatsapp-contact-salon'
                    >
                      <FaWhatsapp className='size-6' />
                      <span>WhatsApp</span>
                    </Link>
                  </Button>
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
                          key={img.src}
                          whileHover={{ scale: 1.1, zIndex: 10, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setCurrentIndex(index)}
                          className={`group relative size-14 md:size-16 overflow-hidden rounded-full transition-all duration-300 ${
                            isActive
                              ? 'ring-4 ring-gray-300 ring-offset-2 ring-offset-white/10 z-10'
                              : 'border-0 hover:z-10'
                          } bg-gray-200`}
                        >
                          <NextImage
                            src={img.src}
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

      {/* Who We Are & Mission/Vision Section */}
      <section className='relative overflow-hidden py-10 lg:py-20'>
        <div className='container relative mx-auto px-5 lg:px-10'>
          <div className='grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='flex flex-col gap-10'
            >
              <div className='flex flex-col gap-6'>
                <h2 className='font-serif text-5xl font-medium text-white md:text-6xl'>
                  Who We <span className='italic'>Are</span>
                </h2>
                <div className='flex flex-col gap-6 text-lg leading-relaxed text-zinc-300'>
                  <p>
                    Bukky Beauty World was founded with a simple but powerful
                    vision: to make every client feel seen, celebrated, and
                    exquisitely cared for. With years of excellence and
                    thousands of happy clients, our salon combines modern
                    trends, timeless sophistication, and professional expertise
                    to deliver premium beauty services in a warm and welcoming
                    environment.
                  </p>
                  <p>
                    As a brand proudly led by Bukky Anny — an author,
                    entrepreneur, and founder of Bukky Group — the salon
                    reflects luxury, kindness, and empowerment in every service.
                  </p>
                </div>
              </div>

              <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                <div className='flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8'>
                  <h3 className='font-serif text-2xl font-medium '>
                    Our Mission
                  </h3>
                  <p className='text-sm leading-relaxed text-zinc-400'>
                    To enhance confidence, elegance, and self-love through
                    professional beauty services while empowering our community
                    and creating unforgettable beauty experiences.
                  </p>
                </div>
                <div className='flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8'>
                  <h3 className='font-serif text-2xl font-medium'>
                    Our Vision
                  </h3>
                  <p className='text-sm leading-relaxed text-zinc-400'>
                    To become Africa’s leading luxury beauty destination known
                    for excellence, professionalism, and transformation.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className='relative aspect-square overflow-hidden rounded-card-giant lg:aspect-4/5'
            >
              <NextImage
                src='/gallery (14).jpg'
                alt='Bukky Anny Vision'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-linear-to-t from-brand-foundation/60 to-transparent' />
              <div className='absolute bottom-10 left-10'>
                <p className='font-serif text-3xl font-medium text-white'>
                  Excellence in <br /> Every Detail
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Salon Services & Pricing Section */}
      <SalonServices />

      {/* Booking Section - Precise Match to Attachment */}
      <section
        id='booking'
        className='relative overflow-hidden bg-white py-24 lg:py-32'
      >
        <div className='container relative mx-auto px-5 lg:px-10'>
          <div className='grid grid-cols-1 gap-16 lg:grid-cols-3 lg:items-start'>
            {/* Left Column: Info & Image */}
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-6'>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='font-serif text-5xl font-bold tracking-tight text-black md:text-6xl'
                >
                  Booking
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='text-base leading-relaxed text-black/90'
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
                className='relative aspect-4/3 overflow-hidden rounded-card-large bg-black/10'
              >
                <NextImage
                  src='/bbw/gallery (1).jpg'
                  alt='Booking Experience'
                  fill
                  className='object-cover opacity-90'
                />
              </motion.div>
            </div>

            {/* Middle Column: Calendar & Hours */}
            <div className='flex flex-col gap-0 overflow-hidden rounded-card-large bg-black/5 border border-black/10 shadow-sm'>
              {/* Calendar Widget */}
              <div className='p-8'>
                <div className='mb-6 overflow-hidden rounded-2xl bg-black/5 py-4 text-center border border-black/10'>
                  <span className='text-lg font-bold text-black'>
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
                        className='text-xs font-bold text-gray-600'
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
                                ? 'bg-white text-black font-bold shadow-lg'
                                : 'text-black hover:bg-black/10'
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
                <h3 className='font-serif text-3xl font-medium text-black'>
                  Working Hours
                </h3>
                <div className='flex flex-col gap-6'>
                  <div className='flex items-center justify-between border-b border-black/10 pb-4'>
                    <span className='text-gray-600 font-medium'>
                      Working Days
                    </span>
                    <span className='font-bold text-black'>9AM - 9PM</span>
                  </div>
                  <div className='flex items-center justify-between border-b border-black/10 pb-4'>
                    <span className='text-gray-600 font-medium'>Saturday</span>
                    <span className='font-bold text-black'>10AM - 8PM</span>
                  </div>
                  <div className='flex items-center justify-between border-b border-black/10 pb-4'>
                    <span className='text-gray-600 font-medium'>Sunday</span>
                    <span className='font-bold text-black'>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className='flex flex-col gap-10 rounded-card-large bg-black/5 p-10 text-black shadow-2xl lg:min-h-[600px] border border-black/10'>
              <h3 className='font-serif text-3xl font-medium text-black'>
                We will call you
              </h3>

              <form className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm text-gray-600 font-medium tracking-wider'>
                    First Name
                  </label>
                  <input
                    type='text'
                    className='border-b border-white/20 bg-transparent py-2 outline-none transition-colors focus:border-brand-foundation text-white placeholder:text-zinc-600'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm text-gray-600 font-medium  tracking-wider'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    className='border-b border-white/20 bg-transparent py-2 outline-none transition-colors focus:border-brand-foundation text-white'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm text-gray-600 font-medium  tracking-wider'>
                    Phone
                  </label>
                  <input
                    type='tel'
                    className='border-b border-white/20 bg-transparent py-2 outline-none transition-colors focus:border-brand-foundation text-white'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm text-gray-600 font-medium tracking-wider'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='border-b border-white/20 bg-transparent py-2 outline-none transition-colors focus:border-brand-foundation text-white'
                  />
                </div>

                <div className='mt-4'>
                  <Button
                    size='lg'
                    className='w-full rounded-full bg-black px-10 py-7 text-lg text-white active:scale-95 transition-all shadow-xl'
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
      <section className='py-24 lg:py-20'>
        <div className='container mx-auto px-5 lg:px-10'>
          <div className='flex flex-col gap-14'>
            {/* Header */}
            <div className='flex flex-col items-center gap-5 text-center'>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-5xl font-medium text-white md:text-7xl'
              >
                Shared <span className='italic opacity-90'>Journeys</span>
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
                  className='group relative flex h-full flex-col gap-8 rounded-card-large bg-white/5 border border-gray-600 p-5'
                >
                  <div className='flex flex-col gap-6'>
                    <div className='flex gap-1 text-primary'>
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <RiStarFill key={i} className='size-4' />
                      ))}
                    </div>

                    <div className='relative'>
                      <span className='absolute -top-4 -left-2 text-6xl font-serif text-white/20'>
                        &ldquo;
                      </span>
                      <p className='relative z-10 text-base leading-relaxed text-zinc-300 font-medium italic text-balance'>
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>

                  <div className='mt-auto flex items-center gap-4 border-t border-white/10 pt-8'>
                    <div className='flex flex-col gap-1'>
                      <span className='text-xl font-medium text-white'>
                        {testimonial.name}
                      </span>
                      <span className='text-sm font-medium tracking-wide '>
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className='w-1/2 mx-auto'>
              <Separator className='bg-gray-800 ' />
            </div>

            {/* Why Choose Us & Experience Section */}
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='flex flex-col gap-8 rounded-card-large bg-white/5 border border-gray-600 p-10'
              >
                <h3 className='font-serif text-3xl font-medium text-white'>
                  The Bukky Beauty Experience
                </h3>
                <ul className='flex flex-col gap-4'>
                  {[
                    'Customized beauty consultations',
                    'VIP packages and bridal sessions',
                    'Relaxing ambience with luxury care',
                    'Family-friendly and inclusive space',
                    'On-site and home glam services',
                  ].map((item) => (
                    <li
                      key={item}
                      className='flex items-center gap-3 text-zinc-300'
                    >
                      <div className='size-1.5 rounded-full bg-white' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className='text-sm italic text-gray-600'>
                  Our space is designed to be comfortable, classy, and welcoming
                  to all races, all ages, and all beauty styles.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='flex flex-col gap-8 rounded-card-large bg-brand-foundation/5 border border-gray-600 p-10'
              >
                <h3 className='font-serif text-3xl font-medium text-white'>
                  Why Clients Choose Us
                </h3>
                <ul className='flex flex-col gap-4'>
                  {[
                    'Luxury and classy environment',
                    'Professional and caring staff',
                    'Fast, quality service',
                    'Inclusive beauty for all',
                    'A brand that celebrates confidence and elegance',
                  ].map((item) => (
                    <li
                      key={item}
                      className='flex items-center gap-3 text-zinc-300 font-medium'
                    >
                      <RiStarFill className='size-4 text-primary' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className='mt-auto font-serif text-xl italic text-white text-balance'>
                  &ldquo;Bukky Beauty World is not just about looking beautiful
                  — it is about feeling powerful, confident, and glowing.&rdquo;
                </p>
              </motion.div>
            </div>

            {/* Outcomes/Stats - Integrated Layout */}
            <div className='pt-16 border-t border-white/10'>
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
                    <span className='text-4xl font-bold tracking-tight text-white md:text-5xl'>
                      {outcome.value}
                    </span>
                    <span className='text-xs font-bold tracking-[0.2em] text-gray-300 uppercase'>
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
      <section className='py-14 lg:py-24'>
        <div className='container mx-auto px-5 lg:px-10'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='relative overflow-hidden rounded-card-giant bg-white px-6 py-20 text-center shadow-2xl lg:py-32'
          >
            {/* Subtle Atmospheric Glows */}
            <div className='pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-black/10 blur-[100px]' />
            <div className='pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-black/5 blur-[100px]' />

            <div className='relative z-10 flex flex-col items-center gap-12'>
              <div className='flex flex-col gap-4'>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='font-serif text-5xl font-medium leading-tight text-black md:text-7xl'
                >
                  Ready for Your <br />
                  <span className='italic'>Transformation?</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className='mx-auto max-w-xl text-base text-gray-600 md:text-lg'
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
                  className='h-16 rounded-full bg-black hover:bg-black/80 px-12 text-lg text-white hover:scale-105 active:scale-95 transition-all'
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
