import { ContainerRounded } from '../../templates/containerRounded/ContainerRounded'
import {
  LabelTitle,
  type LabelTitleProps,
} from '../labels/labelTitle/LabelTitle'
import style from './CardTotalizador.module.css'

export interface CardTotalizadorProps {
  color?: 'Primary' | 'Secondary'
  title: LabelTitleProps
  value: LabelTitleProps
}

export function CardTotalizador({
  title,
  value,
  color = 'Primary',
}: CardTotalizadorProps) {
  return (
    <ContainerRounded
      className={`${style.containerTotalCard} ${style[`backGroundColor${color}`]}`}
    >
      <LabelTitle color="White" {...title}>
        {title.children}
      </LabelTitle>
      <LabelTitle fontSize="20" color="White" {...value}>
        {value.children}
      </LabelTitle>
    </ContainerRounded>
  )
}
