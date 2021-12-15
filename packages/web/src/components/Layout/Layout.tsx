import { Fragment, ReactElement } from 'react'

import { MainNavigation } from './MainNavigation'

interface IProps {
  children: React.ReactNode
}

export function Layout({ children }: IProps): ReactElement {
  return (
    <Fragment>
      <MainNavigation />
      <main className="">{children}</main>
    </Fragment>
  )
}
