import { Request, Response, NextFunction, Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { body, validationResult } from 'express-validator'

const prisma = new PrismaClient()

const tasksRoutes = Router()

const taskValidationRules = [
  body('title').isLength({ min: 1 }).withMessage('title must not be empty'),
  body('userId').isLength({ min: 1 }).withMessage('userId must not be empty')
]

const simpleValidationResult = validationResult.withDefaults({
  formatter: err => err.msg
})

const checkForErrors = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const errors = simpleValidationResult(request)
  if (!errors.isEmpty()) {
    return response.status(400).json(errors.mapped())
  }
  next()
}

tasksRoutes.post(
  '/',
  taskValidationRules,
  checkForErrors,
  async (request: Request, response: Response) => {
    const { title, checked, userId } = request.body
    try {
      const taskCreate = await prisma.tasks.create({
        data: {
          title: title,
          checked: checked,
          id: uuidv4(),
          user: { connect: { id: userId } }
        }
      })
      response.status(201).json(taskCreate)
    } catch (error) {
      console.log(error)
      return response.status(500).json('something went wrong')
    }
  }
)

tasksRoutes.get('/:userId', async (request, response) => {
  const { userId } = request.params
  try {
    const tasksList = await prisma.tasks.findMany({
      where: { userId },
      orderBy: [{ created_at: 'desc' }]
    })
    response.json(tasksList)
  } catch (error) {
    console.log(error)
    return response.status(500).json('something went wrong')
  }
})

tasksRoutes.get('/:id', async (request, response) => {
  const { id } = request.params
  try {
    const findTask = await prisma.tasks.findUnique({ where: { id } })
    if (!findTask) throw new Error('task not found')
    response.json(findTask)
  } catch (error) {
    return response.status(400).json(error)
  }
})

tasksRoutes.put(
  '/',
  taskValidationRules,
  checkForErrors,
  async (request: Request, response: Response) => {
    const { id, title, checked } = request.body
    try {
      const task = await prisma.tasks.findUnique({ where: { id } })
      if (!task) throw new Error('task not found')

      const taskUpdate = await prisma.tasks.update({
        where: {
          id: id
        },
        data: {
          title: title,
          checked: checked
        }
      })
      response.status(202).json(taskUpdate)
    } catch (error) {
      console.log(error)
      return response.status(500).json(error)
    }
  }
)

tasksRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params
  try {
    const task = await prisma.tasks.delete({ where: { id } })
    response.status(202).json({ message: 'task deleted' })
  } catch (error) {
    response.status(404).json({ error: 'user not found' })
  }
})

export { tasksRoutes }
