import React, { useState } from "react";
import "../css/EventCard.css";

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
          <a href={reviewLink} className="event-link">
            活动回顾
          </a>
        </div>
      )}
    </div>
  );
};

export default EventCard;
