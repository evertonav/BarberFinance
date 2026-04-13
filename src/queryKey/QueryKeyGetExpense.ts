export function QueryKeyGetListExpense(
  user?: string,
  dateInitial?: Date,
  dateFinish?: Date,
) {
  return ['GetListExpense', user, dateInitial, dateFinish]
}
