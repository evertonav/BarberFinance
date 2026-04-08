import type { ContainerTemplateProps } from '../types'
import style from './Footer.module.css'

export function Footer({
  className,
  children,
  ...rest
}: ContainerTemplateProps) {
  return (
    <div className={`${style.footer} ${className}`} {...rest}>
      {children}
    </div>
  )
}
