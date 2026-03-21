import { deleteDoc, doc } from 'firebase/firestore'
import { nameTableEntradaCorte } from './types'
import { db } from '../../FirebaseConnection'

export function DeleteByIdEntradaCorte(id: string): Promise<void> {
  const docRef = doc(db, nameTableEntradaCorte, id)

  return deleteDoc(docRef)
}
