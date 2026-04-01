import type { ContainerTemplateProps } from '../../../templates/types'
import style from './DashContainerRow.module.css'

export function DashContainerRow({
  children,
  className,
  ...rest
}: ContainerTemplateProps) {
  return (
    <div className={`${style.container} ${className}`} {...rest}>
      {children}
    </div>
  )
}
