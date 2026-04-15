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
import { FormControl, MenuItem, Select } from '@mui/material'

import { Card } from './components/Card'

export function DashboardContainer() {
  const {
    listMonthTotalEntradaCorte,
    maxValorTotalEntradaCorte,
    nextYear,
    previousYear,
    isLoading,
    yearState,
  } = useDashBoardContainer()

  return (
    <Loading isLoading={isLoading}>
      <HeaderSecondary>DashBoard</HeaderSecondary>

      <ContainerBody>
        <ContainerRounded className={style.containerFaturamento}>
          <Navigation onNext={nextYear} onPrevious={previousYear}>
            {'Julho/2026'}
          </Navigation>

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
                  <Select
                    value={'12'}
                    onChange={(e) => {}}
                    sx={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'hsl(220 15% 20%)',
                      bgcolor: 'hsl(140 15% 92%)',
                      borderRadius: '0.75rem',
                      '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'hsl(140 10% 90%)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'hsl(220 10% 50%)',
                      },
                      '.MuiSelect-select': {
                        padding: '6px 10px',
                      },
                    }}
                  >
                    <MenuItem value={12}>1 ano</MenuItem>
                    <MenuItem value={6}>6 meses</MenuItem>
                    <MenuItem value={3}>3 meses</MenuItem>
                  </Select>
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
                        children: MonthsDescription[item.month as MonthsEnum],
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
