import React, { createContext, useEffect, useState } from 'react'
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

  async function authenticate(email: string, username: string) {
    const response = await LoginRequest(email, username)

    const payload = { token: response.token, email, username }

    setUser(payload)
    setUserLocalStorage(payload)
  }

  function logout() {
    setUser(null)
    setUserLocalStorage(null)
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
