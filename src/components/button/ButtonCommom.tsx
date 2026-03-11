import type { HTMLAttributes } from 'react'
import style from './ButtonCommom.module.css'

interface ButtonCommomProps extends HTMLAttributes<HTMLButtonElement> {
  width?: 'TamanhoTotal' | 'TamanhoMinimo'
  type?: 'Success' | 'Cancel'
  styleFormat?: 'Circle' | 'Rounded'
}

export function ButtonCommom({
  children,
  className,
  width = 'TamanhoMinimo',
  type = 'Success',
  styleFormat = 'Circle',
  ...rest
}: ButtonCommomProps) {
  return (
    <button
      className={`${style.roundedButton} 
      ${style[`button${width}`]}
      ${style[`format${styleFormat}`]}
      ${style[`button${type}`]}
      ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
