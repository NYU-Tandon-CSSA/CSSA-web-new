import * as React from 'react';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box } from '@material-ui/core';

function Event({ eventTitle, eventSubTitle ,date, description, image, url }) {
  return (
    <Card sx={{ width: '20rem', height: '12.5rem' }}>
      <CardMedia
        component="img"
        image={image}
        title={eventTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {eventTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant='contained' color="primary" onClick={() => { window.open(url)}}>了解更多</Button>
        <Button size="large" onClick={() => {
          navigator.clipboard.writeText(url);
          alert('微信公众号贴文链接已复制到剪贴板');
        }}>分享</Button>
      </CardActions>
    </Card>
  );
}

export default Event;
