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

export function useExpenseContainer() {
  const { addExpense, returnExecutionAddExpense } = useAddExpense()

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

  return {
    addExpense,
    isLoading:
      returnExecutionAddExpense.isPending || returnGetByListExpense.isLoading,
    listExpenseFront,
    dateAndMonthView,
    nextMotnthAndYear,
    previousMonthAndYear,
  }
}
