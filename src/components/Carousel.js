import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img from '../images/bridge.png'
import manual from '../images/manual.png'
import fcwr2 from '../images/fcwr2.jpg'
import Voice from '../images/Voice.png'
import werewolf from '../images/werewolf.png'

const carouselItems = [
    {
        image: img,
        title: 'Item 1',
        description: 'Description for Item 1',
    },
    {
      image: "werewolf",
      title: 'Item 2',
      description: 'Description for Item 2',
    },
    {
      image: fcwr2,
      title: 'Item 3',
      description: 'Description for Item 3',
    },
    // Add more items as needed
  ];

  

const CarouselComponent = () => {
    const sliderRef = useRef(null); // Define the sliderRef

    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };
    
    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };
  
    return (
        <div style={{ position: 'relative' }}>
            <Slider {...settings} style={{ width: '100%'}}>
                {carouselItems.map((item, index) => (
                <div key={index}>
                    <img src={item.image} alt={item.title} style={{ width: '100%'}}/>
                    {/* <h3>{item.title}</h3> */}
                    {/* <p>{item.description}</p> */}
                </div>
                ))}
            </Slider>
            <button
                onClick={goToPrevSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    background: 'transparent',
                    border: 'none',
                    transform: 'translateY(-50%)',
                }}
            >
                Back
            </button>
            <button
                onClick={goToNextSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    background: 'transparent',
                    border: 'none',
                    transform: 'translateY(-50%)',
                }}
            >
                Next
            </button>
        </div>
    );
  };
  
export default CarouselComponent;