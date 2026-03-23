import ShowIcon from '../../../../components/showIcon/ShowIcon'
import style from './Logo.module.css'

export function Logo() {
  return (
    <div className={style.logoBox}>
      <ShowIcon nameIcon="content_cut" className={style.iconScissor} />
    </div>
  )
}
