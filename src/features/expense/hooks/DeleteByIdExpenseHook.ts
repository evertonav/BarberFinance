import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { DeleteByIdExpense } from '../../../api/repositories/expense/DeleteExpense'

export function useDeleteByIdExpense() {
  const deleteByIdMutation = useMutation({
    mutationFn: async (id: string) => {
      return await DeleteByIdExpense(id)
    },
    onSuccess: () => {
      toast.success('Registro deletado com sucesso!')
    },
    onError: (error) => {
      toast.error('Não foi possível deletar o registro. Detalhe: ' + error)
      console.log('Erro: ', error)
    },
  })

  async function deleteByIdExpense(id: string): Promise<void> {
    return await deleteByIdMutation.mutateAsync(id)
  }

  const { mutate, mutateAsync, ...rest } = deleteByIdMutation

  return {
    deleteByIdExpense,
    returnExecutionDeleteExpense: rest,
  }
}
