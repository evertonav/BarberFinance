import { useNavigate } from 'react-router-dom'
import styles from './LoginContainer.module.css'
import InputCommonMUI from '../../components/input/InputCommonMUI'
import { useLogin } from './hooks/LoginHook'
import { CircleDesign } from './components/CircleDesign/CircleDesign'
import { Logo } from './components/Logo/Logo'
import { useForm } from 'react-hook-form'
import {
  schemaLogin,
  type FormDataLogin,
} from './schemas/SchemasValidationLogin'
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonCommom } from '../../components/button/ButtonCommom'

export function LoginContainer() {
  const navigate = useNavigate()
  const { login } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLogin>({
    resolver: zodResolver(schemaLogin),
    mode: 'onChange',
  })

  return (
    <div className={styles.wrapper}>
      <CircleDesign type="circleTop" />

      <CircleDesign type="circleBottom" />

      <div className={styles.card}>
        <Logo />

        <span className={styles.brandName}>Barber Finance</span>

        <form
          className={styles.form}
          onSubmit={handleSubmit((data: FormDataLogin) => {
            login(data.user, data.password).then(() => {
              navigate('/')
            })
          })}
        >
          <InputCommonMUI
            title="E-mail"
            type="text"
            placeholder="nome@exemplo.com"
            register={register('user')}
            error={!!errors.user}
            helperText={errors.user?.message}
            autoComplete="email"
          />

          <InputCommonMUI
            title="Senha"
            type={'password'}
            placeholder="••••••••"
            register={register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            autoComplete="current-password"
          />

          <ButtonCommom
            width="TamanhoTotal"
            optionButton="Success"
            type="submit"
            styleFormat="Rounded"
          >
            Entrar
          </ButtonCommom>
        </form>
      </div>
    </div>
  )
}
