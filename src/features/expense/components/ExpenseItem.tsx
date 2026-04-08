import { Label } from '../../../components/labels/Label'
import { IconWrapper } from '../../../components/showIcon/IconWrapper'
import ShowIcon, {
  type ShowIconProps,
} from '../../../components/showIcon/ShowIcon'
import { ContainerRounded } from '../../../templates/containerRounded/ContainerRounded'
import { formatDate } from '../../../utils/Format/FormatDate'
import { formatCurrency } from '../../../utils/Format/FormatNumeric'
import style from './ExpenseItem.module.css'

interface ExpenseItemProps {
  description: string
  value: number
  date: Date
  icon: ShowIconProps
}

export function ExpenseItem({
  date,
  icon,
  description,
  value,
}: ExpenseItemProps) {
  return (
    <ContainerRounded className={style.item}>
      <IconWrapper>
        <ShowIcon {...icon} />
      </IconWrapper>

      <div className={style.info}>
        <Label fontWeight="600" className={style.title}>
          {description}
        </Label>
        <Label color="Secondary" className={style.date}>
          {formatDate(date)}
        </Label>
      </div>
      <div className={style.right}>
        <Label fontWeight="600" className={style.title}>
          {formatCurrency(value)}
        </Label>
      </div>
    </ContainerRounded>
  )
}
