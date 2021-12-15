import { FormEvent, ReactElement, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

// eslint-disable-next-line import/no-absolute-path
import martinelloImg from '/martinello.jpg'

interface IResponse {
  status: number
  message?: string
}
export function SingUp(): ReactElement {
  const [name, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState<IResponse>({
    message: '',
    status: 0
  })
  // const navigate = useNavigate()

  console.log(response)

  async function onSubmitForm(event: FormEvent) {
    event.preventDefault()

    await api
      .post('/user', { email, name })
      .then(response => {
        setResponse({ status: response.status })
        setEmail('')
        setUsername('')
      })
      .catch(function (error) {
        setResponse({
          message: error.request.response,
          status: error.request.status
        })
      })
  }
  return (
    <>
      <div className="mx-auto h-[86vh] grid grid-cols-2">
        <div className="bg-red-200 h-full">
          <img
            src={martinelloImg}
            alt="imagem aerea da matriz"
            className="object-cover h-full"
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1>Para continuar crie uma conta</h1>
          {response.status === 400 ? (
            <p>{response.message}</p>
          ) : (
            <p>Criado com sucesso</p>
          )}

          <form
            onSubmit={onSubmitForm}
            className="h-auto p-4 grid grid-rows-3 gap-4 w-[50%]"
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
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
