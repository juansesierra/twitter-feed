import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import "./searchForm.css"
const SearchForm = ({ onSubmit, onInputChange, searchs }) => {
  return (
    <Form
      className="form-container"
      onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formUser">
        <Form.Label>Nombre de usuario</Form.Label>
        <FormControl
          type="text"
          list="searchs"
          onChange={onInputChange}
          placeholder="Introduce un nombre de usuario" />
      </Form.Group>
      <datalist id="searchs"> {
        searchs.map((search) => <option key={search} value={search} />)
      }
      </datalist>
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
}

export default SearchForm;