'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
} from 'react-icons/hi2'

/**
 * MissionGrid Component
 * Section after hero with white background.
 */
export const MissionGrid = () => {
  const missions = [
    {
      icon: <HiOutlineGlobeAlt className='size-8' />,
      title: 'A Safe Place',
      description:
        'A movement of love and healing. We provide a haven where changemakers are raised in a secure environment.',
    },
    {
      icon: <HiOutlineLightBulb className='size-8' />,
      title: 'A Listening Ear',
      description:
        'Because no one should feel alone. We believe every voice deserves to be heard and every heart understood.',
    },
    {
      icon: <HiOutlineUserGroup className='size-8' />,
      title: 'A Guiding Light',
      description:
        'Raising confident leaders for tomorrow. The future starts with mentorship and purposeful guidance.',
    },
  ]

  return (
    <section id='mission' className='w-full py-20 bg-white'>
      <div className='container mx-auto px-5 lg:px-10 space-y-16'>
        <div className='flex flex-col items-center text-center gap-4'>
          <span className='text-sm font-medium text-black uppercase tracking-extra'>
            Our Mission
          </span>
          <h2 className='text-4xl lg:text-5xl font-bold text-black tracking-tight'>
            Compassion-Driven Support
          </h2>
          <div className='w-20 h-1 bg-foundation-primary rounded-full' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {missions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className='p-8 rounded-card-foundation bg-foundation-light/30 border h-full hover:border-foundation-primary/20 hover:shadow-premium transition-all group'>
                <CardContent className='p-0 flex flex-col gap-6'>
                  <div className='flex flex-col gap-6'>
                    <div className='size-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-foundation-primary transition-transform group-hover:scale-110 group-hover:rotate-3'>
                      {item.icon}
                    </div>
                    <div className='space-y-4'>
                      <h3 className='text-xl font-semibold group-hover:text-foundation-dark transition-colors text-black'>
                        {item.title}
                      </h3>
                      <p className='text-black leading-relaxed'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
