import type { FormHTMLAttributes } from 'react'
import style from './FormCommom.module.css'

export function FormCommom({
  children,
  className,
  ...rest
}: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className={`${style.form} ${className}`} {...rest}>
      {children}
    </form>
  )
}
