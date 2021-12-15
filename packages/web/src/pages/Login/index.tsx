import { FormEvent, ReactElement, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider/useAuth'

export function Login(): ReactElement {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const from = location.state?.from?.pathname || '/'

  async function onSubmitForm(event: FormEvent) {
    event.preventDefault()

    try {
      await auth.authenticate(email, username)

      navigate(from, { replace: true })
    } catch (error) {
      console.log('Invalid email or username')
    }
  }
  return (
    <div className=" mx-auto h-[50rem] grid grid-cols-2">
      <div className="bg-red-200">
        <h1>Para continuar crie uma conta</h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-1/2 h-auto p-4 flex gap-3 flex-col">
          <form onSubmit={onSubmitForm}>
            <label htmlFor="username">Nome</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={event => setUsername(event.target.value)}
              className="h-10"
            />
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              className="h-10"
            />
            <button type="submit">Logar</button>
          </form>
          <p>ou</p>
          <NavLink to="/signup">Criar Conta</NavLink>
        </div>
      </div>
    </div>
  )
}
