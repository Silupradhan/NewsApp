import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c="jhon";
  render() {
    return (
      <div>
        hello my first react class based components {this.c}  {/* we can create and call a variable using THIS in class based componets*/}
      </div>
    )
  }
}
