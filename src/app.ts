import express, { Application, Request,Response } from 'express';
import cors from 'cors'
const app:Application = express()
const port = 5000;

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req:Request, res:Response) => {
  res.send('working successfully')
})

export default app;