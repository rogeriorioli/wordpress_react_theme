import React, { Component } from 'react';
import './footer.scss'
// import { Container } from './styles';

export default class Footer extends Component {
  getYear() {
    return new Date().getFullYear();
  }
  render() {
    return (
    <div>
      <footer className="footer">
        &copy; {this.getYear()} todos os direitos reservados
      </footer>
    </div>
    );
  }
}
