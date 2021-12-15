export interface IUser {
  email: string | null | undefined
  username: string | null | undefined
}

export interface IContext extends IUser {
  authenticate: (email: string, username: string) => Promise<void>
  logout: () => void
}
export interface IAuthProvider {
  children: JSX.Element
}
