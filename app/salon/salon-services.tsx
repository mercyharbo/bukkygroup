'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { HiCheckCircle } from 'react-icons/hi2'

const salonServicesData = [
  {
    category: 'Nails - Feets (Pedicure & Toes)',
    items: [
      { name: 'Gel Toes', price: 'R150' },
      { name: 'Gel French Toes', price: 'R180' },
      { name: 'Acrylic Toes', price: 'R200' },
      { name: 'Plain Pedicure', price: 'R200' },
      { name: 'Pedicure + Gel', price: 'R350' },
      { name: 'Acrylic (Full)', price: 'R400' },
      { name: 'French (Full)', price: 'R450' },
    ],
  },
  {
    category: 'Nails - Extras',
    items: [
      { name: 'Soak Off', price: 'R50' },
      { name: 'Refill', price: 'R200' },
      { name: 'Nail Art (per nail)', price: 'R10' },
      { name: 'D Nail Art', price: 'R50' },
      { name: 'French Design', price: 'R50' },
    ],
  },
  {
    category: 'Nails - Sculpture',
    items: [
      { name: 'Short', price: 'R370' },
      { name: 'Medium', price: 'R400' },
      { name: 'Long', price: 'R450' },
    ],
  },
  {
    category: 'Basic Nail Care',
    items: [
      { name: 'Plain Manicure', price: 'R250' },
      { name: 'Buff & Shine', price: 'R150' },
    ],
  },
  {
    category: 'Gel Nails',
    items: [
      { name: 'Gel Overlay', price: 'R200' },
      { name: 'Gel Tips', price: 'R250' },
      { name: 'Builder Gel', price: 'R300' },
    ],
  },
  {
    category: 'Polygel',
    items: [
      { name: 'Overlay', price: 'R250' },
      { name: 'Short', price: 'R300' },
      { name: 'Medium', price: 'R350' },
      { name: 'Long', price: 'R350 – R400' },
      { name: 'X-Long', price: 'R450' },
    ],
  },
  {
    category: 'Acrylic Nails',
    items: [
      { name: 'Overlay', price: 'R300' },
      { name: 'Short', price: 'R350' },
      { name: 'Medium', price: 'R370' },
      { name: 'Long', price: 'R400' },
      { name: 'X-Long', price: 'R500' },
    ],
  },
  {
    category: 'Barber Services',
    items: [
      { name: 'Beard Only', price: 'R50' },
      { name: 'Brush Cut', price: 'R120' },
      { name: 'Chiskop + Powder', price: 'R150' },
      { name: 'Hair Cut', price: 'R150' },
      { name: 'Design', price: 'R50' },
      { name: 'Trimming', price: 'R50' },
      { name: 'Cut + Scurl', price: 'R250' },
      { name: 'Cut + Bleach', price: 'R350' },
      { name: 'Cut + Bleach + Colour', price: 'R450' },
      { name: 'Kids Cut', price: 'R120' },
    ],
  },
  {
    category: 'Cornrows - Straight Back (Thick)',
    items: [
      { name: 'Less than 12 lines', price: 'R300' },
      { name: 'Bra Length', price: 'R350' },
      { name: 'Waist Length', price: 'R400' },
      { name: 'Touch My Bum', price: 'R450' },
      { name: 'Over My Bum', price: 'R500' },
      { name: 'Extra length (Add-on)', price: 'R50' },
      { name: 'Small lines (Add-on)', price: 'R100' },
    ],
  },
  {
    category: 'Cornrows - Straight Up (Thick)',
    items: [
      { name: 'Less than 12 lines', price: 'R350' },
      { name: 'Bra Length', price: 'R400' },
      { name: 'Waist Length', price: 'R450' },
      { name: 'Touch My Bum', price: 'R500' },
      { name: 'Over My Bum', price: 'R550' },
      { name: 'Small lines (Add-on)', price: 'R100' },
      { name: 'Extra length (Add-on)', price: 'R50' },
    ],
  },
  {
    category: 'Half Braids & Cornrows',
    items: [
      { name: 'Shoulder Length', price: 'R550' },
      { name: 'Bra Length', price: 'R600' },
      { name: 'Waist Length', price: 'R650' },
      { name: 'Touch My Bum', price: 'R750' },
      { name: 'Over My Bum', price: 'R800' },
      { name: 'Extra length (Add-on)', price: 'R100' },
    ],
  },
  {
    category: 'Mohawk',
    items: [
      { name: 'Freehand with natural hair', price: 'R200' },
      { name: 'Crochet / Bonding', price: 'R300' },
      { name: 'With Sing', price: 'R300' },
      { name: 'Cornrows with hairpiece single', price: 'R450' },
      { name: 'With Crochet / Bonding', price: 'R400' },
    ],
  },
  {
    category: 'Benny & Betty | Locs',
    items: [
      { name: 'Dreadlock Lines', price: 'R150' },
      { name: 'Dreadlock Straight Back', price: 'R200' },
      { name: 'Dreadlock Straight Up', price: 'R250' },
      { name: 'Brazilian Wool (Extra)', price: 'R50' },
      { name: 'Small Lines (Extra)', price: 'R50' },
      { name: 'Mohawk / Cornrows with Crochet Bonding', price: 'R450' },
      { name: 'Cornrows with Single Plaits', price: 'R300' },
      { name: 'Full Head Crochet Locs', price: 'R600' },
      { name: 'Half Head Crochet Locs', price: 'R450' },
      { name: 'Faux Locs', price: 'R600' },
      { name: 'Butterfly Locs Short', price: 'R700' },
      { name: 'Butterfly Locs Long', price: 'R900' },
    ],
  },
  {
    category: 'Dreadlocks Services',
    items: [
      { name: 'Twist Only', price: 'R250' },
      { name: 'Twist & Style', price: 'R450' },
      { name: 'Full Head Style', price: 'R600' },
      { name: 'Half Head Crochet', price: 'R600' },
      { name: 'Full Head Crochet', price: 'R800' },
      { name: 'Re-installing Dreadlocks', price: 'R1100' },
      { name: 'Crochet & Extending', price: 'R1300' },
    ],
  },
  {
    category: 'Free Hand Braids',
    items: [
      { name: 'Small Free Hand', price: 'R300' },
      { name: 'Medium Free Hand', price: 'R250' },
      { name: 'Long Lines Free Hand', price: 'R200' },
      { name: 'Short with Extension', price: 'R350' },
      { name: 'Long with Extension', price: 'R400' },
      { name: 'Additional length', price: 'R100' },
    ],
  },
  {
    category: 'Fishbone Braids',
    items: [
      { name: '2 Fishbone (No Lines)', price: 'R300' },
      { name: 'Bra Length (No Lines)', price: 'R350' },
      { name: 'Waist Length (No Lines)', price: 'R400' },
      { name: 'Touch My Bum (No Lines)', price: 'R450' },
      { name: 'Over My Bum (No Lines)', price: 'R500' },
      { name: 'Shoulder (With Lines)', price: 'R350' },
      { name: 'Bra Length (With Lines)', price: 'R400' },
      { name: 'Waist (With Lines)', price: 'R450' },
      { name: 'Touch My Bum (With Lines)', price: 'R500' },
      { name: 'Over My Bum (With Lines)', price: 'R550' },
    ],
  },
  {
    category: 'Needle Plaiting',
    items: [
      { name: 'Straight Back', price: 'R200' },
      { name: 'Straight Up', price: 'R250' },
      { name: 'Additional length', price: 'R100' },
      { name: 'With hairpiece', price: '+R150' },
      { name: 'Bantu Knots with hairpiece', price: 'R400' },
    ],
  },
  {
    category: 'Bonding Services',
    items: [
      { name: 'Bonding with your hairpiece', price: 'R350' },
      { name: 'Addition Closure', price: 'R50' },
      { name: 'Ironing', price: 'R50' },
      { name: 'Half Head Bonding', price: 'R250' },
      { name: 'Razor Cut', price: 'R450' },
      { name: 'Pixie Cut', price: 'R450' },
      { name: 'Half Cornrows / Half Bonding', price: 'R450' },
    ],
  },
  {
    category: 'Wig Installation',
    items: [
      { name: 'With lines', price: 'R600' },
      { name: 'Without lines', price: 'R500' },
      { name: 'Styling only', price: 'R150' },
      { name: 'Curling & Styling', price: 'R250' },
      { name: 'Bridal Styling', price: 'R400' },
      { name: 'Ponytail with hairpiece', price: 'R550' },
      { name: 'Ponytail without hairpiece', price: 'R250' },
      { name: 'Half Installation', price: 'R350' },
    ],
  },
  {
    category: 'Wig Treatment',
    items: [
      { name: 'Wash & Blow', price: 'R150' },
      { name: 'Ironing', price: 'R100' },
      { name: 'Wash & Iron', price: 'R250' },
      { name: 'Curling', price: 'R200' },
      { name: 'Wash & Curl', price: 'R300' },
      { name: 'Wig Styling', price: 'R250' },
    ],
  },
  {
    category: 'Wig Making & Fix',
    items: [
      { name: 'Wig Making', price: 'R450' },
      { name: 'Fix Closure', price: 'R150' },
      { name: 'Fix Frontal', price: 'R200' },
      { name: 'Customization', price: 'R250' },
      { name: 'Treatment (Straight)', price: 'R300' },
      { name: 'Detangle Curls', price: 'R400' },
    ],
  },
  {
    category: 'Hair Relaxer',
    items: [
      { name: 'Blow Out', price: 'R150' },
      { name: 'Dark & Lovely', price: 'R250' },
      { name: 'Restore', price: 'R200' },
      { name: 'Soft & Free', price: 'R200' },
      { name: 'Mizani', price: 'R500' },
    ],
  },
  {
    category: 'Hair Treatment & Scalp',
    items: [
      { name: 'Cholesterol', price: 'R150' },
      { name: 'Dark & Lovely', price: 'R200' },
      { name: 'Black Like Me', price: 'R250' },
      { name: 'Mayonnaise', price: 'R300' },
      { name: 'Mizani', price: 'R400' },
    ],
  },
  {
    category: 'Hair Wash',
    items: [
      { name: 'Wash & Blowdry', price: 'R100' },
      { name: 'Wash & Detangle', price: 'R150' },
      { name: 'Braids Wash', price: 'R200' },
    ],
  },
  {
    category: 'Braids & Twist (With Hairpiece)',
    items: [
      { name: 'Shoulder', price: 'R750' },
      { name: 'Bra Length', price: 'R800' },
      { name: 'Waist', price: 'R1000' },
      { name: 'Milano Curly', price: 'R700' },
      { name: 'French Curly Short', price: 'R800' },
      { name: 'French Curly Long', price: 'R1000' },
      { name: 'Touch My Bum', price: 'R1100' },
      { name: 'Over My Bum', price: 'R1300' },
    ],
  },
  {
    category: 'Braids & Twist (Natural/Client Hair)',
    items: [
      { name: 'Half Head Natural', price: 'R250' },
      { name: 'Full Head Natural', price: 'R400' },
      { name: 'Pick & Drop Bonding', price: 'R600' },
      { name: 'Pick & Drop Full', price: 'R750' },
      { name: 'Passion / Afro Twists Short', price: 'R600' },
      { name: 'Passion / Afro Twists Long', price: 'R750' },
      { name: 'Singles', price: 'R600' },
      { name: 'Knotless (Add-on)', price: '+R100' },
      { name: 'Goddess (Add-on)', price: '+R100' },
      { name: 'Mixed Colours (Add-on)', price: '+R100' },
      { name: 'Beads (Add-on)', price: '+R100' },
      { name: 'Short Hair (Add-on)', price: '+R200' },
    ],
  },
  {
    category: 'Kids Hairstyles',
    items: [
      { name: 'Fishbone/2 Lines Short', price: 'R250' },
      { name: 'Fishbone/2 Lines Medium', price: 'R350' },
      { name: 'Fishbone/2 Lines Long', price: 'R300' },
      { name: 'Fishbone/2 Lines Extra Long', price: 'R400' },
      { name: 'Cornrows Straight Back', price: 'R350' },
      { name: 'Cornrows Straight Up', price: 'R350' },
      { name: '2 Pondo', price: 'R400' },
      { name: '3 Pondo', price: 'R450' },
      { name: 'Half Braids / Half Cornrows Short', price: 'R400' },
      { name: 'Half Braids / Half Cornrows Long', price: 'R500' },
      { name: '2 Pondo + Braids', price: 'R550' },
      { name: 'Dry Curl', price: 'R350' },
      { name: 'Perm', price: 'R450' },
      { name: 'Dry Curl & Dye', price: 'R400' },
      { name: 'Kids Braids (Age 1–4)', price: 'R800' },
      { name: 'Kids Braids (Age 5–10)', price: 'R600 – R700' },
      { name: 'Knotless Extra', price: 'R100' },
    ],
  },
  {
    category: 'Makeup & Brows',
    items: [
      { name: 'Natural Glam', price: 'R650' },
      { name: 'Full Glam', price: 'R750' },
      { name: 'Bridesmaid', price: 'R900' },
      { name: 'Bridal Trial', price: 'R1000' },
      { name: 'Bridal Makeup', price: 'R2000' },
      { name: 'Home Service (Add-on)', price: '+R500' },
      { name: 'Brows Shape', price: 'R50' },
      { name: 'Brows Shape & Tint', price: 'R180' },
      { name: 'Wax, Tint & Shape', price: 'R200' },
    ],
  },
  {
    category: 'Eyelashes',
    items: [
      { name: 'Strip Lashes', price: 'R150' },
      { name: 'Cluster Lashes', price: 'R250' },
      { name: 'Classic', price: 'R400' },
      { name: 'Hybrid', price: 'R450' },
      { name: 'Volume', price: 'R500' },
      { name: 'Mega Volume', price: 'R650' },
      { name: 'Lash Removal', price: 'R150' },
    ],
  },
  {
    category: 'Waxing',
    items: [
      { name: 'Brow, Lip & Chin', price: 'R80' },
      { name: 'Underarm', price: 'R100' },
      { name: 'Arm', price: 'R150' },
      { name: 'Face', price: 'R200' },
      { name: 'Legs', price: 'R350' },
      { name: 'Bikini', price: 'R200' },
      { name: 'Brazilian', price: 'R250' },
      { name: 'Hollywood', price: 'R400' },
    ],
  },
  {
    category: 'Massage',
    items: [
      { name: 'Foot (30 mins)', price: 'R150' },
      { name: 'Aromatherapy (30 mins)', price: 'R250' },
      { name: 'Swedish (30 mins)', price: 'R300' },
      { name: 'Hot Stone (30 mins)', price: 'R350' },
      { name: 'Deep Tissue (30 mins)', price: 'R400' },
      { name: 'Full Body (60 mins)', price: 'R450' },
    ],
  },
]

export const SalonServices = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section
      id='services-pricing'
      className='w-full py-24 md:py-32 bg-black border-t border-zinc-800'
    >
      <div className='container mx-auto px-5 lg:px-10 space-y-24'>
        <div className='max-w-3xl mx-auto text-center space-y-6'>
          <h2 className='font-serif text-4xl md:text-6xl font-bold text-white leading-tight uppercase'>
            PRICING & <br /> SERVICES
          </h2>
          <div className='w-16 h-1 bg-white mx-auto' />
        </div>

        <div className='max-w-5xl mx-auto flex flex-col gap-6'>
          {salonServicesData.map((section, sectionIdx) => {
            const isOpen = activeIndex === sectionIdx

            return (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIdx * 0.05 }}
                className={`group border rounded-sm transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? 'border-white/30 ring-1 ring-white/10 shadow-2xl'
                    : 'border-zinc-800 hover:border-white/50'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : sectionIdx)}
                  className='w-full flex items-center justify-between p-6 md:p-10 text-left bg-zinc-950 group-hover:bg-zinc-900 relative transition-all'
                >
                  <div className='space-y-1 relative z-10'>
                    <h3
                      className={`text-xl md:text-2xl font-bold uppercase tracking-widest transition-colors ${
                        isOpen ? 'text-white' : ''
                      }`}
                    >
                      {section.category}
                    </h3>
                    <p className='text-xs text-gray-500 font-medium tracking-widest uppercase'>
                      {section.items.length} OPTIONS AVAILABLE
                    </p>
                  </div>

                  <div
                    className={`p-3 rounded-full border transition-all duration-500 ${
                      isOpen
                        ? 'bg-white border-white text-black rotate-180'
                        : 'bg-transparent border-gray-800 text-gray-600'
                    }`}
                  >
                    <HiChevronDown className='size-6' />
                  </div>

                  {/* Absolute Accent Line */}
                  {isOpen && (
                    <motion.div
                      layoutId='active-accent'
                      className='absolute left-0 top-0 w-1 h-full bg-white'
                    />
                  )}
                </button>

                {/* Accordion Content with Scrollable Area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div className='p-6 md:p-10 pt-0 bg-zinc-950'>
                        <div className='max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 -mr-4'>
                          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 py-6'>
                            {section.items.map((item) => (
                              <div
                                key={item.name}
                                className='group/item flex flex-col gap-4'
                              >
                                <div className='flex items-start gap-4'>
                                  <div className='shrink-0 pt-1'>
                                    <HiCheckCircle className='size-5 text-zinc-600 group-hover/item:text-white transition-colors' />
                                  </div>
                                  <div className='grow space-y-2'>
                                    <div className='flex items-end justify-between gap-4'>
                                      <h4 className='text-sm font-bold text-zinc-300 uppercase group-hover/item:text-white transition-colors leading-tight'>
                                        {item.name}
                                      </h4>
                                      <div className='grow mb-1 min-w-[20px] border-b border-dotted border-zinc-800' />
                                      <span className='font-bold text-white text-sm'>
                                        {item.price}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <p className='text-xs text-center text-zinc-500 uppercase tracking-widest'>
          * Prices are subject to change based on length, complexity, and
          specific client requirements.
        </p>
      </div>
    </section>
  )
}
