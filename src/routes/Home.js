import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, TimelineOppositeContent } from '@material-ui/lab';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import img from '../images/bridge.png'
import manual from '../images/manual.png'

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: "4rem !important",
    animation: '$jumpAnimation 1s linear infinite',
    opacity: 1,
    transition: 'opacity 0.5s ease',
  },
  '@keyframes jumpAnimation': {
    '0%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-20px)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
  iconHidden: {
    opacity: 0,
  },
}));


function Home() {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const isVisible = scrollY < window.innerHeight / 2;

      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100 %',
            height: '100vh',
            zIndex: '-1',
          }}>
        </div> */}
        <div style={{ position: 'relative' }}>
          <img src={img} alt={`Bridge`} style={{ width: '100%', height: '90vh' }} />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '40vh',
              background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
            }}
          ></div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ArrowDownwardRoundedIcon className={`${classes.icon} ${!isVisible && classes.iconHidden}`} />
        </Box>
      </Grid>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={manual}
            title="New Student Handbook"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              2023 新生手册
            </Typography>
            <Typography variant="body2" color="text.secondary">
              了解校园、学习生活、和关于Tandon的一切
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">分享</Button>
            <Button size="small">了解更多</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={manual}
            title="New Student Handbook"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              2023 非诚勿扰
            </Typography>
            <Typography variant="body2" color="text.secondary">
              了解非诚勿扰活动
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">分享</Button>
            <Button size="small">了解更多</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5" component="div"> 未来活动展望 </Typography>
        <Typography variant="h5" component="div"> Upcoming Events </Typography>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6" component="div"> 非诚勿扰 </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>April. 8th</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              -
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>敬请期待</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              敬请期待
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>-</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              -
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>敬请期待</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
      <Grid item xs>
      </Grid>
    </Grid>
  );
}

export default Home;