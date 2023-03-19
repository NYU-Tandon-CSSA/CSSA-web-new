import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Banner() {
  return (
    <Paper
      sx={{
        position: '',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '650px',
        backgroundImage: `url(${'https://cdn.pixabay.com/photo/2016/04/11/05/49/brookly-bridge-1321339_960_720.jpg'})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: 'none' }}
          src={
            'https://cdn.pixabay.com/photo/2016/04/11/05/49/brookly-bridge-1321339_960_720.jpg'
          }
          alt={'banner'}
        />
      }
    </Paper>
  );
}

export default Banner;
