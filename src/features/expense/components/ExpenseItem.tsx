import { Label } from '../../../components/labels/Label'
import { IconWrapper } from '../../../components/showIcon/IconWrapper'
import ShowIcon, {
  type ShowIconProps,
} from '../../../components/showIcon/ShowIcon'
import { ContainerRounded } from '../../../templates/containerRounded/ContainerRounded'
import { formatDate } from '../../../utils/Format/FormatDate'
import { formatCurrency } from '../../../utils/Format/FormatNumeric'
import style from './ExpenseItem.module.css'
import type { Expense } from '../types'

interface ExpenseItemProps {
  expense: Omit<Expense, 'id'> & { id: string }
  icon: ShowIconProps
  onDelete?: (id: string) => void
}

export function ExpenseItem({ expense, icon, onDelete }: ExpenseItemProps) {
  return (
    <ContainerRounded className={style.item}>
      <IconWrapper>
        <ShowIcon {...icon} />
      </IconWrapper>

      <div className={style.info}>
        <Label fontWeight="600" className={style.title}>
          {expense.description}
        </Label>

        <Label color="Secondary" className={style.date}>
          {formatDate(expense.dateReference)}
        </Label>
      </div>

      <div className={style.right}>
        <Label fontWeight="600" className={style.title}>
          {formatCurrency(expense.value)}
        </Label>
      </div>

      <div className={style.actions}>
        {/*<IconButton onClick={() => onEdit?.(expense)} aria-label="Editar">
          <Pencil size={16} />
        </IconButton>
        <IconButton onClick={() => onDelete?.(expense.id)} aria-label="Excluir">
          <ShowIcon color="Delete" size="20px" nameIcon="delete" />
        </IconButton>*/}
      </div>
    </ContainerRounded>
  )
}
