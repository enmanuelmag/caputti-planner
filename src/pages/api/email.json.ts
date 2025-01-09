export const prerender = false;

import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};
