import ShowIcon from '../../components/showIcon/ShowIcon'
import styles from './HeaderPrimary.module.css'

interface HeaderPrimaryProps {
  onLogout: () => void
}

/*
  Ajustar esse componente
*/

export function HeaderPrimary({ onLogout }: HeaderPrimaryProps) {
  return (
    <header className={styles.topBar}>
      <div className={styles.left}>
        <ShowIcon nameIcon="content_cut" className={styles.icon} />
        <span className={styles.title}>Barber Finance</span>
      </div>
      <button onClick={onLogout} className={styles.exitBtn} title="Sair">
        <ShowIcon nameIcon="logout" />
      </button>
    </header>
  )
}
