import { ContainerRounded } from '../../../../templates/containerRounded/ContainerRounded'
import { ContainerRowWithSpaceBetween } from '../../../../templates/ContainerRowWithSpaceBetween/ContainerRowWithSpaceBetween'

import style from './ListCorteTotalized.module.css'

import { LabelTitle } from '../../../../components/labels/labelTitle/LabelTitle'
import { ContainerLine } from '../../../../templates/ContainerLine/ContainerLine'
import { Label } from '../../../../components/labels/Label'

export function ListCorteTotalized() {
  return (
    <ContainerRounded className={style.containerList}>
      <ContainerRowWithSpaceBetween>
        <Label color="Secondary" fontWeight="500">
          3 cortes x R$ 30
        </Label>
        <Label fontWeight="700">R$ 90</Label>
      </ContainerRowWithSpaceBetween>

      <ContainerLine />

      <ContainerRowWithSpaceBetween>
        <LabelTitle>Total do dia</LabelTitle>
        <LabelTitle color="Success">R$ 390,00</LabelTitle>
      </ContainerRowWithSpaceBetween>
    </ContainerRounded>
  )
}
