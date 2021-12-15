import { FormEvent, ReactElement, useEffect, useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import Task from '../../components/Task/ReadOnlyTask'
import { api } from '../../services/api'

interface Task {
  id: string
  title: string
  checked: boolean
}

export function Dashboard(): ReactElement {
  const [title, setTitle] = useState('')
  const [listOfTasks, setListOfTasks] = useState<Array<Task>>([])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    api
      .post('/tasks', {
        title: title,
        userId: '434be6de-0305-47fd-8ad7-2db8f3aa43b3'
      })
      .then(response =>
        setListOfTasks(prevState => [...prevState, response.data])
      )
  }

  useEffect(() => {
    api
      .get('/tasks/434be6de-0305-47fd-8ad7-2db8f3aa43b3')
      .then(response => setListOfTasks(response.data))
  }, [])

  return (
    <div className="container mx-auto py-10 lg:max-w-5xl">
      <div className="w-2/3 mx-auto">
        <form onSubmit={handleCreateNewTask} id="enterTask">
          <div className="flex border-2 border-gray-400 rounded mb-4">
            <input
              type="text"
              className="w-full h-11 p-2"
              placeholder="Nova Tarefa"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-300 w-11 flex justify-center items-center cursor-pointer"
            >
              <BsPlusCircleFill className="" size={30} />
            </button>
          </div>
        </form>
        <div className="">
          {listOfTasks?.map(task => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              checked={task.checked}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
