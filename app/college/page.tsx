import { CampusSection } from './campus-section'
import { CollegeHero } from './college-hero'
import { NewsSection } from './college-news'
import { CollegeStats } from './college-stats'
import { ExcellenceSection } from './excellence-section'
import { TransformSection } from './transform-section'

export const metadata = {
  title: '3S College | Bukky Group',
  description:
    'Empowering future leaders in beauty, fashion, and business. Discover our professional training programs and creative community at 3S College.',
}

export default function CollegePage() {
  return (
    <main className='min-h-screen bg-background selection:bg-primary/30 selection:text-primary'>
      <CollegeHero />
      <div className='flex flex-col'>
        <ExcellenceSection />
        <CollegeStats />
        <TransformSection />
        <CampusSection />
        <NewsSection />
      </div>
    </main>
  )
}
