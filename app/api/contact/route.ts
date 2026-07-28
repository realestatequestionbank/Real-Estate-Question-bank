import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const SUBJECT_LABELS: Record<string, string> = {
    general: 'General Inquiry',
    technical: 'Technical Support',
    billing: 'Billing Question',
    premium: 'Premium Access Help',
    feedback: 'Feedback / Suggestions',
    partnership: 'Partnership Opportunity',
}

const REFERRAL_LABELS: Record<string, string> = {
    google: 'Google Search',
    friend: 'Friend or Family',
    social: 'Social Media',
    blog: 'Blog / Article',
    youtube: 'YouTube',
    other: 'Other',
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, subject, referral, message } = body

        // Validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields' },
                { status: 400 }
            )
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            )
        }

        const subjectLabel = SUBJECT_LABELS[subject] || subject
        const referralLabel = referral ? (REFERRAL_LABELS[referral] || referral) : 'Not specified'

        // Send email via Resend
        const resend = new Resend(process.env.RESEND_API_KEY)
        const { data, error } = await resend.emails.send({
            from: 'Real Estate Question Bank <hello@realestatequestionbank.com>',
            to: ['real-estatequestionbank@gmail.com'],
            replyTo: email,
            subject: `[Contact Form] ${subjectLabel} - ${name}`,
            html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #007aff 0%, #5856d6 100%); color: white; padding: 30px; border-radius: 16px 16px 0 0;">
                        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                    </div>
                    
                    <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 16px 16px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 140px;">Name</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                                    <a href="mailto:${email}" style="color: #007aff; text-decoration: none;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Subject</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${subjectLabel}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Referral Source</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${referralLabel}</td>
                            </tr>
                        </table>
                        
                        <div style="margin-top: 24px;">
                            <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #374151;">Message</h3>
                            <div style="background: white; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb; color: #111827; line-height: 1.6;">
                                ${message.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                    </div>
                    
                    <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
                        This email was sent from the Real Estate Question Bank contact form.
                    </p>
                </div>
            `,
        })

        if (error) {
            console.error('Resend error:', error)
            return NextResponse.json(
                { error: 'Failed to send message. Please try again later.' },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true, messageId: data?.id })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        )
    }
}
