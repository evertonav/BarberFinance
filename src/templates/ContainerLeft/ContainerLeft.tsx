import type { ContainerTemplateProps } from '../types'
import style from './ContainerLeft.module.css'

export function ContainerLeft({
  children,
  className,
  ...rest
}: ContainerTemplateProps) {
  return (
    <div className={`${style.left} ${className}`} {...rest}>
      {children}
    </div>
  )
}
