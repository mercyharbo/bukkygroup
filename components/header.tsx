'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Salon', href: '/salon' },
  {
    name: 'Services',
    href: '#',
    children: [
      { name: 'Fashion', href: '/fashion' },
      { name: 'Catering', href: '/catering' },
      { name: 'Academy', href: '/academy' },
    ],
  },
  { name: 'Bookings', href: '/bookings' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  return (
    <header className='fixed top-6 left-0 z-50 w-full px-6'>
      <nav className='mx-auto flex max-w-6xl items-center border justify-between rounded-full border-border bg-white/70 px-6 py-3 shadow-2xl backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-900/70'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2'>
          <span className='text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50'>
            bukky<span className='text-group-primary italic'>group</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden items-center gap-8 lg:flex'>
          {navigation.map((item) => (
            <div
              key={item.name}
              className='relative'
              onMouseEnter={() => item.children && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className='flex items-center gap-1.5 text-sm font-semibold text-zinc-600 transition-colors hover:text-group-primary dark:text-zinc-400 dark:hover:text-group-primary'
              >
                {item.name}
                {item.children && <HiChevronDown className='size-4' />}
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.children && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className='absolute top-full left-0 mt-4 w-48 overflow-hidden rounded-2xl border border-white/20 bg-white p-2 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900'
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className='block rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-group-primary dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-group-primary'
                      >
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Section / CTA */}
        <div className='flex items-center gap-4'>
          <Link
            href='/bookings'
            className='hidden h-10 items-center rounded-full bg-group-primary px-6 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-group-primary/90 active:scale-95 sm:flex'
          >
            Book Now
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='flex size-10 items-center justify-center rounded-full bg-zinc-100 transition-colors hover:bg-zinc-200 lg:hidden dark:bg-zinc-800 dark:hover:bg-zinc-700'
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className='fixed inset-y-0 left-0 z-50 w-full max-w-sm bg-white p-10 shadow-2xl dark:bg-zinc-950'
          >
            <div className='flex flex-col gap-8'>
              <div className='flex items-center justify-between'>
                <span className='font-serif text-2xl font-medium dark:text-white'>
                  Navigation
                </span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <HiX className='size-6 dark:text-white' />
                </button>
              </div>

              <div className='flex flex-col gap-6'>
                {navigation.map((item) => (
                  <div key={item.name} className='flex flex-col gap-4'>
                    <div className='flex items-center justify-between'>
                      <Link
                        href={item.href === '#' ? '' : item.href}
                        onClick={(e) => {
                          if (item.children) {
                            e.preventDefault()
                            setExpandedItem(
                              expandedItem === item.name ? null : item.name,
                            )
                          } else {
                            setIsMobileMenuOpen(false)
                          }
                        }}
                        className={`text-xl font-medium transition-colors ${
                          expandedItem === item.name
                            ? 'text-group-primary'
                            : 'text-zinc-900 dark:text-zinc-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() =>
                            setExpandedItem(
                              expandedItem === item.name ? null : item.name,
                            )
                          }
                          className='p-2'
                        >
                          <HiChevronDown
                            className={`size-5 transition-transform duration-300 dark:text-white ${
                              expandedItem === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {item.children && expandedItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className='ml-4 flex flex-col gap-4 border-l-2 border-group-primary/20 pl-6'
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='text-lg font-medium text-zinc-500 transition-colors hover:text-group-primary dark:text-zinc-400'
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href='/bookings'
                onClick={() => setIsMobileMenuOpen(false)}
                className='flex h-14 items-center justify-center rounded-2xl bg-group-primary text-xl font-bold text-white'
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
