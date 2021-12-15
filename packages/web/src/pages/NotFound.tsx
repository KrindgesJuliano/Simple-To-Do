import React, { ReactElement } from 'react'

interface Props {}

export function NotFound({}: Props): ReactElement {
  return (
    <div className="h-[44rem] flex justify-center items-center">
      <h1>404 pagina não encontrada</h1>
    </div>
  )
}
