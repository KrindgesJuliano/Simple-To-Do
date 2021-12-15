import { api } from '../services/api'

export async function LoginRequest(email: string, username: string) {
  try {
    const request = await api.post('user', { email, username })

    return request.data
  } catch (error) {
    return null
  }
}
