interface ICreateTaskDTO {
  title: string
  checked: boolean
}

interface ITaskRepository {
  list()
  create({ title, checked }: ICreateTaskDTO): void
}

export { ITaskRepository, ICreateTaskDTO }
