import ShowIcon from '../../../../components/showIcon/ShowIcon'
import { ContainerRounded } from '../../../../templates/containerRounded/ContainerRounded'
import style from './DateToday.module.css'

interface DateTodayProps {
  onNext?: (dateNext: Date) => void
  onPrevious?: (datePrevious: Date) => void
}

export function DateToday({ onNext, onPrevious }: DateTodayProps) {
  return (
    <ContainerRounded className={style.container}>
      <ShowIcon
        nameIcon="arrow_back_ios"
        className={style.icon}
        onClick={() => onNext && onNext(new Date(2026, 0, 1))}
      />
      01/01/2026
      <ShowIcon
        nameIcon="arrow_forward_ios"
        className={style.icon}
        onClick={() => {
          onPrevious && onPrevious(new Date(2026, 0, 1))
        }}
      />
    </ContainerRounded>
  )
}
