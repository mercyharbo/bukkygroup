import type { Metadata } from 'next'
import ContactComp from './contact-comp'

export const metadata: Metadata = {
  title: 'Contact Us | Bukky Group Centurion',
  description:
    'Get in touch with Bukky Group for bespoke fashion, premium beauty services, or academy enrollment. Visit our Centurion location or reach out via WhatsApp.',
  keywords: [
    'Contact Bukky Group',
    'Centurion Fashion Boutique',
    '3S Label Contact',
    'Bukky Beauty World Centurion',
    'Bukky Group Location',
    'Book Appointment Centurion',
  ],
}

export default function page() {
  return <ContactComp />
}
