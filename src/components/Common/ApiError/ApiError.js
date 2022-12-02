import React from 'react';
import './ApiError.css';
import { apiError } from '../../../constants/constants';

export default function ApiError ({ apiResponse }) {

  const [ errorMessage, setErrorMessage ] = React.useState('');

  React.useEffect(() => {
    if (apiResponse) {
      setErrorMessage(apiError.filter((error) => error.code === apiResponse)[0].text);
    } else {
      setErrorMessage('');
    }
  }, [apiResponse])

  return (
    <p className='api-error'>{errorMessage}</p>
  );
};