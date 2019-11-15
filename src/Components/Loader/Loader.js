import React, { Component } from 'react';
import { css } from '@emotion/core';
// First way to import
import { GridLoader } from 'react-spinners';
 
import './loader.scss';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
class Loader extends Component {

  state = {
    loading: true
  }
  componentDidMount() {
    window.onload = () => {
      this.setState(
        {
          loading: false
        }
      )
    }
  }
  render() {
    return (
      <div className={this.state.loading === true ? 'sweet-loading' : 'sweet-loading animated fadeOut hidden'}>
        <GridLoader
          css={override}
          sizeUnit={"px"}
          size={10}
          postiton={'absolute'}
          color={'#fff'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default Loader
