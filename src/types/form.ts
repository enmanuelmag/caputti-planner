import zod from 'zod';

export const FromSchema = zod.object({
  yourName: zod
    .string()
    .min(1, 'Su nombre no puede estar vacío')
    .max(10, 'Su nombre no puede tener más de 10 caracteres')
    .trim(),
  coupleName: zod
    .string()
    .max(10, 'El nombre de la pareja no puede tener más de 10 caracteres')
    .trim(),
  email: zod.string().email('Ingrese un correo electrónico válido'),
  phone: zod
    .string()
    .min(9, 'Ingrese un número de teléfono válido')
    .max(11, 'Ingrese un número de teléfono válido')
    .trim(),
  place: zod.string().min(1, 'Ingrese un lugar válido').trim(),
  guests: zod
    .number({
      message: 'Ingrese un número válido',
    })
    .positive('Ingrese un número válido')
    .int('Ingrese un número válido')
    .nullable(),
  budget: zod
    .number({
      message: 'Ingrese un número válido',
    })
    .positive('Ingrese un número válido')
    .int('Ingrese un número válido')
    .nullable(),
  date: zod.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Ingrese una fecha válida'),
  comments: zod.string().trim().nullable(),
  reference: zod.string().trim().nullable(),
  weddingType: zod.string(),
  wishList: zod.array(zod.string()).nullable().optional(),
});

export type FormType = zod.infer<typeof FromSchema>;