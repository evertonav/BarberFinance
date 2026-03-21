import { useSearchParams } from 'react-router-dom'
import { RelTodayContainer } from '../features/relToday/RelTodayContainer'
import { useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../api/FirebaseConnection'

export function RelTodayPage() {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const user = searchParams.get('user')
    const password = searchParams.get('password')

    if (user && password) {
      signInWithEmailAndPassword(auth, user, password)
    }
  }, [searchParams.get('user'), searchParams.get('password')])

  return <RelTodayContainer />
}
