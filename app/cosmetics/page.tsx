import { CosmeticContact } from './cosmetic-contact'
import { CosmeticHero } from './cosmetic-hero'
import { NaturalEssence } from './natural-essence'
import { ProductShowcase } from './product-showcase'

export const metadata = {
  title: '3S Cosmetic | Botanical Skin Architecture',
  description:
    'Experience the transformative power of nature. 3S Cosmetic combines botanical wisdom with dermatalogical precision for radiant, healthy skin.',
}

export default function CosmeticPage() {
  return (
    <main className='min-h-screen bg-black flex flex-col'>
      {/* Hero Section */}
      <CosmeticHero />

      {/* Philosophy Section - Purple Accent */}
      <NaturalEssence />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Final CTA & Contact */}
      <CosmeticContact />
    </main>
  )
}
