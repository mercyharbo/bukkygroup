'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  HiOutlineCalendar,
  HiOutlineCheckBadge,
  HiOutlineUserPlus,
} from 'react-icons/hi2'
import { RiInstagramFill } from 'react-icons/ri'

/**
 * DonationWays Component
 * Section explaining how people can support.
 */
export const DonationWays = () => {
  const ways = [
    {
      icon: <HiOutlineCalendar className='size-8' />,
      title: 'Monthly Giving',
      description:
        'Small monthly contributions create a steady stream of support that allows us to plan long-term projects.',
    },
    {
      icon: <HiOutlineCheckBadge className='size-8' />,
      title: 'One-Time Donation',
      description:
        'Immediate relief where it is needed most. Perfect for responding to urgent community crises.',
    },
    {
      icon: <HiOutlineUserPlus className='size-8' />,
      title: 'Volunteer Your Time',
      description:
        'Your skills and time are just as valuable as financial support. Join our team on the ground.',
    },
  ]

  return (
    <section className='w-full py-24 bg-black'>
      <div className='container mx-auto px-5 lg:px-10 space-y-16'>
        <div className='flex flex-col items-center text-center space-y-4'>
          <h2 className='text-4xl lg:text-6xl font-bold tracking-tight text-white'>
            Ways to Give
          </h2>
          <p className='text-gray-300 max-w-2xl text-pretty text-lg'>
            There are many ways to make a difference. Choose the path that fits
            your heart and your circumstances.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {ways.map((way, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className='h-full rounded-card-foundation border border-muted/20 hover:border-muted/40 bg-muted/20 transition-all group p-4'>
                <CardContent className='p-8 flex flex-col items-center text-center space-y-6'>
                  <div className='size-20 rounded-full bg-white shadow-premium flex items-center justify-center text-black group-hover:scale-110'>
                    {way.icon}
                  </div>
                  <div className='space-y-3 grow'>
                    <h3 className='text-2xl font-bold text-white'>
                      {way.title}
                    </h3>
                    <p className='text-gray-300 leading-relaxed'>
                      {way.description}
                    </p>
                  </div>
                  <Button
                    size={'lg'}
                    className='w-full bg-black text-white hover:bg-black/90 transition-all '
                    asChild
                  >
                    <Link href='/contact'>Take Action</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Final Large CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='relative w-full rounded-card-foundation bg-white p-12 lg:p-20 overflow-hidden'
        >
          <div className='absolute inset-0 opacity-10 pointer-events-none'>
            <div className='absolute top-0 left-0 size-64 bg-white rounded-full blur-[100px]' />
            <div className='absolute bottom-0 right-0 size-64 bg-white rounded-full blur-[100px]' />
          </div>
          <div className='relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12'>
            <div className='space-y-6 max-w-2xl text-center lg:text-left'>
              <h2 className='text-4xl lg:text-5xl font-bold text-black'>
                Join the Movement.
              </h2>
              <p className='text-black text-lg lg:text-xl leading-relaxed'>
                Because no one should feel alone. Support Get Busy Foundation
                Africa and help us raise the leaders of tomorrow.
              </p>
              <div className='flex flex-wrap gap-x-4 gap-y-2 pt-2 justify-center lg:justify-start'>
                {[
                  '#GetBusyFoundation',
                  '#TeenEmpowerment',
                  '#SafePlace',
                  '#FutureLeaders',
                ].map((tag) => (
                  <span
                    key={tag}
                    className='text-xs font-bold uppercase tracking-widest text-black/60'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className='pt-6'>
                <Link
                  href='https://www.instagram.com/getbusyfoundation/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 text-black/80 hover:text-black transition-colors group w-fit'
                >
                  <RiInstagramFill className='size-6' />
                  <span className='text-sm uppercase tracking-widest font-bold border-b border-transparent group-hover:border-black transition-all'>
                    Follow @getbusyfoundationafrica
                  </span>
                </Link>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 w-full lg:w-auto'>
              <Button
                size='xl'
                className='bg-black text-white hover:scale-105 transition-transform'
              >
                Support Now
              </Button>
              <Button
                size='xl'
                variant='outline'
                className=' hover:text-white hover:bg-black/80 bg-transparent shadow-none border border-border text-black '
                asChild
              >
                <Link href='/contact'>Join Us</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
