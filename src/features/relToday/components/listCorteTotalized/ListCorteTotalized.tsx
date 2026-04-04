import { ContainerRounded } from '../../../../templates/containerRounded/ContainerRounded'
import { ContainerRowWithSpaceBetween } from '../../../../templates/ContainerRowWithSpaceBetween/ContainerRowWithSpaceBetween'

import style from './ListCorteTotalized.module.css'

import { LabelTitle } from '../../../../components/labels/labelTitle/LabelTitle'
import { ContainerLine } from '../../../../templates/ContainerLine/ContainerLine'
import { Label } from '../../../../components/labels/Label'
import type { ListCorteWithTotalized } from './types'
import ShowIcon from '../../../../components/showIcon/ShowIcon'
import type { Corte } from '../../types'

interface ListCorteTotalizedProps {
  listCortes: ListCorteWithTotalized
  onDelete?: (corte: Corte) => void
}

export function ListCorteTotalized({
  listCortes,
  onDelete,
}: ListCorteTotalizedProps) {
  return (
    <ContainerRounded className={style.containerList}>
      {listCortes.cortes.map((corte, index) => {
        return (
          <div className={style.itemList} key={index}>
            <ContainerRowWithSpaceBetween>
              <Label color="Secondary" fontWeight="500">
                {corte.quantity} corte(s) x R$ {corte.price.toFixed(2)}
              </Label>

              <div className={style.containerValueItemAndDelete}>
                <Label fontWeight="700">R$ {corte.total.toFixed(2)}</Label>

                <ShowIcon
                  onClick={() => {
                    onDelete && onDelete(corte)
                  }}
                  className={style.iconDelete}
                  nameIcon="delete"
                />
              </div>
            </ContainerRowWithSpaceBetween>

            <ContainerLine />
          </div>
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
