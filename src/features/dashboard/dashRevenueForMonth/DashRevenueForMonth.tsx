import { FormControl, MenuItem } from '@mui/material'
import { DashContainer } from '../../../components/dash/templates/DashContainer'
import { SelectCommomMui } from '../../../components/select/SelectCommomMui'
import {
  FiltersMonthOldValuesDescription,
  type FiltersMonthOldValues,
} from '../filters/FiltersMonthOld'
import { DashContainerRow } from '../../../components/dash/templates/DashContainerRow'
import { DashRow } from '../../../components/dash/DashRow'
import { useDashRevenueForMonth } from './DashRevenueForMonthHook'
import style from './DashRevenueForMonth.module.css'
import { Label } from '../../../components/labels/Label'
import { MonthsDescription, MonthsEnum } from '../../../enums/MonthsEnum'
import { formatCurrency } from '../../../utils/Format/FormatNumeric'

export function DashRevenueForMonth() {
  const {
    filterMonthOldRevenue,
    setFilterMonthOldRevenue,
    maxValorTotalEntradaCorte,
    listMonthTotalEntradaCorte,
    isLoading,
  } = useDashRevenueForMonth()

  return (
    <DashContainer
      isLoading={isLoading}
      header={{
        children: (
          <div className={style.containerHeaderDash}>
            <div>Recebimentos por mês</div>

            <FormControl size="small">
              <SelectCommomMui
                value={filterMonthOldRevenue}
                onChange={(event) => {
                  setFilterMonthOldRevenue(
                    event.target.value as FiltersMonthOldValues,
                  )
                }}
              >
                <MenuItem value={'12'}>
                  {FiltersMonthOldValuesDescription['12']}
                </MenuItem>
                <MenuItem value={'6'}>
                  {FiltersMonthOldValuesDescription['6']}
                </MenuItem>
                <MenuItem value={'3'}>
                  {FiltersMonthOldValuesDescription['3']}
                </MenuItem>
              </SelectCommomMui>
            </FormControl>
          </div>
        ),
      }}
    >
      <DashContainerRow
        className={
          listMonthTotalEntradaCorte.length === 0 ? style.alignCenter : ''
        }
      >
        <>
          {listMonthTotalEntradaCorte.length === 0 ? (
            <Label color="Secondary">Nenhum dado para este ano.</Label>
          ) : (
            listMonthTotalEntradaCorte.map((item, index) => {
              return (
                <DashRow
                  tamanhoBarra={Math.round(
                    (item.total / maxValorTotalEntradaCorte) * 100,
                  )}
                  key={index}
                  labelTitle={{
                    children: `${MonthsDescription[item.month as MonthsEnum]}/${item.year}`,
                  }}
                  labelValue={{ children: formatCurrency(item.total) }}
                />
              )
            })
          )}
        </>
      </DashContainerRow>
    </DashContainer>
  )
}
