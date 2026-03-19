import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RelTodayPage } from '../pages/RelTodayPage'
import { useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../api/FirebaseConnection'

export function AppRouter() {
  useEffect(() => {
    signInWithEmailAndPassword(auth, 'teste@hotmail.com', '123456')
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RelTodayPage />} />
      </Routes>
    </BrowserRouter>
  )
}
