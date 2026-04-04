import { useQuery } from '@tanstack/react-query'
import { GetTotalEntradaCorte } from '../../../../../api/repositories/entradaCorte/get/GetTotalEntradaCorte'
import toast from 'react-hot-toast'
import { QueryKeyGetTotalEntradaCorte } from '../../../../../queryKey/QueryKeyGetEntradaCorte'
import {
  GetFirstDayMonth,
  GetLastDayMonth,
} from '../../../../../utils/date/GetRangeDate'
import type { GetTotalMotnhsResponse } from './types'
import { GetListMonths } from '../../../../../enums/MonthsEnum'

export function useGetTotalMonthsEntradaCorte(user?: string, year?: number) {
  const { data, ...rest } = useQuery({
    queryKey: QueryKeyGetTotalEntradaCorte(user, year),
    queryFn: async () => {
      const monthsYear = GetListMonths()

      const promises = monthsYear.map((m) => {
        const start = GetFirstDayMonth(new Date(year!!, m - 1, 1))
        start.setHours(0, 0, 0, 0)

        const end = GetLastDayMonth(new Date(year!!, m - 1, 27))
        end.setHours(23, 59, 59, 999)

        return GetTotalEntradaCorte(user!!, start, end).then(
          (value: number) => {
            return {
              month: m,
              total: value,
            } as GetTotalMotnhsResponse
          },
        )
      })

      return Promise.all(promises).catch((error) => {
        toast.error(
          'Não foi possível carregar os dados. Detalhe erro: ' + error,
        )
        throw error
      })
    },
    staleTime: 10000,
    retry: false,
    enabled: !!user && !!year,
  })

  return {
    totalEntradaCorte: data || [],
    returnGetTotalEntradaCorte: rest,
  }
}
