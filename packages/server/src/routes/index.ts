import { Router } from 'express'
import { tasksRoutes } from './task.routes'
import { userRoutes } from './user.routes'

const router = Router()

router.get('/', (request, response) => {
  return response.json({ message: 'Desafio Martinello' })
})

router.use('/tasks', tasksRoutes)

router.use('/user', userRoutes)

export { router }
