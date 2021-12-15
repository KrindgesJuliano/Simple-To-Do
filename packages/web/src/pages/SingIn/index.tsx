import React, { ReactElement, useState } from 'react'

interface Props {}

function initialState() {
  return { user: '', email: '' }
}

export function SingIn({}: Props): ReactElement {
  const [values, setValues] = useState(initialState)
  const handleInputChange = (event: any) => {
    const { value, name } = event.target
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div className="container mx-auto h-[50rem] grid grid-cols-2">
      <div className="bg-red-200">
        <h1>Para continuar crie uma conta</h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-1/2 h-auto p-4 flex gap-3 flex-col">
          <label htmlFor="username">Nome</label>
          <input
            type="text"
            id="username"
            className="h-10"
            value={values.user}
            onChange={handleInputChange}
          />
          <label htmlFor="username">email</label>
          <input
            type="email"
            name=""
            id="email"
            className="h-10"
            value={values.email}
            onChange={handleInputChange}
          />
          <input type="button" value="Criar Conta" />
        </div>
      </div>
    </div>
  )
}
