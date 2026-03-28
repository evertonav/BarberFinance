import ShowIcon from '../../components/showIcon/ShowIcon'

import { HeaderSecondary } from '../../templates/header/HeaderSecondary'
import style from './RelTodayContainer.module.css'
import { ListCorteTotalized } from './components/listCorteTotalized/ListCorteTotalized'
import { useRef } from 'react'
import {
  ContainerModalFullScreen,
  type ContainerModalElement,
} from '../../templates/ContainerModal/ContainerModalFullScreen'
import { CadCorte } from '../corte/cadCorte/CadCorte'
import { ButtonCommom } from '../../components/button/ButtonCommom'
import type { Corte } from './types'
import { useRelToday } from './hooks/RelTodayHook'
import { useInvalidateQuery } from '../../hooks/InvalidateQueryHook'
import { QueryKeyGetByListEntradaCorte } from '../../queryKey/QueryKeyGetEntradaCorte'
import toast from 'react-hot-toast'
import { Loading } from '../../components/loading/loading'
import { GetUserLogado } from '../../utils/GetUser'
import { ContainerBody } from '../../templates/ContainerBody/ContainerBody'
import { DateNavigation } from '../../components/date/dateNavigation/DateNavigation'

export function RelTodayContainer() {
  const {
    date,
    listCortes,
    setDate,
    addEntradaCorte,
    deleteByIdEntradaCorte,
    isLoading,
  } = useRelToday()
  const modalAddCorte = useRef<ContainerModalElement>(null)
  const { invalidateQuery } = useInvalidateQuery()

  return (
    <Loading isLoading={isLoading}>
      <HeaderSecondary>Relatório diário</HeaderSecondary>

      <ContainerBody>
        <DateNavigation
          date={date}
          onPrevious={(datePrevious: Date) => setDate(datePrevious)}
          onNext={(dateNext: Date) => setDate(dateNext)}
        />

        <ListCorteTotalized
          onDelete={(corte: Corte) => {
            if (!corte.id) {
              toast.error('Não é possível deletar um registro que não tem id!')
              return
            }

            deleteByIdEntradaCorte(corte.id!).then(() => {
              invalidateQuery(
                QueryKeyGetByListEntradaCorte(date, GetUserLogado()),
              )
            })
          }}
          listCortes={{
            cortes: listCortes,
            totalized: listCortes.reduce(
              (total, corte) => total + corte.price * corte.quantity,
              0,
            ),
          }}
        />
      </ContainerBody>

      <div className={style.footer}>
        <ButtonCommom
          onClick={() => modalAddCorte.current?.open()}
          optionButton="Success"
          width="TamanhoMinimo"
          styleFormat="Circle"
        >
          <ShowIcon
            nameIcon="add"
            onClick={() => {
              modalAddCorte.current?.open()
            }}
          />
        </ButtonCommom>

        <ContainerModalFullScreen ref={modalAddCorte}>
          <CadCorte
            corte={{ date: date }}
            onCancel={() => {
              modalAddCorte.current?.close()
            }}
            onSuccess={(value: Corte) => {
              const user = GetUserLogado()

              if (user === null) {
                toast.error(
                  'Usuário não autenticado. Por favor, faça login novamente.',
                )
                return
              }

              addEntradaCorte(value, user).then(() => {
                invalidateQuery(
                  QueryKeyGetByListEntradaCorte(value.date, GetUserLogado()),
                )
                modalAddCorte.current?.close()
              })
            }}
          />
        </ContainerModalFullScreen>
      </div>
    </Loading>
  )
}
