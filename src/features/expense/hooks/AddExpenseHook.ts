import { useMutation } from '@tanstack/react-query'
import type { EntityExpense } from '../../../api/repositories/expense/types'
import { AddExpense } from '../../../api/repositories/expense/AddExpense'
import toast from 'react-hot-toast'
import type { Expense } from '../types'
import type { DocumentData, DocumentReference } from 'firebase/firestore'

export function useAddExpense() {
  const expenseAddMutation = useMutation({
    mutationFn: async (data: EntityExpense) => {
      return await AddExpense(data)
    },
    onSuccess: () => {
      toast.success('Registro inserido com sucesso!')
    },
    onError: (error) => {
      toast.error('Não foi possível inserir o registro. Detalhe: ' + error)
      console.log('Erro: ', error)
    },
  })

  async function addExpense(
    expense: Expense,
    user: string,
  ): Promise<DocumentReference<DocumentData, DocumentData>> {
    return await expenseAddMutation.mutateAsync({
      dateReference: expense.dateReference,
      description: expense.description,
      value: expense.value,
      user: user,
    })
  }

  const { mutate, mutateAsync, ...rest } = expenseAddMutation

  return {
    addExpense,
    returnExecutionAddExpense: rest,
  }
}
