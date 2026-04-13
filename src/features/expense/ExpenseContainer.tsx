import { useRef } from 'react'
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
import { formatCurrency } from '../../utils/Format/FormatNumeric'
import { ExpenseItem } from './components/ExpenseItem'
import style from './ExpenseContainer.module.css'
import {
  ContainerModalFullScreen,
  type ContainerModalElement,
} from '../../templates/ContainerModal/ContainerModalFullScreen'
import { CadDespesa } from './cadExpense/CadExpense'
import { useExpenseContainer } from './ExpenseContainerHook'
import type { Expense } from './types'
import { GetUserLogado } from '../../utils/GetUser'

export function ExpenseContainer() {
  const modalAddExpense = useRef<ContainerModalElement>(null)
  const {
    addExpense,
    deleteByIdExpense,
    atualizarListExpense,
    listExpenseFront,
    isLoading,
    dateAndMonthView,
    nextMotnthAndYear,
    previousMonthAndYear,
  } = useExpenseContainer()

  function UpdateGetExpensesAndCloseModal() {
    modalAddExpense.current?.close()
    atualizarListExpense()
  }

  return (
    <Loading isLoading={isLoading}>
      <HeaderSecondary>Despesas</HeaderSecondary>

      <ContainerBody>
        <Navigation
          onNext={nextMotnthAndYear}
          onPrevious={previousMonthAndYear}
        >
          {dateAndMonthView}
        </Navigation>

        <ContainerRounded className={style.containerTotalCard}>
          <LabelTitle color="White">Total de gastos</LabelTitle>
          <LabelTitle
            fontSize="20"
            color="White"
            className={style.totalExpense}
          >
            {formatCurrency(
              listExpenseFront.reduce((acc, item) => acc + item.value, 0),
            )}
          </LabelTitle>
        </ContainerRounded>

        {listExpenseFront.length > 0 && (
          <>
            <div className={style.containerSubTitle}>
              <LabelTitle fontSize={'17'}>Detalhamento</LabelTitle>

              <Label
                color={'Secondary'}
                fontWeight="500"
                className={style.labelCountItens}
              >
                {listExpenseFront.length} itens
              </Label>
            </div>

            <div className={style.containerItemExpense}>
              {listExpenseFront.map((item) => (
                <ExpenseItem
                  key={item.id}
                  expense={item}
                  icon={{ nameIcon: 'payments' }}
                  onDelete={(id: string) => {
                    deleteByIdExpense(id).then(() => {
                      UpdateGetExpensesAndCloseModal()
                    })
                  }}
                />
              ))}
            </div>
          </>
        )}
      </ContainerBody>

      <Footer>
        <ButtonCommom
          onClick={() => modalAddExpense.current?.open()}
          optionButton="Success"
          width="TamanhoMinimo"
          styleFormat="Circle"
        >
          <ShowIcon
            nameIcon="add"
            onClick={() => {
              modalAddExpense.current?.open()
            }}
          />
        </ButtonCommom>

        <ContainerModalFullScreen ref={modalAddExpense}>
          <CadDespesa
            onCancel={() => {
              modalAddExpense.current?.close()
            }}
            onSuccess={(expense: Expense) => {
              addExpense(expense, GetUserLogado()).then(() => {
                UpdateGetExpensesAndCloseModal()
              })
            }}
          />
        </ContainerModalFullScreen>
      </Footer>
    </Loading>
  )
}
