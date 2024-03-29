import * as React from 'react';
//import CardActionArea from '@mui/material/CardActionArea';
//import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box, CardCover } from '@material-ui/core';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';


function Event({ eventTitle, image, url }) {

  return (
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 ,
        '&:hover': { boxShadow: 'xl', borderColor: 'warning.softActiveColor', borderWidth:3, borderRadius: 10} }}>
       
        <CardCover >
        
          <img
            src={image}
            srcSet={image}
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 100px)',
        }}
      />
        <CardContent>
          
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            <Link
            overlay
            underline="none"
            href={url}
            target="_blank"
            sx={{color: '#fff'}}
            > 
                {eventTitle}

            </Link> 
          </Typography>
        </CardContent>
      </Card>
    )
/*
    <Card>
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
  */
}

export default Event;

