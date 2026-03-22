import { Navigate } from 'react-router-dom'
import { auth } from '../api/FirebaseConnection'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

interface PrivateProps {
  children: React.ReactNode
}

export function Private({ children }: PrivateProps) {
  const [signed, setSigned] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setSigned(!!user)
    })

    return () => {
      unsub()
    }
  }, [])

  if (!signed) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}
