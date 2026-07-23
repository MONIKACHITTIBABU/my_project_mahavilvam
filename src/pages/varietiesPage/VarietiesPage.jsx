import React from 'react'
import Header from '../../layout/Header'
import AboutSection from './_components/AboutSection'
import Footer from '../../layout/Footer'
import ReusableHeroSection from '../../components/ReusableHeroSection'

export default function Varieties() {
  return (
    <>
        <ReusableHeroSection title1="Varieties of" title2="Mahavilvam" />
        <AboutSection/>
        <Footer/>
    </>
  )
}