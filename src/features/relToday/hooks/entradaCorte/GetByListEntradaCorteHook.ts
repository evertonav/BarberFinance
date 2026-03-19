import { useQuery } from '@tanstack/react-query'
import { GetListEntradaCorte } from '../../../../api/repositories/entradaCorte/GetEntradaCorte'
import toast from 'react-hot-toast'

export function useGetByListEntradaCorte(date: Date, user: string) {
  const { data, ...rest } = useQuery({
    queryKey: ['GetByListEntradaCorte', date, user],
    queryFn: async () => {
      const start = new Date(date)
      start.setHours(0, 0, 0, 0)

      const end = new Date(date)
      end.setHours(23, 59, 59, 999)

      return GetListEntradaCorte(start, end, user).catch((error) => {
        toast.error(
          'Não foi possível carregar os dados. Detalhe erro: ' + error,
        )
        throw error
      })
    },
    staleTime: 1000,
    retry: false,
    enabled: !!date && !!user,
  })

  return {
    listEntradaCorte: data || [],
    returnGetByListEntradaCorte: rest,
  }
}
