import type { ContainerTemplateProps } from '../types'
import styles from './HeaderPrimary.module.css'

export function HeaderPrimary({
  className,
  children,
  ...rest
}: ContainerTemplateProps) {
  return (
    <header className={`${styles.topBar} ${className}`} {...rest}>
      {children}
    </header>
  )
}
