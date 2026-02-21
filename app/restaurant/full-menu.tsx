'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { HiCheckCircle } from 'react-icons/hi2'

const menuData = [
  {
    category: 'Breakfast',
    items: [
      {
        name: 'JOLLOF SPHAGHETTI',
        price: 'R100',
        description:
          'Choose 1: fried eggs, boiled eggs, chicken, turkey, or Hake fish',
      },
      {
        name: 'FRIED SPHAGHETTI',
        price: 'R100',
        description:
          'Choose 1: fried eggs, boiled eggs, chicken, turkey, or Hake fish',
      },
      {
        name: 'JOLLOF INDOMIE NOODLES',
        price: 'R100',
        description:
          'Choose 1: fried eggs, boiled eggs, chicken, turkey, or Hake fish',
      },
      {
        name: 'FRIED INDOMIE NOODLES',
        price: 'R100',
        description:
          'Choose 1: fried eggs, boiled eggs, chicken, turkey, or Hake fish',
      },
      {
        name: 'BREAD & EGGS',
        price: 'R100',
        description: 'One full loaf & fried eggs',
      },
      {
        name: 'OGI/CUSTARD WITH MOI-MOI',
        price: 'R120',
        description: 'Comes with sachet milk & sugar',
      },
      {
        name: 'OGI/CUSTARD WITH AKARA',
        price: 'R120',
        description: 'Comes with sachet milk & sugar',
      },
      {
        name: 'OGI/CUSTARD BREAD & EGGS',
        price: 'R120',
        description: 'Comes with sachet milk & sugar',
      },
      {
        name: 'OGI/CUSTARD BREAD & MOI-MOI',
        price: 'R120',
        description: 'Comes with sachet milk & sugar',
      },
      {
        name: 'OGI/CUSTARD BREAD & AKARA',
        price: 'R120',
        description: 'Comes with sachet milk & sugar',
      },
    ],
  },
  {
    category: 'Rice Dishes',
    items: [
      {
        name: 'JOLLOF RICE',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'FRIED RICE',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'JOLLOF & FRIED RICE',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'WHITE RICE & STEW',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'COCONUT RICE',
        price: 'R160',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'VILLAGE NATIVE RICE',
        price: 'R160',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'BASMATI JOLLOF RICE',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'BASMATI FRIED RICE',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'BASMATI WHITE RICE & STEW',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'OFADA RICE & SAUCE',
        price: 'R180',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
    ],
  },
  {
    category: 'Special Dishes',
    items: [
      {
        name: 'YAM & FRIED EGGS',
        price: 'R160',
        description: 'Yam & fried eggs',
      },
      {
        name: 'YAM PORRIDGE',
        price: 'R160',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'FRIED YAM & EGGS',
        price: 'R160',
        description: 'Fried Yam and Eggs',
      },
      {
        name: 'YAM & TITUS STEW',
        price: 'R180',
        description: 'Fried Titus stew',
      },
      {
        name: 'EWA AGANYIN',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'PORRIDGE BEANS',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'RICE & BEANS STEW',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'EWA AGANYIN WITH BREAD',
        price: 'R180',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'EWA AGANYIN WITH PLANTAIN (DODO)',
        price: 'R180',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'PORRIDGE BEANS WITH BREAD',
        price: 'R180',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'PORRIDGE BEANS WITH PLANTAIN (DODO)',
        price: 'R180',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'RICE & BEANS STEW WITH PLANTAIN (DODO)',
        price: 'R180',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
    ],
  },
  {
    category: 'Goat Meat Dishes',
    items: [
      {
        name: 'EFO RIRO & EBA (GARI)',
        price: 'R230',
        description: 'With 2 big goat meat',
      },
      {
        name: 'EGUSI & EBA (GARRI)',
        price: 'R230',
        description: 'With 2 big goat meat',
      },
      {
        name: 'OKRO & EBA',
        price: 'R230',
        description: 'With 2 big goat meat',
      },
      {
        name: 'OGBONO & EBA (GARRI)',
        price: 'R230',
        description: 'With 2 big goat meat',
      },
      {
        name: 'EFO RIRO & POUNDO YAM',
        price: 'R250',
        description: 'With 2 big goat meat',
      },
      {
        name: 'EGUSI & POUNDO YAM',
        price: 'R250',
        description: 'With 2 big goat meat',
      },
      {
        name: 'OKRO & POUNDO YAM',
        price: 'R250',
        description: 'With 2 big goat meat',
      },
      {
        name: 'OGBONO & POUNDO YAM',
        price: 'R250',
        description: 'With 2 big goat meat',
      },
      {
        name: 'EFO RRIO & SEMOLINA',
        price: 'R230',
        description: 'With 2 big goat meat',
      },
      {
        name: 'EGUSI & SEMOLINA',
        price: 'R230',
        description: 'With 2 big goat meat',
      },
      {
        name: 'OKRO & SEMOLINA',
        price: 'R230',
        description: 'With 2 big goat meat',
      },
      {
        name: 'OGBONO & SEMOLINA',
        price: 'R230',
        description: 'With 2 big goat meat',
      },
      {
        name: 'EFO RIRO & AMALA',
        price: 'R230',
        description: 'With 2 big goat meat',
      },
      {
        name: 'EGUSI & AMALA',
        price: 'R250',
        description: 'With 2 big goat meat',
      },
      {
        name: 'OKRO & AMALA',
        price: 'R250',
        description: 'With 2 big goat meat',
      },
      {
        name: 'OGBONO & AMALA',
        price: 'R250',
        description: 'With 2 big goat meat',
      },
    ],
  },
  {
    category: 'Combos',
    items: [
      {
        name: 'JOLLOF RICE COMBO',
        price: 'R250',
        description: 'Turkey/Assorted/Hake fish + plantain(dodo) + drink',
      },
      {
        name: 'FRIED RICE COMBO',
        price: 'R250',
        description: 'Turkey/Assorted/Hake fish + plantain(dodo) + drink',
      },
      {
        name: 'COCONUT RICE COMBO',
        price: 'R250',
        description: 'Turkey/Assorted/Hake fish + plantain(dodo) + drink',
      },
      {
        name: 'VILLAGE NATIVE RICE COMBO',
        price: 'R270',
        description: 'Turkey/Assorted/Hake fish + plantain(dodo) + drinks',
      },
      {
        name: 'PORRIDGE BEANS COMBO',
        price: 'R250',
        description: 'Turkey/Assorted/Hake fish + plantain(dodo) + drinks',
      },
      {
        name: 'YAM PORRIDGE COMBO',
        price: 'R250',
        description: 'Turkey/Assorted/Hake fish + drinks',
      },
    ],
  },
  {
    category: 'Soup Dishes',
    items: [
      {
        name: 'EFO RIRO & EBA (GARI)',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'EGUSI & EBA (GARRI)',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'OKRO & EBA (GARRI)',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'OGBONO & EBA (GARRI)',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'GBEGIRI/EWEDU & EBA (GARRI)',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'EFO RIRO & SEMOLINA',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'EGUSI & SEMOLINA',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'OKRO & SEMOLINA',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'OGBONO & SEMOLINA',
        price: 'R120',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'GBEGIRI/EWEDU & SEMOLINA',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'EFO RIRO & POUNDO YAM',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'EGUSI & POUNDO YAM',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'OKRO & POUNDO YAM',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'OGBONO & POUNDO YAM',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'EFO RIRO & AMALA',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'EGUSI & AMALA',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'OKRO & AMALA',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
      {
        name: 'OGBONO & AMALA',
        price: 'R150',
        description: 'Any 3 from Hake fish, turkey or assorted',
      },
    ],
  },
  {
    category: 'Beef Dishes',
    items: [
      { name: 'JOLLOF RICE', price: 'R160', description: 'beef only' },
      { name: 'FRIED RICE', price: 'R160', description: 'beef only' },
      { name: 'WHITE RICE & STEW', price: 'R160', description: 'beef only' },
      { name: 'COCONUT RICE', price: 'R160', description: 'beef only' },
      { name: 'VILLAGE NATIVE RICE', price: 'R160', description: 'beef only' },
      { name: 'BASMATI JOLLOF RICE', price: 'R160', description: 'beef only' },
      { name: 'BASMATI FRIED RICE', price: 'R160', description: 'beef only' },
      { name: 'EGUSI BEEF & EBA', price: 'R160', description: 'beef only' },
      {
        name: 'EGUSI BEEF & SEMOLINA',
        price: 'R160',
        description: 'beef only',
      },
      {
        name: 'EGUSI BEEF & POUNDO YAM',
        price: 'R180',
        description: 'beef only',
      },
      { name: 'EGUSI BEEF & AMALA', price: 'R180', description: 'beef only' },
      { name: 'OKRO BEEF EBA', price: 'R160', description: 'beef only' },
      { name: 'OKRO BEEF SEMOLINA', price: 'R160', description: 'beef only' },
      { name: 'OKRO BEEF POUNDO YAM', price: 'R180', description: 'beef only' },
      { name: 'OKRO BEEF AMALA', price: 'R180', description: 'beef only' },
      { name: 'EFO RIRO BEEF EBA', price: 'R160', description: 'beef only' },
      {
        name: 'EFO RIRO BEEF SEMOLINA',
        price: 'R160',
        description: 'beef only',
      },
      {
        name: 'EFO RIRO BEEF POUNDO YAM',
        price: 'R160',
        description: 'beef only',
      },
      { name: 'EFO RIRO BEEF AMALA', price: 'R160', description: 'beef only' },
      { name: 'OGBONO BEEF EBA', price: 'R160', description: 'beef only' },
      { name: 'OGBONO BEEF SEMOLINA', price: 'R180', description: 'beef only' },
      {
        name: 'OGBONO BEEF POUNDO YAM',
        price: 'R180',
        description: 'beef only',
      },
    ],
  },
  {
    category: 'Seafood',
    items: [
      {
        name: 'JOLLOF SPAGHETTI',
        price: 'R180',
        description: 'comes with fish & prawns',
      },
      {
        name: 'FRIED SPAGHETTI',
        price: 'R180',
        description: 'comes with fish & prawns',
      },
      {
        name: 'JOLLOF INDOMIE NOODLES',
        price: 'R180',
        description: 'comes with fish & prawns',
      },
      {
        name: 'FRIED INDOMIE NOODLES',
        price: 'R180',
        description: 'comes with fish & prawns',
      },
      {
        name: 'JOLLOF RICE',
        price: 'R200',
        description: 'comes with fish & prawns',
      },
      {
        name: 'FRIED RICE',
        price: 'R200',
        description: 'comes with fish & prawns',
      },
      {
        name: 'EFO RIRO',
        price: 'R220',
        description:
          'comes with fish & prawns. Choose your swallow: Eba, Semolina, poundo yam, or Amala',
      },
      {
        name: 'OKRO',
        price: 'R220',
        description:
          'comes with fish & prawns. Choose your swallow: Eba, Semolina, poundo yam, or Amala',
      },
    ],
  },
  {
    category: 'Grills',
    items: [
      {
        name: 'PEPPERED TURKEY',
        price: 'R150',
        description: 'cut fried turkey with nice spicy chilli',
      },
      {
        name: 'BEEF PEPPER SOUP',
        price: 'R150',
        description: 'comes with Beef only',
      },
      {
        name: 'TURKEY PEPPER SOUP',
        price: 'R150',
        description: 'comes with Turkey only',
      },
      {
        name: 'HARDBODY CHICKEN PEPPER SOUP',
        price: 'R150',
        description: 'comes with Hardbody chicken only',
      },
      {
        name: 'TILAPIA PEPPER SOUP',
        price: 'R180',
        description: 'one big Tilapia fish',
      },
      {
        name: 'CATFISH PEPPER SOUP',
        price: 'R180',
        description: 'one big Catfish',
      },
      {
        name: 'GOATMEAT PEPPER SOUP',
        price: 'R250',
        description: 'lots of Goat meat',
      },
    ],
  },
  {
    category: 'Extras',
    items: [
      { name: 'JOLLOF RICE ONLY', price: 'R50', description: 'Side portion' },
      { name: 'FRIED RICE ONLY', price: 'R50', description: 'Side portion' },
      { name: 'WHITE RICE ONLY', price: 'R30', description: 'Side portion' },
      {
        name: 'SEMOLINA ONE ROLL',
        price: 'R30',
        description: 'One roll of semolina',
      },
      {
        name: 'POUNDO YAM ONE ROLL',
        price: 'R50',
        description: 'One roll of poundo yam',
      },
      { name: 'EBA ONE ROLL', price: 'R30', description: 'One roll of eba' },
      {
        name: 'AMALA ONE ROLL',
        price: 'R50',
        description: 'One roll of amala',
      },
      {
        name: 'QUARTER CHICKEN ONLY',
        price: 'R60',
        description: 'Deliciously roasted quarter chicken',
      },
      {
        name: 'CUT FRIED TURKEY 1 PIECE',
        price: 'R30',
        description: 'Succulent piece of fried turkey',
      },
      {
        name: 'BEEF 1 PIECE',
        price: 'R30',
        description: 'One piece of tender beef',
      },
      {
        name: 'HAKE FISH 1 PIECE',
        price: 'R30',
        description: 'One piece of fresh Hake fish',
      },
      {
        name: 'TRIBE ONLY WITH SOME STEW 250ML',
        price: 'R50',
        description: 'Tribe portions in rich stew',
      },
      {
        name: 'PONMO IJEBU PER 1',
        price: 'R50',
        description: 'Single piece of Ponmo Ijebu',
      },
      {
        name: 'PEPPERED PONMO IJEBU (500ML)',
        price: 'R120',
        description: 'Large portion of spicy peppered Ponmo Ijebu',
      },
    ],
  },
  {
    category: 'Drinks',
    items: [
      {
        name: 'COCO SAMBA',
        price: 'R50',
        description: 'Refreshing local drink',
      },
      { name: 'JEKANMO', price: 'R50', description: 'Refreshing local drink' },
      { name: 'POWER', price: 'R80', description: 'Energy booster' },
      {
        name: 'MALTA DRINK',
        price: 'R30',
        description: 'Non-alcoholic malt beverage',
      },
      {
        name: 'MALTINA',
        price: 'R50',
        description: 'Non-alcoholic malt beverage',
      },
      {
        name: 'SOYA MILK',
        price: 'R30',
        description: 'Fresh healthy soya drink',
      },
      {
        name: 'COCO-COLA 440ML CAN',
        price: 'R20',
        description: 'Refreshing soda',
      },
      { name: 'FANTA 440ML CAN', price: 'R20', description: 'Refreshing soda' },
      {
        name: 'SPRITE 440ML CAN',
        price: 'R20',
        description: 'Refreshing soda',
      },
      {
        name: 'STONY GINGER 440ML CAN',
        price: 'R20',
        description: 'Refreshing ginger soda',
      },
      { name: 'DRAGON', price: 'R20', description: 'Energy drink' },
      { name: 'REDBULL', price: 'R30', description: 'Energy drink' },
      { name: 'WATER', price: 'R15', description: 'Still water' },
      {
        name: 'GRAPETISER',
        price: 'R20',
        description: 'Sparkling grape juice',
      },
      {
        name: 'APPLETISER',
        price: 'R20',
        description: 'Sparkling apple juice',
      },
    ],
  },
]

export const FullMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section
      id='menu'
      className='w-full py-24 md:py-32 bg-white border-t border-zinc-100'
    >
      <div className='container mx-auto px-5 lg:px-10 space-y-24'>
        <div className='max-w-3xl mx-auto text-center space-y-6'>
          <h2 className='font-cinzel text-4xl md:text-6xl font-bold text-black leading-tight uppercase'>
            THE ROYAL <br /> MENU
          </h2>
          <div className='w-16 h-1 bg-black mx-auto' />
        </div>

        <div className='max-w-5xl mx-auto flex flex-col gap-6'>
          {menuData.map((section, sectionIdx) => {
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
                    ? 'border-black/30 ring-1 ring-black/10 shadow-xl'
                    : 'border-gray-300 hover:border-black'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : sectionIdx)}
                  className='w-full flex items-center justify-between p-6 md:p-10 text-left bg-white group-hover:bg-zinc-50 relative transition-all'
                >
                  <div className='space-y-1 relative z-10'>
                    <h3
                      className={`text-2xl md:text-3xl font-bold uppercase tracking-widest transition-colors ${
                        isOpen ? 'text-black' : 'text-black'
                      }`}
                    >
                      {section.category}
                    </h3>
                    <p className='text-sm text-gray-600 font-medium'>
                      {section.items.length} Legendary Selections
                    </p>
                  </div>

                  <div
                    className={`p-3 rounded-full border transition-all duration-500 ${
                      isOpen
                        ? 'bg-black border-black text-white rotate-180'
                        : 'bg-transparent border-gray-300 text-zinc-400'
                    }`}
                  >
                    <HiChevronDown className='size-6' />
                  </div>

                  {/* Absolute Accent Line */}
                  {isOpen && (
                    <motion.div
                      layoutId='active-accent'
                      className='absolute left-0 top-0 w-1 h-full bg-black'
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
                      <div className='p-6 md:p-10 pt-0 bg-white'>
                        <div className='max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-black/20 hover:scrollbar-thumb-black/40 -mr-4'>
                          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10'>
                            {section.items.map((item, itemIdx) => (
                              <div
                                key={item.name}
                                className='group/item flex flex-col gap-6'
                              >
                                <div className='flex items-start gap-4'>
                                  <div className='shrink-0 pt-1'>
                                    <HiCheckCircle className='size-5 text-black group-hover/item:opacity-100 transition-opacity' />
                                  </div>
                                  <div className='grow space-y-2'>
                                    <div className='flex items-end justify-between gap-4'>
                                      <h4 className='text-sm font-semibold text-black uppercase group-hover/item:text-black transition-colors leading-tight'>
                                        {item.name}
                                      </h4>
                                      <div className='grow mb-1 min-w-[20px] border-b border-dotted border-gray-400' />
                                      <span className='font-semibold text-black text-sm'>
                                        {item.price}
                                      </span>
                                    </div>
                                    <p className='text-sm text-gray-900 font-medium'>
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                                {itemIdx < section.items.length - 1 && (
                                  <div className='h-px w-full bg-gray-400 last:hidden' />
                                )}
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

        <p className='text-sm text-center text-gray-600 '>
          * All items are prepared fresh with the finest locally sourced
          ingredients.
        </p>
      </div>
    </section>
  )
}
