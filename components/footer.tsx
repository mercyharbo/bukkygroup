'use client'

import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

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
  return (
    <footer className='bg-zinc-950 py-16 text-white'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-center gap-10'>
          {/* Logo/Brand Name */}
          <Link href='/' className='flex items-center gap-2'>
            <span className='text-3xl font-extrabold tracking-tight'>
              bukky<span className='text-primary italic'>group</span>
            </span>
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
                  className='flex size-10 items-center justify-center rounded-full border border-zinc-800 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary'
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
