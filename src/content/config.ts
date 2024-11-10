import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
    }),
});



export const collections = { services };
