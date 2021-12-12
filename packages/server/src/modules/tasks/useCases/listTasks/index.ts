import { TaskRepository } from '../../repositories/TaskRepository'
import { ListTasksController } from './ListTasksController'
import { ListTasksUseCase } from './ListTasksUseCase'

const tasksRepository = TaskRepository.getInstance()

const listTasksUseCase = new ListTasksUseCase(tasksRepository)

const listTasksController = new ListTasksController(listTasksUseCase)

export { listTasksController }
