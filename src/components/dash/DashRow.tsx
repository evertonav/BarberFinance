import type { Key } from 'react'

import { Label, type LabelProps } from '../labels/Label'
import style from './DashRow.module.css'

interface DashRowProps {
  key: Key
  className?: string
  labelTitle: LabelProps
  labelValue: LabelProps
  tamanhoBarra: number
}

export function DashRow({
  key,
  className,
  labelTitle,
  labelValue,
  tamanhoBarra,
}: DashRowProps) {
  if (tamanhoBarra < 1 || tamanhoBarra > 100) {
    throw new Error('tamanhoBarra deve estar entre 1 e 100')
  }

  return (
    <div key={key} className={`${style.barRow} ${className}`}>
      <Label
        color={labelTitle.color ? labelTitle.color : 'Secondary'}
        className={`${style.barLabel} ${labelTitle.className}`}
      >
        {labelTitle.children}
      </Label>

      <div className={style.barTrack}>
        <div className={style.barFill} style={{ width: `${tamanhoBarra}%` }} />
      </div>
      <Label
        fontWeight={labelValue.fontWeight ? labelValue.fontWeight : '600'}
        className={`${style.barValue} ${labelValue.className}`}
      >
        {labelValue.children}
      </Label>
    </div>
  )
}
