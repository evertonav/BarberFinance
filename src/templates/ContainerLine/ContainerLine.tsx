import type { ContainerTemplateProps } from '../types'
import style from './ContainerLine.module.css'

export function ContainerLine({
  className,
}: Pick<ContainerTemplateProps, 'className'>) {
  return <div className={`${style.container} ${className}`} />
}
