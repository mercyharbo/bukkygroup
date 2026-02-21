import Link from 'next/link'
import { RiArrowLeftLine } from 'react-icons/ri'
import { GlamBookingWidget } from '../glam-booking-widget'

export const metadata = {
  title: 'Book Your Session | 3S Faceglam',
  description:
    'Schedule your professional makeup session with Aura at 3S Faceglam. Automated booking and instant confirmation.',
}

export default function BookingsPage() {
  return (
    <main className='min-h-screen bg-black py-20 px-6'>
      <div className='container mx-auto space-y-12'>
        {/* Navigation / Header */}
        <div className='flex items-center justify-between'>
          <Link
            href='/glam'
            className='flex items-center gap-2 text-white hover:text-orange-500 transition-colors font-medium group'
          >
            <RiArrowLeftLine className='size-5 transition-transform group-hover:-translate-x-1' />
            Back to Artistry
          </Link>

          <div className='text-right'>
            <h1 className='text-3xl md:text-5xl font-medium text-white tracking-tighter'>
              Reserve Your <span className='text-orange-500 italic'>Glow.</span>
            </h1>
          </div>
        </div>

        {/* The Booking Portal */}
        <div className='py-12 bg-zinc-900/50 rounded-[4rem] border border-orange-500/10 p-4 md:p-8 lg:p-12'>
          <GlamBookingWidget />
        </div>

        {/* Footer info */}
        <div className='text-center max-w-2xl mx-auto'>
          <p className='text-gray-500 text-sm leading-relaxed'>
            Having trouble booking? Feel free to reach out directly via WhatsApp
            for manual scheduling or special bridal enquiries.
          </p>
        </div>
      </div>
    </main>
  )
}
