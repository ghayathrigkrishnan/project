import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Reg from './components/Reg'
import Admin from './components/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Reg/>} />
        <Route path="/admin" element={<Admin />} /> 
      </Routes>
      
    

    </>
  )
}

export default App
