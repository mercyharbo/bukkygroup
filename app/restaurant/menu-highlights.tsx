'use client'

import { motion } from 'framer-motion'

const menuCategories = [
  {
    title: 'Signature Starters',
    items: [
      {
        name: 'Saffron Infused Calamari',
        price: '$24',
        description:
          'Hand-picked saffron from the mountains with tender calamari.',
      },
      {
        name: 'Royal Truffle Carpaccio',
        price: '$32',
        description:
          'Thinly sliced heritage beef with seasonal black truffles.',
      },
    ],
  },
  {
    title: 'Flagship Mains',
    items: [
      {
        name: 'Crown Ribeye',
        price: '$65',
        description: '45-day dry-aged beef with a vintage gold-leaf finish.',
      },
      {
        name: 'Imperial Lobster Risotto',
        price: '$48',
        description: 'Creamy carnaroli rice with butter-poached blue lobster.',
      },
    ],
  },
]

export const MenuHighlights = () => {
  return (
    <section id='menu' className='w-full py-24 md:py-32 bg-white'>
      <div className='container mx-auto px-5 lg:px-10 space-y-16'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-8'>
          <div className='space-y-4'>
            <span className='text-xs uppercase tracking-widest text-primary font-bold'>
              The Selected Palate
            </span>
            <h2 className='font-cinzel text-4xl md:text-5xl font-black text-black uppercase'>
              MENU <br /> HIGHLIGHTS
            </h2>
          </div>
          <p className='max-w-md text-gray-500 text-sm leading-relaxed'>
            A collection of our most celebrated dishes, each reflecting a unique
            story of craftsmanship and flavor.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24'>
          {menuCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='space-y-10'
            >
              <h3 className='font-cinzel text-xl font-bold text-primary border-b border-primary/20 pb-4 uppercase tracking-widest'>
                {category.title}
              </h3>
              <div className='space-y-12'>
                {category.items.map((item, i) => (
                  <div key={i} className='group space-y-2'>
                    <div className='flex items-end justify-between'>
                      <h4 className='font-cinzel text-lg font-bold text-black group-hover:text-primary transition-colors uppercase'>
                        {item.name}
                      </h4>
                      <div className='grow mx-4 mb-1 border-b border-dotted border-gray-300' />
                      <span className='font-cinzel font-bold text-black'>
                        {item.price}
                      </span>
                    </div>
                    <p className='text-gray-500 text-sm italic'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
