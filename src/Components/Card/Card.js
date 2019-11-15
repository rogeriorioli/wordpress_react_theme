import React, { Component } from 'react';
import Parser from 'html-react-parser';
import Moment from 'moment'
import 'moment/locale/pt-br'
import { Card, Col, Row , Image } from 'react-bootstrap'

import './card.scss'

import api from '../../services/api'


// import { Container } from './styles';

export default class CardPost extends Component {
  state = { posts: [] }

  async componentDidMount() {
    await api.get('wp/v2/posts')
    .then(res => {
      this.setState({ posts: res.data });
      console.log(this.state)
    })
    .catch(error => console.log(error));
  };
  
  render() {
    return  (
      <Row>
         {this.state.posts && this.state.posts.map((post) => {
           return(
             <Col lg={4} key={post.id}>
            <Card>
            <a href={`post/${post.id}/${post.slug}`}>
            <Card.Header>
            <h2 className="card-content-title">
                {post.title.rendered}
                </h2>
            </Card.Header>
            <figure className="card-image">
              <Image src={post.better_featured_image.source_url} alt={post.title.render} className="card-image-img" fuild="true"/>
            </figure>
            <Card.Body className="card-content">
              {Parser(post.excerpt.rendered)}
            </Card.Body>
            <Card.Footer>
              {Moment(post.date).locale('pt-br').format('DD / MMMM / YYYY')}
             </Card.Footer>
            </a>
          </Card>
          </Col>
         )
        })}
        </Row>
    );
  }
}
