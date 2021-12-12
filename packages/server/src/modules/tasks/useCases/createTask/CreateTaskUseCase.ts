import { ITaskRepository } from '../../repositories/ITasksRepository'

interface IRequest {
  title: string
  checked: boolean
}

class CreateTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}
  execute({ title, checked }: IRequest): void {
    this.taskRepository.create({ title, checked })
  }
}

export { CreateTaskUseCase }
