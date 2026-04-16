import { Navigation } from '../../../components/navigation/Navigation'
import { ContainerRounded } from '../../../templates/containerRounded/ContainerRounded'
import { formatCurrency } from '../../../utils/Format/FormatNumeric'
import { Card } from '../components/Card'
import style from './DashResultadoLiquido.module.css'
import { useDashResultadoLiquido } from './DashResultadoLiquidoHook'
import { useNavigationMonthAndYear } from '../../../components/navigation/hooks/NavigationMonthAndYearHook'

export function DashResultadoLiquido() {
  const {
    dateAndMonthView,
    dateInitial,
    dateFinish,
    nextMotnthAndYear,
    previousMonthAndYear,
  } = useNavigationMonthAndYear()

  const { isLoading, totalRevenue, totalExpense, lucroPrejuizo, isLucro } =
    useDashResultadoLiquido(dateInitial, dateFinish)

  return (
    <ContainerRounded
      isLoading={isLoading}
      className={style.containerFaturamento}
    >
      <Navigation onNext={nextMotnthAndYear} onPrevious={previousMonthAndYear}>
        {dateAndMonthView}
      </Navigation>

      <Card
        labelDescription={{ children: 'Recebimentos' }}
        labelTitle={{ children: formatCurrency(totalRevenue) }}
      />

      <Card
        labelDescription={{ children: 'Despesas' }}
        labelTitle={{
          children: formatCurrency(totalExpense),
          color: 'Warning',
        }}
      />

      <Card
        labelDescription={{ children: isLucro ? 'Lucro' : 'Prejuízo' }}
        labelTitle={{
          children: formatCurrency(lucroPrejuizo),
          color: isLucro ? 'Success' : 'Error',
        }}
      />
    </ContainerRounded>
  )
}
