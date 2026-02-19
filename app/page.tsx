'use client'
import { LogoOrbit } from '@/components/logo-orbit'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import { RiQuillPenLine } from 'react-icons/ri'

const flagshipBrands = [
  {
    name: 'Bukky Beauty World',
    tagline: 'Luxury Beauty & Wellness',
    description:
      'Empowering confidence through hair, makeup, nails & total glam experiences.',
    link: '/salon',
    cardColor: '#A32CC4',
    logo: '/bukkybeauty23.jpeg',
  },
  {
    name: '3S The Label',
    tagline: 'Fashion & Couture House',
    description:
      'Bold, bossy, classy designs redefining elegance and identity.',
    link: '/fashion',
    cardColor: '#FF8C00',
    logo: '/label.jpeg',
  },
  {
    name: '3S Glam',
    tagline: 'Makeup Artistry & Face Glam Studio',
    description:
      'Professional glam artistry with precision, confidence and glow.',
    link: '/glam',
    cardColor: '#C5A028',
    logo: '/faceglam.jpeg',
  },
  {
    name: '3S College',
    tagline: 'Education & Skill Development',
    description:
      'Training future leaders in beauty, fashion, business, and entrepreneurship.',
    link: '/college',
    cardColor: '#004d00',
    logo: '/college.jpeg',
  },
  {
    name: '3S Restaurant',
    tagline: 'Hospitality & Culinary Excellence',
    description:
      'Premium dining experience blending culture, luxury and flavor.',
    link: '/restaurant',
    cardColor: '#C5A028',
    logo: '/resturant.jpeg',
  },
  {
    name: '3S Books',
    tagline: 'Publishing & Storytelling',
    description:
      'Inspiring global minds through powerful stories and transformational books.',
    link: '/books',
    cardColor: '#004d00',
    logo: '/3sbookslogo.jpeg', // Assuming using college logo for now as fallback if books logo is missing
  },
  {
    name: 'JULY 18 COSMETICS',
    tagline: 'Luxury Cosmetic Brand',
    description:
      'High-quality beauty products designed for royalty confidence.',
    link: '/cosmetics',
    cardColor: '#AF69EF',
    logo: '/faceglam.jpeg', // Fallback
  },
  {
    name: 'Get Busy Foundation Africa',
    tagline: 'Youth Empowerment & Safe Haven Initiative',
    description:
      'Empowering teens and women through mentorship, education and safe spaces.',
    link: '/foundation',
    cardColor: '#C5A028',
    logo: '/getbusy1.jpeg',
  },
]

export default function Home() {
  return (
    <main className='relative min-h-screen overflow-hidden selection:bg-brand-gold/30 selection:text-brand-gold flex flex-col gap-12'>
      {/* Hero Section */}
      <section className='container relative mx-auto flex min-h-screen items-center justify-center pt-55 pb-12 lg:pb-20'>
        {/* Hero Visual - Logo Orbit */}
        <div className='relative flex w-full items-center justify-center'>
          <LogoOrbit brands={flagshipBrands} />
        </div>
      </section>

      {/* Bio Section */}
      <section className='relative overflow-hidden py-14 md:py-32' id='about'>
        <div className='pointer-events-none absolute -right-24 top-0 size-128 rounded-full bg-brand-gold/5 blur-3xl' />
        <div className='pointer-events-none absolute -left-24 bottom-0 size-128 rounded-full bg-brand-silver/5 blur-3xl' />

        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col items-center gap-16 lg:flex-row'>
            <div className='relative w-full lg:flex-1'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='relative mx-auto aspect-4/5 w-full max-w-2xl overflow-hidden'
              >
                <NextImage
                  src='/bukky-pic1.png'
                  alt='Bukky Anny'
                  fill
                  className='object-cover transition-transform duration-700 hover:scale-105'
                />
                <div className='absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-black/40 p-6 shadow-xl backdrop-blur-md text-center'>
                  <div className='text-xs font-semibold text-brand-teal uppercase tracking-widest mb-1'>
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
                  className='inline-flex items-center gap-2 self-center rounded-full border border-brand-teal/20 bg-brand-teal/10 px-4 py-1.5 text-sm font-semibold text-brand-teal lg:self-start'
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
                  More Than Just a Business — A Movement
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

      <section className='relative overflow-hidden py-14 md:py-32' id='brands'>
        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col items-center gap-4 text-center'>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-4xl font-medium tracking-tight text-white md:text-6xl'
              >
                Our{' '}
                <span className='bg-linear-to-r from-brand-accent-gold via-white to-brand-accent-gold bg-clip-text italic text-transparent'>
                  Companies
                </span>
              </motion.h2>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {flagshipBrands.map((brand, index) => {
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
                      <Card className='relative flex h-full flex-col items-center text-center gap-2 overflow-hidden rounded-card-large border-zinc-100 bg-white p-0 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/5'>
                        <CardHeader className='p-10 pb-0 flex flex-col items-center gap-8'>
                          {/* Logo Area */}
                          <div className='flex size-32 items-center justify-center overflow-hidden rounded-full bg-zinc-50 p-1 shadow-inner ring-8 ring-zinc-50/50 transition-transform duration-500 group-hover:scale-105'>
                            <NextImage
                              src={brand.logo}
                              alt={`${brand.name} Logo`}
                              width={500}
                              height={500}
                              className='h-full w-full object-cover rounded-full'
                            />
                          </div>
                        </CardHeader>

                        <CardContent className='p-10 pt-0'>
                          {/* Brand Info */}
                          <div className='flex flex-col gap-2'>
                            <h3 className='bg-linear-to-r from-brand-accent-gold  to-brand-accent-gold bg-clip-text text-xl font-black tracking-tight italic text-transparent uppercase'>
                              {brand.name}
                            </h3>
                            <span className='text-base text-black font-semibold'>
                              {brand.tagline}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='relative overflow-hidden px-5 py-14 md:py-24'>
        <div className='container relative mx-auto px-6'>
          <div className='flex flex-col gap-16'>
            <div className='flex flex-col items-center gap-4 text-center'>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='font-serif text-4xl font-medium tracking-tight text-white md:text-6xl'
              >
                Why Choose <span className=''>Bukky Group?</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='mx-auto max-w-4xl'
            >
              <div className='flex flex-col gap-8 text-center text-lg leading-relaxed text-zinc-300 md:text-xl'>
                <p>
                  At Bukky Group, we are defined by{' '}
                  <span className='font-bold text-white'>
                    Unmatched Excellence
                  </span>
                  . We set the standard in luxury fashion, beauty, and
                  hospitality through rigorous attention to detail, ensuring
                  that every experience we provide is nothing short of
                  exceptional.
                </p>
                <p>
                  Our{' '}
                  <span className='font-bold text-white'>Holistic Impact</span>{' '}
                  goes beyond business. We are dedicated to nurturing potential
                  through the Get Busy Foundation—empowering the next generation
                  with the tools, mentorship, and opportunities they need to
                  thrive.
                </p>
                <p>
                  Through{' '}
                  <span className='font-bold text-white'>
                    Creative Innovation
                  </span>
                  , we blend traditional craftsmanship with a modern vision.
                  This allows us to build brands that don’t just follow trends,
                  but inspire and lead their industries into the future.
                </p>
                <p>
                  Everything we do is{' '}
                  <span className='font-bold text-white'>
                    Rooted in Integrity
                  </span>
                  . Every venture is built on a foundation of resilience,
                  authenticity, and a heartfelt commitment to touching lives and
                  leaving a lasting legacy of excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
