'use client'

import { BookingSection } from './booking-section'
import { DeliveryPartners } from './delivery-partners'
import { FullMenu } from './full-menu'
import { MealGallery } from './meal-gallery'
import { RestaurantHero } from './restaurant-hero'

export default function RestaurantPage() {
  return (
    <main className='min-h-screen bg-white'>
      <div className='flex flex-col'>
        <RestaurantHero />
        <FullMenu />
        <MealGallery />
        <DeliveryPartners />
        <BookingSection />
      </div>
    </main>
  )
}
