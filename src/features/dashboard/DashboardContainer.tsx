import { DashContainer } from '../../components/dash/templates/DashContainer'
import { DashContainerRow } from '../../components/dash/templates/DashContainerRow'
import { DashRow } from '../../components/dash/DashRow'
import { Label } from '../../components/labels/Label'
import { Loading } from '../../components/loading/loading'
import { useNavigationYear } from '../../components/navigation/hooks/NavigationYearHook'
import { Navigation } from '../../components/navigation/Navigation'
import { ContainerBody } from '../../templates/ContainerBody/ContainerBody'
import { HeaderSecondary } from '../../templates/header/HeaderSecondary'
import style from './DashboardContainer.module.css'

export function DashboardContainer() {
  const { yearState, nextYear, previousYear } = useNavigationYear(
    new Date().getFullYear(),
  )

  const teste = [
    { month: 'Jan', value: 1000 },
    { month: 'Fev', value: 1500 },
    { month: 'Mar', value: 1200 },
  ]

  return (
    <Loading isLoading={false}>
      <HeaderSecondary>DashBoard</HeaderSecondary>

      <ContainerBody>
        <Navigation onNext={nextYear} onPrevious={previousYear}>
          {yearState}
        </Navigation>

        <DashContainer header={{ children: 'Recebimentos por mês' }}>
          <DashContainerRow
            className={teste.length === 0 ? style.alignCenter : ''}
          >
            {teste.length === 0 ? (
              <Label color="Secondary">Nenhum dado para este ano.</Label>
            ) : (
              teste.map((item) => <DashRow item={item} />)
            )}
          </DashContainerRow>
        </DashContainer>
      </ContainerBody>
    </Loading>
  )
}
