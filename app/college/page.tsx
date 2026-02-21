import { CampusSection } from './campus-section'
import { CollegeHero } from './college-hero'
import { NewsSection } from './college-news'
import { CollegePrograms } from './college-programs'
import { CollegeStats } from './college-stats'
import { ExcellenceSection } from './excellence-section'
import { TransformSection } from './transform-section'

export const metadata = {
  title: '3S College | Bukky Group',
  description:
    'Premier Beauty and Fashion College founded under Bukky Group. Empowering students with world-class education and hands-on training to excel in the industry.',
}

export default function CollegePage() {
  return (
    <main className='min-h-screen bg-background selection:bg-primary/30 selection:text-primary'>
      <CollegeHero />
      <div className='flex flex-col'>
        <ExcellenceSection />
        <CollegePrograms />
        <CollegeStats />
        <TransformSection />
        <CampusSection />
        <NewsSection />
      </div>
    </main>
  )
}
