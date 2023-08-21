import axios from 'axios';

const handleApiErrors = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const statusCode = error.response?.data.statusCode;
    if (statusCode >= 500) {
      return 'Opps!! Ocorreu um erro interno, tente novamente';
    }

    if (statusCode >= 400 || statusCode <= 499) {
      return error.response?.data.message;
    }
  } else {
    return 'Opps!! Ocorreu inesperado, tente novamente';
  }

  return 'Opps!! Ocorreu inesperado, tente novamente';
};

export default handleApiErrors;
