import './App.css';
import React, { Component } from 'react'
import Navbar1 from './components/Navbar1';
import News1 from './components/News1';

export default class App extends Component {
  render() {
    return (
      <div>
         <Navbar1/>
         <News1 pageSize={6} country="in" category="science"/>
      </div>
    )
  }
}
