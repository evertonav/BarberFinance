import { useMutation } from '@tanstack/react-query'
import type { EntradaCorte } from '../../../../api/repositories/types'
import { AddEntradaCorte } from '../../../../api/repositories/AddEntradaCorte'
import toast from 'react-hot-toast'
import type { DocumentData, DocumentReference } from 'firebase/firestore'
import type { Corte } from '../../types'

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
  ): Promise<DocumentReference<DocumentData, DocumentData>> {
    return await entradaCorteAdd.mutateAsync({
      date: new Date().valueOf(),
      price: value.price,
      quantity: value.quantity,
      user: 'luciobarbeiro@hotmail.com',
    })
  }

  const { mutate, mutateAsync, ...rest } = entradaCorteAdd

  return {
    addEntradaCorte,
    returnExecution: rest,
  }
}
