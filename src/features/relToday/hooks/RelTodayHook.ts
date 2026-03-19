import { useState } from 'react'
import { useAddEntradaCorte } from './entradaCorte/AddEntradaCorteHook'
import { useGetByListEntradaCorte } from './entradaCorte/GetByListEntradaCorteHook'

export function useRelToday() {
  const [date, setDate] = useState<Date>(new Date())

  const { addEntradaCorte } = useAddEntradaCorte()
  const { listEntradaCorte } = useGetByListEntradaCorte(
    date,
    'teste@hotmail.com',
  )

  return {
    date,
    setDate,
    addEntradaCorte,
    listCortes: listEntradaCorte.map((item) => {
      return {
        price: item.price,
        quantity: item.quantity,
      }
    }),
  }
}
