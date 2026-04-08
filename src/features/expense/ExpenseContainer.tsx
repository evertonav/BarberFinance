import { ButtonCommom } from '../../components/button/ButtonCommom'
import { Label } from '../../components/labels/Label'
import { LabelTitle } from '../../components/labels/labelTitle/LabelTitle'
import { Loading } from '../../components/loading/loading'
import { Navigation } from '../../components/navigation/Navigation'
import ShowIcon from '../../components/showIcon/ShowIcon'
import { ContainerBody } from '../../templates/ContainerBody/ContainerBody'
import { ContainerRounded } from '../../templates/containerRounded/ContainerRounded'
import { Footer } from '../../templates/footer/Footer'
import { HeaderSecondary } from '../../templates/header/HeaderSecondary'
import { formatDate } from '../../utils/Format/FormatDate'
import { formatCurrency } from '../../utils/Format/FormatNumeric'
import { ExpenseItem } from './components/ExpenseItem'
import style from './ExpenseContainer.module.css'

export function ExpenseContainer() {
  return (
    <Loading isLoading={false}>
      <HeaderSecondary>Despesas</HeaderSecondary>

      <ContainerBody>
        <Navigation onNext={() => {}} onPrevious={() => {}}>
          {formatDate(new Date())}
        </Navigation>

        <ContainerRounded className={style.containerTotalCard}>
          <LabelTitle color="White">Total de gastos</LabelTitle>
          <LabelTitle
            fontSize="20"
            color="White"
            className={style.totalExpense}
          >
            {formatCurrency(5000)}
          </LabelTitle>
        </ContainerRounded>

        <div className={style.containerSubTitle}>
          <LabelTitle fontSize={'17'}>Detalhamento</LabelTitle>

          <Label
            color={'Secondary'}
            fontWeight="500"
            className={style.labelCountItens}
          >
            3 itens
          </Label>
        </div>

        <div className={style.containerItemExpense}>
          <ExpenseItem
            value={100}
            description="Aluguel"
            date={new Date()}
            icon={{ nameIcon: 'payments' }}
          />

          <ExpenseItem
            value={100}
            description="Aluguel"
            date={new Date()}
            icon={{ nameIcon: 'payments' }}
          />
        </div>
      </ContainerBody>

      <Footer>
        <ButtonCommom
          //onClick={() => modalAddCorte.current?.open()}
          optionButton="Success"
          width="TamanhoMinimo"
          styleFormat="Circle"
        >
          <ShowIcon
            nameIcon="add"
            onClick={() => {
              //modalAddCorte.current?.open()
            }}
          />
        </ButtonCommom>
      </Footer>
    </Loading>
  )
}
