import * as React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { contentUrl } from "../content/paths";

function BannerSlide({ slide }) {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <img
        src={contentUrl("banner", slide.file)}
        alt={slide.alt || ""}
        style={{
          width: "100%",
          height: "90vh",
          pointerEvents: "none",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: slide.gradientHeight || "40vh",
          background:
            "linear-gradient(rgba(255, 255, 255, 0), rgba(238, 238, 238, 1))",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function Banner() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch(contentUrl("banner/slides.json"))
      .then((res) => res.json())
      .then((data) => setSlides(data.slides || []))
      .catch(() => setSlides([]));
  }, []);

  const customCarouselStyles = {
    width: "100%",
    height: "90vh",
    "& .MuiPaper-root": {
      transitionDuration: "10000ms",
    },
  };

  if (!slides.length) {
    return null;
  }

  return (
    <div style={{ position: "relative" }}>
      <Carousel
        style={customCarouselStyles}
        navButtonsAlwaysVisible={true}
        animation="slide"
      >
        {slides.map((slide, index) => (
          <BannerSlide
            key={slide.file}
            slide={{
              ...slide,
              gradientHeight: index === 0 ? "20vh" : "40vh",
            }}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
