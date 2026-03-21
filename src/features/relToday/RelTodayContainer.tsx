import ShowIcon from '../../components/showIcon/ShowIcon'

import { DateToday } from './components/dateToday/DateToday'
import { Header } from '../../templates/header/Header'
import style from './RelTodayContainer.module.css'
import { ListCorteTotalized } from './components/listCorteTotalized/ListCorteTotalized'
import { useRef } from 'react'
import {
  ContainerModalFullScreen,
  type ContainerModalElement,
} from '../../templates/ContainerModal/ContainerModalFullScreen'
import { CadCorte } from './components/CadCorte/CadCorte'
import { ButtonCommom } from '../../components/button/ButtonCommom'
import type { Corte } from './types'
import { useRelToday } from './hooks/RelTodayHook'
import { useInvalidateQuery } from '../../hooks/InvalidateQueryHook'
import { QueryKeyGetByListEntradaCorte } from '../../queryKey/QueryKeyGetEntradaCorte'
import { auth } from '../../api/FirebaseConnection'
import toast from 'react-hot-toast'

export function RelTodayContainer() {
  const { date, listCortes, setDate, addEntradaCorte } = useRelToday()
  const modalAddCorte = useRef<ContainerModalElement>(null)
  const { invalidateQuery } = useInvalidateQuery()

  return (
    <div className={style.container}>
      <Header>Relatório diário</Header>

      <div className={style.bodyRel}>
        <DateToday
          date={date}
          onPrevious={(datePrevious: Date) => setDate(datePrevious)}
          onNext={(dateNext: Date) => setDate(dateNext)}
        />

        <ListCorteTotalized
          listCortes={{
            cortes: listCortes,
            totalized: listCortes.reduce(
              (total, corte) => total + corte.price * corte.quantity,
              0,
            ),
          }}
        />
      </div>

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
              if (!auth.currentUser?.email) {
                toast.error(
                  'Usuário não autenticado. Por favor, faça login novamente.',
                )
                return
              }

              addEntradaCorte(value, auth.currentUser?.email!).then(() => {
                invalidateQuery(
                  QueryKeyGetByListEntradaCorte(
                    value.date,
                    auth.currentUser?.email!,
                  ),
                )
                modalAddCorte.current?.close()
              })
            }}
          />
        </ContainerModalFullScreen>
      </div>
    </div>
  )
}
