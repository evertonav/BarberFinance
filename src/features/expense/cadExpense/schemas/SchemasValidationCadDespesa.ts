import z from 'zod'

export const schemaCadDespesa = z.object({
  description: z
    .string()
    .min(3, 'A descrição deve ter no mínimo 3 caracteres.')
    .max(60, 'A descrição deve ter no máximo 60 caracteres.'),

  value: z
    .string()
    .max(6, 'Preencha com o valor até 999999.')
    .regex(/^\d+$/, { message: 'Somente números são permitidos' }),

  dateReferencia: z.date({
    error: 'Informe a data',
  }),
})

export type FormDataCadDespesa = z.infer<typeof schemaCadDespesa>
