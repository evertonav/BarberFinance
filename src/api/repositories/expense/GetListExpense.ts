import { collection, getDocs, query, where } from 'firebase/firestore'
import { nameTableExpense, type EntityExpenseResponse } from './types'
import { db } from '../../FirebaseConnection'

export async function GetListExpense(
  dateInitial: Date,
  dateFinish: Date,
  user: string,
): Promise<EntityExpenseResponse[]> {
  const entradaCorte = collection(db, nameTableExpense)
  const queryRef = query(
    entradaCorte,
    where('user', '==', user),
    where('dateReference', '>=', dateInitial.toISOString()),
    where('dateReference', '<=', dateFinish.toISOString()),
  )

  const querySnapshot = await getDocs(queryRef)

  let listExpense: Array<EntityExpenseResponse> = []

  querySnapshot.forEach((doc) => {
    listExpense.push({
      id: doc.id,
      dateReference: new Date(doc.data().dateReference),
      description: doc.data().description,
      value: doc.data().value,
      user: doc.data().user,
    })
  })

  return listExpense
}
