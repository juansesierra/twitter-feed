import React from 'react';
import { Button } from 'react-bootstrap';

const LoadingButton = ({ isLoading, handleButtonClick }) => {
  return (
    <div className="d-grid gap-2 my-3">
      <Button variant="primary" size="lg" onClick={handleButtonClick}>
        {isLoading ? 'Cargando tweets...' : 'Ver más tweets'}
      </Button>
    </div>
  )
}

export default LoadingButton;
