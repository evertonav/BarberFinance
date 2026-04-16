import dayjs from 'dayjs'

export type FiltersMonthOldValues = '12' | '6' | '3'

export const FiltersMonthOldValuesDescription: Record<
  FiltersMonthOldValues,
  string
> = {
  '12': '12 meses',
  '6': '6 meses',
  '3': '3 meses',
}

export function filtersMonthOldValuesToDate(
  value: FiltersMonthOldValues,
  date?: Date,
) {
  const dateInternal: Date = date ? new Date(date) : new Date()

  const teste = dayjs(dateInternal)
    .subtract(Number(value) - 1, 'month')
    .toDate()

  return teste
}
