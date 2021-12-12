import { Task } from '../../model/Task'
import { ITaskRepository } from '../../repositories/ITasksRepository'

class ListTasksUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  execute(): Task[] {
    const tasks = this.taskRepository.list()

    return tasks
  }
}

export { ListTasksUseCase }
