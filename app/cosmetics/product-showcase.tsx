'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    name: 'Hydration Nectar',
    description:
      'A deep-penetrating serum infused with rare botanical extracts to replenish moisture levels and restore vitality.',
    image:
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop',
    category: 'Essential care',
  },
  {
    name: 'Velvet Radiance Oil',
    description:
      'A lightweight facial oil that illuminates the complexion while fortifying the skin barrier with essential fatty acids.',
    image:
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=2070&auto=format&fit=crop',
    category: 'Glow therapy',
  },
  {
    name: 'Botanical Mist',
    description:
      'A refreshing morning ritual. Calms, balances, and preps your skin for the day ahead with organic floral waters.',
    image:
      'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=2070&auto=format&fit=crop',
    category: 'Daily ritual',
  },
  {
    name: 'Clay Purification Mask',
    description:
      'A gentle yet effective detox for your pores. Draws out impurities while soothing with lavender and chamomile.',
    image:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2070&auto=format&fit=crop',
    category: 'Purifying treatment',
  },
  {
    name: 'Overnight Repair Balm',
    description:
      'Wake up to renewed skin. A concentrated balm that supports natural nightly regeneration for a rested appearance.',
    image:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=2070&auto=format&fit=crop',
    category: 'Night recovery',
  },
  {
    name: 'Signature Candle',
    description:
      'Transform your space. The atmospheric scent of our atelier, blending sandalwood, bergamot, and cedarwood.',
    image:
      'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=2070&auto=format&fit=crop',
    category: 'Atmosphere',
  },
]

/**
 * ProductShowcase Component
 * Visual grid of products following the "no prices" and "no bold" rules.
 */
export const ProductShowcase = () => {
  return (
    <section id='products' className='w-full py-24 bg-black text-white'>
      <div className='container mx-auto px-6 space-y-20'>
        <div className='flex flex-col items-center text-center space-y-4'>
          <span className='text-sm font-medium tracking-widest text-purple-400'>
            Our collections
          </span>
          <h2 className='text-4xl lg:text-5xl font-medium tracking-tight'>
            Meticulously crafted <br /> for your skin
          </h2>
          <p className='max-w-xl mx-auto text-gray-300 text-base leading-relaxed'>
            Each formula is a result of years of research, combining ancient
            botanical wisdom with modern dermatological precision.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16'>
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='flex flex-col gap-6 group'
            >
              <div className='relative aspect-square overflow-hidden bg-gray-900 rounded-sm'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/20 to-transparent' />
                <div className='absolute bottom-6 left-6'>
                  <span className='px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 text-sm font-medium'>
                    {product.category}
                  </span>
                </div>
              </div>

              <div className='space-y-3'>
                <h3 className='text-xl font-medium'>{product.name}</h3>
                <p className='text-gray-300 text-sm leading-relaxed max-w-sm'>
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
