'use client'

import { AnimatePresence, motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Companies', href: '/companies' },
  { name: 'Foundation', href: '/foundation' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className='fixed top-6 left-0 z-50 w-full px-6 transition-all duration-300'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-gray-900/50 px-8 py-3 shadow-2xl backdrop-blur-xl'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-3 transition-opacity hover:opacity-90'
        >
          <div className='relative size-14'>
            <NextImage
              src='/logo6.png'
              alt='Bukky Group'
              fill
              className='object-contain'
              priority
            />
          </div>
          <span className='font-cinzel text-sm font-black uppercase tracking-widest text-white sm:text-xl'>
            Bukky <br /> Group
          </span>
        </Link>
        <div className='flex items-center gap-8'>
          {/* Desktop Navigation */}
          <div className='hidden items-center gap-8 lg:flex'>
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-semibold transition-all hover:text-white ${
                    isActive ? 'text-white' : 'text-gray-200'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId='active-nav'
                      className='absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-white to-white'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 lg:hidden'
          >
            {isMobileMenuOpen ? (
              <HiX className='size-5' />
            ) : (
              <HiMenu className='size-5' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className='fixed inset-0 z-40 bg-gray-950/20 backdrop-blur-sm lg:hidden'
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className='fixed inset-y-0 left-0 z-50 w-full max-w-sm border-r border-white/5 bg-gray-900 p-10 shadow-2xl lg:hidden'
            >
              <div className='flex flex-col gap-8'>
                <div className='flex items-center justify-between'>
                  <span className='font-serif text-2xl font-medium text-white'>
                    Navigation
                  </span>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <HiX className='size-6 text-white transition-transform hover:rotate-90' />
                  </button>
                </div>

                <div className='flex flex-col gap-6'>
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-xl font-medium transition-all hover:translate-x-2 ${
                          isActive ? 'text-primary' : 'text-gray-300'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
