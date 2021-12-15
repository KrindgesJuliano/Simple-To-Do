/* eslint-disable no-throw-literal */
import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { body, validationResult } from 'express-validator'

const prisma = new PrismaClient()

const userRoutes = Router()

const userValidationRules = [
  body('email')
    .isLength({ min: 4 })
    .withMessage('Email must not be empty')
    .isEmail()
    .withMessage('Must be a valid email address'),
  body('name')
    .isLength({ min: 2 })
    .withMessage('Name must not be at least 2 characters')
]

const simpleValidationResult = validationResult.withDefaults({
  formatter: err => err.msg
})

const checkForErrors = (request, response, next) => {
  const errors = simpleValidationResult(request)
  if (!errors.isEmpty()) {
    return response.status(400).json(errors.mapped())
  }
  next()
}

userRoutes.post(
  '/',
  userValidationRules,
  checkForErrors,
  async (request, response) => {
    const { name, email } = request.body
    try {
      const exitingUser = await prisma.user.findUnique({ where: { email } })
      if (exitingUser) throw { email: 'Email already exists' }

      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          id: uuidv4()
        }
      })

      response.status(201).json(user)
    } catch (error) {
      return response.status(400).json(error)
    }
  }
)

userRoutes.get('/:id', async (request, response) => {
  const { id } = request.params
  try {
    const getUser: object | null = await prisma.user.findFirst({
      where: { id },
      include: { tasks: true }
    })

    if (!getUser) throw { user: 'user not found' }

    response.json(getUser)
  } catch (error) {
    response.status(404).json(error)
  }
})

userRoutes.put(
  '/:id',
  userValidationRules,
  checkForErrors,
  async (request, response) => {
    const { name, email } = request.body
    const { id } = request.params
    try {
      let user = await prisma.user.findUnique({
        where: { id }
      })
      if (!user) throw { email: 'user not found' }

      user = await prisma.user.update({
        where: { id },
        data: {
          name,
          email
        }
      })
      response.status(201).json(user)
    } catch (error) {
      console.log(error)
      return response.status(400).json(error)
    }
  }
)

userRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params
  try {
    const user = await prisma.user.delete({ where: { id } })
    response.json({ mesage: 'user deleted' })
  } catch (error) {
    response.status(404).json({ error: 'user not found' })
  }
})

export { userRoutes }
