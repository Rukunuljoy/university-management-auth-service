import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from '../app/interfaces/common';
import { IGenericErrorMessage } from '../app/interfaces/error';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  console.log(
    error.issues.map(issue => issue.path),
    'eta zod error'
  );
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation error',
    errorMessages: errors,
  };
};

export default handleZodError;
