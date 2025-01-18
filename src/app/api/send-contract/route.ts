import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { recipientEmail, contractId, contractName, signatureRequestId } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'contracts@yourdomain.com',
      to: recipientEmail,
      subject: `Sign Contract: ${contractName}`,
      html: `
        <h1>Contract Signature Request</h1>
        <p>You have been requested to sign: ${contractName}</p>
        <p>Click the link below to review and sign the contract:</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/sign/${signatureRequestId}">
          Sign Contract
        </a>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
} 