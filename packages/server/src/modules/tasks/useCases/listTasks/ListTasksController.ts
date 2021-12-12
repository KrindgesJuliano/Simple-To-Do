import { Request, Response } from 'express'

import { ListTasksUseCase } from './ListTasksUseCase'

class ListTasksController {
  constructor(private listTaskUseCase: ListTasksUseCase) {}

  handle(request: Request, response: Response) {
    const all = this.listTaskUseCase.execute()

    return response.json(all)
  }
}

export { ListTasksController }
