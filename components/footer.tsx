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
    <footer className='bg-zinc-950 py-16 text-white'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-center gap-12'>
          {/* Newsletter Section */}
          <div className='w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-10'>
            <div className='flex flex-col items-center gap-6 text-center'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-bold text-white'>
                  Stay{' '}
                  <span className='text-group-primary italic'>Informed</span>
                </h3>
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
                      <HiMail className='absolute top-1/2 left-4 size-5 -translate-y-1/2 text-zinc-500' />
                      <Input
                        type='email'
                        placeholder='Enter your email address'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='h-12 rounded-xl border-zinc-700 bg-zinc-800 pl-11 text-white focus-visible:ring-group-primary focus-visible:ring-offset-0'
                      />
                    </div>
                    <Button
                      type='submit'
                      className='bg-group-primary hover:bg-group-primary/90 h-12 rounded-xl px-8 font-bold shadow-lg shadow-group-primary/20 transition-all hover:scale-105 active:scale-95'
                    >
                      Subscribe
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key='success'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='rounded-xl border border-group-primary/20 bg-group-primary/10 px-6 py-4 text-sm font-semibold text-group-primary'
                  >
                    Thank you! You&apos;ve successfully subscribed. ✨
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Logo/Brand Name */}
          <Link href='/' className='flex items-center gap-2'>
            <div className='relative h-20 w-80'>
              <NextImage
                src='/logo.png'
                alt='Bukky Group Logo'
                fill
                className='object-contain'
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
            {footerNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-medium text-zinc-400 transition-colors hover:text-white'
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className='flex flex-col items-center gap-4'>
            {/* Social Icons */}
            <div className='flex items-center gap-6'>
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='flex size-10 items-center justify-center rounded-full border border-zinc-800 transition-all hover:border-group-primary hover:bg-group-primary/10 hover:text-group-primary'
                  aria-label={item.name}
                >
                  <item.icon className='size-4' />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className='text-xs text-zinc-600'>
              © {new Date().getFullYear()} Bukky Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
