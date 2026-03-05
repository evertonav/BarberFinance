import type { HTMLAttributes } from 'react'
import style from './ContainerRounded.module.css'

interface ContainerRoundedProps extends HTMLAttributes<HTMLDivElement> {}

export function ContainerRounded({
  children,
  className,
  ...rest
}: ContainerRoundedProps) {
  return (
    <div className={`${style.container} ${className}`} {...rest}>
      {children}
    </div>
  )
}
