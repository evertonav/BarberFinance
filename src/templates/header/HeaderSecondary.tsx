import style from './HeaderSecondary.module.css'
import type { ContainerTemplateProps } from '../types'

export function HeaderSecondary({
  children,
  className,
  ...rest
}: ContainerTemplateProps) {
  return (
    <div className={`${style.container} ${className}`} {...rest}>
      {children}
    </div>
  )
}
