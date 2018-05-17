import React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamFtZXNyYXViIiwiYSI6ImNqaGFieXl1cTA4Y3YzNm56ejRmMmo1MHQifQ.x-D6SipJooL5c7KYjgCD4w';
const iSpace = {
  latitude: 5.5697811999999995,
  longitude: -0.16966120000006413
}
export default class Map extends React.Component {

    state = {
     viewport: {
       width: 400,
       height: 400,
       latitude: iSpace.latitude,
       longitude: iSpace.longitude,
       zoom: 8
     }
   };



  render() {
      return (
      <ReactMapGL
        {...this.state.viewport}
         mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}
