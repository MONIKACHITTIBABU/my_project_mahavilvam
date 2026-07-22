import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Location from './pages/Location/LocationPage'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/location' element={<Location/>} />
    </Routes>
    </>
  )
}
