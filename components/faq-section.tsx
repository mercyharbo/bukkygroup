'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'

const faqs = [
  {
    question: 'What services do you offer at Bukky Group?',
    answer: (
      <div className='flex flex-col gap-4'>
        <p>
          Bukky Group is a lifestyle hub that offers a variety of services
          across four main areas:
        </p>
        <ul className='flex flex-col gap-3'>
          <li className='flex flex-col gap-1'>
            <span className='font-bold text-white'>• Salon Services:</span>
            <span className='text-zinc-200'>
              Luxury beauty services including haircuts, styling, manicures,
              pedicures, makeup, and more.
            </span>
          </li>
          <li className='flex flex-col gap-1'>
            <span className='font-bold text-white'>• Fashion:</span>
            <span className='text-zinc-200'>
              Custom designs, ready-to-wear pieces, rental options, and
              alterations for both men and women.
            </span>
          </li>
          <li className='flex flex-col gap-1'>
            <span className='font-bold text-white'>• Restaurant:</span>
            <span className='text-zinc-200'>
              Authentic Nigerian and continental cuisine with dine-in, takeaway,
              and delivery options.
            </span>
          </li>
          <li className='flex flex-col gap-1'>
            <span className='font-bold text-white'>• Beauty Academy:</span>
            <span className='text-zinc-200'>
              Beauty and fashion training programs for students interested in
              building a career in the beauty industry.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: 'What are your operating hours?',
    answer: (
      <ul className='flex flex-col gap-3'>
        <li className='flex flex-col gap-1'>
          <span className='font-bold text-white'>
            • Bukky Beauty World (Salon):
          </span>
          <span className='text-zinc-200'>
            Monday-Saturday: 9:00 AM – 7:00 PM, Sunday: 10:00 AM – 6:00 PM
          </span>
        </li>
        <li className='flex flex-col gap-1'>
          <span className='font-bold text-white'>• Lumina Vogue Fashion:</span>
          <span className='text-zinc-200'>
            Monday-Friday: 9:00 AM – 5:00 PM, Saturday: 10:00 AM – 4:00 PM
          </span>
        </li>
        <li className='flex flex-col gap-1'>
          <span className='font-bold text-white'>• Naijayum Restaurant:</span>
          <span className='text-zinc-400'>Daily: 10:00 AM – 9:00 PM</span>
        </li>
      </ul>
    ),
  },
  {
    question: 'How can I make an appointment for salon services?',
    answer: (
      <p>
        You can easily book an appointment by visiting our website and using our
        online booking system, or by calling us at{' '}
        <span className='font-bold text-primary'>+27 12 345 6789</span> to
        schedule a time.
      </p>
    ),
  },
  {
    question: 'Do you accept walk-ins at the salon?',
    answer: (
      <p>
        Yes, we accept walk-ins at{' '}
        <span className='font-bold'>Bukky Beauty World</span>, but we recommend
        booking an appointment to ensure availability, especially during peak
        hours and weekends.
      </p>
    ),
  },
  {
    question: 'Do you have any special amenities at the salon?',
    answer: (
      <div className='flex flex-col gap-4'>
        <p>
          Yes! At <span className='font-bold'>Bukky Beauty World</span>, we
          offer:
        </p>
        <ul className='flex flex-col gap-3'>
          <li className='flex flex-col gap-1'>
            <span className='font-bold text-white'>• Free champagne</span>
            <span className='text-zinc-200'>
              on weekends (Saturdays & Sundays) for adult clients.
            </span>
          </li>
          <li className='flex flex-col gap-1'>
            <span className='font-bold text-white'>• A kids&apos; area</span>
            <span className='text-zinc-200'>
              with toys and snacks for your little ones while you get pampered.
            </span>
          </li>
          <li className='flex flex-col gap-1'>
            <span className='font-bold text-white'>• Wheelchair access</span>
            <span className='text-zinc-200'>
              and a spacious waiting area for added comfort.
            </span>
          </li>
          <li className='flex flex-col gap-1'>
            <span className='font-bold text-white'>• Tight security</span>
            <span className='text-zinc-200'>
              for your car in our well-monitored parking lot.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className='relative overflow-hidden bg-zinc-950 py-24 md:py-32'>
      {/* Background Decor */}
      <div className='pointer-events-none absolute top-1/2 left-0 size-128 -translate-y-1/2 rounded-full bg-group-primary/5 blur-[120px]' />

      <div className='container relative mx-auto px-6'>
        <div className='flex flex-col items-center gap-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center gap-4 text-center'
          >
            <h2 className='font-serif text-4xl font-medium text-white md:text-5xl'>
              Frequently Asked{' '}
              <span className='text-group-primary italic'>Questions</span>
            </h2>
            <div className='h-1.5 w-20 rounded-full bg-group-primary/30' />
          </motion.div>

          <div className='w-full max-w-3xl flex flex-col gap-4'>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'overflow-hidden rounded-3xl border transition-all duration-300',
                  openIndex === index
                    ? 'border-group-primary/30 bg-zinc-900/50 shadow-2xl shadow-group-primary/5'
                    : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700',
                )}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className='flex w-full items-center justify-between p-6 text-left md:p-8'
                >
                  <span className='text-lg font-bold text-white pr-8'>
                    {faq.question}
                  </span>
                  <div className='shrink-0'>
                    {openIndex === index ? (
                      <HiMinus className='size-6 text-group-primary' />
                    ) : (
                      <HiPlus className='size-6 text-zinc-500' />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className='border-t border-zinc-800 px-6 pb-8 pt-6 text-zinc-200 md:px-8 md:pb-10'>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
