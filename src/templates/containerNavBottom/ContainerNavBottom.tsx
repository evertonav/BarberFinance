import type { ContainerTemplateProps } from '../types'
import style from './ContainerNavBottom.module.css'

export function ContainerNavBottom({
  children,
  ...rest
}: ContainerTemplateProps) {
  return (
    <nav className={`${style.nav} ${rest.className}`} {...rest}>
      {children}
    </nav>
  )
}
