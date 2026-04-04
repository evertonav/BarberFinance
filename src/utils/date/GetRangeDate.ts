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
