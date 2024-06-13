import { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../slider-data";
import "../assets/Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  const slideIntervalRef = useRef(null); 
  const intervalTime = 3000;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideLength - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
  };

  function auto() {
    slideIntervalRef.current = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideIntervalRef.current);
  }, [autoScroll, intervalTime]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="slide-content">
                <img src={slide.image} alt="slide" className="image" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
