import { NavLink, type NavLinkProps } from 'react-router-dom'
import style from './NavLinkCommom.module.css'

export function NavLinkCommom({
  children,
  to,
  className,
  ...rest
}: NavLinkProps) {
  return (
    <NavLink
      to={to}
      className={
        className
          ? className
          : ({ isActive }) =>
              `${style.navItem} ${isActive ? style.navItemActive : ''}`
      }
      {...rest}
    >
      {children}
    </NavLink>
  )
}
