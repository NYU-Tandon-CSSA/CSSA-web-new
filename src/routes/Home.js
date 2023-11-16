import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box} from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, TimelineOppositeContent } from '@material-ui/lab';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useEffect, useState} from 'react';
import img from '../images/bridge.png'
import Event from '../components/Event';

//Winnie's import
import AboutContainer from '../components/AboutContainer';
import groupPhoto from '../images/GroupPhoto.jpg'


// Section for images of recent posts
import manual from '../images/manual.png'
import fcwr from '../images/fcwr.png'
import Voice from '../images/Voice.png'
import werewolf from '../images/werewolf2.0.png'
import Footer from '../components/Footer';
import alimni_association from '../images/alumni_association.jpg'
import If_you_are_the_one from '../images/If_you_are_the_one.png'
import Voice_of_NYC from '../images/Voice_of_NYC.jpg'
import coffee_chat from '../images/coffee_chat.jpg';



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
    <div>
      <Grid container spacing={3}>

        {/* Banner Image */}

        <Grid item xs={12} style={{ padding: 0, margin: 0 }}>
          <div style={{ position: 'relative' }}>
            <img src={img} alt={`Bridge`} style={{ width: '100%', height: '90vh', pointerEvents: "none", objectFit: "cover" }} />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '40vh',
                background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(238, 238, 238, 1))',
              }}
            ></div>
          </div>
        </Grid>

        {/* 关于我们 */}
        <div>
        < AboutContainer
         title="关于我们"
         paragraph="NYU Tandon CSSA（全称Chinese Students and Scholars Association，即中国学生学者联合会）是NYU Tandon School of Engineering最大的华人学生团体，同时也是中国驻纽约领事馆注册的学生组织。
          我们面向NYU全体中国学生，以广大Tandon中国留学生为中心，致力于通过此平台为大家提供NYU校内及校外的优质资源与服务。"
         imageUrl={groupPhoto}
      />
        </div>
       
      
        
      </Grid>

      {/* 入学手册 & Timeline */}
      <Grid container style={{padding: "10%"}} spacing={3}>

        {/* 入学手册 */}
        <Grid item xs={6}>
          <Card>
            <CardMedia
              component="img"
              image={manual}
              title="New Student Handbook"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                新生手册
              </Typography>
              <Typography variant="body2" color="textSecondary">
                了解校园、学习生活、和关于Tandon的一切
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/a55zpVmTg3yf3aLi0zNSVQ') }}>出行前</Button>
              <Button size="medium" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/aNoRUfjdUYAPZWwiBO3lEw') }}>吃喝攻略</Button>
              <Button size="medium" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/4wWcxyJl74neiGRiqsia8Q') }}>宿舍生活</Button>
              <Button size="medium" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/v6QSQVzf76bpdvmNEIBmWw') }}>选课推荐</Button>
              <Button size="medium" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/iWgFKkEdJR0pDlHgcQHx_Q') }}>校园须知</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* 时间线 */}

        <Grid item xs={6} md={6}>
          <Typography component="div" class = 'Silkscreen' style={{fontSize: "1.5rem"}}> Upcoming Events </Typography>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                  March 26th
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><Typography variant="h6" component="div" color='primary'> 狼人杀大赛 </Typography></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="h6" component="div" color='primary'> 非诚勿扰 </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>April 8th</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                upcoming soon
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>-</TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                  -
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>upcoming soon</TimelineContent>
              </TimelineItem>
            </Timeline>
        </Grid>

      </Grid>
      
      
      {/* Events */}
      <Grid container style={{paddingLeft: "0%", paddingRight: "0%"}} spacing={3}>
        {/* 非诚勿扰 */}
        <Grid item xs={12} md={4}>
          <Event 
          eventTitle = "非诚勿扰"
          image = {If_you_are_the_one} 
          url = 'https://mp.weixin.qq.com/s/Oswuuh26ITa4PqWnsHFywQ'/>
        </Grid>

        {/* 心动的声音 */}
        <Grid item xs={12} md={4}>
          <Event 
          eventTitle = "心动的声音"
          image = {Voice_of_NYC} 
          url = 'https://mp.weixin.qq.com/s/Ap1EgwW0Dl2fRExNIPflEQ'/>
        </Grid>

        {/* 狼人杀大赛 */}
        <Grid item xs={12} md={4}>
          <Event 
          eventTitle = "狼人杀大赛"
          image = {werewolf} 
          url = 'https://mp.weixin.qq.com/s/Ap1EgwW0Dl2fRExNIPflEQ'/>
        </Grid>

        {/* 校友会 */}
        <Grid item xs={12} md={4}>
          <Event 
          eventTitle = "校友会" 
          image = {alimni_association} 
          url = 'https://mp.weixin.qq.com/s/Ap1EgwW0Dl2fRExNIPflEQ'/>
        </Grid>

        {/* 校友会 */}
        <Grid item xs={12} md={4}>
          <Event 
          eventTitle = "Coffee Chat" 
          image = {coffee_chat} 
          url = 'https://mp.weixin.qq.com/s/Ap1EgwW0Dl2fRExNIPflEQ'/>
        </Grid>
      </Grid>

      
  




    </div>
  );
}

export default Home;