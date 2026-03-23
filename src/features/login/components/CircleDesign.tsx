import style from './CircleDesign.module.css'

interface CircleDesignProps {
  type: 'circleTop' | 'circleBottom'
}

export function CircleDesign({ type }: CircleDesignProps) {
  return <div className={`${style.circle} ${style[type]}`} />
}
