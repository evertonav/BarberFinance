import { DatePicker } from '@mui/x-date-pickers'
import { ButtonCommom } from '../../../../components/button/ButtonCommom'
import InputCommonMUI from '../../../../components/input/InputCommonMUI'
import { LabelTitle } from '../../../../components/labels/labelTitle/LabelTitle'
import { ContainerRounded } from '../../../../templates/containerRounded/ContainerRounded'
import { Header } from '../../../../templates/header/Header'
import style from './CadCorte.module.css'
import dayjs from 'dayjs'
import type { Corte } from '../../types'
import { useState } from 'react'

interface CadCorteProps {
  onSuccess?: (value: Corte) => void
  onCancel?: () => void
}

export function CadCorte({ onSuccess, onCancel }: CadCorteProps) {
  const [corte, setCorte] = useState<Corte>({ price: 30, quantity: 0 })

  return (
    <ContainerRounded className={style.container}>
      <Header className={style.headerColor}>
        <LabelTitle fontSize="20" color="Commom">
          Adicionar corte
        </LabelTitle>
      </Header>

      <div className={style.body}>
        <InputCommonMUI
          title="Quantidade "
          value={corte.quantity}
          handlerOnChange={(event) =>
            setCorte({
              price: corte.price,
              quantity: Number(event.target.value),
            })
          }
        />

        <InputCommonMUI
          title="Valor (R$) "
          value={corte.price}
          handlerOnChange={(event) =>
            setCorte({
              price: Number(event.target.value),
              quantity: corte.quantity,
            })
          }
        />

        <DatePicker
          label="Date"
          value={dayjs(new Date().valueOf())}
          onChange={(newValue) => {}}
          sx={{
            '& .MuiInputLabel-root': {
              color: '#555 !important',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: '#555 !important',
            },
          }}
          slotProps={{
            textField: {
              InputProps: {
                sx: {
                  borderRadius: '8px',
                  fontSize: '14px',
                },
              },
              fullWidth: true,
            },
          }}
          format="DD/MM/YYYY"
        />

        <div className={style.containerButton}>
          <ButtonCommom
            styleFormat="Rounded"
            width="TamanhoTotal"
            type="Cancel"
            onClick={() => onCancel && onCancel()}
          >
            Cancelar
          </ButtonCommom>

          <ButtonCommom
            styleFormat="Rounded"
            width="TamanhoTotal"
            type="Success"
            onClick={() => onSuccess && onSuccess(corte)}
          >
            Gravar
          </ButtonCommom>
        </div>
      </div>
    </ContainerRounded>
  )
}
