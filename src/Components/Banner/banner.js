import React, { Component } from 'react';
import {Col, Row, Container} from "react-bootstrap";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './banner.scss';

export default class Banner extends Component {
  
  render() {
    return (
      <section className="banner" key={this.props.id}>
        <div className="banner-overlay">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="banner-content">
                  <h2>{this.props.title}</h2>
                  {this.props.content}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <figure className="banner-image">
          <img src={this.props.image} alt="" />
        </figure>
      </section>
    )
  }
}

