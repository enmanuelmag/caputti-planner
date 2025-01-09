import fs from 'node:fs';

import type { FormType } from '@customTypes/form';

type ConfigEmails = {
  emailFrom: string;
  emailTo: string;
  resendApiKey: string;
};

const URL = 'https://api.resend.com/emails';

export async function sendEmail(
  formData: FormType,
  config: ConfigEmails
): Promise<void> {
  const { emailFrom: from, emailTo, resendApiKey } = config;

  const messageClient = {
    from,
    to: formData.email,
    subject: 'Gracias por contactarnos',
    html: parseEmailTemplate(formData.yourName),
  };

  const promises = [];

  promises.push(
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify(messageClient),
    })
  );

  const adminMessage = {
    from,
    to: emailTo,
    subject: 'Nuevo contacto',
    html: parseTextAdminMessage(formData),
  };

  promises.push(
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify(adminMessage),
    })
  );

  const result = await Promise.allSettled(promises);

  result.forEach((response, idx) => {
    if (response.status === 'rejected') {
      console.error(`Error sending ${idx}`, response.reason);
    }
  });
}

function parseTextAdminMessage(options: FormType): string {
  const template = fs.readFileSync('./templates/newContact.html', 'utf8');

  return Object.entries(options).reduce(
    (acc, [key, value]) =>
      acc.replace(`{{${key}}}`, `${value || 'No especificado'}`),
    template
  );
}

function parseEmailTemplate(name: string): string {
  const templateEmail = fs.readFileSync('./templates/welcome.html', 'utf8');

  return templateEmail.replace('{{name}}', name);
}
