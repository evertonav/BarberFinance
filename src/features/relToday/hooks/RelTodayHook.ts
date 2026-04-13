import { useAddEntradaCorte } from '../../corte/hooks/entradaCorte/AddEntradaCorteHook'
import { useGetByListEntradaCorte } from '../../corte/hooks/entradaCorte/get/GetByListEntradaCorteHook'
import type { Corte } from '../../corte/types'
import { useDeleteByIdEntradaCorte } from '../../corte/hooks/entradaCorte/DeleteByIdEntradaCorteHook'
import { GetUserLogado } from '../../../utils/GetUser'
import { useNavigationMonthAndYear } from '../../../components/navigation/hooks/NavigationMonthAndYearHook'
import { useInvalidateQuery } from '../../../hooks/InvalidateQueryHook'
import {
  QueryKeyGetByListEntradaCorte,
  QueryKeyGetTotalEntradaCorte,
} from '../../../queryKey/QueryKeyGetEntradaCorte'

export function useRelToday() {
  const {
    dateInitial,
    dateFinish,
    dateAndMonthView,
    nextMotnthAndYear,
    previousMonthAndYear,
  } = useNavigationMonthAndYear()

  const { addEntradaCorte, returnExecution: returnAdd } = useAddEntradaCorte()

  const { deleteByIdEntradaCorte, returnExecution: returnDelete } =
    useDeleteByIdEntradaCorte()

  const { listEntradaCorte, returnGetByListEntradaCorte } =
    useGetByListEntradaCorte(dateInitial, dateFinish, GetUserLogado())

  const { invalidateQuery } = useInvalidateQuery()

  function updateItemsCortesAndTotal() {
    invalidateQuery(
      QueryKeyGetByListEntradaCorte(dateInitial, dateFinish, GetUserLogado()),
    )

    invalidateQuery(
      QueryKeyGetTotalEntradaCorte(GetUserLogado(), dateInitial.getFullYear()),
    )
  }

  function getDate() {
    return dateInitial.getMonth() === new Date().getMonth()
      ? new Date()
      : dateInitial
  }

  return {
    dateAndMonthView,
    nextMotnthAndYear,
    previousMonthAndYear,
    addEntradaCorte,
    deleteByIdEntradaCorte,
    updateItemsCortesAndTotal,
    getDate,
    isLoading:
      returnAdd.isPending ||
      returnDelete.isPending ||
      returnGetByListEntradaCorte.isLoading,
    listCortes: listEntradaCorte.map((item) => {
      return {
        price: item.price,
        quantity: item.quantity,
        date: item.date,
        total: item.total,
        id: item.id,
      }
    }) as Corte[],
  }
}
