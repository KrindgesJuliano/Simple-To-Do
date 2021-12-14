import React, { ReactElement } from 'react'

interface Props {}

export function SingIn({}: Props): ReactElement {
  return (
    <div className="container mx-auto flex h-[50rem] justify-center items-center">
      <div className="flex flex-col w-[34rem] h-60 p-4 border-[1px] border-gray-400 rounded">
        <p>Crie seu login</p>
        <label htmlFor="username">Nome</label>
        <input type="text" id="username" />
        <label htmlFor="username">email</label>
        <input type="email" name="" id="email" />
      </div>
    </div>
  )
}
