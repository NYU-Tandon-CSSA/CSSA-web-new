import React from 'react';
import { Grid, Container, Typography } from '@mui/material';

const importAll = (context) => context.keys().map((key) => context(key));
const images = importAll(require.context('../images/Events', false, /\.(png|jpe?g|svg)$/));
console.log('Loaded images:', images);

const Gallery = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Photo Gallery
      </Typography>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img
              src={image} 
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;