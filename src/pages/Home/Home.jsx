import React from 'react'
import Header from '../../layout/Header'
import Hero from './_components/Hero' 
import About from './_components/About'
import Benefits from './_components/Benefits'
import Location from './_components/Location'
import Purpose from './_components/Purpose'
import Footer from '../../layout/Footer'

export default function Home() {
  return (
    <div>
        <Header/>
        <Hero />
        <About />
        <Benefits />
        <Location />
        <Purpose />
        <Footer />
    </div>
  )
}
