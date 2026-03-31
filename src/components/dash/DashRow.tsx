import { formatCurrency } from '../../utils/Format/FormatNumeric'
import { Label } from '../labels/Label'
import style from './DashFull.module.css'

interface DashRowProps {
  item: { month: string; value: number }
}

export function DashRow({ item }: DashRowProps) {
  return (
    <div key={item.month} className={style.barRow}>
      <Label color="Secondary" fontSize="0_8Rem" className={style.barLabel}>
        {item.month}
      </Label>

      <div className={style.barTrack}>
        <div className={style.barFill} style={{ width: `${100}%` }} />
      </div>
      <Label fontWeight="600" className={style.barValue}>
        {formatCurrency(item.value)}
      </Label>
    </div>
  )
}
