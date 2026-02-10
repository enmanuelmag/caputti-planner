import type { FormType } from '@customTypes/form';
import { templateEmail } from './templates/welcome';
import { newContactTemplate } from './templates/newContact';

type ConfigEmails = {
  adminEmail: string;
};

const URL = 'https://api.resend.com/emails';

export async function buildEmails(formData: FormType, config: ConfigEmails) {
  const { adminEmail } = config;

  const clientMessage = {
    from: 'Caputifesta <onboarding@resend.dev>',
    to: formData.email,
    subject: '¡Gracias por contactarnos!',
    html: parseEmailTemplate(formData.yourName),
  };

  const adminMessage = {
    from: 'Caputifesta <onboarding@resend.dev>',
    to: adminEmail,
    subject: 'Nuevo contacto',
    html: parseTextAdminMessage(formData),
  };

  return { clientMessage, adminMessage };
}

function parseTextAdminMessage(options: FormType): string {
  const template = newContactTemplate;

  return Object.entries(options).reduce((acc, [key, value]) => {
    let displayValue = 'No especificado';

    if (value !== null && value !== undefined) {
      if (Array.isArray(value)) {
        displayValue = value.length > 0 ? value.join(', ') : 'No especificado';
      } else {
        displayValue = String(value);
      }
    }

    return acc.replace(`{{${key}}}`, displayValue);
  }, template);
}

function parseEmailTemplate(name: string): string {
  const template = templateEmail;

  return template.replace('{{name}}', name);
}
