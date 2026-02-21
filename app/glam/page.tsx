import { GlamAboutArtist } from './glam-about-artist'
import { GlamContact } from './glam-contact'
import { GlamHero } from './glam-hero'
import { GlamPortfolio } from './glam-portfolio'
import { GlamServices } from './glam-services'
import { GlamStats } from './glam-stats'
import { GlamTestimonials } from './glam-testimonials'
import { GlamUSP } from './glam-usp'

export const metadata = {
  title: '3S Faceglam | Professional Makeup Artistry by Aura',
  description:
    'Unleash your inner glow with Faceglam artistry. Specialized bridal, soft glam, and editorial makeup services by Aura.',
}

export default function GlamPage() {
  return (
    <main className='min-h-screen bg-black flex flex-col'>
      {/* Hero Section - Refined Asymmetric Layout */}
      <GlamHero />

      {/* Stats Banner */}
      <GlamStats />

      {/* About the Artist */}
      <GlamAboutArtist />

      {/* Services Grid - All Services Listed */}
      <GlamServices />

      {/* Visual Portfolio Gallery */}
      <GlamPortfolio />

      {/* Testimonials */}
      <GlamTestimonials />

      {/* Unique Selling Points */}
      <GlamUSP />

      {/* Final CTA & Contact */}
      <GlamContact />
    </main>
  )
}
