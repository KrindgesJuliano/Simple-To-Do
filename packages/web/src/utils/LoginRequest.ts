import { api } from '../services/api'

export async function LoginRequest(email: string, name: string) {
  try {
    const request = await api.post('/login', { email, name })
    return request.data
  } catch (error) {
    console.log(error)
  }
}
