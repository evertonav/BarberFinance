import { useState } from 'react'
import { useAddEntradaCorte } from './entradaCorte/AddEntradaCorteHook'
import { useGetByListEntradaCorte } from './entradaCorte/GetByListEntradaCorteHook'
import { auth } from '../../../api/FirebaseConnection'
import type { Corte } from '../types'

export function useRelToday() {
  const [date, setDate] = useState<Date>(new Date())

  const { addEntradaCorte } = useAddEntradaCorte()
  const { listEntradaCorte } = useGetByListEntradaCorte(
    date,
    auth.currentUser?.email || '',
  )

  return {
    date,
    setDate,
    addEntradaCorte,
    listCortes: listEntradaCorte.map((item) => {
      return {
        price: item.price,
        quantity: item.quantity,
        date: item.date,
      }
    }) as Corte[],
  }
}
