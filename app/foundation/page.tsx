import { DonationWays } from './donation-ways'
import { FoundationHero } from './foundation-hero'
import { ImpactSection } from './impact-section'
import { MissionGrid } from './mission-grid'
import { PartnersSection } from './partners-section'
import { ProgramsSection } from './programs-section'
import { VolunteersSection } from './volunteers-section'

export const metadata = {
  title: 'Get Busy Foundation Africa | Teen Empowerment & Women Support',
  description:
    'A safe haven founded by Bukky Anny. We are committed to teen mentorship, women empowerment, and providing a guiding light for those facing life challenges across Africa.',
}

export default function FoundationPage() {
  return (
    <main className='min-h-screen bg-background'>
      <FoundationHero />
      <PartnersSection />
      <MissionGrid />
      <ProgramsSection />
      <ImpactSection />
      <VolunteersSection />
      <DonationWays />
    </main>
  )
}
