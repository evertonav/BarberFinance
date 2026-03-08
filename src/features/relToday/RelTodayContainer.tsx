import ShowIcon from '../../components/showIcon/ShowIcon'

import { DateToday } from './components/dateToday/DateToday'
import { Header } from '../../templates/header/Header'
import style from './RelTodayContainer.module.css'
import { ListCorteTotalized } from './components/listCorteTotalized/ListCorteTotalized'
import { RoundedButton } from '../../components/button/RoundedButton'
import { useState } from 'react'

export function RelTodayContainer() {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <div className={style.container}>
      <Header>Relatório diário</Header>

      <div className={style.bodyRel}>
        <DateToday
          date={date}
          onPrevious={(datePrevious: Date) => setDate(datePrevious)}
          onNext={(dateNext: Date) => setDate(dateNext)}
        />

        <ListCorteTotalized />
      </div>

      <div className={style.footer}>
        <RoundedButton>
          <ShowIcon nameIcon="add" />
        </RoundedButton>
      </div>
    </div>
  )
}
