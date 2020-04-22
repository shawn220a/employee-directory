import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);

  const [searchText, setFilterText] = useState('');
  const employeeSort = employees.filter((e) => {
    if(e.name.first.toLowerCase().includes(searchText.toLowerCase()) ) {
      return true;
    }
    else if(e.name.last.toLowerCase().includes(searchText.toLowerCase()) ) {
      return true;
    }
    else if(e.email.toLowerCase().includes(searchText.toLowerCase()) ) {
      return true;
    }
    else {
      return false
    }
  })

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=25&nat=us')
      .then(function (response) {
        setEmployees(response.data.results);
      })
      .catch(function (error) {})
  }, []);

  return (
    <div>
      <Header />
      <Table employees={employeeSort}/>
    </div>
  );
}

export default App;
