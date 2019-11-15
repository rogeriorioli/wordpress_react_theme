import React, { Component } from 'react';


export default class MenuMobile extends Component {
  menu = [
    {
      title: 'Home',
      url : '/' 
    },
    {
      title :  'Pagina de Exemplo',
      url :  '/page/2/pagina-de-exemplo'
    }
  ]
  render() {
    return (
      <ul className='menu menu-open animated fadeInDown'>
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
    );
  }
}
