import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/CEH/Carousel'
import About_CEH from '../components/CEH/About_CEH'
import Advantage from '../components/CEH/Advantage'
import Infor from '../components/CEH/Infor'
import Value from '../components/CEH/Value'
import Course from '../components/CEH/Course'
import ThemeProvider from "../components/ThemeContext";
export default function CEH() {
  return (
    <div>
      <ThemeProvider>
        <Navbar/>
        <Carousel/>
        <About_CEH/>
        <Advantage/>
        <Value/>
        <Infor/>
        <Course/>
        <Footer/>
      </ThemeProvider>
    </div>
  )
}
