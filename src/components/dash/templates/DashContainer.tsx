import { ContainerRounded } from '../../../templates/containerRounded/ContainerRounded'
import {
  HeaderSecondary,
  type HeaderSecondaryProps,
} from '../../../templates/header/HeaderSecondary'
import type { ContainerTemplateProps } from '../../../templates/types'
import style from './DashContainer.module.css'

interface DashContainerProps extends ContainerTemplateProps {
  header?: HeaderSecondaryProps
}

export function DashContainer({
  header,
  className,
  children,
  ...rest
}: DashContainerProps) {
  const {
    children: childrenHeader,
    className: classNameHeader,
    fontSize,
    ...restHeader
  } = header || {}

  return (
    <ContainerRounded className={`${style.container} ${className}`} {...rest}>
      <HeaderSecondary
        fontSize={fontSize ? fontSize : '14'}
        className={`${style.containerTitle} ${classNameHeader}`}
        {...restHeader}
      >
        {childrenHeader}
      </HeaderSecondary>

      {children}
    </ContainerRounded>
  )
}
