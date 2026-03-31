import { useState } from 'react'

export function useNavigationYear(year: number) {
  const [yearState, setYearState] = useState(year)

  function previousYear() {
    setYearState((prevYear) => prevYear - 1)
  }

  function nextYear() {
    setYearState((prevYear) => prevYear + 1)
  }

  return {
    yearState,
    previousYear,
    nextYear,
  }
}
