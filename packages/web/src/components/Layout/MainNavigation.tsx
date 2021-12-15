import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line import/no-absolute-path
import logo from '/logo.png'

export const MainNavigation = function (): ReactElement {
  return (
    <header className="border-b-[5px] border-red-800">
      <div className="container mx-auto py-4 flex justify-between">
        <a href="#">
          <img src={logo} alt="logo eletromoveis martinello" className="" />
        </a>
        <nav className="flex justify-between w-1/5 self-end">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">Todo</NavLink>
        </nav>
      </div>
    </header>
  )
}
