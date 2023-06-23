import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../app/interfaces/error';

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalid Id',
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'cast error',
    errorMessages: errors,
  };
};

export default handleCastError;

//handle cast error kaj krce nh specific error message dicce nh;
//controller e AcademicSemesterService.getAllSemester(paginationOptions,filters) kaj krce nh
//paginationHelpers.calculatePagination(paginationOptions, filters); kaj krce nh;
