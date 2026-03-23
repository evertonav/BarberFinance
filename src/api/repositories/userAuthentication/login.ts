import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../FirebaseConnection'
import type { LoginRequest } from './types'

export function Login(request: LoginRequest) {
  return signInWithEmailAndPassword(auth, request.user, request.password)
}
