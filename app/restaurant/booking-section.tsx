'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const BookingSection = () => {
  return (
    <section id='booking' className='w-full py-24 md:py-32 bg-white'>
      <div className='container mx-auto px-5 lg:px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center'>
          <div className='space-y-12'>
            <div className='space-y-4'>
              <span className='text-xs uppercase tracking-widest text-gray-500 font-semibold'>
                Reservations
              </span>
              <h2 className='text-5xl md:text-7xl font-bold text-black leading-tight uppercase tracking-tight'>
                YOUR <br /> ROYAL TABLE
              </h2>
            </div>

            <p className='text-gray-600 text-sm font-medium max-w-lg'>
              Join us for an unforgettable dining experience where tradition
              meets luxury. We recommend booking at least 24 hours in advance
              for the ultimate celebration of flavor.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              <div className='flex flex-col gap-3'>
                <span className='text-sm text-gray-600 font-medium'>
                  Opening Hours
                </span>
                <div className='space-y-1'>
                  <p className='text-black text-sm uppercase'>Mon - Fri</p>
                  <p className='text-gray-600 text-xs font-medium'>
                    10:00 AM - 10:00 PM
                  </p>
                </div>
                <div className='space-y-1'>
                  <p className='text-black text-sm uppercase'>Sat - Sun</p>
                  <p className='text-gray-600 text-xs font-medium'>
                    09:00 AM - 11:30 PM
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <span className='text-xs text-gray-600 font-medium'>
                  Location
                </span>
                <p className='text-black text-sm font-medium leading-relaxed'>
                  Suite 101, Royalty Square <br />
                  Lagos, Nigeria
                </p>
                <div className='pt-2'>
                  <span className='text-xs text-gray-600 font-medium'>
                    Contact Number
                  </span>
                  <Link
                    href='https://wa.me/27710354040'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block text-black font-bold text-lg hover:text-white transition-colors'
                  >
                    +27 71 035 4040
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='bg-[#F9F7F5] p-8 md:p-14 border border-zinc-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] space-y-8 relative'
          >
            <div className='space-y-2 text-left pb-6'>
              <h3 className='text-xl font-bold text-black'>Booking Request</h3>
            </div>

            <div className='grid grid-cols-1 gap-6'>
              <div className='flex flex-col gap-2'>
                <label className='text-black font-medium text-sm'>Name</label>
                <Input
                  className=' border-gray-300 rounded-md bg-white h-12 text-sm focus-visible:ring-primary text-black'
                  placeholder='THE DUKE / DUCHESS'
                />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2'>
                  <label className='text-black font-medium text-sm'>
                    Guests
                  </label>
                  <Input
                    className=' border-gray-300 rounded-md bg-white h-12 text-sm text-black'
                    placeholder='COUNT'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className='text-black font-medium text-sm'>Time</label>
                  <Input
                    type='time'
                    className=' border-gray-300 rounded-md bg-white h-12 text-sm text-black'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-black font-medium text-sm'>Date</label>
                <Input
                  type='date'
                  className=' border-gray-300 rounded-md bg-white h-12 text-sm text-black'
                />
              </div>
            </div>

            <Button className='w-full rounded-md py-8 bg-black text-white hover:bg-black/90 hover:text-white transition-all text-xs uppercase tracking-widest font-bold shadow-xl'>
              Secure Reservation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
