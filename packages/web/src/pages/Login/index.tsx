import { FormEvent, ReactElement, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider/useAuth'

// eslint-disable-next-line import/no-absolute-path
import martinelloImg from '/martinello.jpg'

export function Login(): ReactElement {
  const navigate = useNavigate()
  // const location = useLocation()
  const auth = useAuth()
  const [name, setUsername] = useState('')
  const [email, setEmail] = useState('')

  // const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if (auth.email) {
      navigate('../todo', { replace: true })
    }
  }, [])

  async function onSubmitForm(event: FormEvent) {
    event.preventDefault()

    try {
      await auth.authenticate(email, name)
      navigate('../todo', { replace: true })
    } catch (error) {
      console.log('Invalid email or username')
    }
  }
  return (
    <div className="mx-auto h-[85vh] flex justify-center sm:grid grid-cols-2">
      <div className="bg-red-200 h-full hidden sm:block">
        <img
          src={martinelloImg}
          alt="imagem aerea da matriz"
          className="object-cover h-full"
        />
      </div>
      <div className="flex justify-center items-center flex-col">
        <form
          onSubmit={onSubmitForm}
          className="h-auto p-4 grid grid-rows-3 gap-4 sm:w-[80%] lg:w-[50%]"
        >
          <div className="w-full">
            <label htmlFor="username" className="font-bold">
              Nome
            </label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              value={name}
              onChange={event => setUsername(event.target.value)}
              className="h-10 w-full border-[1px] rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-bold">
              E-mail
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              className="h-10 w-full border-[1px] rounded"
            />
          </div>
          <div>
            <button
              type="submit"
              className="h-10 w-full bg-secondary font-bold text-white rounded"
            >
              Entrar
            </button>
          </div>
        </form>
        <p>ou</p>
        <NavLink to="/signup" className="text-lg font-semibold">
          Criar Conta
        </NavLink>
      </div>
    </div>
  )
}
