import React, { Component } from 'react';
import api from '../../services/api'
import { MdMenu , MdClose } from "react-icons/md";
import { Container , Col , Row } from 'react-bootstrap'
import GitHubForkRibbon from 'react-github-fork-ribbon';
import MenuMobile from './MenuMobile'

import './header.scss'

export default class Header extends Component {
  state = { 
    blogInfo : [] , 
    isOpen : false 
  }
  handleClick = this.handleClick.bind(this)

  componentDidMount() {
    api.get('/')
    .then(response => {
       this.setState({blogInfo : response.data}) 
       console.log(this.state)
    })
    
  }
  handleClick() {
    this.setState({isOpen: !this.state.isOpen})
  }
  menu = [
    {
      title: 'Home',
      url : process.env.PUBLIC_URL +'/' 
    },
    {
      title :  'Pagina de Exemplo',
      url :  process.env.PUBLIC_URL +'/page/2/pagina-de-exemplo'
    }
  ]
  render() {
    return (

      <div className="header">
      <GitHubForkRibbon href="https://github.com/rogeriorioli/REACT-WP-API"
                    target="_blank"
                    position="left"
                    className="leftBottom"
                    >
          Fork me on GitHub
        </GitHubForkRibbon>
          <Container>
          <Row>
           <Col lg={4}>
              <div className="header-logo">
              <a href="/">
                <h1>  { this.state.blogInfo.name }</h1>
                <small>{this.state.blogInfo.description}</small>
                </a>
              </div>
            </Col>
            <Col lg={7}>
              <div className="d-lg-none mobile-menu" onClick={this.handleClick}>
                {this.state.isOpen === false ? <MdMenu color="#fff" size={32} /> : <MdClose color="#fff" size={32} /> }
              </div>
              <nav>
              {this.state.isOpen === false ?
                <ul className='menu'>
                  {this.menu.map(menuItem => {
                    return(
                    <li key={menuItem.title}>
                      <a href={menuItem.url}>
                        {menuItem.title}
                      </a>
                    </li>
                    )
                  })}
                </ul>
                : <MenuMobile/> 
                }
              </nav>
              </Col>
            </Row>
          </Container>
      </div>

    );
  }
}
