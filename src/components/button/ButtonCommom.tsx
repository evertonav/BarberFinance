import type { ButtonHTMLAttributes } from 'react'
import style from './ButtonCommom.module.css'

interface ButtonCommomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: 'TamanhoTotal' | 'TamanhoMinimo'
  optionButton?: 'Success' | 'Cancel'
  styleFormat?: 'Circle' | 'Rounded'
}

export function ButtonCommom({
  children,
  className,
  width = 'TamanhoMinimo',
  optionButton = 'Success',
  styleFormat = 'Circle',
  ...rest
}: ButtonCommomProps) {
  return (
    <button
      className={`${style.roundedButton} 
      ${style[`button${width}`]}
      ${style[`format${styleFormat}`]}
      ${style[`button${optionButton}`]}
      ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
