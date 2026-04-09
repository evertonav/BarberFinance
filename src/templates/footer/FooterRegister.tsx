import type { ContainerTemplateProps } from '../types'
import style from './FooterRegister.module.css'

export function FooterRegister({
  className,
  children,
  ...rest
}: ContainerTemplateProps) {
  return (
    <div className={`${style.footerRegister} ${className}`} {...rest}>
      {children}
    </div>
  )
}
