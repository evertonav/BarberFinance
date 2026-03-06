import type { ReactNode } from 'react'
import style from './Label.module.css'

export interface LabelProps {
  children: ReactNode
  className?: string
  fontWeight?: '500' | '700'
  color?: 'Primary' | 'Secondary'
}

export function Label({
  children,
  className,
  fontWeight = '500',
  color = 'Primary',
}: LabelProps) {
  return (
    <div
      className={`${style[`fontWeight${fontWeight}`]} 
      ${style[`color${color}`]}
      ${className}`}
    >
      {children}
    </div>
  )
}
