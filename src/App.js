import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Cart from './component/Cart'
import Home from './component/Home'
import Drop from './component/Logic/Drop'
import Logic from './component/Logic/Logic'
import Searching from './component/Logic/Searching'
import Testing from './component/Logic/Testing'
import NavHadder from './component/NavHadder'

const App = () => {
  return (
    <div>
      
      <NavHadder/>
      <Routes>
     <Route path='/' element={ <Home/>}/>
     <Route path='/cart' element={ <Cart/>}/>
      </Routes>
     
      {/* <Logic/> */}
      {/* <Searching/> */}
      {/* <Drop/> */}
    
    </div>
  )
}

export default App