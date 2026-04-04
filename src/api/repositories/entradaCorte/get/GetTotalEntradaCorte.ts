import {
  collection,
  getAggregateFromServer,
  query,
  sum,
  where,
} from 'firebase/firestore'
import { db } from '../../../FirebaseConnection'
import { nameTableEntradaCorte } from '../types'

export async function GetTotalEntradaCorte(
  user: string,
  dateInitial: Date,
  dateFinish: Date,
): Promise<number> {
  const entradaCorteCollection = collection(db, nameTableEntradaCorte)

  const queryRef = query(
    entradaCorteCollection,
    where('user', '==', user),
    where('date', '>=', dateInitial.toISOString()),
    where('date', '<=', dateFinish.toISOString()),
    where('total', '>', 0),
  )

  const snapshot = await getAggregateFromServer(queryRef, {
    total: sum('total'),
  })

  return snapshot.data().total || 0
}
