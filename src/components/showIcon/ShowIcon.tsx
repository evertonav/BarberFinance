import type { HTMLAttributes } from 'react'
import type { IconsType } from './IconsEnum'
import style from './ShowIcon.module.css'

export interface ShowIconProps extends HTMLAttributes<HTMLSpanElement> {
  nameIcon: IconsType
  size?: '22px'
  color?: 'Success'
}

export default function ShowIcon({
  nameIcon,
  className = '',
  size,
  color,
  ...rest
}: ShowIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className} ${style['color' + color]} ${style['iconSize' + size]}`}
      {...rest}
    >
      {nameIcon}
    </span>
  )
}
