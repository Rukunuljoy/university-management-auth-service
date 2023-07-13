// import { generateStudentId } from './app/modules/user/user.utils';
/* eslint-disable no-unused-vars */
import express, { Application, NextFunction, Response, Request } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();
import cookieParser from 'cookie-parser';

app.use(cors());

//parser
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//applications routes
app.use('/api/v1/', routes);

// Testing
// app.get('/',async(req: Request, res: Response,next:NextFunction ) => {
//   throw new Error('texting error logger is not available')
// })

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'api not found',
      },
    ],
  });
  next();
});

// const academicSemester = {
//   code:'01',
//   year:'2025'
// }
// const testId = async()=>{
//   const testId =await generateFacultyId()
//   console.log(testId);
// }
// testId()

export default app;
