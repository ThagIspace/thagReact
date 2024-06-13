import React, { useContext } from 'react'
import '../assets/Main.css'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Regis from '../components/Regis'
import About from '../components/Main/About'
import Subjects from '../components/Main/Subjects'
import Teachers from '../components/Main/Teachers'
import NumberData from '../components/Main/NumberData'
import news from '../assets/img/news1.png'
import { ThemeContext } from '../components/ThemeContext';

export default function Main() {
    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <style>
                {`
                    .about-us {
                        display: flex;
                        flex-direction: column; 
                        justify-content: center; 
                        align-items: center; 
                        text-align: center; 
                    }
                    .about-us img {
                        max-width: 100%; 
                        height: auto; 
                        margin-top: 30px;
                    }
                    .about-us h1 {
                        font-size: 3.0rem;
                        font-weight: 600;
                        margin-top: 20px;
                    }
                    .dark h1{
                    color: #fff !important;}
                `}
            </style>
            <Navbar />
            <Slider />
            <About />
            <Subjects />
            <Teachers />
            <Regis />
            <NumberData />
            <div className={`about-us ${theme}`} >
                <h1>Truyền thông nói gì về chúng tôi</h1>
                <hr />
                <img src={news}></img>
            </div>
            <Footer />
        </div>
    )
}

