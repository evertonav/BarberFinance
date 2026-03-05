import ShowIcon from '../../../components/showIcon/ShowIcon'
import { ContainerRounded } from '../../../templates/containerRounded/ContainerRounded'
import style from './DateToday.module.css'

export function DateToday() {
  return (
    <ContainerRounded className={style.container}>
      <ShowIcon nameIcon="arrow_back_ios" className={style.iconColor} />
      01/01/2026
      <ShowIcon nameIcon="arrow_forward_ios" className={style.iconColor} />
    </ContainerRounded>
  )
}
