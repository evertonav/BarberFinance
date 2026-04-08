import style from './IconWrapper.module.css'
import type { ContainerTemplateProps } from '../../templates/types'

export function IconWrapper({
  className,
  children,
  ...rest
}: ContainerTemplateProps) {
  return (
    <div className={` ${style.iconWrapper} ${className}`} {...rest}>
      {children}
    </div>
  )
}
