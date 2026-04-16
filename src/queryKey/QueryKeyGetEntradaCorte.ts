export function QueryKeyGetByListEntradaCorte(
  dateInitial?: Date,
  dateFinish?: Date,
  user?: string,
) {
  return ['GetByListEntradaCorte', dateInitial, dateFinish, user]
}

export function QueryKeyGetTotalEntradaCorte(user?: string, year?: number) {
  return ['GetTotalMonthsEntradaCorte', user, year]
}

export function QueryKeyGetTotalEntradaCorteRange(
  user?: string,
  dateInitial?: Date,
  dateFinish?: Date,
) {
  return ['GetTotalMonthsEntradaCorteRange', user, dateInitial, dateFinish]
}
