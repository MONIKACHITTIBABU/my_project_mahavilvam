import React from 'react'
import Home from './pages/Home/Home'
import Varieties from "./pages/varietiesPage/VarietiesPage.jsx"
import { Route, Routes } from 'react-router-dom'
// import Location from '../src/pages/locationPage/LocationPage.jsx'
import LocationPage from '../src/pages/locationPage/LocationPage.jsx'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/locations' element={<LocationPage/>} />
      <Route path='/varieties' element={<Varieties />} />
    </Routes>
    </>
  )
}
