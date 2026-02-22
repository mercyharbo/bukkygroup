'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

/**
 * CosmeticContact Component
 * Final CTA and contact section.
 */
export const CosmeticContact = () => {
  return (
    <section className='w-full py-24 bg-black text-white relative overflow-hidden'>
      <div className='container mx-auto px-6 text-center space-y-16 relative z-10'>
        <div className='max-w-3xl mx-auto space-y-6'>
          <span className='text-sm font-medium tracking-widest text-gray-400'>
            Your skin transformation
          </span>
          <h2 className='text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-tight'>
            Begin your journey <br /> with 3S Cosmetic
          </h2>
          <p className='text-gray-300 text-lg md:text-xl font-normal leading-relaxed text-pretty'>
            Connect with our skin specialists for a personalized consultation.
            Discover the ideal regimen for your unique skin architecture.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
          <Button
            size='xl'
            asChild
            className='h-16 px-12 rounded-full bg-white text-black hover:bg-white/80 hover:text-black transition-all font-medium text-base'
          >
            <Link href='/bookings'>Reserve session</Link>
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
              <FaWhatsapp className='size-5 text-gray-400  group-hover:scale-110 transition-transform' />
              WhatsApp us
            </Link>
          </Button>
        </div>

        {/* Closing details */}
        <div className='pt-12 border-t border-gray-900 flex flex-col items-center gap-6'>
          <div className='flex flex-wrap justify-center gap-x-12 gap-y-4'>
            <div className='flex flex-col gap-1 items-center md:items-start'>
              <span className='text-xs font-medium tracking-widest text-gray-300'>
                Location
              </span>
              <span className='text-sm font-medium'>Atelier Centurion</span>
            </div>
            <div className='flex flex-col gap-1 items-center md:items-start'>
              <span className='text-xs font-medium tracking-widest text-gray-300'>
                Hours
              </span>
              <span className='text-sm font-medium'>
                Mon — Sat, 09:00 - 18:00
              </span>
            </div>
            <div className='flex flex-col gap-1 items-center md:items-start'>
              <span className='text-xs font-medium tracking-widest text-gray-300'>
                Social
              </span>
              <Link
                href='https://www.instagram.com/3scosmetic/'
                className='text-sm font-medium hover:text-gray-400 transition-colors'
              >
                @3scosmetic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
