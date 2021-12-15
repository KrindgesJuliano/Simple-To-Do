/* eslint-disable no-throw-literal */
import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { body, validationResult } from 'express-validator'

const prisma = new PrismaClient()

const loginRoutes = Router()

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

loginRoutes.post('/', async (request, response) => {
  const { email, name } = request.body
  try {
    const getUser: object | null = await prisma.user.findUnique({
      where: { email },
      include: { tasks: true }
    })

    if (!getUser) throw { error: 'user or email incorrect' }
    response.json(getUser)
  } catch (error) {
    response.status(404).json(error)
  }
})

export { loginRoutes }
