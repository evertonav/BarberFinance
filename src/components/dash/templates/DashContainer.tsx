import { ContainerRounded } from '../../../templates/containerRounded/ContainerRounded'
import {
  HeaderSecondary,
  type HeaderSecondaryProps,
} from '../../../templates/header/HeaderSecondary'
import type { ContainerTemplateProps } from '../../../templates/types'
import { Loading } from '../../loading/loading'
import style from './DashContainer.module.css'

interface DashContainerProps extends ContainerTemplateProps {
  header?: HeaderSecondaryProps
  isLoading: boolean
}

export function DashContainer({
  header,
  className,
  children,
  isLoading = false,
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
      <Loading isLoading={isLoading}>
        <HeaderSecondary
          fontSize={fontSize ? fontSize : '14'}
          className={`${style.containerTitle} ${classNameHeader}`}
          {...restHeader}
        >
          {childrenHeader}
        </HeaderSecondary>

        {children}
      </Loading>
    </ContainerRounded>
  )
}
