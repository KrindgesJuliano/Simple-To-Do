import { TaskRepository } from '../../repositories/TaskRepository'
import { CreateTaskController } from './createTasksController'
import { CreateTaskUseCase } from './CreateTaskUseCase'

const tasksRepository = TaskRepository.getInstance()

const createTaskUseCase = new CreateTaskUseCase(tasksRepository)

const createTaskController = new CreateTaskController(createTaskUseCase)

export { createTaskController }
