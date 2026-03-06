import type { ContainerTemplateProps } from '../types'
import style from './ContainerRowWithSpaceBetween.module.css'

export function ContainerRowWithSpaceBetween({
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
