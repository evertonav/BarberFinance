import {
  addDoc,
  collection,
  DocumentReference,
  type DocumentData,
} from 'firebase/firestore'
import { db } from '../../FirebaseConnection'
import { nameTableEntradaCorte, type EntradaCorte } from './types'

export function AddEntradaCorte(
  entradaCorte: Omit<EntradaCorte, 'id'>,
): Promise<DocumentReference<DocumentData, DocumentData>> {
  return addDoc(collection(db, nameTableEntradaCorte), {
    date: entradaCorte.date.toISOString(),
    quantity: entradaCorte.quantity,
    price: entradaCorte.price,
    user: entradaCorte.user,
    total: entradaCorte.total,
  })
}
