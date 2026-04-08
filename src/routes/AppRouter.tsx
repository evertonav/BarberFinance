import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RelTodayPage } from '../pages/RelTodayPage'
import { Private } from './Private'
import { LoginContainer } from '../features/login/LoginContainer'
import PageOwnerWithHeaderAndBottomNavigate from '../pages/pageOwner/PageOwnerWithHeaderAndBottomNavigate'
import { DashboardPage } from '../pages/DashboardPage'
import { ExpensePage } from '../pages/ExpensePage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageOwnerWithHeaderAndBottomNavigate />}>
          <Route index element={<Navigate to="/report" replace />} />

          <Route
            path="/report"
            element={
              <Private>
                <RelTodayPage />
              </Private>
            }
          />

          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/expense" element={<ExpensePage />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  )
}
