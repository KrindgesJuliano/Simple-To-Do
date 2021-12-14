import React, { ReactElement } from 'react'

interface Props {}

export function SingIn({}: Props): ReactElement {
  return (
    <div className="container mx-auto h-[50rem] grid grid-cols-2">
      <div className="bg-red-200">
        <h1>Para continuar crie uma conta</h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-1/2 h-auto p-4 flex gap-3 flex-col">
          <label htmlFor="username">Nome</label>
          <input type="text" id="username" className="h-10" />
          <label htmlFor="username">email</label>
          <input type="email" name="" id="email" className="h-10" />
          <input type="button" value="Criar Conta" />
        </div>
      </div>
    </div>
  )
}
