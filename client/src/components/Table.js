import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table >
      <thead>
        <tr>
          <th>Profile Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {props.employees.map((e) => {
          return (<tr key={e.id.value}>    
          <td><img src={e.picture.thumbnail} alt="employee"/> </td>
          <td>{e.name.first}</td>
          <td>{e.name.last}</td>
          <td>{e.email}</td>
      
          </tr>)

        })}
      </tbody>
    </Table>
  );
}

export default Example;