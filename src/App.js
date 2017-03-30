import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';

import NavbarComponent from './components/navbar';
import CardComponent from './components/card';
import TableComponent from './components/table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <div>
          <Button color="primary">primary</Button>{' '}
          <Button color="secondary">secondary</Button>{' '}
          <Button color="success">success</Button>{' '}
          <Button color="info">info</Button>{' '}
          <Button color="warning">warning</Button>{' '}
          <Button color="danger">danger</Button>{' '}
          <Button color="link">link</Button>
        </div>
        <TableComponent />
        <CardComponent  />
      </div>
    );
  }
}

export default App;
