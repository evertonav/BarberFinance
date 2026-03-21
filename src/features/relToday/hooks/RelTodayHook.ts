import { useState } from 'react'
import { useAddEntradaCorte } from './entradaCorte/AddEntradaCorteHook'
import { useGetByListEntradaCorte } from './entradaCorte/GetByListEntradaCorteHook'
import { auth } from '../../../api/FirebaseConnection'
import type { Corte } from '../types'
import { useDeleteByIdEntradaCorte } from './entradaCorte/DeleteByIdEntradaCorteHook'

export function useRelToday() {
  const [date, setDate] = useState<Date>(new Date())

  const { addEntradaCorte, returnExecution: returnAdd } = useAddEntradaCorte()
  const { deleteByIdEntradaCorte, returnExecution: returnDelete } =
    useDeleteByIdEntradaCorte()
  const { listEntradaCorte, returnGetByListEntradaCorte } =
    useGetByListEntradaCorte(date, auth.currentUser?.email || '')

  return {
    date,
    setDate,
    addEntradaCorte,
    deleteByIdEntradaCorte,
    isLoading:
      returnAdd.isPending ||
      returnDelete.isPending ||
      returnGetByListEntradaCorte.isLoading,
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
