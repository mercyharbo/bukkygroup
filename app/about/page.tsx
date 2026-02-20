import type { Metadata } from 'next'
import AboutComp from './about-comp'

export const metadata: Metadata = {
  title: 'About Bukky Anny | The Visionary Behind Bukky Group',
  description:
    "Discover the story of Bukky Anny, the creative force and visionary leader of Bukky Group. From fashion excellence to philanthropic impact, learn about the legacy of 'Modern Royalty'.",
  keywords: [
    'Bukky Anny',
    'Founder Bukky Group',
    'Lumina Vogue Visionary',
    'Fashion Entrepreneur',
    'African Philanthropy',
    'Modern Royalty Mentality',
  ],
}

export default function page() {
  return <AboutComp />
}
