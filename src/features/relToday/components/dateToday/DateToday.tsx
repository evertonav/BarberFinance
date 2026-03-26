import ShowIcon from '../../../../components/showIcon/ShowIcon'
import { ContainerRounded } from '../../../../templates/containerRounded/ContainerRounded'
import { formatDate } from '../../../../utils/Format'
import style from './DateToday.module.css'
import { ButtonIcone } from '../../../../components/button/ButtonIcone'

interface DateTodayProps {
  onNext?: (dateNext: Date) => void
  onPrevious?: (datePrevious: Date) => void
  date: Date
}

export function DateToday({ onNext, onPrevious, date }: DateTodayProps) {
  return (
    <ContainerRounded className={style.container}>
      <ButtonIcone
        onClick={() => {
          onPrevious && onPrevious(new Date(date.setDate(date.getDate() - 1)))
        }}
      >
        <ShowIcon nameIcon="arrow_back_ios" size="22px" />
      </ButtonIcone>

      {formatDate(date)}

      <ButtonIcone
        onClick={() =>
          onNext && onNext(new Date(date.setDate(date.getDate() + 1)))
        }
      >
        <ShowIcon nameIcon="arrow_forward_ios" size="22px" />
      </ButtonIcone>
    </ContainerRounded>
  )
}
