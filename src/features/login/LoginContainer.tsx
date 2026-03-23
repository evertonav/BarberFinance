import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './LoginContainer.module.css'
import ShowIcon from '../../components/showIcon/ShowIcon'
import InputCommonMUI from '../../components/input/InputCommonMUI'
import { useLogin } from './hooks/LoginHook'
import { CircleDesign } from './components/CircleDesign'

/*
  Deixei a tela apenas funcional mas tem que organizar o código.
  Remover css desnecessário.
*/

const LoginContainer = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    login(email, password).then(() => {
      navigate('/')
    })
  }

  return (
    <div className={styles.wrapper}>
      <CircleDesign type="circleTop" />

      <CircleDesign type="circleBottom" />

      <div className={styles.card}>
        <div className={styles.logoBox}>
          <ShowIcon nameIcon="content_cut" className={styles.iconScissor} />
        </div>

        <span className={styles.brandName}>Barber Finance</span>

        <form className={styles.form} onSubmit={handleSubmit}>
          <InputCommonMUI
            title="E-mail"
            type="text"
            placeholder="nome@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <InputCommonMUI
            title="Senha"
            type={'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <button type="submit" className={styles.submitBtn}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginContainer
