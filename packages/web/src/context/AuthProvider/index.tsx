import { createContext, useEffect, useState } from 'react'
import { LoginRequest } from '../../utils/LoginRequest'
import { getUserLocalStorage, setUserLocalStorage } from '../../utils/storage'

import { IAuthProvider, IContext, IUser } from './types'

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>()

  useEffect(() => {
    const user = getUserLocalStorage()

    if (user) {
      setUser(user)
    }
  }, [])

  async function authenticate(email: string, name: string) {
    console.log(email, name)
    const response = await LoginRequest(email, name)

    const payload = { token: response.token, email, name, id: response.id }

    setUser(payload)
    setUserLocalStorage(payload)
  }

  function logout() {
    setUser(null)
    setUserLocalStorage(null)
  }

  const value = { ...user, authenticate, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
