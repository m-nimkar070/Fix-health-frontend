import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

export const Testimonial = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="container">
      <div className="Heading">
        <h1>Testimonials</h1>
        <h3>What our Customer Says.</h3>
      </div>
      <div className="testimonial">
        <div className="carousel">
          <BsArrowLeftCircleFill
            onClick={prevSlide}
            className="arrow arrow-left"
          />
          {data.map((item, idx) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
              />
            );
          })}
          <BsArrowRightCircleFill
            onClick={nextSlide}
            className="arrow arrow-right"
          />
          <span className="indicators">
            {data.map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              );
            })}
          </span>
        </div>
      </div>
      <div className="review">
        {data.map((item, idx) => {
          return (
            <p
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            >
              {item.description}
            </p>
          );
        })}
      </div>
    </div>
  );
};
