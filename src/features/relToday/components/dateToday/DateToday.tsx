import ShowIcon from '../../../../components/showIcon/ShowIcon'
import { ContainerRounded } from '../../../../templates/containerRounded/ContainerRounded'
import { formatDate } from '../../../../utils/Format'
import style from './DateToday.module.css'

interface DateTodayProps {
  onNext?: (dateNext: Date) => void
  onPrevious?: (datePrevious: Date) => void
  date: Date
}

export function DateToday({ onNext, onPrevious, date }: DateTodayProps) {
  return (
    <ContainerRounded className={style.container}>
      <ShowIcon
        nameIcon="arrow_back_ios"
        className={style.icon}
        onClick={() => {
          onPrevious && onPrevious(new Date(date.setDate(date.getDate() - 1)))
        }}
      />
      {formatDate(date)}
      <ShowIcon
        nameIcon="arrow_forward_ios"
        className={style.icon}
        onClick={() => {
          onNext && onNext(new Date(date.setDate(date.getDate() + 1)))
        }}
      />
    </ContainerRounded>
  )
}
