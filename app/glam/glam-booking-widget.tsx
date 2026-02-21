'use client'

import { motion } from 'framer-motion'

/**
 * GlamBookingWidget Component
 * An iframe-based container for Zoho Bookings.
 *
 * TODO: Replace the placeholder src with your actual Zoho Bookings embed URL.
 * You can find this in Zoho Bookings -> My Profile -> Embed as widget.
 */
export const GlamBookingWidget = () => {
  return (
    <div className='w-full max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl min-h-[700px] border border-gray-100'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='w-full h-full min-h-[700px] relative'
      >
        {/*
          ZOHO BOOKINGS IFRAME
          Instructions:
          1. Go to Zoho Bookings settings.
          2. Select 'Embed' and copy the iframe 'src' URL.
          3. Paste it below.
        */}
        <iframe
          src='https://bookings.zoho.com/bookings/FaceglamAppointments' // Placeholder: User needs to update with their actual booking link
          width='100%'
          height='700px'
          frameBorder='0'
          allowFullScreen
          title='3S Faceglam Booking Portal'
          className='w-full'
        />

        {/* Fallback/Loading Overlay */}
        <div className='absolute inset-0 -z-10 flex items-center justify-center bg-gray-50'>
          <div className='flex flex-col items-center gap-4'>
            <div className='size-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin' />
            <p className='text-gray-400 font-medium'>
              Loading Secure Booking Portal...
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
