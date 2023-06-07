/* eslint-disable no-unused-vars */
import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/users/user.route'
import globalErrorHandler from './app/middleware/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//applications routes

app.use('/api/v1/users/', UserRoutes)

// Testing
// app.get('/',async(req: Request, res: Response,next:NextFunction ) => {
//   throw new Error('texting error logger is not available')
// })

app.use(globalErrorHandler)

export default app
