import { useMemo } from 'react'
import { GetUserLogado } from '../../../utils/GetUser'
import { useGetByListEntradaCorte } from '../../corte/hooks/entradaCorte/get/GetByListEntradaCorteHook'
import { useGetByListExpense } from '../../expense/hooks/GetByListExpenseHook'

export function useDashResultadoLiquido(dateInitial: Date, dateFinish: Date) {
  const { listEntradaCorte, returnGetByListEntradaCorte } =
    useGetByListEntradaCorte(dateInitial, dateFinish, GetUserLogado())

  const { listExpense, returnGetByListExpense } = useGetByListExpense(
    dateInitial,
    dateFinish,
    GetUserLogado(),
  )

  const totalRevenue = useMemo(() => {
    return listEntradaCorte.reduce((total, corte) => total + corte.total, 0)
  }, [listEntradaCorte])

  const totalExpense = useMemo(
    () => listExpense.reduce((total, expense) => total + expense.value, 0),
    [listExpense],
  )

  const lucroPrejuizo = useMemo(() => {
    return totalRevenue - totalExpense
  }, [totalRevenue, totalExpense])

  return {
    totalRevenue,
    totalExpense,
    lucroPrejuizo: lucroPrejuizo > 0 ? lucroPrejuizo : lucroPrejuizo * -1,
    isLucro: lucroPrejuizo > 0,
    isLoading:
      returnGetByListEntradaCorte.isLoading || returnGetByListExpense.isLoading,
  }
}
