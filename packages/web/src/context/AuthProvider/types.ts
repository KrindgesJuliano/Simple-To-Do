export interface IUser {
  email: string
  name: string
  id: string
  tasks?: []
}

export interface IContext extends IUser {
  authenticate: (email: string, name: string) => Promise<void>
  logout: () => void
}
export interface IAuthProvider {
  children: JSX.Element
}
