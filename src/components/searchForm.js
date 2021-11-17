import React from 'react';
import {Form, Button, FormControl} from 'react-bootstrap';
import "./searchForm.css"
const SearchForm = ({onSubmit, onInputChange}) => {
  return (
    <Form 
      className="form-container"
      onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formUser">
          <Form.Label>Nombre de usuario</Form.Label>
          <FormControl 
            type="text"
            onChange = {onInputChange}
            placeholder="Introduce un nombre de usuario" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
}

export default SearchForm;