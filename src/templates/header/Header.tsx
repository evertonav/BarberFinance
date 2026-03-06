import style from './Header.module.css'
import type { ContainerTemplateProps } from '../types'

export function Header({
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
