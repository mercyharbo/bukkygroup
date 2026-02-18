'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
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

export default function SalonPage() {
  return (
    <main className='relative min-h-screen overflow-hidden bg-zinc-50 selection:bg-primary/20 selection:text-primary dark:bg-zinc-950'>
      {/* Background Glows */}
      <div className='pointer-events-none absolute -top-24 -left-20 size-96 rounded-full bg-primary/20 blur-3xl' />
      <div className='pointer-events-none absolute top-1/2 -right-20 size-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl' />

      <section className='container relative mx-auto flex min-h-screen flex-col items-center justify-center gap-16 px-6 pt-40 pb-12 lg:pt-48 lg:pb-24'>
        {/* Background Decorative Rings/Blobs */}
        <div className='pointer-events-none absolute top-1/2 left-1/2 size-160 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5 dark:border-primary/10' />
        <div className='pointer-events-none absolute top-1/2 left-1/2 size-192 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5 dark:border-primary/5' />

        {/* Content Section - Centered Stack */}
        <div className='relative z-10 flex max-w-5xl flex-col items-center gap-10 text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-bold tracking-widest text-primary uppercase'
          >
            <RiMagicLine className='size-4 animate-pulse' />
            Bukky Beauty World Centurion
          </motion.div>

          <div className='flex flex-col gap-8'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className='font-serif text-5xl font-medium leading-[1.1] text-zinc-900 md:text-7xl lg:text-6xl dark:text-white'
            >
              Where <span className='text-primary italic'>Beauty</span> <br />
              Becomes An <span className='text-primary italic'>Experience</span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className='mx-auto max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400'
            >
              A luxury beauty destination in Centurion dedicated to making you
              look and feel your best. We create experiences that celebrate your
              unique beauty through flawless artistry and expert care.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-col items-center gap-6 sm:flex-row'
          >
            <Button
              asChild
              size='xl'
              className='group h-16 rounded-full px-10 transition-all hover:scale-105 active:scale-95'
            >
              <Link href='/bookings'>
                Book an appointment
                <HiArrowRight className='size-6 transition-transform group-hover:translate-x-1' />
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='xl'
              className='h-16 rounded-full px-10 transition-all active:scale-95'
            >
              <Link href='#services'>View services</Link>
            </Button>
          </motion.div>
        </div>

        {/* Visual Collage - Immersive Arrangement */}
        <div className='relative mt-12 w-full max-w-6xl overflow-visible'>
          <div className='relative grid grid-cols-12 gap-4 lg:gap-8'>
            {/* Main Center Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className='col-span-8 col-start-3 lg:col-span-6 lg:col-start-4'
            >
              <div className='group relative aspect-square overflow-hidden rounded-[4rem] border-8 border-white/50 bg-zinc-100 shadow-2xl transition-all duration-700 hover:rounded-[6rem] dark:border-zinc-900/50 dark:bg-zinc-800'>
                <NextImage
                  src='/gallery (21).jpg'
                  alt='Luxury Salon Experience'
                  fill
                  className='object-cover transition-transform duration-1000 group-hover:scale-110'
                  priority
                />
              </div>
            </motion.div>

            {/* Left Floating Frame */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 1, delay: 0.6 }}
              className='absolute -left-4 top-1/4 z-20 hidden w-1/4 lg:block'
            >
              <div className='aspect-4/5 overflow-hidden rounded-[3rem] border-4 border-white/80 bg-zinc-200 shadow-xl backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900'>
                <NextImage
                  src='/gallery (12).jpg'
                  alt='Salon Detail'
                  fill
                  className='object-cover opacity-80'
                />
              </div>
            </motion.div>

            {/* Right Floating Frame */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 8 }}
              transition={{ duration: 1, delay: 0.7 }}
              className='absolute -right-4 top-1/3 z-20 hidden w-1/4 lg:block'
            >
              <div className='aspect-4/5 overflow-hidden rounded-[3rem] border-4 border-white/80 bg-zinc-200 shadow-xl backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900'>
                <NextImage
                  src='/gallery (2).webp'
                  alt='Nail Artistry'
                  fill
                  className='object-cover opacity-80'
                />
              </div>
            </motion.div>

            {/* Floating Luxury Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute bottom-10 left-10 z-30 hidden rounded-3xl border border-white/20 bg-white/70 p-6 shadow-2xl backdrop-blur-xl lg:block dark:border-zinc-800/50 dark:bg-zinc-900/70'
            >
              <div className='flex items-center gap-4'>
                <div className='size-14 rounded-2xl bg-primary/10 p-3 text-primary'>
                  <HiSparkles className='size-full' />
                </div>
                <div>
                  <div className='text-xl font-bold text-zinc-900 dark:text-white'>
                    10,000+
                  </div>
                  <div className='text-sm text-zinc-500'>Satisfied Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className='absolute top-20 right-10 z-30 hidden rounded-3xl border border-white/20 bg-white/70 p-6 shadow-2xl backdrop-blur-xl lg:block dark:border-zinc-800/50 dark:bg-zinc-900/70'
            >
              <div className='flex items-center gap-4'>
                <div className='size-14 rounded-2xl bg-primary/10 p-3 text-primary'>
                  <RiStarFill className='size-full' />
                </div>
                <div>
                  <div className='text-xl font-bold text-zinc-900 dark:text-white'>
                    5-Star
                  </div>
                  <div className='text-sm text-zinc-500'>Quality Assurance</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Services Section with Solid Highlight */}
      <section
        id='services'
        className='relative overflow-hidden bg-zinc-50 py-24 dark:bg-zinc-950'
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
                className='font-serif text-4xl font-medium text-zinc-900 md:text-6xl dark:text-white'
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
                  <Card className='group h-full border-zinc-200 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 dark:border-zinc-800 dark:bg-zinc-900/40'>
                    <CardHeader>
                      <div className='flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white'>
                        <service.icon className='size-8' />
                      </div>
                      <CardTitle className='mt-5 text-2xl font-bold text-zinc-900 dark:text-white'>
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-8'>
                      <p className='text-lg text-zinc-600 dark:text-zinc-400'>
                        {service.description}
                      </p>
                      <div className='flex flex-col gap-3'>
                        {service.details.map((detail) => (
                          <div
                            key={detail}
                            className='flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400'
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
                  className='h-16 rounded-full bg-white text-xl font-bold text-primary hover:bg-zinc-100'
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
                className='font-serif text-4xl font-medium text-zinc-900 md:text-6xl dark:text-white'
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
                className='group relative aspect-square overflow-hidden rounded-3xl bg-zinc-100 md:rounded-[2.5rem] dark:bg-zinc-800'
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
      <section className='bg-zinc-50 py-24 dark:bg-zinc-900/10'>
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
                  <Card className='flex h-full flex-col gap-6 border-zinc-200 bg-white shadow-xl transition-all hover:border-primary/30 dark:border-zinc-800 dark:bg-zinc-900/50'>
                    <CardHeader>
                      <div className='flex gap-1 text-primary'>
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <RiStarFill key={i} className='size-4' />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className='flex flex-1 flex-col justify-between gap-6'>
                      <p className='text-lg leading-relaxed text-zinc-600 italic dark:text-zinc-400'>
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className='flex flex-col'>
                        <span className='text-xl font-bold text-zinc-900 dark:text-white'>
                          {testimonial.name}
                        </span>
                        <span className='text-sm text-zinc-500'>
                          {testimonial.role}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className='mt-16 grid grid-cols-1 gap-8 border-t border-zinc-200 pt-16 md:grid-cols-3 dark:border-zinc-800'>
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
                  <span className='text-xs font-semibold tracking-widest text-zinc-500 uppercase'>
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
          className='relative overflow-hidden rounded-[3rem] bg-zinc-900 px-6 py-20 text-center shadow-2xl lg:py-32 dark:bg-zinc-900/50'
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
                className='mx-auto max-w-2xl text-lg text-zinc-400 md:text-xl'
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
