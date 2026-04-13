import { useQuery } from '@tanstack/react-query'
import { GetListEntradaCorte } from '../../../../../api/repositories/entradaCorte/get/GetEntradaCorte'
import toast from 'react-hot-toast'
import { QueryKeyGetByListEntradaCorte } from '../../../../../queryKey/QueryKeyGetEntradaCorte'

export function useGetByListEntradaCorte(
  dateInitial?: Date,
  dateFinish?: Date,
  user?: string,
) {
  const { data, ...rest } = useQuery({
    queryKey: QueryKeyGetByListEntradaCorte(dateInitial, dateFinish, user),
    queryFn: async () => {
      const start = new Date(dateInitial!)
      start.setHours(0, 0, 0, 0)

      const end = new Date(dateFinish ? dateFinish : dateInitial!)
      end.setHours(23, 59, 59, 999)

      return GetListEntradaCorte(start, end, user!).catch((error) => {
        toast.error(
          'Não foi possível carregar os dados. Detalhe erro: ' + error,
        )
        throw error
      })
    },
    staleTime: 1000,
    retry: false,
    enabled: !!dateInitial && !!user,
  })

  return {
    listEntradaCorte: data || [],
    returnGetByListEntradaCorte: rest,
  }
}
