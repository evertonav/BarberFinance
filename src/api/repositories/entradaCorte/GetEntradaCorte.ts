import {
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from 'firebase/firestore'
import { db } from '../../FirebaseConnection'
import { nameTableEntradaCorte, type EntradaCorte } from './types'

export async function GetListEntradaCorte(
  dateInitial: Date,
  dateFinish: Date,
  user: string,
): Promise<EntradaCorte[]> {
  const entradaCorte = collection(db, nameTableEntradaCorte)
  const queryRef = query(
    entradaCorte,
    where('user', '==', user),
    where('date', '>=', dateInitial.toISOString()),
    where('date', '<=', dateFinish.toISOString()),
  )

  const querySnapshot = await getDocs(queryRef)

  let entradasCorte: Array<EntradaCorte> = []

  querySnapshot.forEach((doc) => {
    entradasCorte.push({
      id: doc.id,
      date: doc.data().date,
      price: doc.data().price,
      quantity: doc.data().quantity,
      user: doc.data().user,
    })
  })

  return entradasCorte
}
