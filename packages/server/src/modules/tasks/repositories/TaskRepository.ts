import { Task } from '../model/Task'
import { ITaskRepository, ICreateTaskDTO } from './ITasksRepository'

class TaskRepository implements ITaskRepository {
  private tasks: Task[]

  private static INSTANCE: TaskRepository

  private constructor() {
    this.tasks = []
  }

  public static getInstance(): TaskRepository {
    if (!TaskRepository.INSTANCE) {
      TaskRepository.INSTANCE = new TaskRepository()
    }
    return TaskRepository.INSTANCE
  }

  create({ title, checked }: ICreateTaskDTO): void {
    const task = new Task()

    Object.assign(task, {
      title,
      checked,
      created_at: new Date()
    })

    this.tasks.push(task)
  }

  list(): Task[] {
    return this.tasks
  }

  findByTitle(title: string): Task {
    const task = this.tasks.find(task => task.title === title)
    return task
  }
}

export { TaskRepository }
