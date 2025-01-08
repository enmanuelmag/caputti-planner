import { createTransport, type Transporter } from 'nodemailer';

import type { FormType } from '@customTypes/form';
import { templateEmail } from './templates/welcome';

type ConfigEmails = {
  emailFrom: string;
  emailTo: string;
  resendApiKey: string;
};

export async function sendEmail(
  formData: FormType,
  config: ConfigEmails
): Promise<Transporter> {
  const transporter = await getEmailTransporter(config.resendApiKey);
  return new Promise(async (resolve, reject) => {
    const html = await parseEmailTemplate(formData.yourName);
    const from = config.emailFrom;
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
      to: config.emailTo,
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

async function getEmailTransporter(resendApiKey: string): Promise<Transporter> {
  return new Promise((resolve) => {
    if (!resendApiKey) {
      throw new Error('Missing Resend configuration in .env');
    }

    const transporter = createTransport({
      port: 465,
      secure: true,
      host: 'smtp.resend.com',
      auth: { user: 'resend', pass: resendApiKey },
    });

    resolve(transporter);
  });
}

async function parseEmailTemplate(name: string): Promise<string> {
  // Read the raw template file
  // const rawTemplate = fs.readFileSync(
  //   `./src/utils/templates/welcome.ejs`,
  //   'utf8'
  // );
  // // Run the template through EJS to replace variables with parameter values
  // return ejs.render(rawTemplate, { name });

  return templateEmail.replace('{{name}}', name);
}
