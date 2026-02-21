'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightUpLine } from 'react-icons/ri'

const businesses = [
  {
    name: 'Bukky Beauty World',
    tagline: 'Luxury Beauty & Wellness',
    description:
      'The flagship of glam. We offer high-end hair, nails, and spa services that redefine confidence and personal care.',
    image: '/bukkybeauty23.jpeg',
    link: '/salon',
    accent: '#A32CC4',
  },
  {
    name: '3S The Label',
    tagline: 'Fashion & Couture House',
    description:
      'Bespoke couture and ready-to-wear pieces that blend African heritage with contemporary cosmopolitan style.',
    image: '/label.jpeg',
    link: '/fashion',
    accent: '#eb6101',
  },
  {
    name: '3S Restaurant',
    tagline: 'Culinary Artistry',
    description:
      'A multi-sensory dining experience where traditional flavors meet modern luxury in a sophisticated atmosphere.',
    image: '/resturant.jpeg',
    link: '/restaurant',
    accent: '#c5a028',
  },
  {
    name: '3S College',
    tagline: 'Empowering Minds',
    description:
      'Bridging the gap between passion and profession through professional training in beauty, fashion, and business.',
    image: '/college.jpeg',
    link: '/college',
    accent: '#059669',
  },
  {
    name: 'JULY 18 COSMETICS',
    tagline: 'Premium Beauty Products',
    description:
      'Eco-conscious, luxury skincare and cosmetics formulated to celebrate and enhance natural radiance.',
    image: '/faceglam.jpeg',
    link: '/cosmetics',
    accent: '#AF69EF',
  },
  {
    name: 'Get Busy Foundation Africa',
    tagline: 'Impact & Hope',
    description:
      'Our social soul. Dedicated to empowering the next generation through mentorship and community development.',
    image: '/getbusy1.jpeg',
    link: '/foundation',
    accent: '#c5a028',
  },
  {
    name: '3S Books',
    tagline: 'Stories That Matter',
    description:
      'Curating and publishing literature that captures the African experience and inspires global readers.',
    image: '/3sbookslogo.jpeg',
    link: '/books',
    accent: '#059669',
  },
  {
    name: '3S Glam',
    tagline: 'Makeup Artistry',
    description:
      'Professional glam artistry focused on precision, confidence, and revealing your inner glow.',
    image: '/faceglam.jpeg',
    link: '/glam',
    accent: '#c5a028',
  },
]

export const BusinessGrid = () => {
  return (
    <section className='w-full py-24 md:py-32 bg-white' id='catalogue'>
      <div className='container mx-auto px-6 space-y-24'>
        <div className='flex flex-col gap-6 max-w-3xl'>
          <h2 className='font-serif text-4xl md:text-6xl font-medium tracking-tight text-black'>
            An Ecosystem of <br />
            <span className='italic text-primary'>Modern Life.</span>
          </h2>
          <p className='text-zinc-600 text-lg md:text-xl font-light leading-relaxed'>
            From beauty to education, Bukky Group provides a comprehensive
            lifestyle experience. Each brand is a testament to our commitment to
            quality and cultural relevance.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {businesses.map((biz, idx) => (
            <motion.div
              key={biz.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <Link href={biz.link} className='group block relative h-full'>
                <Card className='relative h-full overflow-hidden rounded-xl py-0  bg-zinc-50 transition-all duration-700'>
                  <div className='flex flex-col h-full'>
                    {/* Image Header */}
                    <div className='relative aspect-video w-full overflow-hidden'>
                      <Image
                        src={biz.image}
                        alt={biz.name}
                        fill
                        className='object-cover rounded-t-xl transition-transform duration-1000 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20' />
                      <div className='absolute top-6 right-6 size-12 rounded-full bg-white flex items-center justify-center opacity-0 -translate-y-4 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0'>
                        <RiArrowRightUpLine className='size-6 text-black' />
                      </div>
                    </div>

                    {/* Content */}
                    <div className='flex-1 p-4 space-y-3'>
                      <div className='space-y-2'>
                        <div className='flex items-center gap-3'>
                          <span
                            className='size-2 rounded-full'
                            style={{ backgroundColor: biz.accent }}
                          />
                          <span className='text-xs font-medium text-gray-600'>
                            {biz.tagline}
                          </span>
                        </div>
                        <h3 className='text-xl font-semibold text-black group-hover:text-primary transition-colors'>
                          {biz.name}
                        </h3>
                      </div>
                      <p className='text-gray-600 text-base leading-relaxed font-normal line-clamp-3'>
                        {biz.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
