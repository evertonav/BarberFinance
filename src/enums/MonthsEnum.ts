export enum MonthsEnum {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
}

export function GetListMonths(): MonthsEnum[] {
  return [
    MonthsEnum.January,
    MonthsEnum.February,
    MonthsEnum.March,
    MonthsEnum.April,
    MonthsEnum.May,
    MonthsEnum.June,
    MonthsEnum.July,
    MonthsEnum.August,
    MonthsEnum.September,
    MonthsEnum.October,
    MonthsEnum.November,
    MonthsEnum.December,
  ]
}

export const MonthsDescription: Record<MonthsEnum, string> = {
  [MonthsEnum.January]: 'Janeiro',
  [MonthsEnum.February]: 'Fevereiro',
  [MonthsEnum.March]: 'Março',
  [MonthsEnum.April]: 'Abril',
  [MonthsEnum.May]: 'Maio',
  [MonthsEnum.June]: 'Junho',
  [MonthsEnum.July]: 'Julho',
  [MonthsEnum.August]: 'Agosto',
  [MonthsEnum.September]: 'Setembro',
  [MonthsEnum.October]: 'Outubro',
  [MonthsEnum.November]: 'Novembro',
  [MonthsEnum.December]: 'Dezembro',
}
