'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Makeup Looks', value: '500+' },
  { label: 'Matric Dance', value: '172' },
  { label: 'Satisfaction', value: '98%' },
]

export const GlamStats = () => {
  return (
    <section className='w-full py-16 bg-black border-y border-white/10'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='text-center space-y-1'
            >
              <div className='text-4xl md:text-5xl font-medium text-white tracking-tighter'>
                {stat.value}
              </div>
              <div className='text-sm font-medium text-gray-400 uppercase tracking-widest'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
