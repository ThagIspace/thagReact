import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/AWS/Carousel'
import About_AWS from '../components/AWS/About_AWS'
import Advantage from '../components/AWS/Advantage'
import Infor from '../components/AWS/Infor'
import Value from '../components/AWS/Value'
import Course from '../components/AWS/Course'
import ThemeProvider from "../components/ThemeContext";
export default function AWS() {
  return (
    <div>
      <ThemeProvider>
        <Navbar/>
        <Carousel/>
        <About_AWS/>
        <Advantage/>
        <Value/>
        <Infor/>
        <Course/>
        <Footer/>
      </ThemeProvider>
    </div>
  )
}
