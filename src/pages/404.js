import React, { Component } from 'react';

import {Col , Row , Container}  from 'react-bootstrap'

import Card from '../Components/Card/Card'

import lost from '../assets/404.jpg'
import Banner from '../Components/Banner/banner';

export default class NotFound extends Component {
  render() {
    return (
      <main role="main">
        <Banner title="Page Not Foun" content="oh no! this page not exist " image={lost}/>
        <Container className="not-found-content">
            <Row>
            <Col lg={12}>
              <h2 className="text-center">You can read anything in our blog </h2>
            </Col>
          </Row>
        </Container>
        <Container>
            <Card />
        </Container>
      </main>
    )
  }
}
