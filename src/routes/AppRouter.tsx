import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RelTodayPage } from '../pages/RelTodayPage'
import PageOwnerWithHeader from '../pages/pageOwner/PageOwnerWithHeader'
import { Private } from './Private'
import LoginContainer from '../features/login/LoginContainer'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageOwnerWithHeader />}>
          <Route
            index
            element={
              <Private>
                <RelTodayPage />
              </Private>
            }
          />
        </Route>
      </Routes>

      <Routes>
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  )
}
