import { ButtonCommom } from '../../../components/button/ButtonCommom'
import { LabelTitle } from '../../../components/labels/labelTitle/LabelTitle'
import { ContainerRounded } from '../../../templates/containerRounded/ContainerRounded'
import style from './CadExpense.module.css'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputNumber } from '../../../components/input/InputNumber'
import { DateWithController } from '../../../components/date/DateWithController'
import { HeaderSecondary } from '../../../templates/header/HeaderSecondary'
import {
  schemaCadDespesa,
  type FormDataCadDespesa,
} from './schemas/SchemasValidationCadDespesa'
import { FormCommom } from '../../../components/form/FormCommom'
import { FooterRegister } from '../../../templates/footer/FooterRegister'
import type { Expense } from '../types'
import InputCommonMUI from '../../../components/input/InputCommonMUI'

interface CadExpenseProps {
  // despesa?: Partial<Despesa>
  onSuccess?: (expense: Expense) => void
  onCancel?: () => void
}

export function CadDespesa({ onSuccess, onCancel }: CadExpenseProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDataCadDespesa>({
    resolver: zodResolver(schemaCadDespesa),
    mode: 'onChange',
    defaultValues: {
      description: '',
      value: '',
      dateReferencia: new Date(),
    },
  })

  return (
    <ContainerRounded className={style.container}>
      <HeaderSecondary className={style.headerColor}>
        <LabelTitle fontSize="20" color="Commom">
          Adicionar despesa
        </LabelTitle>
      </HeaderSecondary>

      <FormCommom
        onSubmit={handleSubmit((data: FormDataCadDespesa) => {
          onSuccess?.({
            dateReference: data.dateReferencia,
            description: data.description,
            value: Number(data.value),
          })
        })}
      >
        <InputCommonMUI
          title="Descrição "
          register={register('description')}
          error={!!errors.description}
          helperText={errors.description?.message}
        />

        <InputNumber
          title="Valor (R$) "
          register={register('value')}
          error={!!errors.value}
          helperText={errors.value?.message}
        />

        <DateWithController
          name="dateReferencia"
          control={control}
          label="Data referência"
        />

        <FooterRegister>
          <ButtonCommom
            styleFormat="Rounded"
            width="TamanhoTotal"
            optionButton="Cancel"
            onClick={() => onCancel && onCancel()}
          >
            Cancelar
          </ButtonCommom>

          <ButtonCommom
            styleFormat="Rounded"
            width="TamanhoTotal"
            optionButton="Success"
            type="submit"
          >
            Gravar
          </ButtonCommom>
        </FooterRegister>
      </FormCommom>
    </ContainerRounded>
  )
}
