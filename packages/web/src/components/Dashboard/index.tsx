import { ReactElement, useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'

interface Props {}

export function Dashboard({}: Props): ReactElement {
  const [task, setTask] = useState()
  console.log(task)
  return (
    <div className="container mx-auto py-10">
      <div className="flex border-2 border-gray-400 rounded mb-4">
        <input
          type="text"
          className="w-full h-11 p-2"
          placeholder="Novo Item"
          onChange={setTask}
        />
        <div className="bg-gray-300 w-11 flex justify-center items-center cursor-pointer">
          <BsPlusCircleFill className="" size={30} />
        </div>
      </div>
      <div className="border-2 border-gray-400 rounded">
        <ul>
          <li className="w-full h-11 flex items-center p-2">Task 1</li>
        </ul>
      </div>
    </div>
  )
}
