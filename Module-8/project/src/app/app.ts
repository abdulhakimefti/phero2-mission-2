import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './modules/student/student.route'
const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())


//application
app.use('/api/v2/students',StudentRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

export default app
