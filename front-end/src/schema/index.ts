import * as z from 'zod';

export const RegisterSchema = z.object({
  name: z.string().min(5, { message: 'Informe seu nome completo' }),
  email: z.string().email({ message: 'Informe um e-mail válido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
  confirmPassword: z.string().min(6, {
    message: 'A senha deve ter no mínimo 6 caracteres',
  }),
});
