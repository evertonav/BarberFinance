import { useMemo, useState } from 'react'

import { GetUserLogado } from '../../utils/GetUser'

import type { GetTotalMotnhsResponse } from '../corte/hooks/entradaCorte/get/types'
import {
  filtersMonthOldValuesToDate,
  type FiltersMonthOldValues,
} from './filters/FiltersMonthOld'
import { useGetTotalMonthsEntradaCorteRange } from '../corte/hooks/entradaCorte/get/GetTotalForMonthsEntradaCorteRangeHook'

export function useDashBoardContainer() {
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
    listMonthTotalEntradaCorte,
    maxValorTotalEntradaCorte,
    isLoading: returnGetTotalEntradaCorte.isLoading,
    filterMonthOldRevenue,
    setFilterMonthOldRevenue,
  }
}
