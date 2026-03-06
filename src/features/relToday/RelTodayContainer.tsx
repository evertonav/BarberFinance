import ShowIcon from '../../components/showIcon/ShowIcon'

import { DateToday } from './components/dateToday/DateToday'
import { Header } from '../../templates/header/Header'
import style from './RelTodayContainer.module.css'
import { ListCorteTotalized } from './components/listCorteTotalized/ListCorteTotalized'

export function RelTodayContainer() {
  return (
    <div className={style.container}>
      <Header>Relatório diário</Header>

      <div className={style.bodyRel}>
        <DateToday />

        <ListCorteTotalized />
      </div>

      <div className={style.footer}>
        <button className={style.roundedButton}>
          <ShowIcon nameIcon="add" />
        </button>
      </div>
    </div>
  )
}
