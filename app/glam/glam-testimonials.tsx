'use client'

import { motion } from 'framer-motion'
import { RiStarFill } from 'react-icons/ri'

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'Bride',
    text: 'Aura made me feel like the most beautiful version of myself. The glow stayed all night!',
    rating: 5,
  },
  {
    name: 'Lindiwe Dlamini',
    role: 'Editorial Model',
    text: 'Sharp, precise, and professional. She understands exactly how light works on camera.',
    rating: 5,
  },
  {
    name: 'Jessica Lee',
    role: 'Matric Elegant',
    text: 'I was nervous about too much makeup, but Aura balanced it perfectly for my age.',
    rating: 5,
  },
]

export const GlamTestimonials = () => {
  return (
    <section className='w-full py-24 bg-white'>
      <div className='container mx-auto px-6 space-y-16'>
        <div className='text-center space-y-4'>
          <span className='text-sm font-medium tracking-widest text-orange-500 uppercase'>
            What Clients Are Saying
          </span>
          <h2 className='text-4xl md:text-5xl font-medium text-black tracking-tight'>
            Real Beauty,{' '}
            <span className='italic text-orange-500'>
              Real Transformations.
            </span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className='p-10 bg-zinc-50 rounded-3xl space-y-6 flex flex-col items-center text-center'
            >
              <div className='flex gap-1'>
                {[...Array(t.rating)].map((_, i) => (
                  <RiStarFill key={i} className='text-orange-500 size-5' />
                ))}
              </div>
              <p className='text-gray-600 text-lg leading-relaxed italic'>
                &quot;{t.text}&quot;
              </p>
              <div>
                <span className='block text-black font-medium text-lg'>
                  {t.name}
                </span>
                <span className='block text-gray-500 text-sm uppercase tracking-widest'>
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
