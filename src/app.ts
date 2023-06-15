/* eslint-disable no-unused-vars */
import express, { Application, NextFunction, Response, Request } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

app.use(cors());

//parser
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

export default app;
