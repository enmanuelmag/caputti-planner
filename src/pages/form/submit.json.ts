export const prerender = false;

import ejs from 'ejs';
import fs from 'node:fs';
import { createTransport, type Transporter } from 'nodemailer';

import type { APIRoute } from 'astro';

import type { FormType } from '@customTypes/form';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.json();

  try {
    await sendEmail(formData);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};

async function sendEmail(formData: FormType): Promise<Transporter> {
  const transporter = await getEmailTransporter();
  return new Promise(async (resolve, reject) => {
    const html = await parseEmailTemplate(formData.yourName);
    const from = import.meta.env.SEND_EMAIL_FROM;
    const message = {
      from,
      to: formData.email,
      subject: 'Gracias por contactarnos',
      html,
    };

    //Email for customer
    await transporter.sendMail(message).catch(reject);

    //Email for admin
    const adminMessage = {
      from,
      subject: 'Nuevo contacto',
      to: import.meta.env.SEND_EMAIL_TO,
      html: parseTextAdminMessage(formData),
    };
    await transporter.sendMail(adminMessage).catch(reject);

    resolve(transporter);
  });
}

function parseTextAdminMessage(options: FormType): string {
  return `
    Nuevo contacto de ${options.yourName} ${options.email}\n
    Nombre de la pareja: ${options.coupleName}\n
    Teléfono: ${options.phone}\n
    Lugar: ${options.place}\n
    Número de invitados: ${options.guests || 'No especificado'}\n
    Presupuesto: ${options.budget}\n
    Fecha: ${options.date || 'No especificada'}\n
    Comentarios: ${options.comments}\n
    Referencia: ${options.reference || 'Ninguna'}\n
    Tipo de boda: ${options.weddingType || 'No especificado'}\n
    Lista de deseos: ${options.wishList?.join(', ') || 'Ninguno'}
  `;
}

async function getEmailTransporter(): Promise<Transporter> {
  return new Promise((resolve, reject) => {
    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('Missing Resend configuration');
    }

    const transporter = createTransport({
      port: 465,
      secure: true,
      host: 'smtp.resend.com',
      auth: { user: 'resend', pass: apiKey },
    });

    resolve(transporter);
  });
}

async function parseEmailTemplate(name: string): Promise<string> {
  // Read the raw template file
  const rawTemplate = fs.readFileSync(
    `./src/utils/templates/welcome.ejs`,
    'utf8'
  );
  // Run the template through EJS to replace variables with parameter values
  return ejs.render(rawTemplate, { name });
}
