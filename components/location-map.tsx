'use client'

import { motion } from 'framer-motion'

export default function LocationMap() {
  return (
    <section className='relative w-full overflow-hidden bg-white dark:bg-black'>
      <div className='container mx-auto px-6 py-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col gap-8'
        >
          <div className='flex flex-col gap-3 text-center'>
            <h2 className='font-cinzel text-3xl font-bold text-black dark:text-white md:text-4xl uppercase'>
              Visit Our <span className='text-primary italic'>Location</span>
            </h2>
            <p className='mx-auto max-w-2xl text-gray-600 dark:text-gray-200 text-sm md:text-base'>
              Shop F08, Oriental City (China) Mall, 2 Sarel Baard Cres,
              Rooihuiskraal, Centurion, 0157, South Africa
            </p>
          </div>

          <div className='relative h-[450px] w-full overflow-hidden rounded-sm border border-gray-200 bg-gray-100 shadow-2xl dark:border-white/10 dark:bg-gray-900'>
            <iframe
              src='https://www.google.com/maps?q=-25.878144171075327,28.161786&z=17&output=embed'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Bukky Group Location'
              className='h-full w-full'
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
