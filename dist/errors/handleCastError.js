'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const handleCastError = error => {
  const errors = [
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
exports.default = handleCastError;
//handle cast error kaj krce nh specific error message dicce nh;
//controller e AcademicSemesterService.getAllSemester(paginationOptions,filters) kaj krce nh
//paginationHelpers.calculatePagination(paginationOptions, filters); kaj krce nh;
