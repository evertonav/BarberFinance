import { useMemo } from 'react'
import { useNavigationYear } from '../../components/navigation/hooks/NavigationYearHook'
import { GetUserLogado } from '../../utils/GetUser'
import { useGetTotalMonthsEntradaCorte } from '../corte/hooks/entradaCorte/get/GetTotalMonthsEntradaCorteHook'
import type { GetTotalMotnhsResponse } from '../corte/hooks/entradaCorte/get/types'

export function useDashBoardContainer() {
  const { yearState, nextYear, previousYear } = useNavigationYear(
    new Date().getFullYear(),
  )

  const { totalEntradaCorte, returnGetTotalEntradaCorte } =
    useGetTotalMonthsEntradaCorte(GetUserLogado(), yearState)

  const listMonthTotalEntradaCorte: GetTotalMotnhsResponse[] = useMemo(() => {
    return totalEntradaCorte.filter((item) => item.total > 0)
  }, [totalEntradaCorte])

  const maxValorTotalEntradaCorte = useMemo(() => {
    return Math.max(...listMonthTotalEntradaCorte.map((item) => item.total), 0)
  }, [listMonthTotalEntradaCorte])

  return {
    listMonthTotalEntradaCorte,
    maxValorTotalEntradaCorte,
    yearState,
    nextYear,
    previousYear,
    isLoading: returnGetTotalEntradaCorte.isLoading,
  }
}
