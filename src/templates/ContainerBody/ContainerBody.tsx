import type { ContainerTemplateProps } from '../types'
import style from './ContainerBody.module.css'

export function ContainerBody({
  children,
  className,
  ...rest
}: ContainerTemplateProps) {
  return (
    <div className={`${style.body} ${className}`} {...rest}>
      {children}
    </div>
  )
}
