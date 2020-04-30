import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function Search(props) {
  return (
    <Form>
      <FormGroup>
        <Label for='exampleEmail'></Label>
        <Input
          onChange={(e) => props.setFilterText(e.target.value)}
          type='text'
          placeholder='Search by Name'
        />
      </FormGroup>
    </Form>
  );
}

export default Search;
