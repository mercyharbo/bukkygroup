'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatePresence, motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'
import {
  RiEyeLine,
  RiHandHeartLine,
  RiInstagramLine,
  RiMagicLine,
  RiMentalHealthLine,
  RiScissors2Line,
  RiStarFill,
  RiWaterFlashLine,
} from 'react-icons/ri'

const services = [
  {
    title: 'Hairstyling',
    description: 'Bespoke hair artistry centered on your unique identity.',
    details: [
      'Braids, Dreads, Wigs, and Weaves',
      'Expert Cutting, Styling, and Treatments',
      'Twists, Gel Pack, Wig Installation',
    ],
    icon: RiScissors2Line,
  },
  {
    title: 'Nailcare',
    description: 'Professional care for flawless hands and feet.',
    details: [
      'Manicures and Pedicures',
      'Gel, Acrylic, and Sculpted Nails',
      'Nail Art & Consultations',
    ],
    icon: RiHandHeartLine,
  },
  {
    title: 'Makeup',
    description: 'Stunning artistry for your most important moments.',
    details: [
      'Weddings, Photoshoots, Special Events',
      'Professional Glam',
      'Home Services Available',
    ],
    icon: RiMagicLine,
  },
  {
    title: 'Brows & Lashes',
    description: 'Precision enhancement for captivting eyes.',
    details: [
      'Eyelash Extensions and Fills',
      'Microblading & Brow Shaping',
      'Brow Tinting',
    ],
    icon: RiEyeLine,
  },
  {
    title: 'Waxing',
    description: 'Silky smooth skin with professional care.',
    details: [
      'Full-Body Waxing',
      'Targeted Services',
      'Specialized Waxing Care',
    ],
    icon: RiWaterFlashLine,
  },
  {
    title: 'Massage',
    description: 'Complete body relaxation and stress recovery.',
    details: [
      'Full-Body Massaging Services',
      'Targeted Wellness',
      'Stress Relief Therapy',
    ],
    icon: RiMentalHealthLine,
  },
]

const portfolioImages = [
  { src: '/gallery (12).jpg', category: 'Hair Artistry' },
  { src: '/gallery (2).webp', category: 'Nail Couture' },
  { src: '/gallery (13).jpg', category: 'Bridal Glam' },
  { src: '/gallery (6).jpg', category: 'Precision Cut' },
  { src: '/gallery (15).jpg', category: 'Color Mastery' },
  { src: '/gallery (14).jpg', category: 'Esthetic Glow' },
  { src: '/gallery (9).jpg', category: 'Smooth Finish' },
  { src: '/gallery (10).jpg', category: 'Lash Design' },
  { src: '/gallery (16).jpg', category: 'Zen Therapy' },
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

            {/* Right Image */}
            <div className='relative flex flex-1 items-center justify-center order-1 lg:order-2 w-full lg:w-auto min-h-[500px] lg:min-h-0'>
              <div className='relative aspect-4/5 w-full max-w-[500px] overflow-hidden rounded-4xl lg:rounded-[4rem]'>
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

      {/* Signature Services Section with Solid Highlight */}
      <section
        id='services'
        className='relative overflow-hidden bg-gray-900/50 py-24'
      >
        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col gap-4 text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary'
              >
                <HiSparkles className='size-4' />
                Nurture Your Radiance
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-4xl font-medium text-white md:text-6xl'
              >
                Signature <span className='text-primary italic'>Services</span>
              </motion.h2>
            </div>

            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='h-full'
                >
                  <Card className='group h-full border-white/10 bg-gray-900/40 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5'>
                    <CardHeader>
                      <div className='flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white'>
                        <service.icon className='size-8' />
                      </div>
                      <CardTitle className='mt-5 text-2xl font-bold text-white'>
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-8'>
                      <p className='text-lg text-gray-300'>
                        {service.description}
                      </p>
                      <div className='flex flex-col gap-3'>
                        {service.details.map((detail) => (
                          <div
                            key={detail}
                            className='flex items-center gap-2 text-sm text-gray-400'
                          >
                            <div className='size-1 rounded-full bg-primary' />
                            {detail}
                          </div>
                        ))}
                      </div>
                      <Button
                        asChild
                        variant='outline'
                        className='mt-auto w-full transition-all group-hover:bg-primary group-hover:text-white'
                      >
                        <Link href='/bookings'>Book an appointment</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Highlight (Solid Primary Color Section) */}
      <section className='relative overflow-hidden bg-primary py-24 text-white dark:bg-primary'>
        <div className='pointer-events-none absolute -top-40 -left-40 size-160 rounded-full bg-white/10 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-40 -right-40 size-160 rounded-full bg-white/5 blur-3xl' />

        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col items-center gap-12 text-center lg:flex-row lg:text-left'>
            <div className='flex flex-1 flex-col gap-6'>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='font-serif text-4xl font-medium md:text-6xl text-white'
              >
                Experience the <br />
                <span className='italic opacity-80'>Ultra-Luxury</span> Standard
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='max-w-xl text-lg opacity-90 md:text-xl text-white/90'
              >
                From professional makeup for weddings and photoshoots to
                specialized hairstyling and deep treatments, every session is a
                masterpiece in care.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  asChild
                  size='xl'
                  className='h-16 rounded-full bg-white text-xl font-bold text-primary hover:bg-gray-100'
                >
                  <Link href='/bookings'>Book an appointment</Link>
                </Button>
              </motion.div>
            </div>

            <div className='grid flex-1 grid-cols-2 gap-4 lg:grid-cols-2'>
              {[
                {
                  label: 'Weekend Perks',
                  text: 'Free champagne on request at the salon (Saturdays & Sundays).',
                },
                {
                  label: 'Luxury Products',
                  text: 'We exclusively use premium brands for lasting results and gentle care.',
                },
                {
                  label: 'Relaxing Ambience',
                  text: 'Curated music, aromatherapy, and plush seating create a calming escape.',
                },
                {
                  label: 'On-Site Services',
                  text: 'We bring our glam to you, for weddings, shoots, and elite bookings.',
                },
                {
                  label: 'Kid Friendly',
                  text: "Kids' corner with toys and snacks, plus full wheelchair access.",
                },
                {
                  label: 'Customized Consults',
                  text: 'Every service begins with a one-on-one consultation to understand your needs.',
                },
                {
                  label: 'Exclusive VIP',
                  text: 'Tailored experiences for our most discerning guests. Available by request.',
                },
                {
                  label: 'Bridal Trials',
                  text: "Flawless isn't a maybe, we perfect your look before the big day.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className='flex flex-col gap-2 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/20'
                >
                  <span className='text-lg font-bold leading-tight'>
                    {item.label}
                  </span>
                  <span className='text-sm opacity-80 leading-relaxed'>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Couture Portfolio Section (Keep for visual proof) */}
      <section className='container mx-auto px-6 py-24'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
            <div className='flex flex-col gap-4 text-center md:text-left'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary md:self-start'
              >
                <RiInstagramLine className='size-4' />
                Visual Evidence
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-4xl font-medium text-white md:text-6xl'
              >
                The Art of{' '}
                <span className='text-primary italic'>Transformation</span>
              </motion.h2>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8'>
            {portfolioImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className='group relative aspect-square overflow-hidden rounded-3xl bg-gray-800 md:rounded-[2.5rem]'
              >
                <NextImage
                  src={item.src}
                  alt={item.category}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                  sizes='(max-width: 768px) 50vw, 33vw'
                />
                <div className='absolute inset-0 flex flex-col items-center justify-center gap-2 bg-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <span className='rounded-full bg-white/20 px-4 py-1 text-xs font-bold text-white backdrop-blur-md'>
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Radiance (Keep for social proof) */}
      <section className='bg-gray-950/20 py-24'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col items-center gap-4 text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary'
              >
                <RiStarFill className='size-4' />
                Client Testimonials
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-4xl font-medium text-zinc-900 md:text-6xl dark:text-white'
              >
                Shared <span className='text-primary italic'>Journeys</span>
              </motion.h2>
            </div>

            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='h-full'
                >
                  <Card className='flex h-full flex-col gap-6 border-white/10 bg-gray-900/40 shadow-xl transition-all hover:border-primary/30'>
                    <CardHeader>
                      <div className='flex gap-1 text-primary'>
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <RiStarFill key={i} className='size-4' />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className='flex flex-1 flex-col justify-between gap-6'>
                      <p className='text-lg leading-relaxed text-gray-300 italic'>
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className='flex flex-col'>
                        <span className='text-xl font-bold text-white'>
                          {testimonial.name}
                        </span>
                        <span className='text-sm text-gray-400'>
                          {testimonial.role}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className='mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-16 md:grid-cols-3'>
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='flex flex-col items-center gap-2 text-center'
                >
                  <span className='text-5xl font-bold text-primary'>
                    {outcome.value}
                  </span>
                  <span className='text-xs font-semibold tracking-widest text-gray-400 uppercase'>
                    {outcome.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='container mx-auto px-6 py-24'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className='relative overflow-hidden rounded-[3rem] bg-gray-950/40 px-6 py-20 text-center shadow-2xl lg:py-32'
        >
          <div className='pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/20 blur-3xl' />
          <div className='pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-primary/10 blur-3xl' />

          <div className='relative z-10 flex flex-col items-center gap-10'>
            <div className='flex flex-col gap-4'>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-4xl font-medium leading-tight text-white md:text-6xl'
              >
                Ready for Your <br />
                <span className='text-primary italic'>Transformation?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='mx-auto max-w-2xl text-lg text-gray-400 md:text-xl'
              >
                Join over 10,000 clients who have discovered their most radiant
                selves. Book your bespoke session today.
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
                className='h-16 rounded-full px-10 text-xl font-bold transition-all hover:scale-105 active:scale-95'
              >
                <Link href='/bookings'>Book an appointment</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
