import type { Metadata } from 'next'
import SalonPage from './salon-comp'

export const metadata: Metadata = {
  title: 'Bukky Beauty World | Luxury Unisex Salon in Centurion',
  description:
    'Experience luxury at Bukky Beauty World, Centurion’s premier one-stop beauty destination. Professional hair, nails, makeup, and holistic glam experiences by Bukky Group.',
  keywords: [
    'luxury salon Centurion',
    'unisex hair salon',
    'professional makeup artist',
    'nail studio Centurion',
    'Bukky Beauty World',
    'bridal glam South Africa',
    'beauty sanctuary',
  ],
  openGraph: {
    title: 'Bukky Beauty World | Luxury beauty, redefined.',
    description:
      'A sanctuary of elegance and creativity in Centurion. Join thousands of happy clients who trust us for their total glam transformation.',
    type: 'website',
  },
}

export default function page() {
  return <SalonPage />
}
