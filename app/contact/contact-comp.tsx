'use client'

import { sendContactEmail } from '@/app/actions/send-email'
import LocationMap from '@/components/location-map'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'
import { toast } from 'sonner'

export default function ContactComp() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        toast.success(result.message)
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        })
      } else {
        toast.error(result.error)
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className='relative min-h-screen pt-68 pb-32 overflow-hidden px-5 lg:px-10 selection:bg-primary/20'>
      <div className='container mx-auto flex flex-col items-center gap-16 lg:gap-24'>
        {/* Main Contact Card */}
        <section className='w-full max-w-7xl bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col'>
          {/* Header Section */}
          <div className='p-8 lg:p-16 border-b border-gray-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
            <h1 className='font-cinzel text-5xl lg:text-7xl font-black tracking-tight text-black'>
              CONTACT US
            </h1>
            <p className='text-gray-600 max-w-md text-sm lg:text-base leading-relaxed'>
              If you have any questions, please feel free to get in touch with
              us via phone, text, email, the form below, or even on social
              media!
            </p>
          </div>

          {/* Grid Content */}
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            {/* Form Column */}
            <div className='p-8 lg:p-16 flex flex-col gap-10 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50/50'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-xl lg:text-2xl font-bold text-black uppercase tracking-tight'>
                  Get In Touch
                </h2>
                <div className='h-1 w-12 bg-black' />
              </div>

              <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold uppercase text-gray-600 tracking-wider'>
                      Name
                    </label>
                    <Input
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Enter your name*'
                      className='h-12 bg-white border-gray-200 focus-visible:ring-primary rounded-none placeholder:text-gray-500 text-black'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold uppercase text-gray-600 tracking-wider'>
                      Phone Number
                    </label>
                    <Input
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='Enter your phone number'
                      className='h-12 bg-white border-gray-200 focus-visible:ring-primary rounded-none placeholder:text-gray-500 text-black'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='text-sm font-bold uppercase text-gray-600 tracking-wider'>
                    Email
                  </label>
                  <Input
                    name='email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email*'
                    className='h-12 bg-white border-gray-200 focus-visible:ring-primary rounded-none placeholder:text-gray-500 text-black'
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='text-sm font-bold uppercase text-gray-600 tracking-wider'>
                    Your Message
                  </label>
                  <Textarea
                    name='message'
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='How can we help you?'
                    className='min-h-[150px] bg-white border-gray-200 focus-visible:ring-primary rounded-none placeholder:text-gray-500 text-black resize-none'
                  />
                </div>

                <Button
                  disabled={loading}
                  className='h-14 bg-black hover:bg-black/90 text-white font-bold uppercase tracking-extra text-sm rounded-none w-full md:w-max px-12 transition-all active:scale-95 disabled:opacity-70'
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Information Column */}
            <div className='p-8 lg:p-16 flex flex-col gap-12 bg-white'>
              {/* Contact Info Card */}
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-xl lg:text-2xl font-bold text-black uppercase tracking-tight'>
                    Contact Information
                  </h2>
                  <div className='h-1 w-12 bg-black' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                  <div className='flex gap-4 items-start'>
                    <div className='size-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100'>
                      <HiPhone className='size-5 text-black' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <span className='text-sm font-bold uppercase text-gray-900'>
                        Phone
                      </span>
                      <p className='text-gray-600 text-sm lg:text-base'>
                        0710354040
                      </p>
                    </div>
                  </div>

                  <div className='flex gap-4 items-start'>
                    <div className='size-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100'>
                      <HiLocationMarker className='size-5 text-black' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <span className='text-sm font-bold uppercase text-gray-900'>
                        Address
                      </span>
                      <p className='text-gray-600 text-sm lg:text-base'>
                        Shop F08, Oriental City Mall,
                        <br /> Centurion, 0157
                      </p>
                    </div>
                  </div>

                  <div className='flex gap-4 items-start'>
                    <div className='size-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100'>
                      <HiMail className='size-5 text-black' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <span className='text-sm font-bold uppercase text-gray-900'>
                        Email
                      </span>
                      <p className='text-gray-600 text-sm lg:text-base'>
                        info@bukkygroup.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className='flex flex-col gap-8 pt-8 border-t border-gray-100'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-xl lg:text-2xl font-bold text-black uppercase tracking-tight'>
                    Business Hours
                  </h2>
                  <div className='h-1 w-12 bg-black' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-sm font-bold uppercase text-gray-400 tracking-widest'>
                      Monday - Friday
                    </span>
                    <p className='text-black font-medium text-sm lg:text-base'>
                      9:00 am - 8:00 pm
                    </p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-sm font-bold uppercase text-gray-400 tracking-widest'>
                      Saturday
                    </span>
                    <p className='text-black font-medium text-sm lg:text-base'>
                      9:00 am - 6:00 pm
                    </p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-sm font-bold uppercase text-gray-400 tracking-widest'>
                      Sunday
                    </span>
                    <p className='text-black font-medium text-sm lg:text-base'>
                      9:00 am - 5:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className='w-full'>
            <LocationMap />
          </div>
        </section>
      </div>
    </main>
  )
}
