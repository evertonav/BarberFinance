import { Outlet } from 'react-router-dom'
import { HeaderPrimary } from '../../templates/header/HeaderPrimary'
import { auth } from '../../api/FirebaseConnection'
import { ContainerNavBottom } from '../../templates/containerNavBottom/ContainerNavBottom'
import ShowIcon from '../../components/showIcon/ShowIcon'
import { NavLinkCommom } from '../../components/navLink/NavLinkCommom'

export default function PageOwnerWithHeaderAndBottomNavigate() {
  return (
    <>
      <HeaderPrimary
        onLogout={() => {
          auth.signOut()
        }}
      />

      <Outlet />

      <ContainerNavBottom>
        <NavLinkCommom to="/report">
          <ShowIcon nameIcon="description" />
          <span>Relatório</span>
        </NavLinkCommom>

        <NavLinkCommom to="/dashboard">
          <ShowIcon nameIcon="analytics" />
          <span>Dashboard</span>
        </NavLinkCommom>
      </ContainerNavBottom>
    </>
  )
}
