import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, service, message, company } = body;

        // Corporate email recipients
        const recipients = [
            'Lngetich@eldamatsec.co.ke',
            'operation@eldamatsec.co.ke',
            'finance@eldamatsec.co.ke',
            'hr@eldamatsec.co.ke'
        ];

        const { data, error } = await resend.emails.send({
            from: 'Eldamat Website <onboarding@resend.dev>', // Resend default for unverified domains
            to: recipients,
            subject: `New Quotation Request: ${service} from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
                    <h2 style="color: #c9a84c; border-bottom: 2px solid #c9a84c; padding-bottom: 10px;">New Quotation Request</h2>
                    <p><strong>Customer Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Company:</strong> ${company || 'N/A'}</p>
                    <p><strong>Service Requested:</strong> ${service}</p>
                    <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #c9a84c;">
                        <p><strong>Message/Requirements:</strong></p>
                        <p>${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    <footer style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; pt-10px;">
                        Sent from Eldamat Security Website Contact Form
                    </footer>
                </div>
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ message: 'Email sent successfully', id: data?.id });
    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
