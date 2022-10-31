
import React from 'react'
import {Routes ,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Actor from './Actor';
import Show from './Show';
import './App.css'
const App = () => {
  return (
    <div>
      <h2 className="header">TV Maze</h2>
      <Navbar/>
      <div className="container">
     <Routes>
        <Route path="/" element={<Actor></Actor>}/>
        <Route path="/Show" element={<Show></Show>}/> 
        
      </Routes>
      </div>
    </div>
  )
}

export default App
