import { AuthorStory } from './author-story'
import { BookGrid } from './book-grid'
import { BooksHero } from './books-hero'
import { LitMedia } from './media-lit'
import { PartnerLogos } from './partner-logos'

export default function BooksPage() {
  return (
    <main className='min-h-screen bg-white selection:bg-primary/30 selection:text-primary'>
      <div className='flex flex-col'>
        <BooksHero />
        <BookGrid />
        <AuthorStory />
        <LitMedia />
        <PartnerLogos />
      </div>
    </main>
  )
}
