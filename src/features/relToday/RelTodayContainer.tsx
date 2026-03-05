import { ContainerRounded } from '../../templates/containerRounded/ContainerRounded'
import { DateToday } from './components/DateToday'
import style from './RelTodayContainer.module.css'

export function RelTodayContainer() {
  return (
    <div className={style.container}>
      <div className={style.header}>Relatório diário</div>

      <div>
        <DateToday />

        <ContainerRounded>Os cortes vãi ficar aqui</ContainerRounded>
      </div>

      <div>Rodape</div>
    </div>
  )
}
