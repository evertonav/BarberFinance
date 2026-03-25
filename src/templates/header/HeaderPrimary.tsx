import ShowIcon from '../../components/showIcon/ShowIcon'
import type { ContainerTemplateProps } from '../types'
import styles from './HeaderPrimary.module.css'

interface HeaderPrimaryProps extends ContainerTemplateProps {
  onLogout: () => void
}

/*
  Falta desfragmentar o children para outros componentes
*/

export function HeaderPrimary({
  onLogout,
  className,
  children,
  ...rest
}: HeaderPrimaryProps) {
  return (
    <header className={`${styles.topBar} ${className}`} {...rest}>
      <div className={styles.left}>
        <ShowIcon nameIcon="content_cut" className={styles.icon} />
        <span className={styles.title}>Barber Finance</span>
      </div>
      <button onClick={onLogout} className={styles.exitBtn} title="Sair">
        <ShowIcon nameIcon="logout" />
      </button>
      {children}
    </header>
  )
}
