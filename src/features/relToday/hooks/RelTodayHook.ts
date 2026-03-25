import { useState } from 'react'
import { useAddEntradaCorte } from '../../corte/hooks/entradaCorte/AddEntradaCorteHook'
import { useGetByListEntradaCorte } from '../../corte/hooks/entradaCorte/GetByListEntradaCorteHook'
import type { Corte } from '../types'
import { useDeleteByIdEntradaCorte } from '../../corte/hooks/entradaCorte/DeleteByIdEntradaCorteHook'
import { GetUserLogado } from '../../../utils/GetUser'

export function useRelToday() {
  const [date, setDate] = useState<Date>(new Date())

  const { addEntradaCorte, returnExecution: returnAdd } = useAddEntradaCorte()
  const { deleteByIdEntradaCorte, returnExecution: returnDelete } =
    useDeleteByIdEntradaCorte()
  const { listEntradaCorte, returnGetByListEntradaCorte } =
    useGetByListEntradaCorte(date, GetUserLogado())

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
