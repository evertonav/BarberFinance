import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RelTodayPage } from '../pages/RelTodayPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RelTodayPage />} />
      </Routes>
    </BrowserRouter>
  )
}
