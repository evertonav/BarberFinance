import style from './ContainerRounded.module.css'
import type { ContainerTemplateProps } from '../types'
import { Loading } from '../../components/loading/loading'

interface ContainerRoundedProps extends ContainerTemplateProps {
  isLoading?: boolean
}

export function ContainerRounded({
  children,
  className,
  isLoading = false,
  ...rest
}: ContainerRoundedProps) {
  return (
    <div className={`${style.container} ${className}`} {...rest}>
      <Loading isLoading={isLoading}>{children}</Loading>
    </div>
  )
}
