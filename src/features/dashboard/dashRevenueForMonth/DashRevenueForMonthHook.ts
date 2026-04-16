import { useMemo, useState } from 'react'
import {
  filtersMonthOldValuesToDate,
  type FiltersMonthOldValues,
} from '../filters/FiltersMonthOld'
import type { GetTotalMotnhsResponse } from '../../corte/hooks/entradaCorte/get/types'
import { useGetTotalMonthsEntradaCorteRange } from '../../corte/hooks/entradaCorte/get/GetTotalForMonthsEntradaCorteRangeHook'
import { GetUserLogado } from '../../../utils/GetUser'

export function useDashRevenueForMonth() {
  const [filterMonthOldRevenue, setFilterMonthOldRevenue] =
    useState<FiltersMonthOldValues>('3')

  const dateNow = useMemo(() => {
    return new Date()
  }, [])

  const dateRefenceFilter = useMemo(() => {
    return filtersMonthOldValuesToDate(filterMonthOldRevenue, dateNow)
  }, [filterMonthOldRevenue])

  const { totalEntradaCorte, returnGetTotalEntradaCorte } =
    useGetTotalMonthsEntradaCorteRange(
      GetUserLogado(),
      dateRefenceFilter,
      dateNow,
    )

  const listMonthTotalEntradaCorte: GetTotalMotnhsResponse[] = useMemo(() => {
    return totalEntradaCorte.filter((item) => item.total > 0)
  }, [totalEntradaCorte])

  const maxValorTotalEntradaCorte = useMemo(() => {
    return Math.max(...listMonthTotalEntradaCorte.map((item) => item.total), 0)
  }, [listMonthTotalEntradaCorte])

  return {
    filterMonthOldRevenue,
    setFilterMonthOldRevenue,
    maxValorTotalEntradaCorte,
    isLoading: returnGetTotalEntradaCorte.isLoading,
    listMonthTotalEntradaCorte,
  }
}
