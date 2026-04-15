import type { LabelProps } from '../Label'
import style from './LabelTitle.module.css'

export interface LabelTitleProps extends Omit<
  LabelProps,
  'color' | 'fontSize'
> {
  color?: 'Commom' | 'Success' | 'White' | 'Warning' | 'Error'
  fontSize?: '14' | '17' | '19' | '20'
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
