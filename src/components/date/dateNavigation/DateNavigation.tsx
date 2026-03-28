import { ContainerRounded } from '../../../templates/containerRounded/ContainerRounded'
import {
  formatDate,
  formatExtractYearDate,
} from '../../../utils/Format/FormatDate'
import { ButtonIcone } from '../../button/ButtonIcone'
import ShowIcon from '../../showIcon/ShowIcon'
import style from './DateNavigation.module.css'

interface DateNavigationProps {
  onNext?: (dateNext: Date) => void
  onPrevious?: (datePrevious: Date) => void
  date: Date
  format?: 'Year' | 'DayMonthYear'
}

export function DateNavigation({
  onNext,
  onPrevious,
  date,
  format = 'DayMonthYear',
}: DateNavigationProps) {
  return (
    <ContainerRounded className={style.container}>
      <ButtonIcone
        onClick={() => {
          onPrevious && onPrevious(new Date(date.setDate(date.getDate() - 1)))
        }}
      >
        <ShowIcon nameIcon="arrow_back_ios" size="22px" />
      </ButtonIcone>

      {format === 'DayMonthYear'
        ? formatDate(date)
        : formatExtractYearDate(date)}

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
