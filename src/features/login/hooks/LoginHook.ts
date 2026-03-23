import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { Login } from '../../../api/repositories/userAuthentication/login'
import type { LoginRequest } from '../../../api/repositories/userAuthentication/types'

export function useLogin() {
  const loginMutation = useMutation({
    mutationFn: async (data: LoginRequest) => {
      return await Login(data)
    },
    onSuccess: () => {
      toast.success('Login efetuado com sucesso!')
    },
    onError: (error: { code: string }) => {
      if (error.code.includes('auth/invalid-credential')) {
        toast.error('Credenciais inválidas, verifique seu email e senha.')
        return error
      }

      toast.error('Não foi possível fazer a authenticação. Detalhe: ' + error)
      console.log('Erro: ', error)
      return error
    },
  })

  async function login(email: string, password: string) {
    return await loginMutation.mutateAsync({
      user: email,
      password: password,
    })
  }

  const { mutate, mutateAsync, ...rest } = loginMutation

  return {
    login,
    returnExecution: rest,
  }
}
