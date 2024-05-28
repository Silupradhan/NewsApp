import './App.css';
import React, { Component } from 'react'
import Navbar1 from './components/Navbar1';
import News1 from './components/News1';
import {               // THIS CODE FRAGMENT IS USED FOR REACT ROUTER
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 6;

  state = {
    progress : 0
  }

setProgress = (progress) =>{
   this.setState({
    progress : progress
   })
}
  render() {
   
    return (
      <div>
        <Router>
        <Navbar1/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}

        />
      
         <Routes>
          <Route exact path='/' element={<News1 setProgress = {this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/business' element={<News1 setProgress = {this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News1 setProgress = {this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path='/general' element={<News1 setProgress = {this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/health' element={<News1 setProgress = {this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
          <Route exact path='/science' element={<News1 setProgress = {this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
          <Route exact path='/sports' element={<News1 setProgress = {this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
          <Route exact path='/technology' element={<News1 setProgress = {this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
         </Routes>
        </Router>
         
      </div>
    )
  }
}
