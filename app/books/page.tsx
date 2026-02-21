import { AuthorStory } from './author-story'
import { BooksHero } from './books-hero'
import { LitMedia } from './media-lit'
import { PartnerLogos } from './partner-logos'
import { Testimonials } from './testimonials'

export default function BooksPage() {
  return (
    <main className='min-h-screen bg-white selection:bg-primary/30 selection:text-primary'>
      <div className='flex flex-col'>
        <BooksHero />
        <AuthorStory />
        <LitMedia />
        <Testimonials />
        <PartnerLogos />
      </div>
    </main>
  )
}
