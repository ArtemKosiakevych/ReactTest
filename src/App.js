import React, { Component } from 'react';

import { Row, Col } from 'antd'

import './App.css';
import Header from './Components/Header'
import Card from './Components/Card'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faAddressCard, faSortDown } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)
library.add(faAddressCard)
library.add(faSortDown)



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Row >
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} lg={8}>
            <Card />
          </Col>

        </Row>
      </div>
    );
  }
}

export default App;
