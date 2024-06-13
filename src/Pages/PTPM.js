import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/PTPM/Carousei'
import About_PTPM from '../components/PTPM/About_PTPM'
import Study_Path from '../components/PTPM/Study_Path'
import Study_Teach from '../components/PTPM/Study_Teach'
import Regis from '../components/Regis'
import Footer from '../components/Footer'
import ThemeProvider from "../components/ThemeContext";

export default function PTPM() {
  return (
    <div>
      <ThemeProvider>
        <Navbar/>
        <Carousel/>
        <About_PTPM/>
        <Study_Path/>
        <Regis/>
        <Study_Teach/>
        <Footer/>
      </ThemeProvider>
    </div>
  )
}
