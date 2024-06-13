import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/ANM/Carousel'
import About_ANM from '../components/ANM/About_ANM'
import Study_Path from '../components/ANM/Study_Path'
import Study_Teach from '../components/ANM/Study_Teach'
import Regis from '../components/Regis'
import ThemeProvider from "../components/ThemeContext";
export default function ANM() {
  return (
    <div>
      <ThemeProvider>
        <Navbar/>
        <Carousel/>
        <About_ANM/>
        <Study_Path/>
        <Regis/>
        <Study_Teach/>
        <Footer/>
      </ThemeProvider>
    </div>
  )
}
