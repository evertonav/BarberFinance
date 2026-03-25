import { Outlet } from 'react-router-dom'
import { HeaderPrimary } from '../../templates/header/HeaderPrimary'
import { auth } from '../../api/FirebaseConnection'
import BottomNav from '../../components/BottomNav'

export default function PageOwnerWithHeaderAndBottomNavigate() {
  return (
    <>
      <HeaderPrimary
        onLogout={() => {
          auth.signOut()
        }}
      />

      <Outlet />

      <BottomNav active="report" onNavigate={() => {}} />
    </>
  )
}
