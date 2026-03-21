import { ButtonCommom } from '../../../../components/button/ButtonCommom'
import { LabelTitle } from '../../../../components/labels/labelTitle/LabelTitle'
import { ContainerRounded } from '../../../../templates/containerRounded/ContainerRounded'
import { Header } from '../../../../templates/header/Header'
import style from './CadCorte.module.css'
import type { Corte } from '../../types'
import { useForm } from 'react-hook-form'
import {
  schemaCadCorte,
  type FormDataCadCorte,
} from './schemas/SchemasValidationCadCorte'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputNumber } from '../../../../components/input/InputNumber'
import { DateWithController } from '../../../../components/date/DateWithController'

interface CadCorteProps {
  corte?: Partial<Corte>
  onSuccess?: (value: Corte) => void
  onCancel?: () => void
}

export function CadCorte({ onSuccess, onCancel, corte }: CadCorteProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDataCadCorte>({
    resolver: zodResolver(schemaCadCorte),
    mode: 'onChange',
    defaultValues: {
      quantity: corte?.quantity?.toString() ?? '1',
      value: corte?.price?.toString() ?? '30',
      date: corte?.date ?? new Date(),
    },
  })

  return (
    <ContainerRounded className={style.container}>
      <Header className={style.headerColor}>
        <LabelTitle fontSize="20" color="Commom">
          Adicionar corte
        </LabelTitle>
      </Header>

      <form
        className={style.body}
        onSubmit={handleSubmit((data: FormDataCadCorte) => {
          onSuccess?.({
            price: Number(data.value),
            quantity: Number(data.quantity),
            date: data.date,
          })
        })}
      >
        <InputNumber
          title="Quantidade "
          register={register('quantity')}
          error={!!errors.quantity}
          helperText={errors.quantity?.message}
        />

        <InputNumber
          title="Valor (R$) "
          register={register('value')}
          error={!!errors.value}
          helperText={errors.value?.message}
        />

        <DateWithController name="date" control={control} label="Date" />

        <div className={style.containerButton}>
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
        </div>
      </form>
    </ContainerRounded>
  )
}
