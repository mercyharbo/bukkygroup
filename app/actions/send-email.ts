'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: {
  name: string
  phone: string
  email: string
  message: string
}) {
  try {
    const { name, phone, email, message } = formData

    if (!name || !email || !message) {
      return { success: false, error: 'Please fill in all required fields.' }
    }

    const { error } = await resend.emails.send({
      from: 'Bukky Group Contact <onboarding@resend.dev>',
      to: ['damilare791@gmail.com'], // Replace with client email if different
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #000; font-size: 24px; margin-bottom: 20px; border-bottom: 2px solid #FF8C00; padding-bottom: 10px;">New Inquiry: Bukky Group</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #4a5568;">Name:</strong> 
            <span style="color: #1a202c;">${name}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #4a5568;">Email:</strong> 
            <span style="color: #1a202c;">${email}</span>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #4a5568;">Phone:</strong> 
            <span style="color: #1a202c;">${phone || 'Not provided'}</span>
          </div>

          <div style="margin-top: 25px; padding: 15px; background-color: #f7fafc; border-radius: 4px; border-left: 4px solid #FF8C00;">
            <strong style="display: block; margin-bottom: 10px; color: #4a5568;">Message:</strong>
            <p style="color: #1a202c; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <p style="font-size: 12px; color: #a0aec0; margin-top: 30px; text-align: center;">
            This email was sent from the contact form on Bukky Group website.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: 'Failed to send email. Please try again later.' }
    }

    return { success: true, message: 'Message sent successfully!' }
  } catch (err) {
    console.error('Email action error:', err)
    return { success: false, error: 'An unexpected error occurred.' }
  }
}
