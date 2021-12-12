import { Request, Response } from 'express'
import { CreateTaskUseCase } from './CreateTaskUseCase'

class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  handle(request: Request, response: Response) {
    const { title, checked } = request.body

    this.createTaskUseCase.execute({ title, checked })

    return response.status(201).send()
  }
}

export { CreateTaskController }
