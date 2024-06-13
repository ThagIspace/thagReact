import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/TKDH/Carousei'
import About_TKDH from '../components/TKDH/About_TKDH'
import Study_Path from '../components/TKDH/Study_Path'
import Study_Teach from '../components/TKDH/Study_Teach'
import Regis from '../components/Regis'
import Footer from '../components/Footer'
import ThemeProvider from "../components/ThemeContext";

export default function TKDH() {
  return (
    <div>
      <ThemeProvider>
        <Navbar/>
        <Carousel/>
        <About_TKDH/>
        <Study_Path/>
        <Regis/>
        <Study_Teach/>
        <Footer/>
      </ThemeProvider>
    </div>
  )
}
