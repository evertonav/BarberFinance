import styles from './BottomNav.module.css'
import ShowIcon from './showIcon/ShowIcon'

interface BottomNavProps {
  active: 'report' | 'dashboard'
  onNavigate: (tab: 'report' | 'dashboard') => void
}

const BottomNav = ({ active, onNavigate }: BottomNavProps) => {
  return (
    <nav className={styles.nav}>
      <button
        className={`${styles.navItem} ${active === 'report' ? styles.navItemActive : ''}`}
        onClick={() => onNavigate('report')}
      >
        <ShowIcon nameIcon="description" />
        <span>Relatório</span>
      </button>
      <button
        className={`${styles.navItem} ${active === 'dashboard' ? styles.navItemActive : ''}`}
        onClick={() => onNavigate('dashboard')}
      >
        <ShowIcon nameIcon="analytics" />
        <span>Dashboard</span>
      </button>
    </nav>
  )
}

export default BottomNav
