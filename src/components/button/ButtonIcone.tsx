import type { ButtonHTMLAttributes } from 'react'
import style from './ButtonIcone.module.css'

export function ButtonIcone({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${style.buttonIcon} ${className}`} {...rest}>
      {children}
    </button>
  )
}
