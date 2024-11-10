import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

function IntroOfDevTeam({name, major, year, image}, index) {
  return (
    <Card
        variant="outlined" 
        sx={{
          width: 230,
          minHeight: 350,
          maxWidth: '100%',
          boxShadow: 'lg',
          margin: 'auto',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)',
        }}  
        >

      <CardOverflow>
        <AspectRatio ratio="1.2">
          <img
            src={image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow> 

      <CardContent>
        <Typography level="title-lg" id="card-description">
            {name}
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
            Major :  {major}
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
           {year}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default IntroOfDevTeam;