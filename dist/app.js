'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
// import { generateStudentId } from './app/modules/user/user.utils';
/* eslint-disable no-unused-vars */
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const globalErrorHandler_1 = __importDefault(
  require('./app/middleware/globalErrorHandler')
);
const routes_1 = __importDefault(require('./app/routes'));
const http_status_1 = __importDefault(require('http-status'));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//applications routes
app.use('/api/v1/', routes_1.default);
// Testing
// app.get('/',async(req: Request, res: Response,next:NextFunction ) => {
//   throw new Error('texting error logger is not available')
// })
//global error handler
app.use(globalErrorHandler_1.default);
//handle not found
app.use((req, res, next) => {
  res.status(http_status_1.default.NOT_FOUND).json({
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
exports.default = app;
