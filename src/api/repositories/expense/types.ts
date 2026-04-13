export interface EntityExpense {
  id?: string
  description: string
  value: number
  dateReference: Date
  user: string
}

export const nameTableExpense = 'Expense'
