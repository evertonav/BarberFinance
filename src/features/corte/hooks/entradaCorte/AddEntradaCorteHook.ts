import { useMutation } from '@tanstack/react-query'
import type { EntradaCorte } from '../../../../api/repositories/entradaCorte/types'
import { AddEntradaCorte } from '../../../../api/repositories/entradaCorte/AddEntradaCorte'
import toast from 'react-hot-toast'
import type { DocumentData, DocumentReference } from 'firebase/firestore'
import type { Corte } from '../../../relToday/types'

export function useAddEntradaCorte() {
  const entradaCorteAdd = useMutation({
    mutationFn: async (data: EntradaCorte) => {
      return await AddEntradaCorte(data)
    },
    onSuccess: () => {
      toast.success('Registros inserido com sucesso!')
    },
    onError: (error) => {
      toast.error('Não foi possível inserir o registro. Detalhe: ' + error)
      console.log('Erro: ', error)
    },
  })

  async function addEntradaCorte(
    value: Corte,
    user: string,
  ): Promise<DocumentReference<DocumentData, DocumentData>> {
    return await entradaCorteAdd.mutateAsync({
      date: value.date,
      price: value.price,
      quantity: value.quantity,
      user: user,
    })
  }

  const { mutate, mutateAsync, ...rest } = entradaCorteAdd

  return {
    addEntradaCorte,
    returnExecution: rest,
  }
}
