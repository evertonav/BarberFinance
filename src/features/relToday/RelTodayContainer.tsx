import ShowIcon from '../../components/showIcon/ShowIcon'

import { DateToday } from './components/dateToday/DateToday'
import { Header } from '../../templates/header/Header'
import style from './RelTodayContainer.module.css'
import { ListCorteTotalized } from './components/listCorteTotalized/ListCorteTotalized'
import { useRef, useState } from 'react'
import {
  ContainerModalFullScreen,
  type ContainerModalElement,
} from '../../templates/ContainerModal/ContainerModalFullScreen'
import { CadCorte } from './components/CadCorte/CadCorte'
import { ButtonCommom } from '../../components/button/ButtonCommom'

export function RelTodayContainer() {
  const [date, setDate] = useState<Date>(new Date())
  const modalAddCorte = useRef<ContainerModalElement>(null)

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
            cortes: [
              { price: 10, quantity: 3 },
              { price: 20, quantity: 4 },
              { price: 40, quantity: 1 },
            ],
            totalized: 150,
          }}
        />
      </div>

      <div className={style.footer}>
        <ButtonCommom
          onClick={() => modalAddCorte.current?.open()}
          type="Success"
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
            onSuccess={() => {
              modalAddCorte.current?.close()
            }}
          />
        </ContainerModalFullScreen>
      </div>
    </div>
  )
}
