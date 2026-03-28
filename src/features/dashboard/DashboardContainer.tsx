import { DateNavigation } from '../../components/date/dateNavigation/DateNavigation'
import { Loading } from '../../components/loading/loading'
import { ContainerBody } from '../../templates/ContainerBody/ContainerBody'
import { ContainerRounded } from '../../templates/containerRounded/ContainerRounded'
import { HeaderSecondary } from '../../templates/header/HeaderSecondary'
import { formatCurrency } from '../../utils/Format/FormatNumeric'
import styles from './Dashboard.module.css'

export function DashboardContainer() {
  return (
    <Loading isLoading={false}>
      <HeaderSecondary>DashBoard</HeaderSecondary>

      <ContainerBody>
        <DateNavigation date={new Date()} format="Year" />

        <ContainerRounded className={styles.chartCard}>
          <div className={styles.chartTitle}>Recebimentos por mês</div>
          <div className={styles.barContainer}>
            {false ? (
              <p className={styles.emptyState}>Nenhum dado para este ano</p>
            ) : (
              <div key={'Jan'} className={styles.barRow}>
                <span className={styles.barLabel}>{'Jan'}</span>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${10 * 100}%` }}
                  />
                </div>
                <span className={styles.barValue}>{formatCurrency(1000)}</span>
              </div>
            )}
          </div>
        </ContainerRounded>
      </ContainerBody>
    </Loading>
  )
}
