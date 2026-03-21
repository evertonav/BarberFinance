import { useMutation } from '@tanstack/react-query'
import { DeleteByIdEntradaCorte } from '../../../../api/repositories/entradaCorte/DeleteEntradaCorte'
import toast from 'react-hot-toast'

export function useDeleteByIdEntradaCorte() {
  const deleteByIdMutation = useMutation({
    mutationFn: async (id: string) => {
      return await DeleteByIdEntradaCorte(id)
    },
    onSuccess: () => {
      toast.success('Registros deletado com sucesso!')
    },
    onError: (error) => {
      toast.error('Não foi possível deletar o registro. Detalhe: ' + error)
      console.log('Erro: ', error)
    },
  })

  async function deleteByIdEntradaCorte(id: string): Promise<void> {
    return await deleteByIdMutation.mutateAsync(id)
  }

  const { mutate, mutateAsync, ...rest } = deleteByIdMutation

  return {
    deleteByIdEntradaCorte,
    returnExecution: rest,
  }
}
