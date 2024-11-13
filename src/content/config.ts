import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
    }),
});

const about = defineCollection({
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      subtitle: z.string().optional(),
      image: image().optional(),
      imagePosition: z.enum(['left', 'right']).optional(),
    }),
});

export const collections = { services, about };
