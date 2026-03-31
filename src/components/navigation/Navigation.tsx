import type { ReactNode } from 'react'
import { ContainerRounded } from '../../templates/containerRounded/ContainerRounded'
import { ButtonIcone } from '../button/ButtonIcone'
import ShowIcon from '../showIcon/ShowIcon'
import style from './Navigation.module.css'

interface NavigationProps {
  onNext?: () => void
  onPrevious?: () => void
  children: ReactNode
}

export function Navigation({ onNext, onPrevious, children }: NavigationProps) {
  return (
    <ContainerRounded className={style.container}>
      <ButtonIcone
        onClick={() => {
          onPrevious && onPrevious()
        }}
      >
        <ShowIcon nameIcon="arrow_back_ios" size="22px" />
      </ButtonIcone>

      {children}

      <ButtonIcone onClick={() => onNext && onNext()}>
        <ShowIcon nameIcon="arrow_forward_ios" size="22px" />
      </ButtonIcone>
    </ContainerRounded>
  )
}
