import type { HTMLAttributes } from 'react'
import style from './RoundedButton.module.css'

export function RoundedButton({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${style.roundedButton} ${className}`} {...rest}>
      {children}
    </button>
  )
}
