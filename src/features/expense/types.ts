export interface Expense {
  id?: string
  value: number
  description: string
  dateReference: Date
}

export interface ExpenseResponse extends Omit<Expense, 'id'> {
  id: string
}
