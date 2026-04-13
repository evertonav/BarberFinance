import {
  addDoc,
  collection,
  type DocumentData,
  type DocumentReference,
} from 'firebase/firestore'
import { nameTableExpense, type EntityExpense } from './types'
import { db } from '../../FirebaseConnection'

export function AddExpense(
  expense: Omit<EntityExpense, 'id'>,
): Promise<DocumentReference<DocumentData, DocumentData>> {
  return addDoc(collection(db, nameTableExpense), {
    dateReference: expense.dateReference.toISOString(),
    value: expense.value,
    description: expense.description,
    user: expense.user,
  })
}
