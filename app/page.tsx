'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import {
  FaBookOpen,
  FaFacebookF,
  FaGem,
  FaGraduationCap,
  FaHeart,
  FaInstagram,
  FaPalette,
  FaRocket,
  FaShieldAlt,
  FaSpotify,
  FaStar,
  FaTelegramPlane,
  FaTshirt,
  FaUsers,
  FaUtensils,
  FaWhatsapp,
} from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi2'
import { RiQuillPenLine } from 'react-icons/ri'

const flagshipBrands = [
  {
    name: 'Bukky Beauty World',
    tagline: 'Luxury Beauty & Wellness',
    description:
      'Empowering confidence through hair, makeup, nails & total glam experiences.',
    link: '/salon',
    cardColor: '#A32CC4',
    icon: 'Sparkles',
  },
  {
    name: '3S The Label',
    tagline: 'Fashion & Couture House',
    description:
      'Bold, bossy, classy designs redefining elegance and identity.',
    link: '/fashion',
    cardColor: '#FF8C00',
    icon: 'Tshirt',
  },
  {
    name: '3S Glam',
    tagline: 'Makeup Artistry & Face Glam Studio',
    description:
      'Professional glam artistry with precision, confidence and glow.',
    link: '/glam',
    cardColor: '#C5A028',
    icon: 'Palette',
  },
  {
    name: '3S College',
    tagline: 'Education & Skill Development',
    description:
      'Training future leaders in beauty, fashion, business, and entrepreneurship.',
    link: '/college',
    cardColor: '#004d00',
    icon: 'GraduationCap',
  },
  {
    name: '3S Restaurant',
    tagline: 'Hospitality & Culinary Excellence',
    description:
      'Premium dining experience blending culture, luxury and flavor.',
    link: '/restaurant',
    cardColor: '#C5A028',
    icon: 'Utensils',
  },
  {
    name: '3S Books',
    tagline: 'Publishing & Storytelling',
    description:
      'Inspiring global minds through powerful stories and transformational books.',
    link: '/books',
    cardColor: '#004d00',
    icon: 'BookOpen',
  },
  {
    name: 'JULY 18 COSMETICS',
    tagline: 'Luxury Cosmetic Brand',
    description:
      'High-quality beauty products designed for royalty confidence.',
    link: '/cosmetics',
    cardColor: '#AF69EF',
    icon: 'Gem',
  },
  {
    name: 'Get Busy Foundation Africa',
    tagline: 'Youth Empowerment & Safe Haven Initiative',
    description:
      'Empowering teens and women through mentorship, education and safe spaces.',
    link: '/foundation',
    cardColor: '#C5A028',
    icon: 'Heart',
  },
]

export default function Home() {
  return (
    <main className='relative min-h-screen overflow-hidden selection:bg-brand-gold/30 selection:text-brand-gold '>
      {/* Background Glows - Gold & Silver Metallic focus */}
      <div className='pointer-events-none absolute -top-24 -left-20 size-96 rounded-full bg-brand-gold/15 blur-3xl transition-colors duration-1000' />
      <div className='pointer-events-none absolute top-1/2 -right-20 size-96 -translate-y-1/2 rounded-full bg-brand-silver/10 blur-3xl transition-colors duration-1000' />
      <div className='pointer-events-none absolute bottom-0 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand-accent-gold/10 blur-3xl transition-colors duration-1000' />

      {/* Hero Section */}
      <section className='container relative mx-auto px-5 lg:px-10 flex min-h-screen flex-col items-center justify-center gap-16 pt-56 pb-12 lg:flex-row lg:pt-64 lg:pb-20'>
        <div className='relative z-10 flex w-full flex-col gap-8 text-center lg:flex-1 lg:text-left'>
          <div className='flex flex-col gap-8'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='bg-linear-to-br from-brand-gold via-white to-brand-accent-gold bg-clip-text text-4xl font-extrabold leading-[1.1] tracking-tight text-transparent md:text-5xl lg:text-6xl/tight'
            >
              Building <span className='italic'>Dreams</span>, Creating{' '}
              <span className='italic'>Opportunities</span>, & Touching{' '}
              <span className='italic'>Lives</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='mx-auto max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl lg:mx-0'
            >
              At Bukky Group, we exist to enrich lives and inspire growth
              through excellence. We are building a movement that inspires and
              transforms—empowering individuals and leaving a legacy that speaks
              of resilience, kindness, and excellence in everything we do.
            </motion.p>
          </div>

          {/* Social Icons instead of Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex items-center justify-center gap-3 lg:justify-start'
          >
            {[
              {
                icon: FaInstagram,
                color: 'text-brand-gold',
                bg: 'bg-brand-gold/10',
              },
              {
                icon: FaSpotify,
                color: 'text-brand-silver',
                bg: 'bg-brand-silver/10',
              },
              {
                icon: FaFacebookF,
                color: 'text-brand-gold',
                bg: 'bg-brand-gold/10',
              },
              {
                icon: FaWhatsapp,
                color: 'text-brand-silver',
                bg: 'bg-brand-silver/10',
              },
              {
                icon: FaTelegramPlane,
                color: 'text-brand-gold',
                bg: 'bg-brand-gold/10',
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href='#'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  'flex size-10 items-center justify-center rounded-lg border border-brand-gold/20 transition-colors',
                  social.bg,
                  social.color,
                )}
              >
                <social.icon className='size-5' />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual - Enhanced Asymmetric Grid */}
        <div className='relative flex h-[500px] w-full items-center justify-center sm:h-[600px] lg:flex-1'>
          {/* Dot Patterns - More accurate to design */}
          <div className='absolute -top-12 -right-8 z-20 opacity-30 lg:-right-2'>
            <div className='grid grid-cols-12 gap-2'>
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className='size-1 rounded-full bg-gray-400' />
              ))}
            </div>
          </div>

          <div className='grid w-full max-w-2xl grid-cols-2 gap-6'>
            {/* Column 1 */}
            <div className='flex flex-col gap-6'>
              {/* Image 1: Square */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='relative aspect-square w-full overflow-hidden rounded-card-large shadow-2xl transition-transform hover:scale-105'
              >
                <NextImage
                  src='/foundationn (1).jpg'
                  alt='Bukky Beauty World - Salon'
                  fill
                  className='object-cover'
                />
              </motion.div>

              {/* Image 3: Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='relative aspect-3/4 w-full overflow-hidden rounded-card-large shadow-xl transition-transform hover:scale-105'
              >
                <NextImage
                  src='/founder.jpeg'
                  alt='3SBOOKS'
                  fill
                  className='object-cover'
                />
              </motion.div>
            </div>

            {/* Column 2 - Staggered */}
            <div className='flex flex-col gap-6 pt-12'>
              {/* Image 2: Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='relative aspect-3/4 w-full overflow-hidden rounded-card-large shadow-xl transition-transform hover:scale-105'
              >
                <NextImage
                  src='/foundationn (3).jpg'
                  alt='Founder'
                  fill
                  className='object-cover'
                />
              </motion.div>

              {/* Image 4: Square */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className='relative aspect-square w-full overflow-hidden rounded-card-large shadow-2xl transition-transform hover:scale-105'
              >
                <NextImage
                  src='/foundationn (2).jpg'
                  alt='Bukky Group Academy'
                  fill
                  className='object-cover'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section
        className='relative mt-12 overflow-hidden bg-zinc-800/20 py-24 md:py-32'
        id='about'
      >
        <div className='pointer-events-none absolute -right-24 top-0 size-128 rounded-full bg-brand-gold/5 blur-3xl' />
        <div className='pointer-events-none absolute -left-24 bottom-0 size-128 rounded-full bg-brand-silver/5 blur-3xl' />

        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col items-center gap-16 lg:flex-row'>
            <div className='relative w-full lg:flex-1'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-[3rem] border border-brand-gold/30 bg-zinc-950 shadow-2xl'
              >
                <div className='absolute inset-0 bg-linear-to-t from-brand-gold/30 via-transparent to-transparent' />
                <NextImage
                  src='/founder1.jpeg'
                  alt='Bukky Anny'
                  fill
                  className='object-cover transition-transform duration-700 hover:scale-105'
                />
                <div className='absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-black/40 p-6 shadow-xl backdrop-blur-md'>
                  <div className='text-xs font-semibold text-brand-gold uppercase tracking-widest'>
                    The Visionary
                  </div>
                  <div className='text-2xl font-bold bg-linear-to-r from-brand-gold to-white bg-clip-text text-transparent'>
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
                  Our Mission & Vision
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='font-serif text-3xl font-medium text-white md:text-5xl'
                >
                  More Than Just a{' '}
                  <span className='bg-linear-to-r from-brand-gold to-brand-accent-gold bg-clip-text italic text-transparent'>
                    Business
                  </span>{' '}
                  — A{' '}
                  <span className='bg-linear-to-r from-brand-gold to-brand-accent-gold bg-clip-text italic text-transparent'>
                    Movement
                  </span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='flex flex-col gap-6 text-lg leading-relaxed text-zinc-300'
              >
                <p>
                  At Bukky Group, our mission goes beyond running businesses,
                  it’s about building dreams, creating opportunities, and
                  touching lives in meaningful ways.
                </p>
                <p>
                  We exist to enrich lives and inspire growth through excellence
                  in beauty, fashion, lifestyle, culinary, and education. Every
                  service we offer, every product we create, and every
                  initiative we launch is rooted in our belief that people
                  deserve more than just transactions, they deserve experiences
                  that make them feel valued, confident, and empowered.
                </p>
                <p>
                  We are committed to innovation that keeps us ahead,
                  inclusivity that embraces every individual regardless of race
                  or background, and integrity that guides every decision we
                  make. Through our work, we aim to empower individuals,
                  strengthen communities, and leave a legacy that speaks of
                  resilience, kindness, and excellence.
                </p>
                <p>
                  At Bukky Group, we believe that success is not just in the
                  results, but in the love, resilience, and courage we pour into
                  every step. We are not just building businesses, we are
                  building a movement that inspires and transforms.
                </p>
                <p>
                  And as we grow, we promise to keep our doors open to new
                  ideas, our hands extended in service, and our hearts committed
                  to making a difference, one client, one community, and one
                  dream.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative overflow-hidden py-24 md:py-32' id='brands'>
        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col items-center gap-4 text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/5 px-4 py-1.5 text-sm font-semibold tracking-widest text-brand-gold uppercase'
              >
                The Bukky Group Portfolio
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-4xl font-medium tracking-tight text-white md:text-6xl'
              >
                Our{' '}
                <span className='bg-linear-to-r from-brand-gold via-white to-brand-accent-gold bg-clip-text italic text-transparent'>
                  Companies
                </span>
              </motion.h2>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {flagshipBrands.map((brand, index) => {
                const Icon = {
                  Sparkles: HiOutlineSparkles,
                  Tshirt: FaTshirt,
                  Palette: FaPalette,
                  GraduationCap: FaGraduationCap,
                  Utensils: FaUtensils,
                  BookOpen: FaBookOpen,
                  Gem: FaGem,
                  Heart: FaHeart,
                }[brand.icon] as any

                return (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className='relative h-full'
                  >
                    <Link href={brand.link} className='group block h-full'>
                      <div
                        className='relative flex h-full flex-col overflow-hidden border border-white/10 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-brand-gold/40 hover:shadow-2xl hover:shadow-brand-gold/10'
                        style={{
                          background: `linear-gradient(to bottom, ${brand.cardColor}33, ${brand.cardColor}11, transparent)`,
                        }}
                      >
                        {/* Subtle color glow at the bottom */}
                        <div
                          className='absolute -bottom-20 -right-20 size-40 rounded-full blur-3xl opacity-20'
                          style={{ backgroundColor: brand.cardColor }}
                        />

                        {/* Top Accent Bar */}
                        <div className='absolute top-0 left-0 h-1 w-full bg-linear-to-r from-brand-gold via-white to-brand-gold opacity-0 transition-opacity group-hover:opacity-100' />

                        <div className='relative z-10 flex h-full flex-col items-center text-center'>
                          {/* Logo Area */}
                          <div
                            className='mb-6 flex size-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 bg-white/5'
                            style={{
                              color:
                                brand.cardColor === '#C5A028'
                                  ? 'var(--color-brand-gold)'
                                  : brand.cardColor,
                            }}
                          >
                            <Icon className='size-8' />
                          </div>

                          {/* Brand Info */}
                          <div className='mb-4 flex flex-col gap-1'>
                            <h3 className='font-serif text-xl font-bold tracking-wide uppercase text-white'>
                              {brand.name}
                            </h3>
                            <div
                              className='text-sm font-semibold tracking-wider uppercase'
                              style={{
                                color:
                                  brand.cardColor === '#004d00'
                                    ? '#4ade80'
                                    : brand.cardColor,
                              }}
                            >
                              {brand.tagline}
                            </div>
                          </div>

                          <p className='mt-auto text-sm leading-relaxed text-zinc-300'>
                            {brand.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='relative overflow-hidden py-24 md:py-32'>
        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col items-center gap-4 text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/5 px-4 py-1.5 text-sm font-semibold tracking-widest text-brand-gold uppercase'
              >
                Our Core Values
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-4xl font-medium tracking-tight text-white md:text-6xl'
              >
                Why Choose{' '}
                <span className='bg-linear-to-r from-brand-gold via-white to-brand-accent-gold bg-clip-text italic text-transparent'>
                  Bukky Group?
                </span>
              </motion.h2>
            </div>

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
              {[
                {
                  title: 'Unmatched Excellence',
                  desc: 'We set the standard in luxury fashion, beauty, and hospitality through rigorous attention to detail.',
                  icon: FaStar,
                  color: '#C5A028',
                },
                {
                  title: 'Holistic Impact',
                  desc: 'Beyond business, we nurture potential through the Get Busy Foundation—empowering the next generation.',
                  icon: FaUsers,
                  color: '#A32CC4',
                },
                {
                  title: 'Creative Innovation',
                  desc: 'We blend traditional craftsmanship with modern vision to create brands that inspire and lead.',
                  icon: FaRocket,
                  color: '#FF8C00',
                },
                {
                  title: 'Rooted in Integrity',
                  desc: 'Every venture is built on a foundation of resilience, authenticity, and a commitment to touching lives.',
                  icon: FaShieldAlt,
                  color: '#004d00',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='group relative flex flex-col gap-6 rounded-3xl border border-white/5 bg-gray-900/50 p-8 transition-all hover:border-brand-gold/30 hover:bg-gray-800/40'
                >
                  <div
                    className='flex size-14 items-center justify-center rounded-2xl bg-white/5 shadow-xl transition-transform group-hover:scale-110'
                    style={{ color: item.color }}
                  >
                    <item.icon className='size-7' />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h3 className='font-serif text-2xl font-bold text-white transition-colors group-hover:text-brand-gold'>
                      {item.title}
                    </h3>
                    <p className='text-sm leading-relaxed text-zinc-400'>
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className='absolute -right-4 -bottom-4 h-24 w-24 rounded-full blur-3xl opacity-0 transition-opacity group-hover:opacity-10'
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section (Commented out)
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
      */}
    </main>
  )
}
