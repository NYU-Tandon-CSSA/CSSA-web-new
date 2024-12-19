import React, { useState } from "react";
import "../css/EventCard.css";
import Button from '@material-ui/core/Button';

const EventCard = ({ imageSrc, eventName, eventDescription, reviewLink }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="event-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imageSrc} alt={eventName} className="event-image" />
      {hovered && (
        <div className="event-overlay">
          <h3>{eventName}</h3>
          <p>{eventDescription}</p>
          <Button 
            variant="contained" 
            color="primary" 
            href={reviewLink}
            className="event-link"
          >
            活动回顾
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventCard;
