import { ReactElement } from 'react'

import logo from '/logo.png'

interface Props {}

export function Header({}: Props): ReactElement {
  return (
    <header className="border-b-[5px] border-red-800">
      <div className="container mx-auto py-4 flex justify-between">
        <a href="#">
          <img src={logo} alt="logo eletromoveis martinello" className="" />
        </a>
        <nav className="flex justify-between w-1/5 self-end">
          <a href="#">Home</a>
          <a href="#">Todo</a>
        </nav>
      </div>
    </header>
  )
}
