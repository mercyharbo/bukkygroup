'use client'

import { motion } from 'framer-motion'
import { HiOutlinePhone } from 'react-icons/hi2'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { SiUbereats } from 'react-icons/si'

export const DeliveryPartners = () => {
  return (
    <section className='w-full py-8 md:py-14 bg-[#F9F7F5] border-y border-zinc-100'>
      <div className='container mx-auto px-5 lg:px-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='text-center lg:text-left space-y-4'>
            <h2 className=' text-base font-semibold text-black'>
              ORDER ROYALTY TO YOUR DOOR
            </h2>
            <p className='text-sm text-gray-600 max-w-sm'>
              Experience the legendary flavors of 3S Restaurant without leaving
              your sanctuary.
            </p>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-12 md:gap-20'>
            <motion.div
              whileHover={{ y: -5 }}
              className='flex items-center gap-5 group cursor-pointer'
            >
              <div className='size-14 rounded-full bg-white border border-gray-300 shadow flex items-center justify-center text-black group-hover:bg-[#06C167] group-hover:text-white transition-all'>
                <SiUbereats className='size-7' />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs font-semibold text-gray-500'>
                  Order on
                </span>
                <span className='font-bold text-lg text-black'>Uber Eats</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className='flex items-center gap-5 group cursor-pointer'
            >
              <div className='size-14 rounded-full bg-white border border-gray-300 shadow flex items-center justify-center text-black group-hover:bg-[#FF2E2E] group-hover:text-white transition-all'>
                <MdOutlineDeliveryDining className='size-8' />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs font-semibold text-gray-500'>
                  Available on
                </span>
                <span className='font-bold text-lg text-black'>Mr D Food</span>
              </div>
            </motion.div>

            <div className='hidden xl:block h-12 w-px bg-zinc-200' />

            <motion.a
              href='https://wa.me/27710354040'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              className='flex items-center gap-5 text-primary bg-black px-8 py-5 rounded-sm shadow-2xl relative overflow-hidden group cursor-pointer'
            >
              <HiOutlinePhone className='size-8 z-10 transition-transform group-hover:rotate-12' />
              <div className='flex flex-col z-10'>
                <span className='text-xs font-medium text-gray-300'>
                  Direct Order on WhatsApp
                </span>
                <span className='font-bold text-lg'>+27 71 035 4040</span>
              </div>
              <div className='absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity' />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
