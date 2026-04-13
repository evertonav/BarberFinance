import { useNavigationMonthAndYear } from '../../components/navigation/hooks/NavigationMonthAndYearHook'
import {
  GetFirstDayMonth,
  GetLastDayMonth,
} from '../../utils/date/GetRangeDate'
import { GetUserLogado } from '../../utils/GetUser'
import { useAddExpense } from './hooks/AddExpenseHook'
import { useGetByListExpense } from './hooks/GetByListExpenseHook'

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

  return {
    addExpense,
    isLoading:
      returnExecutionAddExpense.isPending || returnGetByListExpense.isLoading,
    listExpense,
    dateAndMonthView,
    nextMotnthAndYear,
    previousMonthAndYear,
  }
}
