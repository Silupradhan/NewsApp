import './App.css';
import React, { Component } from 'react'
import Navbar1 from './components/Navbar1';
import News1 from './components/News1';
import {               // THIS CODE FRAGMENT IS USED FOR REACT ROUTER
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar1/>
         <Routes>
          <Route exact path='/' element={<News1 key="general" pageSize={6} country="in" category="general"/>}></Route>
          <Route exact path='/business' element={<News1 key="business" pageSize={6} country="in" category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News1 key="entertainment" pageSize={6} country="in" category="entertainment"/>}></Route>
          <Route exact path='/general' element={<News1 key="general" pageSize={6} country="in" category="general"/>}></Route>
          <Route exact path='/health' element={<News1 key="health" pageSize={6} country="in" category="health"/>}></Route>
          <Route exact path='/science' element={<News1 key="science" pageSize={6} country="in" category="science"/>}></Route>
          <Route exact path='/sports' element={<News1 key="sports" pageSize={6} country="in" category="sports"/>}></Route>
          <Route exact path='/technology' element={<News1 key="technology" pageSize={6} country="in" category="technology"/>}></Route>
         </Routes>
        </Router>
         
      </div>
    )
  }
}
