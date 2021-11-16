import React, { useState } from 'react';
import {Form, Button, FormControl} from 'react-bootstrap';
import "./searchForm.css"

const SearchForm = () => {
  const [userName, setUserName] = useState('');
  const handleInputChange = (event) => {
    event.preventDefault()
    setUserName(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    console.log("Username: ", userName)
    window.api.fetchUserProfile(userName);
  }
  return (
    <Form 
      className="form-container"
      onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formUser">
          <Form.Label>Nombre de usuario</Form.Label>
          <FormControl 
            type="text"
            onChange = {handleInputChange}
            placeholder="Introduce un nombre de usuario" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
}

export default SearchForm;