import React from 'react'
import PropTypes from 'prop-types';

import Map from './Map'
export default class App extends React.Component {
  render() {
    return(
      //some jsx
      <div>
        <h1>{this.props.title}</h1>
        <Map/>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired
}
