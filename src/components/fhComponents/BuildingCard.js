import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// priceStudio,price1b,price2b,url
import The_Helena from "../../images/fhImage/buildingImage/Helena.jpg"
import The_Brooklyner from "../../images/fhImage/buildingImage/The_Brooklyner.jpg"

const imageMap = {
  The_Helena,
  The_Brooklyner
};

function RentCard({buildingName,address,priceStudio,price1b,price2b,buildingUrl}) {

  const formattedImageName = buildingName.replace(/ /g, '_');

  const image = imageMap[formattedImageName];

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {buildingName}
        </Typography>
        <Typography variant="body1" color="text">
          Address: {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Studio: {priceStudio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1 Bedroom: {price1b}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          2 Bedroom: {price2b}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={buildingUrl}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default RentCard
