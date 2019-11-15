import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import CardPost from '../Components/Card/Card'
import Banner from '../Components/Banner/banner'
import Parser from 'html-react-parser';
import api from '../services/api'
import Slider from "react-slick";
import './home.scss';
import MetaSeo from '../Components/MetaSeo'
import notFound from '../assets/404.jpg'


export default class Home extends Component {
  state = {posts : []}

  async componentDidMount() {
    await api.get('/wp/v2/banners')
    .then(res => {
      this.setState({ posts: res.data});
      console.log(this.state)
    })
    .catch(error => console.log(error));
  };

  
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows : true, 
      autoplay : true
    };
    return (
      
      <div>
    <MetaSeo title=" WP-API" description="BLOG FEITO COM REAT E WP-API (WP-JSON)" image={notFound}/>
    <Slider {...settings}> 
       {this.state && this.state.posts.map(banner => {
         return(
         <Banner 
            key={banner.id} 
            title={banner.title.rendered} 
            content={Parser(banner.content.rendered)} 
            image={banner.better_featured_image.source_url} >
            </Banner>
         )
      })}
      </Slider>
        <div className="home">  
          <Container>
            <div className="content">
                <CardPost />
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
  