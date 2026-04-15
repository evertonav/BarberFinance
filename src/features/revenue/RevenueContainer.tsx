import ShowIcon from '../../components/showIcon/ShowIcon'

import { HeaderSecondary } from '../../templates/header/HeaderSecondary'
import { ListCorteTotalized } from './components/listCorteTotalized/ListCorteTotalized'
import { useRef } from 'react'
import {
  ContainerModalFullScreen,
  type ContainerModalElement,
} from '../../templates/ContainerModal/ContainerModalFullScreen'
import { CadCorte } from '../corte/cadCorte/CadCorte'
import { ButtonCommom } from '../../components/button/ButtonCommom'
import type { Corte } from '../corte/types'

import toast from 'react-hot-toast'
import { Loading } from '../../components/loading/loading'
import { GetUserLogado } from '../../utils/GetUser'
import { ContainerBody } from '../../templates/ContainerBody/ContainerBody'
import { Navigation } from '../../components/navigation/Navigation'
import { Footer } from '../../templates/footer/Footer'
import { useRevenueContainer } from './RevenueContainerHook'

export function RevenueContainer() {
  const {
    nextMotnthAndYear,
    previousMonthAndYear,
    listCortes,
    dateAndMonthView,
    addEntradaCorte,
    deleteByIdEntradaCorte,
    isLoading,
    updateItemsCortesAndTotal,
    getDate,
  } = useRevenueContainer()

  const modalAddCorte = useRef<ContainerModalElement>(null)

  return (
    <Loading isLoading={isLoading}>
      <HeaderSecondary>Recebimentos</HeaderSecondary>

      <ContainerBody>
        <Navigation
          onPrevious={previousMonthAndYear}
          onNext={nextMotnthAndYear}
        >
          {dateAndMonthView}
        </Navigation>

        <ListCorteTotalized
          onDelete={(corte: Corte) => {
            if (!corte.id) {
              toast.error('Não é possível deletar um registro que não tem id!')
              return
            }

            deleteByIdEntradaCorte(corte.id!).then(() => {
              updateItemsCortesAndTotal()
            })
          }}
          listCortes={{
            cortes: listCortes,
            totalized: listCortes.reduce(
              (total, corte) => total + corte.total,
              0,
            ),
          }}
        />
      </ContainerBody>

      <Footer>
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
            corte={{ date: getDate() }}
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
                updateItemsCortesAndTotal()

                modalAddCorte.current?.close()
              })
            }}
          />
        </ContainerModalFullScreen>
      </Footer>
    </Loading>
  )
}
