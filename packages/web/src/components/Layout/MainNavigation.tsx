/* eslint-disable multiline-ternary */
import { ReactElement } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider/useAuth'

// eslint-disable-next-line import/no-absolute-path
import logo from '/logo.png'

export const MainNavigation = function (): ReactElement {
  const navigate = useNavigate()
  const auth = useAuth()

  function handleLogout() {
    auth.logout()
    navigate('../', { replace: true })
  }

  return (
    <header className="border-b-[5px] border-red-800">
      <div className="container mx-auto py-4 flex justify-between">
        <NavLink to="/">
          <img
            src={logo}
            alt="logo eletromoveis martinello"
            className="w-24 sm:w-52"
          />
        </NavLink>
        <nav className="flex justify-between gap-3 self-end mr-2">
          {auth.email ? (
            <>
              <NavLink to="/todo">Todo</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
