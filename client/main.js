import React from 'react';
import {Meteor} from 'meteor/meteor'
import ReactDOM from 'react-dom';

import App from '../imports/ui/App'

Meteor.startup(()=>{

  Tracker.autorun(()=>{
    let title = "Uber for Trucks"
    ReactDOM.render(<App title = {title}/>,document.getElementById('app'));
  });
});
