import { useQuery } from '@tanstack/react-query'
import { GetTotalEntradaCorte } from '../../../../../api/repositories/entradaCorte/get/GetTotalEntradaCorte'
import toast from 'react-hot-toast'
import { QueryKeyGetTotalEntradaCorteRange } from '../../../../../queryKey/QueryKeyGetEntradaCorte'
import {
  GetFirstDayMonth,
  GetLastDayMonth,
  GetListMonthsForRangeToDate,
} from '../../../../../utils/date/GetRangeDate'
import type { GetTotalMotnhsResponse } from './types'

export function useGetTotalMonthsEntradaCorteRange(
  user?: string,
  dateInitial?: Date,
  dateFinish?: Date,
) {
  const { data, ...rest } = useQuery({
    queryKey: QueryKeyGetTotalEntradaCorteRange(user, dateInitial, dateFinish),
    queryFn: async () => {
      const listDatesFilter: Array<Date> = GetListMonthsForRangeToDate(
        dateInitial!,
        dateFinish!,
      )

      const promises = listDatesFilter
        .sort((itemA: Date, itemB: Date) => itemB.valueOf() - itemA.valueOf())
        .map((dateItem) => {
          const dateInternal = new Date(
            dateItem.getFullYear(),
            dateItem.getMonth(),
            1,
          )

          const start = GetFirstDayMonth(dateInternal)
          start.setHours(0, 0, 0, 0)

          const end = GetLastDayMonth(dateInternal)
          end.setHours(23, 59, 59, 999)

          return GetTotalEntradaCorte(user!!, start, end).then(
            (value: number) => {
              return {
                month: dateItem.getMonth() + 1,
                year: dateItem.getFullYear(),
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
    enabled: !!user && !!dateInitial && !!dateFinish,
  })

  return {
    totalEntradaCorte: data || [],
    returnGetTotalEntradaCorte: rest,
  }
}
