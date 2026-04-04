export function QueryKeyGetByListEntradaCorte(date?: Date, user?: string) {
  return ['GetByListEntradaCorte', date, user]
}

export function QueryKeyGetTotalEntradaCorte(user?: string, year?: number) {
  return ['GetTotalMonthsEntradaCorte', user, year]
}
