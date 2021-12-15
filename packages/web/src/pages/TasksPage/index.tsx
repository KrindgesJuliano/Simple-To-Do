import { FormEvent, ReactElement, useEffect, useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import Task from '../../components/Task/Task'
import { useAuth } from '../../context/AuthProvider/useAuth'
import { api } from '../../services/api'

interface Task {
  id: string
  title: string
  checked: boolean
}

export function Dashboard(): ReactElement {
  const auth = useAuth()

  const [title, setTitle] = useState('')
  const [listOfTasks, setListOfTasks] = useState<Array<Task>>([])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    api
      .post('/tasks', {
        title: title,
        userId: auth.id
      })
      .then(response =>
        setListOfTasks(prevState => [...prevState, response.data])
      )
  }

  useEffect(() => {
    api.get(`/tasks/${auth.id}`).then(response => setListOfTasks(response.data))
  }, [])

  return (
    <div className="container mx-auto py-10 lg:max-w-5xl">
      <div className="w-2/3 mx-auto">
        <form
          onSubmit={handleCreateNewTask}
          id="enterTask"
          className=" hover:border-blue-300"
        >
          <div className="flex border-[1px] border-gray-400 rounded mb-4 group ">
            <input
              type="text"
              className="w-full h-11 p-2 outline-none rounded"
              placeholder="Nova Tarefa"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-100 w-11 flex justify-center items-center cursor-pointer hover:text-green-600 border-l-[1px] border-gray-400 rounded-r"
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
