import React, { Component } from 'react';
import {Helmet} from 'react-helmet'

export default class MetaSeo extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:image" content={this.props.image}/>
          <meta property="og:image:type" content="image/jpeg"/>
          <meta property="og:type" content="article" />
        </Helmet>`
      </div>
    );
  }
}
