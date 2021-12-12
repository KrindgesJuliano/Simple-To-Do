import express from 'express'
import { tasksRoutes } from './routes/task.routes'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({ message: 'hello world' })
})

app.use('/tasks', tasksRoutes)

app.listen(3333, () => console.log('server is running!'))
