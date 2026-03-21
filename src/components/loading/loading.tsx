import style from './loading.module.css'

interface LoadingProps {
  children?: React.ReactNode
  isLoading: boolean
}

export function Loading({ isLoading, children }: LoadingProps) {
  return isLoading ? (
    <div className={style.loadingOverlay}>
      <div className={style.loadingContent}>
        <div className={style.spinner} />
        <p>Carregando...</p>
      </div>
    </div>
  ) : (
    <>{children}</>
  )
}
