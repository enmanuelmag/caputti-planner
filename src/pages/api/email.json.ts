export const prerender = false;

import type { APIRoute } from 'astro';

import { sendEmail } from '@utils/email';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const formData = await request.json();

    await sendEmail(formData, {
      resendApiKey: locals.runtime.env.RESEND_API_KEY,
      emailFrom: locals.runtime.env.SEND_EMAIL_FROM,
      emailTo: locals.runtime.env.SEND_EMAIL_TO,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};
