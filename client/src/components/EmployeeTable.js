import React, { Component } from 'react';

export class EmployeeTable extends Component {
  state = {
    persons: null,
  };

  async componentDidMount() {
    const url = 'https://randomuser.me/api/?results=25';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ persons: data.results });
    console.log(this.state.persons);
  }

  render() {

    const items = [];

    for()


    return (
       <ul>
        {
        this.state.persons.map(
          (person) => 
          {
          <li>{person.name.first}</li>
          <li>{person.name.last}</li>
          })
        }
       </ul>
    );
  }
}

export default EmployeeTable;
