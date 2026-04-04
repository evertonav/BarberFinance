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
        <Navigation onNext={nextYear} onPrevious={previousYear}>
          {yearState}
        </Navigation>

        <DashContainer header={{ children: 'Recebimentos por mês' }}>
          <DashContainerRow
            className={
              listMonthTotalEntradaCorte.length === 0 ? style.alignCenter : ''
            }
          >
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
          </DashContainerRow>
        </DashContainer>
      </ContainerBody>
    </Loading>
  )
}
