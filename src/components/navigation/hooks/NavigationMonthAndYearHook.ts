import { useMemo, useState } from 'react'
import {
  GetFirstDayMonth,
  GetLastDayMonth,
} from '../../../utils/date/GetRangeDate'
import { MonthsDescription, MonthsEnum } from '../../../enums/MonthsEnum'

export function useNavigationMonthAndYear() {
  const [date, setDate] = useState(new Date())

  const dateAndMonthView = useMemo(() => {
    return `${MonthsDescription[(date.getMonth() + 1) as MonthsEnum]}/${date.getFullYear()}`
  }, [date])

  const dateInitial = useMemo(() => {
    return GetFirstDayMonth(date)
  }, [date])

  const dateFinish = useMemo(() => {
    return GetLastDayMonth(date)
  }, [date])

  function previousMonthAndYear() {
    setDate(
      (prevDate) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1),
    )
  }

  function nextMotnthAndYear() {
    setDate(
      (prevDate) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1),
    )
  }

  return {
    dateAndMonthView,
    dateInitial,
    dateFinish,
    previousMonthAndYear,
    nextMotnthAndYear,
  }
}
