import { ContainerBody } from '../../templates/ContainerBody/ContainerBody'
import { HeaderSecondary } from '../../templates/header/HeaderSecondary'
import { DashResultadoLiquido } from './dashResultadoLiquido/DashResultadoLiquido'
import { DashRevenueForMonth } from './dashRevenueForMonth/DashRevenueForMonth'

export function DashboardContainer() {
  return (
    <>
      <HeaderSecondary>DashBoard</HeaderSecondary>

      <ContainerBody>
        <DashResultadoLiquido />

        <DashRevenueForMonth />
      </ContainerBody>
    </>
  )
}
