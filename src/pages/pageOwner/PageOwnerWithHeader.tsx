import { Outlet } from 'react-router-dom'
import { HeaderPrimary } from '../../templates/header/HeaderPrimary'
import { auth } from '../../api/FirebaseConnection'

export default function PageOwnerWithHeader() {
  return (
    <>
      <HeaderPrimary
        onLogout={() => {
          auth.signOut()
        }}
      />

      <Outlet />
    </>
  )
}
