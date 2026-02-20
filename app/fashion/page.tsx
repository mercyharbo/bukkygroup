import type { Metadata } from 'next'
import FashionComp from './fashion-comp'

export const metadata: Metadata = {
  title: 'Lumina Vogue | Modern Royalty & Bespoke Couture',
  description:
    'Experience the pinnacle of luxury fashion with Lumina Vogue. From bespoke tailoring to bridal couture, we illuminate the soul through modern royalty and heritage-inspired designs.',
  keywords: [
    'Lumina Vogue',
    'Bespoke Tailoring',
    'Haute Couture',
    'Modern Royalty',
    'Bridal Couture',
    'Luxury Fashion Africa',
    'Signature Collection',
  ],
}

export default function page() {
  return <FashionComp />
}
