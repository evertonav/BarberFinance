import type { LabelProps } from '../Label'
import style from './LabelTitle.module.css'

interface LabelTitleProps extends Omit<LabelProps, 'color' | 'fontWeight'> {
  color?: 'Commom' | 'Success'
}

export function LabelTitle({
  children,
  className,
  color = 'Commom',
}: LabelTitleProps) {
  return (
    <div className={`${style.title} ${style[`color${color}`]} ${className}`}>
      {children}
    </div>
  )
}
