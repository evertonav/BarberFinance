import z from 'zod'

export const schemaCadCorte = z.object({
  quantity: z
    .string()
    .max(3, 'Preencha com o valor até 999.')
    .regex(/^\d+$/, { message: 'Somente números são permitidos' }),

  value: z
    .string()
    .max(6, 'Preencha com o valor até 999999.')
    .regex(/^\d+$/, { message: 'Somente números são permitidos' }),

  date: z.date({
    error: 'Informe a data',
  }),
})

export type FormDataCadCorte = z.infer<typeof schemaCadCorte>
