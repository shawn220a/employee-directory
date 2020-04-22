import React, { Component } from 'react'

export class EmployeeTable extends Component {
  state = {
    persons: null,
    items: []
  };

  async componentDidMount() {
    const url = 'https://randomuser.me/api/?results=25';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({persons: data.results})
    console.log(this.state.persons);
  };
  
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default EmployeeTable
