import type { LabelProps } from '../Label'
import style from './LabelTitle.module.css'

interface LabelTitleProps extends Omit<LabelProps, 'color' | 'fontWeight'> {
  color?: 'Commom' | 'Success'
  fontSize?: '17' | '20'
}

export function LabelTitle({
  children,
  className,
  color = 'Commom',
  fontSize = '17',
}: LabelTitleProps) {
  return (
    <div
      className={`${style.title} 
        ${style[`color${color}`]} 
        ${style[`fontSize${fontSize}`]} 
        ${className}`}
    >
      {children}
    </div>
  )
}
