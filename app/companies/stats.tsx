'use client'

import { motion } from 'framer-motion'
import {
  RiBuilding2Line,
  RiCommunityLine,
  RiUserStarLine,
} from 'react-icons/ri'

const stats = [
  {
    icon: <RiBuilding2Line className='size-8 text-primary' />,
    value: '8+',
    label: 'Flagship Brands',
    description: 'Leading industries from beauty to fashion.',
  },
  {
    icon: <RiUserStarLine className='size-8 text-primary' />,
    value: '100k+',
    label: 'Lives Touched',
    description: 'Through our various products and services.',
  },
  {
    icon: <RiCommunityLine className='size-8 text-primary' />,
    value: '#1',
    label: 'Movement',
    description: 'A growing ecosystem of positive impact.',
  },
]

export const BusinessStats = () => {
  return (
    <section className='w-full py-24 bg-zinc-50'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm'
            >
              <div className='p-4 rounded-2xl bg-primary/5'>{stat.icon}</div>
              <div className='space-y-1'>
                <h3 className='text-4xl md:text-5xl font-black text-black'>
                  {stat.value}
                </h3>
                <p className='text-sm font-bold uppercase tracking-widest text-primary'>
                  {stat.label}
                </p>
              </div>
              <p className='text-zinc-500 font-light'>{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
