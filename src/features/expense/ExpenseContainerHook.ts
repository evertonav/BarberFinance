import { useMemo } from 'react'
import { useNavigationMonthAndYear } from '../../components/navigation/hooks/NavigationMonthAndYearHook'
import {
  GetFirstDayMonth,
  GetLastDayMonth,
} from '../../utils/date/GetRangeDate'
import { GetUserLogado } from '../../utils/GetUser'
import { useAddExpense } from './hooks/AddExpenseHook'
import { useGetByListExpense } from './hooks/GetByListExpenseHook'
import type { ExpenseResponse } from './types'
import { useDeleteByIdExpense } from './hooks/DeleteByIdExpenseHook'
import { useInvalidateQuery } from '../../hooks/InvalidateQueryHook'
import { QueryKeyGetListExpense } from '../../queryKey/QueryKeyGetExpense'

export function useExpenseContainer() {
  const { addExpense, returnExecutionAddExpense } = useAddExpense()
  const { invalidateQuery } = useInvalidateQuery()

  const {
    dateAndMonthView,
    dateInitial,
    dateFinish,
    nextMotnthAndYear,
    previousMonthAndYear,
  } = useNavigationMonthAndYear()

  const { listExpense, returnGetByListExpense } = useGetByListExpense(
    GetFirstDayMonth(dateInitial),
    GetLastDayMonth(dateFinish),
    GetUserLogado(),
  )

  const { deleteByIdExpense, returnExecutionDeleteExpense } =
    useDeleteByIdExpense()

  const listExpenseFront: ExpenseResponse[] = useMemo(() => {
    return listExpense.map((item) => {
      return {
        id: item.id,
        dateReference: item.dateReference,
        description: item.description,
        value: item.value,
      }
    })
  }, [listExpense])

  const dateReference = useMemo(() => {
    const dateNow = new Date()

    return dateNow.getMonth() === dateInitial.getMonth() ? dateNow : dateInitial
  }, [dateInitial])

  function atualizarListExpense() {
    invalidateQuery(
      QueryKeyGetListExpense(GetUserLogado(), dateInitial, dateFinish),
    )
  }

  return {
    addExpense,
    deleteByIdExpense,
    atualizarListExpense,

    isLoading:
      returnExecutionAddExpense.isPending ||
      returnGetByListExpense.isLoading ||
      returnExecutionDeleteExpense.isPending,

    listExpenseFront,
    dateAndMonthView,
    nextMotnthAndYear,
    dateReference,
    previousMonthAndYear,
  }
}
