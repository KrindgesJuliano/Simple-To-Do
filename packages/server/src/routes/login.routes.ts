/* eslint-disable no-throw-literal */
import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const loginRoutes = Router()

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
