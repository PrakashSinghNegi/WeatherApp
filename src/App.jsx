import { useEffect, useState } from 'react'
import Navbar from './component/Navbar';
import Home from './pages/Home';
import './App.css'

function App() {

  

  return (
    <>
    <div className='px-20 pt-5'>
       <Navbar></Navbar>
        <Home></Home>
    </div>
        
    </>
  )
}

export default App
