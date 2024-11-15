import React from 'react';
import { Carousel } from 'antd';

const defaultStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '100%',
  textAlign: 'center',
  background: '#364d79',
};

const EventCarousel = ({ events = [], ...carouselProps }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Carousel autoplay {...carouselProps}>
        {events.map((event) => (
          <div key={event.id}>
            <div style={defaultStyle}>
              {event.content}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default EventCarousel;