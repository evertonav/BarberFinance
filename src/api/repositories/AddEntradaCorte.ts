import {
  addDoc,
  collection,
  DocumentReference,
  type DocumentData,
} from 'firebase/firestore'
import { db } from '../FirebaseConnection'
import type { EntradaCorte } from './types'

export function AddEntradaCorte(
  entradaCorte: EntradaCorte,
): Promise<DocumentReference<DocumentData, DocumentData>> {
  return addDoc(collection(db, 'EntradaCorte'), entradaCorte)
}
