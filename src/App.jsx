import React from 'react'
import Home from './pages/Home/Home'
import Varieties from "./pages/varietiesPage/VarietiesPage.jsx"
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/varieties' element={<Varieties />} />
    </Routes>
    </>
  )
}
