import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      order: z.number().optional(),
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

const faqs = defineCollection({
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

export const collections = { services, about, faqs };
