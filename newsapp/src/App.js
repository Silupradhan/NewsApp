import './App.css';
import React, { useState } from 'react'
import Navbar1 from './components/Navbar1';
import News1 from './components/News1';
import {               // THIS CODE FRAGMENT IS USED FOR REACT ROUTER
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


 const App = () => {
const pageSize = 6;

const apiKey = "b072f92f9324487ca60d62df67c4b8e2";
// apiKey = process.env.REACT_APP_API_KEY;

//   state = {
//     progress : 0
//   }

// setProgress = (progress) =>{
//    setState({
//     progress : progress
//    })
// }

const [progress, setProgress ] = useState(0)
   
    return (
      <div>
        <Router>
        <Navbar1/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}

        />
      
         <Routes>
          <Route exact path='/' element={<News1 setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/business' element={<News1 setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News1 setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path='/general' element={<News1 setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/health' element={<News1 setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path='/science' element={<News1 setProgress = {setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route exact path='/sports' element={<News1 setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path='/technology' element={<News1 setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
         </Routes>
        </Router>
         
      </div>
    )
  }

  export default App
