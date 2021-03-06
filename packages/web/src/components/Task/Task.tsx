/* eslint-disable multiline-ternary */
import { FormEvent, ReactElement, useEffect, useState } from 'react'
import { FiCheck, FiTrash2, FiEdit3 } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import { api } from '../../services/api'
import { useAuth } from '../../context/AuthProvider/useAuth'

interface Props {
  id: string
  title: string
  checked: boolean
}

const checkMark = (
  <svg
    className="fill-current hidden w-3 h-3 text-green-600 pointer-events-none"
    version="1.1"
    viewBox="0 0 17 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(-9 -11)" fill="#0ec946" fillRule="nonzero">
        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
      </g>
    </g>
  </svg>
)

export default function Task({ id, title, checked }: Props): ReactElement {
  const auth = useAuth()

  const [isChecked, setIsChecked] = useState(false)
  const [isEditable, setIsEditable] = useState(false)
  const [newTitle, setNewTitle] = useState('')

  function handleCheckbox() {
    setIsChecked(prevState => !prevState)

    api.put('/tasks', {
      title: newTitle,
      checked: !isChecked,
      id: id,
      userId: auth.id
    })
  }

  function handleEditField() {
    setIsEditable(prevState => !prevState)
  }

  function handleCancelEdit() {
    setIsEditable(false)
  }

  function handleEditTask(event: FormEvent) {
    event.preventDefault()
    setIsEditable(false)

    api.put('/tasks', {
      title: newTitle,
      checked: isChecked,
      id: id,
      userId: auth.id
    })
  }

  function handleDeleteTask() {
    api.delete(`/tasks/${id}`).then(response => console.log(response))
  }

  useEffect(() => {
    setNewTitle(title)
    setIsChecked(checked)
  }, [])

  const EditeInput = () => (
    <form onSubmit={handleEditTask} className="flex w-full bg-primary">
      <input
        type="text"
        value={newTitle}
        autoFocus
        className="w-full h-full py-1 focus:bg-primary outline-none bg-primary"
        onChange={event => setNewTitle(event.target.value)}
      />
      <button type="submit" className="px-2 hover:text-green-600">
        <FiCheck size={22} />
      </button>
      <button
        type="button"
        onClick={handleCancelEdit}
        className="px-2 hover:text-red-600"
      >
        <AiOutlineClose size={22} />
      </button>
    </form>
  )

  return (
    <div
      onDoubleClick={handleEditField}
      className="flex justify-between border-[1px] border-slate-300 m-1 rounded h-auto sm:h-10"
    >
      <div className="flex items-center gap-2 w-[97%] pl-3 ">
        <input
          type="checkbox"
          id="check"
          checked={isChecked}
          onChange={handleCheckbox}
          className="opacity-0 absolute h-8 w-8"
        />
        <div className="bg-white border-2 rounded-full border-green-500 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-green-600">
          {checkMark}
        </div>

        {isEditable ? EditeInput() : <p className="py-1 w-auto">{newTitle}</p>}
      </div>
      {!isEditable ? (
        <div className="hover:bg-slate-300 group px-3">
          <button
            type="button"
            className="h-full w-full"
            onClick={handleEditField}
          >
            <FiEdit3
              size={22}
              className="group-hover:text-blue-600 text-blue-400"
            />
          </button>
        </div>
      ) : null}

      <div className="hover:bg-slate-300 group px-3">
        <button
          type="button"
          className="h-full w-full"
          onClick={handleDeleteTask}
        >
          <FiTrash2
            size={22}
            className="group-hover:text-red-600 text-red-400"
          />
        </button>
      </div>
    </div>
  )
}
