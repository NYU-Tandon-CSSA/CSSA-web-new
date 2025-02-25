import React from "react";
import { Grid, Container, Typography } from "@mui/material";

const importAll = (context) => context.keys().map((key) => context(key));
const images = importAll(
  require.context("../images/gallery", false, /\.(png|jpe?g|svg)$/i)
);

const Gallery = () => {
  return (
    <Container style={{ marginTop: "100px", marginBottom: "50px" }}>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            <img
              src={image}
              style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
