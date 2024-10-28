import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

// images
import groupPhoto from '../images/Group_Photo_Fall2024.JPG'
import tandonPhoto from '../images/Tandon.jpg'
import lastManStandingPoster from '../images/last_man_standing.png'
import boardGameNightPoster from '../images/boardgame_night.png'
import feichengwuraoPoster from '../images/feichengwurao.png'


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
        {/* Item Lists */}
        {/* 
        1. fall 2024 group photo
        2. Tandon photo
        3. last man standing poster
        4. board game night poster
        5. fei cheng wu rao poster
        */}


        {/* Item 1: Group photo */}
        <div style={{ position: 'relative', height: '100%' }}>
          <img 
            src={groupPhoto} 
            alt={`Group Photo 2024 Fall`} 
            style={{ width: '100%', height: '90vh', pointerEvents: "none", objectFit: "cover" }} 
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '20vh',
              background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(238, 238, 238, 1))',
            }}
          ></div>
        </div>

        {/* Add more items here if you have multiple images */}
        
        {/* Item 2: Tandon Photo */}

        <div style={{ position: 'relative', height: '100%' }}>
          <img 
            src={tandonPhoto} 
            alt={`6 MetroTech`} 
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


        {/* Item 3: last man standing poster */}

        <div style={{ position: 'relative', height: '100%' }}>
          <img 
            src={lastManStandingPoster} 
            alt={`Last Man Standing Poster`} 
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

        {/* Item 4: Board Game Night Poster */}

        <div style={{ position: 'relative', height: '100%' }}>
          <img 
            src={boardGameNightPoster} 
            alt={`Board Game Night Poster`} 
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

        {/* Item 5: Feichenegwurao Poster */}

        <div style={{ position: 'relative', height: '100%' }}>
          <img 
            src={feichengwuraoPoster} 
            alt={`Feichengwurao Poster`} 
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
