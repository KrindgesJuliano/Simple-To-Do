import { Router } from 'express'
import { tasksRoutes } from './task.routes'

const router = Router()

router.get('/', (request, response) => {
  return response.json({ message: 'Desafio Martinello' })
})

router.use('/tasks', tasksRoutes)

export { router }
