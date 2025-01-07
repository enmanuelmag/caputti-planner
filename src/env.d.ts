/// <reference path="../.astro/types.d.ts" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    otherLocals: {
      SEND_EMAIL_TO: string;
      SEND_EMAIL_FROM: string;
      RESEND_API_KEY: string;
    };
  }
}
