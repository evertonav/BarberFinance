import type { HTMLAttributes } from 'react'
import type { IconsType } from './IconsEnum'

export interface ShowIconProps extends HTMLAttributes<HTMLSpanElement> {
  nameIcon: IconsType
}

export default function ShowIcon({
  nameIcon,
  className = '',
  ...rest
}: ShowIconProps) {
  return (
    <span className={`material-symbols-outlined ${className}`} {...rest}>
      {nameIcon}
    </span>
  )
}
