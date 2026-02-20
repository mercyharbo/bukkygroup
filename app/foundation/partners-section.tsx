'use client'

import { Marquee } from '@/components/marquee'
import {
  HiOutlineAcademicCap,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from 'react-icons/hi2'

/**
 * PartnersSection Component
 * A clean, monochromatic logo grid to build trust.
 */
export const PartnersSection = () => {
  const partners = [
    { name: 'Global Relief', icon: <HiOutlineGlobeAlt /> },
    { name: 'HealthFirst', icon: <HiOutlineHeart /> },
    { name: 'EcoShelter', icon: <HiOutlineHome /> },
    { name: 'Unity Academics', icon: <HiOutlineAcademicCap /> },
    { name: 'BrightFuture', icon: <HiOutlineSparkles /> },
    { name: 'Community Care', icon: <HiOutlineUserGroup /> },
  ]

  return (
    <section className='w-full py-12 bg-white border-y border-gray-100'>
      <div className='container mx-auto px-5 lg:px-10'>
        <p className='text-center text-xs font-bold uppercase tracking-extra text-gray-400 mb-10'>
          Our Trusted Partners & Sponsors
        </p>
        <Marquee speed={30} gap={60} className='py-4'>
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className='flex items-center justify-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group shrink-0'
            >
              <span className='text-3xl text-gray-900 group-hover:text-foundation-primary transition-colors'>
                {partner.icon}
              </span>
              <span className='font-bold text-gray-900 tracking-tight text-lg whitespace-nowrap'>
                {partner.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
