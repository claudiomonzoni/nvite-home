import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ message: 'Test endpoint is working!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};