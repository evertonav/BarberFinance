import dayjs from 'dayjs'

export function GetFirstDayMonth(dateReference?: Date): Date {
  let dateReferenceInternal = new Date()

  if (dateReference) {
    dateReferenceInternal = dateReference
  }

  return new Date(
    dateReferenceInternal.getFullYear(),
    dateReferenceInternal.getMonth(),
    1,
  )
}

export function GetLastDayMonth(dateReference?: Date): Date {
  let dateReferenceInternal = new Date()

  if (dateReference) {
    dateReferenceInternal = dateReference
  }

  const date = new Date(
    dateReferenceInternal.getFullYear(),
    dateReferenceInternal.getMonth() + 1,
    1,
  )

  date.setDate(date.getDate() - 1)

  return date
}

export function GetListMonthsForRangeToDate(
  dateInitial: Date,
  dateFinish: Date,
) {
  const dateInitialFilter = dayjs(dateInitial)
  const dateFinishFilter = dayjs(dateFinish)

  const months = Array.from(
    { length: dateFinishFilter.diff(dateInitialFilter, 'months') + 1 },
    (_, index) => dateInitialFilter.clone().add(index, 'months').toDate(),
  )

  return months
}
