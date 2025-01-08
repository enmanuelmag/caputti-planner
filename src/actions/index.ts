import { z } from 'astro:schema';
import { defineAction } from 'astro:actions';

import { FromSchema } from '@customTypes/form';
import { sendEmail } from '@utils/email';

export const server = {
  sendEmail: defineAction({
    input: FromSchema,
    handler: async (input, context) => {
      await sendEmail(input, {
        emailFrom: context.locals.runtime.env.SEND_EMAIL_FROM,
        emailTo: context.locals.runtime.env.SEND_EMAIL_TO,
        resendApiKey: context.locals.runtime.env.RESEND_API_KEY,
      });

      return { success: true };
    },
  }),
};
