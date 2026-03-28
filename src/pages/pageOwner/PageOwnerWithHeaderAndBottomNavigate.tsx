import { Outlet } from 'react-router-dom'
import { HeaderPrimary } from '../../templates/header/HeaderPrimary'
import { auth } from '../../api/FirebaseConnection'
import { ContainerNavBottom } from '../../templates/containerNavBottom/ContainerNavBottom'
import ShowIcon from '../../components/showIcon/ShowIcon'
import { NavLinkCommom } from '../../components/navLink/NavLinkCommom'
import { ContainerLeft } from '../../templates/ContainerLeft/ContainerLeft'
import { LabelTitle } from '../../components/labels/labelTitle/LabelTitle'
import { ButtonIcone } from '../../components/button/ButtonIcone'
import style from './PageOwnerWithHeaderAndBottomNavigate.module.css'

export default function PageOwnerWithHeaderAndBottomNavigate() {
  return (
    <>
      <HeaderPrimary>
        <ContainerLeft>
          <ShowIcon nameIcon="content_cut" size="22px" color="Success" />

          <LabelTitle fontSize="19" color="Success">
            Barber Finance
          </LabelTitle>
        </ContainerLeft>

        <ButtonIcone onClick={() => auth.signOut()} title="Sair">
          <ShowIcon nameIcon="logout" />
        </ButtonIcone>
      </HeaderPrimary>

      <div className={style.container}>
        <Outlet />
      </div>

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
