import React from 'react'
import Header from '../../layout/Header'
import Hero from './_components/Hero' 
import About from './_components/About'

export default function Home() {
  return (
    <div>
        <Header/>
        <Hero />
        <About />
    </div>
  )
}
