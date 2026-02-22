'use client'

import { AnimatePresence, motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'
import { Button } from './ui/button'
import { Input } from './ui/input'

const footerNavigation = [
  { name: 'Homepage', href: '/' },
  { name: 'Services', href: '/salon' },
  { name: 'Bookings', href: '/bookings' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: FaFacebookF },
  { name: 'X', href: '#', icon: FaXTwitter },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/bukkybeautyworld',
    icon: FaInstagram,
  },
  { name: 'LinkedIn', href: '#', icon: FaLinkedinIn },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className='bg-black py-16 text-white border-t border-white/10'>
      <div className='container mx-auto px-5 lg:px-10'>
        <div className='flex flex-col items-center gap-8'>
          {/* Newsletter Section */}
          <div className='w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-900 p-8 md:p-10 shadow-2xl'>
            <div className='flex flex-col items-center gap-6 text-center'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-bold text-white'>Stay Informed</h3>
                <p className='text-zinc-400'>
                  Subscribe to get the latest news and exclusive offers from
                  Bukky Group.
                </p>
              </div>

              <AnimatePresence mode='wait'>
                {!subscribed ? (
                  <motion.form
                    key='form'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className='flex w-full flex-col gap-3 sm:flex-row'
                  >
                    <div className='relative flex-1'>
                      <HiMail className='absolute top-1/2 left-4 size-5 -translate-y-1/2 text-gray-400' />
                      <Input
                        type='email'
                        placeholder='Enter your email address'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='h-12 rounded-xl border-white/10 bg-white/10 pl-11 text-white focus-visible:ring-white focus-visible:ring-offset-0 placeholder:text-zinc-500'
                      />
                    </div>
                    <Button
                      type='submit'
                      className='bg-white hover:bg-white/90 h-12 rounded-xl px-8 font-bold text-black shadow-lg transition-all hover:scale-105 active:scale-95'
                    >
                      Subscribe
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key='success'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='rounded-xl border border-primary/20 bg-primary/10 px-6 py-4 text-sm font-semibold text-primary'
                  >
                    Thank you! You&apos;ve successfully subscribed. ✨
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Logo/Brand Name */}
          <Link href='/' className='flex items-center gap-2'>
            <div className='relative size-30 transition-transform hover:scale-105'>
              <NextImage
                src='/logo6.png'
                alt='Bukky Group Logo'
                fill
                className='object-contain'
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className='flex flex-wrap justify-center gap-x-8 gap-y-4 font-semibold'>
            {footerNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm text-gray-400 transition-all hover:text-white'
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className='flex flex-col items-center gap-6'>
            {/* Social Icons */}
            <div className='flex items-center gap-6'>
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='group flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-white hover:bg-white hover:text-black'
                  aria-label={item.name}
                >
                  <item.icon className='size-5 transition-transform group-hover:scale-110' />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className='flex flex-col items-center gap-2'>
              <div className='text-xs font-semibold text-gray-500 uppercase tracking-widest'>
                © {new Date().getFullYear()} Bukky Group. All rights reserved.
              </div>
              <Link
                href='https://wa.me/27710354040'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs font-medium text-black hover:underline'
              >
                WhatsApp & Call: +27 71 035 4040
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
