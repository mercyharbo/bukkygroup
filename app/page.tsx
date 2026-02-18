'use client'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'
import {
  RiDoubleQuotesL,
  RiEyeLine,
  RiHandHeartLine,
  RiInstagramLine,
  RiMagicLine,
  RiMentalHealthLine,
  RiQuillPenLine,
  RiScissors2Line,
  RiStarFill,
  RiWaterFlashLine,
} from 'react-icons/ri'
import { Marquee } from '../components/marquee'

const services = [
  {
    title: 'Hairstyling',
    description: 'Expert cutting, styling, and specialized hair treatments.',
    details: ['Braids & Wigs', 'Wig Installation', 'Hair Treatments'],
    icon: RiScissors2Line,
  },
  {
    title: 'Nailcare',
    description: 'Professional manicures and artistic nail consultations.',
    details: ['Gel & Acrylic', 'Sculpted Nails', 'Hand & Foot Care'],
    icon: RiHandHeartLine,
  },
  {
    title: 'Makeup',
    description: 'Professional makeup for weddings and events.',
    details: ['Bridal Makeup', 'Home Services', 'Event Glam'],
    icon: RiMagicLine,
  },
  {
    title: 'Brows & Lashes',
    description: 'Enhance your eyes with precision extensions and shaping.',
    details: ['Lash Extensions', 'Microblading', 'Brow Tinting'],
    icon: RiEyeLine,
  },
  {
    title: 'Waxing',
    description: 'Full-body and targeted smooth waxing services.',
    details: ['Full Body Waxing', 'Targeted Areas', 'Specialized Care'],
    icon: RiWaterFlashLine,
  },
  {
    title: 'Massage',
    description: 'Therapeutic wellness for complete body relaxation.',
    details: ['Full Body Massage', 'Targeted Relief', 'Stress Recovery'],
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

const brands = [
  {
    name: 'Bukky Fashion',
    description: 'Bespoke couture and contemporary style collections.',
    link: '/fashion',
  },
  {
    name: 'Bukky Catering',
    description: 'Exquisite culinary experiences for every occasion.',
    link: '/catering',
  },
  {
    name: 'Bukky Academy',
    description:
      'Empowering the next generation of beauty and fashion experts.',
    link: '/academy',
  },
  {
    name: 'Bukky Author',
    description: 'Inspirational literature on beauty, vision, and growth.',
    link: '/about',
  },
]

const updateItems = [
  {
    text: 'New Book "THE FLAGS" Now Available',
    link: 'https://www.instagram.com/3sbooks', // Placeholder link
  },
  { text: 'Bukky Fashion Week Coming Soon' },
  { text: 'Academy Fall Enrollment Open' },
  { text: 'Exquisite Catering Menus Released' },
  { text: 'Experience the Bukky Ecosystem' },
]

export default function Home() {
  return (
    <main className='relative min-h-screen overflow-hidden bg-zinc-50 selection:bg-primary/20 selection:text-primary dark:bg-zinc-950'>
      {/* Background Glows */}
      <div className='pointer-events-none absolute -top-24 -left-20 size-96 rounded-full bg-primary/20 blur-3xl' />
      <div className='pointer-events-none absolute top-1/2 -right-20 size-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl' />

      <section className='container relative mx-auto flex min-h-screen flex-col items-center justify-center gap-16 px-6 pt-32 pb-20 lg:flex-row lg:pt-20'>
        {/* Left Content */}
        <div className='relative z-10 flex flex-1 flex-col gap-6 text-center lg:text-left'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary lg:self-start'
          >
            <span className='relative flex size-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75'></span>
              <span className='relative inline-flex size-2 rounded-full bg-primary'></span>
            </span>
            Experience Ultimate Luxury
          </motion.div>

          <div className='flex flex-col gap-6'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='font-serif text-4xl font-medium leading-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white'
            >
              Elevate Your <span className='text-primary italic'>Beauty</span>,
              Define Your{' '}
              <span className='text-primary italic'>Confidence</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='mx-auto max-w-2xl text-base leading-relaxed text-zinc-600 md:text-xl lg:mx-0 dark:text-zinc-400'
            >
              Discover a sanctuary of elegance where personalized care meets
              master craftsmanship. At{' '}
              <span className='font-semibold text-zinc-900 dark:text-white'>
                Bukky Salon
              </span>
              , we nurture your radiance from the inside out, providing a
              premium wellness experience that transitons your style.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-col items-center gap-4 sm:flex-row lg:justify-start'
          >
            <Link
              href='/bookings'
              className='group flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-primary/90 active:scale-95'
            >
              Book an Appointment
              <HiArrowRight className='size-5 transition-transform group-hover:translate-x-1' />
            </Link>
            <Link
              href='/salon'
              className='flex h-14 items-center justify-center rounded-full border border-zinc-200 bg-white px-8 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-50 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:hover:bg-zinc-800'
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Visual Composition */}
        <div className='relative flex-1 lg:mt-0'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative'
          >
            {/* Main Image Container with blob-like mask */}
            <div className='relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-4xl bg-zinc-200 shadow-2xl dark:bg-zinc-800'>
              <div className='absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-transparent' />
              {/* Image Placeholder */}
              <div className='relative flex h-full w-full items-center justify-center text-zinc-400'>
                <NextImage
                  src='/gallery (21).jpg'
                  alt='Luxury Salon'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </div>

            {/* Floating Stats/Badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className='absolute -top-6 -right-6 rounded-2xl border border-white/20 bg-white/70 p-4 shadow-xl backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-900/70'
            >
              <div className='text-xs font-semibold text-primary capitalize tracking-wider'>
                Satisfied
              </div>
              <div className='text-2xl font-bold text-zinc-900 dark:text-white'>
                1.5k+ Clients
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className='absolute -bottom-6 -left-6 rounded-2xl border border-white/20 bg-white/70 p-4 shadow-xl backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-900/70'
            >
              <div className='flex items-center gap-3'>
                <div className='size-10 rounded-full bg-primary/10 p-2 text-primary'>
                  <HiArrowRight className='size-full -rotate-45' />
                </div>
                <div>
                  <div className='text-sm font-bold text-zinc-900 dark:text-white'>
                    Premium Care
                  </div>
                  <div className='text-xs text-zinc-500'>
                    Skin & Hair Mastery
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Signature Services Section */}
      <section className='container mx-auto px-6 py-24'>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-4 text-center lg:text-left'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary lg:self-start'
            >
              <HiSparkles className='size-4' />
              Our Excellence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='font-serif text-3xl font-medium text-zinc-900 md:text-5xl dark:text-white'
            >
              Signature <span className='text-primary italic'>Services</span>
            </motion.h2>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 dark:border-zinc-800 dark:bg-zinc-900/50'
              >
                <div className='flex h-full flex-col gap-6'>
                  <div className='flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white'>
                    <service.icon className='size-7' />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl font-bold text-zinc-900 dark:text-white'>
                      {service.title}
                    </h3>
                    <p className='text-zinc-600 dark:text-zinc-400'>
                      {service.description}
                    </p>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {service.details.map((detail) => (
                      <span
                        key={detail}
                        className='rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400'
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visionary Section */}
      <section className='container mx-auto px-6 py-24'>
        <div className='flex flex-col items-center gap-16 lg:flex-row-reverse'>
          {/* Portrait Image */}
          <div className='relative flex-1'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className='relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-zinc-200 shadow-2xl dark:bg-zinc-800'
            >
              <div className='absolute inset-0 bg-linear-to-t from-primary/30 via-transparent to-transparent' />
              {/* Image Placeholder */}
              <div className='flex h-full w-full items-center justify-center text-zinc-400'>
                <p className='text-sm italic'>[Portrait: Bukky Anny]</p>
              </div>

              {/* Founder Tag */}
              <div className='absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-md'>
                <div className='text-xs font-semibold text-white/70 uppercase tracking-widest'>
                  The Heart of Bukky Group
                </div>
                <div className='text-xl font-bold text-white'>Bukky Anny</div>
              </div>
            </motion.div>
          </div>

          {/* Visionary Content */}
          <div className='flex flex-1 flex-col gap-8 text-center lg:text-left'>
            <div className='flex flex-col gap-4'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary lg:self-start'
              >
                <RiQuillPenLine className='size-4' />
                Founder & Visionary
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-3xl font-medium text-zinc-900 md:text-5xl dark:text-white'
              >
                Empowering Through{' '}
                <span className='text-primary italic'>Innovation</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='flex flex-col gap-6 text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400'
            >
              <p>
                As a visionary entrepreneur and author, I have dedicated my life
                to shaping futures through beauty, fashion, and education. Bukky
                Group is the realization of a dream to create a sanctuary where
                every individual can discover their inner radiance.
              </p>
              <p>
                Our mission transcends aesthetics; we are here to nurture
                confidence and inspire a legacy of excellence in everything we
                do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='flex flex-col items-center gap-4 sm:flex-row lg:justify-start'
            >
              <Link
                href='/about'
                className='group flex h-14 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-50 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:hover:bg-zinc-800'
              >
                Read Full Story
                <HiArrowRight className='size-5 transition-transform group-hover:translate-x-1' />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Couture Portfolio Section */}
      <section className='container mx-auto px-6 py-24'>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
            <div className='flex flex-col gap-4 text-center md:text-left'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary md:self-start'
              >
                <RiInstagramLine className='size-4' />
                Couture Portfolio
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-3xl font-medium text-zinc-900 md:text-5xl dark:text-white'
              >
                Visual <span className='text-primary italic'>Masterpieces</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href='https://www.instagram.com/bukkybeautyworld'
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center gap-2 text-lg font-bold text-zinc-900 transition-colors hover:text-primary dark:text-white'
              >
                Follow @bukkybeautyworld
                <HiArrowRight className='size-5 transition-transform group-hover:translate-x-1' />
              </Link>
            </motion.div>
          </div>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6'>
            {portfolioImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className='group relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 md:rounded-3xl dark:bg-zinc-800'
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
                  <span className='text-sm font-serif italic text-white'>
                    view work
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Experiences (Testimonials) Section */}
      <section className='container mx-auto px-6 py-24'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary'
            >
              <RiStarFill className='size-4' />
              Client Experiences
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='font-serif text-3xl font-medium text-zinc-900 md:text-5xl dark:text-white'
            >
              Stories of <span className='text-primary italic'>Radiance</span>
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
                className='relative flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-white/50 p-8 shadow-xl backdrop-blur-sm transition-all hover:border-primary/30 dark:border-zinc-800 dark:bg-zinc-900/50'
              >
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-1 text-primary'>
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <RiStarFill key={i} className='size-4' />
                    ))}
                  </div>
                  <div className='relative'>
                    <RiDoubleQuotesL className='absolute -top-2 -left-2 size-8 text-primary/10' />
                    <p className='relative z-10 text-lg leading-relaxed text-zinc-600 italic dark:text-zinc-400'>
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <span className='text-xl font-bold text-zinc-900 dark:text-white'>
                    {testimonial.name}
                  </span>
                  <span className='text-sm text-zinc-500'>
                    {testimonial.role}
                  </span>
                </div>
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
                <span className='text-4xl font-bold text-primary md:text-5xl'>
                  {outcome.value}
                </span>
                <span className='text-sm font-semibold tracking-widest text-zinc-500 uppercase'>
                  {outcome.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* The Ecosystem (Family of Brands) Section */}
      <section className='container mx-auto px-6 py-24'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary'
            >
              Family of Brands
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='font-serif text-3xl font-medium text-zinc-900 md:text-5xl dark:text-white'
            >
              The Bukky <span className='text-primary italic'>Ecosystem</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400'
            >
              A multi-dimensional mission to empower through beauty, fashion,
              cuisine, and education. Discover the branches of our legacy.
            </motion.p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='group relative flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 dark:border-zinc-800 dark:bg-zinc-900/50'
              >
                <div className='flex flex-col gap-3'>
                  <h3 className='text-2xl font-bold text-zinc-900 dark:text-white'>
                    {brand.name}
                  </h3>
                  <p className='text-sm leading-relaxed text-zinc-600 dark:text-zinc-400'>
                    {brand.description}
                  </p>
                </div>
                <Link
                  href={brand.link}
                  className='text-sm font-bold text-primary transition-colors hover:text-primary/80'
                >
                  Discover Brand →
                </Link>
              </motion.div>
            ))}
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
          {/* Background Decorative Element */}
          <div className='pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/20 blur-3xl' />
          <div className='pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-primary/10 blur-3xl' />

          <div className='relative z-10 flex flex-col items-center gap-10'>
            <div className='flex flex-col gap-4'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-primary'
              >
                Limited Availability
              </motion.div>
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
                Join over 1,500 clients who have discovered their most radiant
                selves. Book your bespoke session today.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='flex flex-col items-center gap-4 sm:flex-row'
            >
              <Link
                href='/bookings'
                className='group flex h-16 items-center justify-center gap-2 rounded-full bg-primary px-10 text-xl font-bold text-white transition-all hover:scale-105 hover:bg-primary/90 active:scale-95'
              >
                Secure Your Appointment
                <HiArrowRight className='size-5 transition-transform group-hover:translate-x-1' />
              </Link>
              <Link
                href='/salon'
                className='flex h-16 items-center justify-center rounded-full border border-white/10 bg-white/5 px-10 text-xl font-bold text-white transition-all hover:bg-white/10 active:scale-95 backdrop-blur-md'
              >
                View Service Menu
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Brand Updates Pulse */}
      <Marquee items={updateItems} className='z-20' />
    </main>
  )
}
