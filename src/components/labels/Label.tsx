import type { ReactNode } from 'react'
import style from './Label.module.css'

export interface LabelProps {
  children: ReactNode
  className?: string
  fontWeight?: '500' | '600' | '700'
  color?: 'Primary' | 'Secondary'
  fontSize?: '14'
}

export function Label({
  children,
  className,
  fontWeight = '500',
  color = 'Primary',
  fontSize,
}: LabelProps) {
  return (
    <div
      className={`${style[`fontWeight${fontWeight}`]} 
      ${style[`color${color}`]}  
      ${style[`fontSize${fontSize}`]}
      ${className}`}
    >
      {children}
    </div>
  )
}
