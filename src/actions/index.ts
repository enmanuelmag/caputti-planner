import { defineAction } from 'astro:actions';
import { Resend } from 'resend';

import { FromSchema } from '@customTypes/form';
import { buildEmails } from '@utils/email';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  sendEmail: defineAction({
    input: FromSchema,
    handler: async (input, context) => {

      const { adminMessage, clientMessage } = await buildEmails(input, {
        adminEmail: 'contacto@caputifesta.com',
      });

      const sendPromises = [resend.emails.send(clientMessage), resend.emails.send(adminMessage)];

      const results = await Promise.allSettled(sendPromises);

      let success = true;

      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`Email ${index + 1} enviado con éxito:`, result.value);
        } else {
          console.error(`Error al enviar el email ${index + 1}:`, result.reason);
          success = false;
        }
      });

      return { success };
    },
  }),
};
