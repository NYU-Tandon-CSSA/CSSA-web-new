import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

function IntroOfMembers({name, major, year, image}) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 399,
        margin: "auto",
        // '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src= {image}
          srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent>
        <Typography level="title-lg" id="card-description">
            {name}
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
            Major :  {major}
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
            Class of {year}
        </Typography>
        {/* <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          Cool weather all day long
        </Chip> */}
      </CardContent>
    </Card>
  );
}

export default IntroOfMembers;