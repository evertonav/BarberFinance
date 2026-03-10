import { ContainerRounded } from '../../../../templates/containerRounded/ContainerRounded'
import { ContainerRowWithSpaceBetween } from '../../../../templates/ContainerRowWithSpaceBetween/ContainerRowWithSpaceBetween'

import style from './ListCorteTotalized.module.css'

import { LabelTitle } from '../../../../components/labels/labelTitle/LabelTitle'
import { ContainerLine } from '../../../../templates/ContainerLine/ContainerLine'
import { Label } from '../../../../components/labels/Label'
import type { ListCorteWithTotalized } from './types'

interface ListCorteTotalizedProps {
  listCortes: ListCorteWithTotalized
}

export function ListCorteTotalized({ listCortes }: ListCorteTotalizedProps) {
  return (
    <ContainerRounded className={style.containerList}>
      {listCortes.cortes.map((corte, index) => {
        return (
          <>
            <ContainerRowWithSpaceBetween key={index}>
              <Label color="Secondary" fontWeight="500">
                {corte.quantity} corte(s) x R$ {corte.price.toFixed(2)}
              </Label>

              <Label fontWeight="700">
                R$ {(corte.price * corte.quantity).toFixed(2)}
              </Label>
            </ContainerRowWithSpaceBetween>

            <ContainerLine />
          </>
        )
      })}

      <ContainerRowWithSpaceBetween>
        <LabelTitle>Total do dia</LabelTitle>
        <LabelTitle color="Success">
          R$ {listCortes.totalized.toFixed(2)}
        </LabelTitle>
      </ContainerRowWithSpaceBetween>
    </ContainerRounded>
  )
}
