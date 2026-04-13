import { useQuery } from '@tanstack/react-query'
import { GetListExpense } from '../../../api/repositories/expense/GetListExpense'
import toast from 'react-hot-toast'
import { QueryKeyGetListExpense } from '../../../queryKey/QueryKeyGetExpense'

export function useGetByListExpense(
  dateInitial?: Date,
  dateFinish?: Date,
  user?: string,
) {
  const { data, ...rest } = useQuery({
    queryKey: QueryKeyGetListExpense(user, dateInitial, dateFinish),
    queryFn: async () => {
      const start = new Date(dateInitial!)
      start.setHours(0, 0, 0, 0)

      const end = new Date(dateFinish!)
      end.setHours(23, 59, 59, 999)

      return GetListExpense(start, end, user!).catch((error) => {
        toast.error(
          'Não foi possível carregar os dados. Detalhe erro: ' + error,
        )

        throw error
      })
    },
    staleTime: 1000,
    retry: false,
    enabled: !!dateInitial && !!dateFinish && !!user,
  })

  return {
    listExpense: data || [],
    returnGetByListExpense: rest,
  }
}
