import { deleteDoc, doc } from 'firebase/firestore'
import { nameTableExpense } from './types'
import { db } from '../../FirebaseConnection'

export function DeleteByIdExpense(id: string): Promise<void> {
  const docRef = doc(db, nameTableExpense, id)

  return deleteDoc(docRef)
}
