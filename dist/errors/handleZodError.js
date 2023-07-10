'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const handleZodError = error => {
  console.log(
    error.issues.map(issue => issue.path),
    'eta zod error'
  );
  const errors = error.issues.map(issue => {
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
exports.default = handleZodError;
