import { Label, type LabelProps } from '../../../components/labels/Label'
import {
  LabelTitle,
  type LabelTitleProps,
} from '../../../components/labels/labelTitle/LabelTitle'
import { ContainerRounded } from '../../../templates/containerRounded/ContainerRounded'
import style from './Card.module.css'

interface CardProps {
  labelDescription: LabelProps
  labelTitle: LabelTitleProps
  children?: React.ReactNode
}

export function Card({ labelDescription, labelTitle, children }: CardProps) {
  return (
    <ContainerRounded className={style.card}>
      <Label
        fontSize="14"
        fontWeight="600"
        color="Secondary"
        {...labelDescription}
      >
        {labelDescription.children}
      </Label>
      <LabelTitle color="Success" fontSize="17" {...labelTitle}>
        {labelTitle.children}
      </LabelTitle>

      {children}
    </ContainerRounded>
  )
}
