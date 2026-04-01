import style from './HeaderSecondary.module.css'
import type { ContainerTemplateProps } from '../types'

export interface HeaderSecondaryProps extends ContainerTemplateProps {
  fontSize?: '18' | '16' | '14'
}

export function HeaderSecondary({
  children,
  className,
  fontSize = '18',
  ...rest
}: HeaderSecondaryProps) {
  return (
    <div
      className={`${style.container} ${style['fontSize' + fontSize]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
