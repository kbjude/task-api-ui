export default function apiErrorHandler(error) {
  let errorMessage;
  let validationErrors;
  // if server gets an error response, handle it
  if (error.response) {
    switch (error.response.status) {
      case 500:
        errorMessage = 'Server error, try again';
        break;
      case 422:
        validationErrors = error.response.data.errors
          .map((error) => error.msg || error.message)
          .join(', ');
        errorMessage = `${validationErrors}`;
        break;
      default:
        errorMessage = error.response.data.error || error.response.data.message;
    }
  } else {
    //  if server is down, client won't get a response
    errorMessage = 'Possible network error, please reload the page';
  }
  return errorMessage;
}
