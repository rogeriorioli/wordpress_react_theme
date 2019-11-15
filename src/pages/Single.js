import React, { Component } from 'react';
import api from '../services/api'
import {Col, Row , Container , Image} from 'react-bootstrap'
import Parser from 'html-react-parser';
import Disqus from 'disqus-react';
import  './single.scss';

import MetaSeo from '../Components/MetaSeo'

export default class Single extends Component {
  state = {single : [
     {
      id : '' , 
      image : '',
      title: '',
      content: ''  
     }
  ] };

  async componentDidMount() {
    const post = this.props.match.params.id;
    await api.get(`wp/v2/posts/${post}`)
      .then(response => {
        console.log(response)
        this.setState({
          single: [{
            id: response.data.id,
            image: response.data.better_featured_image.source_url,
            title: response.data.title.rendered,
            content: response.data.content.rendered
          }]
        })
        console.log(this.state)
      })

  }
  render() {
    const disqusShortname = 'WP-API';
        const disqusConfig = {
            url: window.location.href,
            identifier: this.props.match.params.id,
            title: this.state.single.title,
        };
    return (
      <div>
      {this.state.single.map((meta, index) => {
         return(
           <span key={index.id}>
              <MetaSeo title={meta.title} description={meta.exercept} image={meta.image}/>
           </span>
         )
       })}

      <Col lg={12}>
        {this.state.single.map(singlePost => {
          return (
            <article key={singlePost.id} className="single content" >
              <Row>
                <Container>
                  <h1>{singlePost.title}</h1>
                  <figure className="single-image text-center">
                    <Image fluid="true" src={singlePost.image} alt={singlePost.title} title={singlePost.title} />
                  </figure>
                  <div className="single-content">
                    {Parser(singlePost.content)}
                  </div>
                  <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>
                  <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </Container>
              </Row>
            </article>
          )
        })}
      </Col>
      </div>
    )
  }
}
