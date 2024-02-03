import React from 'react';
import { Paper, Typography, Divider, Grid, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function AboutContainer({ title, paragraph, imageUrl }) {
  return (
    <Paper elevation={0} sx={{ backgroundColor: '#EEEEEE', padding: '16px'}}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontFamily: 'YouSheBiaoTiHei' }}>
          {title}
        </Typography>
        <Divider sx={{ marginY: '16px' }} />
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Box component to add styles to the image */}
            <Box sx={{
              boxShadow: 3, // this applies a predefined shadow
              margin: '16px', // larger margin around the image
              overflow: 'hidden', // this ensures the shadow doesn't get cut off
              borderRadius: '8px', // optional: if you want rounded corners
            }}>
              <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="body1" sx={{fontFamily: 'YouSheBiaoTiHei', fontSize: '1.1rem'}}>
                {paragraph}
              </Typography>
              <Box sx={{ textAlign: 'right' }}>
                <Button href = "/about" variant="contained" style={{backgroundColor: "#57068c"}}>Learn More <DoubleArrowIcon/> </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
    </Paper>
  );
}

export default AboutContainer;
