import { useState } from 'react'
import type { Corte } from '../types'
import { useAddEntradaCorte } from './entradaCorte/AddEntradaCorteHook'

export function useRelToday() {
  const [date, setDate] = useState<Date>(new Date())
  const [listCortes, setListCortes] = useState<Corte[]>([])

  const { addEntradaCorte } = useAddEntradaCorte()

  return {
    date,
    setDate,
    listCortes,
    setListCortes,
    addEntradaCorte,
  }
}
