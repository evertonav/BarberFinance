export interface EntityExpense {
  id?: string
  description: string
  value: number
  dateReference: Date
  user: string
}

export interface EntityExpenseResponse extends Omit<EntityExpense, 'id'> {
  id: string
}

export const nameTableExpense = 'Expense'
