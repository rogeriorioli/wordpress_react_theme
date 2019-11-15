import React, { Component } from 'react';
import api from '../services/api'
import Parser from 'html-react-parser';
import {Col, Row , Container , Image}  from 'react-bootstrap'
import  './single.scss';
import Banner from '../Components/Banner/banner';
import MetaSeo from '../Components/MetaSeo'

export default class Page extends Component {
  state = {
    page: [{
      id: '',
      image: '',
      title: '',
      content: '',
      exercept : ''
    }]
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    await api.get(`wp/v2/pages/${id}`)
      .then(response => {
        console.log(response)
        this.setState({
          page: [{
            id: response.data.id,
            image: response.data.better_featured_image && response.data.better_featured_image.source_url,
            title: response.data.title.rendered,
            content: response.data.content.rendered,
            exercept : response.data.excerpt.rendered
          }]
        })
      })

  }
  render() {
   return ( 
     <div>
       {this.state.page.map((meta, index) => {
         return(
           <span key={index.id}>
              <MetaSeo title={meta.title} description={meta.exercept} image={meta.image}/>
           </span>
         )
       })}
       {this.state.page.map((singlePage, index) => {
         return(
           <main key={singlePage.id} role="main">
            <Banner title={singlePage.title} image={singlePage.image}></Banner> 
           <article className="single content">
              <Row>
              <Container>
              <Col lg={12}>
              <h1>{singlePage.title }</h1>
              <Image src={singlePage.image} alt={singlePage.title} fluid="true"/> 
               <div className="single-content">       
               {Parser(singlePage.content)}
                </div>
                </Col>
              </Container> 
               </Row>
           </article>  
           </main>
         )
       })}
       </div>
  )
}
}