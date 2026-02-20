import { BusinessGrid } from './business-grid'
import { CompaniesCTA } from './cta'
import { CompaniesHero } from './hero'
import { BusinessStats } from './stats'

export const metadata = {
  title: 'Our Companies | Bukky Group',
  description:
    'Explore the diverse ecosystem of Bukky Group – a strategic collective of luxury beauty, fashion, hospitality, and education brands designed to empower and inspire.',
}

export default function CompaniesPage() {
  return (
    <main className='min-h-screen bg-background selection:bg-primary/30 selection:text-primary'>
      <CompaniesHero />
      <div className='flex flex-col'>
        <BusinessGrid />
        <BusinessStats />
        <CompaniesCTA />
      </div>
    </main>
  )
}
