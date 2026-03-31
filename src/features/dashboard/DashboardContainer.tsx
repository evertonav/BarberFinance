import { DashFull } from '../../components/dash/DashFull'
import { Loading } from '../../components/loading/loading'
import { useNavigationYear } from '../../components/navigation/hooks/NavigationYearHook'
import { Navigation } from '../../components/navigation/Navigation'
import { ContainerBody } from '../../templates/ContainerBody/ContainerBody'
import { HeaderSecondary } from '../../templates/header/HeaderSecondary'

export function DashboardContainer() {
  const { yearState, nextYear, previousYear } = useNavigationYear(
    new Date().getFullYear(),
  )

  return (
    <Loading isLoading={false}>
      <HeaderSecondary>DashBoard</HeaderSecondary>

      <ContainerBody>
        <Navigation onNext={nextYear} onPrevious={previousYear}>
          {yearState}
        </Navigation>

        <DashFull></DashFull>
      </ContainerBody>
    </Loading>
  )
}
