'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: 'Bridal Elegance',
    description:
      'Timeless, sophisticated looks designed to last through your most special moments.',
    image:
      'https://images.unsplash.com/photo-1481326329074-85dec039ee51?q=80&w=1973&auto=format&fit=crop',
  },
  {
    title: 'Soft Glam',
    description:
      'Enhanced natural beauty with seamless transitions and a radiant, dewy finish.',
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Dramatic Artistry',
    description:
      'Bold choices, sharp lines, and vivid colors for those who want to make a statement.',
    image:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Matric Dance',
    description:
      'Youthful, vibrant, and camera-ready glam to celebrate your milestone night.',
    image:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Editorial & Fashion',
    description:
      'High-concept makeup for photography, runway, and commercial storytelling.',
    image:
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1964&auto=format&fit=crop',
  },
  {
    title: 'Special Occasion',
    description:
      'Bespoke makeup for anniversaries, parties, or any event where you want to shine.',
    image:
      'https://images.unsplash.com/photo-1519415510236-85730ec85c56?q=80&w=2070&auto=format&fit=crop',
  },
]

/**
 * GlamServices Component
 * Full list of makeup services, no "view more" button.
 */
export const GlamServices = () => {
  return (
    <section id='services' className='w-full py-24 bg-black'>
      <div className='container mx-auto px-6 space-y-20'>
        <div className='flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto'>
          <span className='text-sm font-medium tracking-widest text-gray-500 uppercase'>
            Our Signature Services
          </span>
          <h2 className='text-4xl lg:text-6xl font-medium tracking-tight text-white'>
            Professional Artistry <br />
            <span className='italic text-black'>for every face.</span>
          </h2>
          <p className='text-gray-400 text-lg leading-relaxed'>
            We list all our core specializations here to ensure you find exactly
            what fits your upcoming event or daily glow.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className='bg-white/5 py-0 gap-0 border border-white/10 group shadow-none transition-all duration-500 rounded-3xl'>
                <div className='relative aspect-3/2 overflow-hidden'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-cover rounded-t-xl transition-transform duration-700 group-hover:scale-105'
                  />
                </div>
                <CardContent className='p-3 space-y-2'>
                  <h3 className='text-2xl font-medium text-white group-hover:text-gray-400 transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-gray-400 text-sm leading-relaxed'>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
