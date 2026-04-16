import { DashContainer } from '../../components/dash/templates/DashContainer'
import { DashContainerRow } from '../../components/dash/templates/DashContainerRow'
import { DashRow } from '../../components/dash/DashRow'
import { Label } from '../../components/labels/Label'
import { Loading } from '../../components/loading/loading'
import { Navigation } from '../../components/navigation/Navigation'
import { ContainerBody } from '../../templates/ContainerBody/ContainerBody'
import { HeaderSecondary } from '../../templates/header/HeaderSecondary'
import style from './DashboardContainer.module.css'
import { MonthsDescription, MonthsEnum } from '../../enums/MonthsEnum'
import { formatCurrency } from '../../utils/Format/FormatNumeric'
import { useDashBoardContainer } from './DashBoardContainerHook'
import { ContainerRounded } from '../../templates/containerRounded/ContainerRounded'
import { FormControl, MenuItem } from '@mui/material'

import { Card } from './components/Card'
import { SelectCommomMui } from '../../components/select/SelectCommomMui'
import {
  FiltersMonthOldValuesDescription,
  type FiltersMonthOldValues,
} from './filters/FiltersMonthOld'

export function DashboardContainer() {
  const {
    listMonthTotalEntradaCorte,
    maxValorTotalEntradaCorte,

    isLoading,
    filterMonthOldRevenue,
    setFilterMonthOldRevenue,
  } = useDashBoardContainer()

  return (
    <Loading isLoading={isLoading}>
      <HeaderSecondary>DashBoard</HeaderSecondary>

      <ContainerBody>
        <ContainerRounded className={style.containerFaturamento}>
          <Navigation>{'Julho/2026'}</Navigation>

          <Card
            labelDescription={{ children: 'Recebimentos' }}
            labelTitle={{ children: formatCurrency(1000) }}
          />

          <Card
            labelDescription={{ children: 'Despesas' }}
            labelTitle={{ children: formatCurrency(1000), color: 'Warning' }}
          />

          <Card
            labelDescription={{ children: 'Prejuízo' }}
            labelTitle={{ children: formatCurrency(1000), color: 'Error' }}
          />
        </ContainerRounded>

        <DashContainer
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
      </ContainerBody>
    </Loading>
  )
}
