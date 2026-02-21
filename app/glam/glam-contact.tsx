'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

/**
 * GlamContact Component
 * Final transformation section with orange accents and grey text.
 */
export const GlamContact = () => {
  return (
    <section className='w-full py-24 bg-black text-white relative overflow-hidden'>
      {/* Background Decorative Gradient */}
      <div className='absolute bottom-0 right-0 w-full max-w-4xl aspect-square bg-orange-500/5 blur-[120px] rounded-full pointer-events-none' />

      <div className='container mx-auto px-6 text-center space-y-16 relative z-10'>
        <div className='max-w-3xl mx-auto space-y-8'>
          <h2 className='text-3xl md:text-6xl lg:text-6xl font-medium tracking-tighter leading-tight'>
            Ready to define <br /> your{' '}
            <span className='text-orange-500'>signature glow?</span>
          </h2>
          <p className='text-gray-400 text-lg md:text-xl font-normal leading-relaxed text-pretty'>
            Available for mobile bookings across the region. Connect via
            WhatsApp for specialized bridal consultations or immediate session
            availability.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
          <Button
            size='xl'
            asChild
            className='h-16 px-12 rounded-full bg-orange-500 text-white hover:bg-white hover:text-black transition-all font-medium text-base'
          >
            <Link href='/glam/bookings'>Book your slot</Link>
          </Button>

          <Button
            size='xl'
            variant='outline'
            asChild
            className='h-16 px-12 rounded-full border-gray-800 hover:text-white text-white hover:bg-gray-900 transition-all font-medium text-base group'
          >
            <Link
              href='https://wa.me/27710354040'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3'
            >
              <FaWhatsapp className='size-5 text-orange-500 group-hover:scale-110 transition-transform' />
              WhatsApp us
            </Link>
          </Button>
        </div>

        {/* Brand Details */}
        <div className='pt-12 border-t border-gray-900 flex flex-col items-center gap-8'>
          <div className='flex flex-wrap justify-center gap-x-16 gap-y-6'>
            <div className='flex flex-col gap-1 items-center md:items-start'>
              <span className='text-xs font-medium tracking-widest text-gray-500 uppercase'>
                Availability
              </span>
              <span className='text-sm font-medium'>
                7 Days a week (By appointment)
              </span>
            </div>
            <div className='flex flex-col gap-1 items-center md:items-start'>
              <span className='text-xs font-medium tracking-widest text-gray-500 uppercase'>
                Service Area
              </span>
              <span className='text-sm font-medium'>
                Gauteng & Surrounds (Mobile)
              </span>
            </div>
            <div className='flex flex-col gap-1 items-center md:items-start'>
              <span className='text-xs font-medium tracking-widest text-gray-500 uppercase'>
                Direct Connect
              </span>
              <Link
                href='https://www.instagram.com/3sfaceglam/'
                className='text-sm font-medium hover:text-orange-500 transition-colors underline decoration-orange-500/30 underline-offset-4'
              >
                @3sfaceglam
              </Link>
            </div>
          </div>

          <p className='text-sm text-gray-700 font-medium'>
            © 2026 3S Faceglam. A Bukky Group Creative Agency.
          </p>
        </div>
      </div>
    </section>
  )
}
