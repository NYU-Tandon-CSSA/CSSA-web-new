import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import { contentUrl } from "../content/paths";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${contentUrl("gallery/manifest.json")}?t=${Date.now()}`)
      .then((res) => res.json())
      .then((data) => setImages(data.images || []))
      .catch(() => setImages([]));
  }, []);

  return (
    <Container style={{ marginTop: "100px", marginBottom: "50px" }}>
      <Grid container spacing={3}>
        {images.map((image) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={image.file}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img
              src={contentUrl("gallery", image.file)}
              alt={image.alt || ""}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
