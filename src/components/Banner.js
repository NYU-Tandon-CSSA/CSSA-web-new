import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// images
import img from '../images/bridge.png'
import werewolf from '../images/werewolf2.0.png'
import groupPhoto from '../images/GroupPhoto.jpg'
import Voice_of_NYC from '../images/Voice_of_NYC.jpg'
import Tandon from '../images/Tandon.jpg'
import { useState } from 'react';


function Banner() {

  const customCarouselStyles = {
    width: '100%', 
    height: '90vh',
    '& .MuiPaper-root': { // This specific line might not work as expected with inline styles
      transitionDuration: '10000ms'
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Carousel
        style={customCarouselStyles}
        navButtonsAlwaysVisible = {true}
        animation="slide"
        // Additional Carousel properties here
      >

        {/* Iteam 1 */}

        <div style={{ position: 'relative', height: '100%' }}>
          <img 
            src={Tandon} 
            alt={`Bridge`} 
            style={{ width: '100%', height: '90vh', pointerEvents: "none", objectFit: "cover" }} 
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '40vh',
              background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(238, 238, 238, 1))',
            }}
          ></div>
        </div>
        {/* Add more items here if you have multiple images */}
        {/* Iteam 2 */}

        <div style={{ position: 'relative', height: '100%' }}>
          <img 
            src={groupPhoto} 
            alt={`groupPhoto`} 
            style={{ width: '100%', height: '90vh', pointerEvents: "none", objectFit: "cover" }} 
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '40vh',
              background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(238, 238, 238, 1))',
            }}
          ></div>
        </div>   
        
        {/* Iteam 3 */}

        <div style={{ position: 'relative', height: '100%' }}>
          <img 
            src={Voice_of_NYC} 
            alt={`Voice_of_NYC`} 
            style={{ width: '100%', height: '90vh', pointerEvents: "none", objectFit: "cover" }} 
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '40vh',
              background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(238, 238, 238, 1))',
            }}
          ></div>
        </div>

      </Carousel>

    </div>
  );
}

export default Banner;
