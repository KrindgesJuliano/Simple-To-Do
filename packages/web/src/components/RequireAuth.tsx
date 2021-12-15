import React, { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider/useAuth'

interface Props {
  children: JSX.Element
}

export function RequireAuth({ children }: Props): ReactElement {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.username && !auth.email) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}
