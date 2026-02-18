'use client'

import { motion } from 'framer-motion'

export default function LocationMap() {
  return (
    <section className='relative w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950'>
      <div className='container mx-auto px-6 py-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col gap-8'
        >
          <div className='flex flex-col gap-3 text-center'>
            <h2 className='font-serif text-3xl font-medium text-zinc-900 dark:text-white md:text-4xl'>
              Visit Our{' '}
              <span className='text-group-primary italic'>Location</span>
            </h2>
            <p className='mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400'>
              Experience the Bukky Group ecosystem in person. We are located in
              the heart of Centurion, ready to welcome you.
            </p>
          </div>

          <div className='relative h-[450px] w-full overflow-hidden rounded-4xl border border-zinc-200 bg-zinc-200 shadow-2xl dark:border-zinc-800 dark:bg-zinc-800'>
            <iframe
              src='https://www.google.com/maps?q=Bukky%20Beauty%20World,-25.881146,28.164448&z=15&output=embed'
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
