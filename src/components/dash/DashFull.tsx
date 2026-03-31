import { ContainerRounded } from '../../templates/containerRounded/ContainerRounded'
import { HeaderSecondary } from '../../templates/header/HeaderSecondary'
import { formatCurrency } from '../../utils/Format/FormatNumeric'
import { Label } from '../labels/Label'
import style from './DashFull.module.css'
import { DashRow } from './DashRow'

export function DashFull() {
  const teste = [
    { month: 'Jan', value: 1000 },
    { month: 'Fev', value: 1500 },
    { month: 'Mar', value: 1200 },
  ]
  return (
    <ContainerRounded className={style.chartCard}>
      <HeaderSecondary fontSize="14" className={style.chartTitle}>
        Recebimentos por mês
      </HeaderSecondary>

      <div
        className={`${style.barContainer} ${teste.length === 0 && style.alignCenter}`}
      >
        {teste.length === 0 ? (
          <Label color="Secondary">Nenhum dado para este ano.</Label>
        ) : (
          teste.map((item, i) => <DashRow item={item} />)
        )}
      </div>
    </ContainerRounded>
  )
}
