import { useState } from 'react'
import { useAddEntradaCorte } from './entradaCorte/AddEntradaCorteHook'
import { useGetByListEntradaCorte } from './entradaCorte/GetByListEntradaCorteHook'
import { auth } from '../../../api/FirebaseConnection'
import type { Corte } from '../types'
import { useDeleteByIdEntradaCorte } from './entradaCorte/DeleteByIdEntradaCorteHook'

export function useRelToday() {
  const [date, setDate] = useState<Date>(new Date())

  const { addEntradaCorte } = useAddEntradaCorte()
  const { deleteByIdEntradaCorte } = useDeleteByIdEntradaCorte()
  const { listEntradaCorte } = useGetByListEntradaCorte(
    date,
    auth.currentUser?.email || '',
  )

  return {
    date,
    setDate,
    addEntradaCorte,
    deleteByIdEntradaCorte,
    listCortes: listEntradaCorte.map((item) => {
      return {
        price: item.price,
        quantity: item.quantity,
        date: item.date,
        id: item.id,
      }
    }) as Corte[],
  }
}
