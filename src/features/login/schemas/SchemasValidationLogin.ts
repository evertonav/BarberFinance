import z from 'zod'

export const schemaLogin = z.object({
  user: z
    .string()
    .min(1, 'E-mail obrigatório.')
    .email({ message: 'E-mail inválido.' }),

  password: z.string().min(6, {
    message: 'A senha deve ter no mínimo 6 caracteres',
  }),
})

export type FormDataLogin = z.infer<typeof schemaLogin>
