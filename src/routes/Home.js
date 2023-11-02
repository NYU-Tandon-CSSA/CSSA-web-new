import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box} from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, TimelineOppositeContent } from '@material-ui/lab';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useEffect, useState} from 'react';
import img from '../images/bridge.png'

import Event from '../components/Event';

// Section for images of recent posts
import manual from '../images/manual.png'
import fcwr from '../images/fcwr.png'
import Voice from '../images/Voice.png'
import werewolf from '../images/werewolf.png'
import Footer from '../components/Footer';



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

        <Grid item xs={12}>
          <div style={{ position: 'relative' }}>
            <img src={img} alt={`Bridge`} style={{ width: '100%', height: '90vh', pointerEvents: "none", objectFit: "cover" }} />
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

        {/* 首页文案 */}
        
        <Grid item xs={12}>
        <Typography gutterBottom variant="h4" component="div"  align="center">
          本学年活动一览（瞎想的文案）
        </Typography>
        </Grid>
     

        {/* Icon */}

        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ArrowDownwardRoundedIcon className={`${classes.icon} ${!isVisible && classes.iconHidden}`} />
          </Box>
        </Grid>
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
      <Grid container style={{paddingLeft: "10%", paddingRight: "10%"}} spacing={3}>

        {/* 月份标题 */}
        <Grid item xs={12} md={3}>
        <Typography variant="h4" gutterBottom>
          11月
        </Typography>
        </Grid>

        {/* 心动的声音 */}
          <Grid item xs={12} md={3}>
          <Event 
          eventTitle = "2023 心动的声音" 
          description = "来心动的声音一站歌喉吧！"
          image = {Voice} 
          url = 'https://mp.weixin.qq.com/s/Ap1EgwW0Dl2fRExNIPflEQ'/>
        </Grid>

        {/* 非诚勿扰 */}
        <Grid item xs={12} md={3}>
          <Event 
          eventTitle = "非诚勿扰" 
          description = "4.8 与你赴一场春日爱恋，“非诚勿扰”温暖回归" 
          image = {fcwr} 
          url = 'https://mp.weixin.qq.com/s/Oswuuh26ITa4PqWnsHFywQ'/>
        </Grid>
      </Grid>

      <Grid container style={{paddingLeft: "10%", paddingRight: "10%"}} spacing={3}>

        {/* 月份标题 */}
        <Grid item xs={12} md={3}>
          <Typography variant="h4" gutterBottom>
            12月
          </Typography>
        </Grid>

        {/* 狼人杀大赛 */}
        <Grid item xs={12} md={3}>
          <Event 
          eventTitle = "2023 狼人杀大赛" 
          description = "还在为凑不齐一桌狼人杀苦恼? 还愁没有找到旗鼓相当的大佬对手？ 还在线上狼人杀？ 快来一局酣畅淋漓的面杀吧！"
          image = {werewolf} 
          url = 'https://mp.weixin.qq.com/s/Ap1EgwW0Dl2fRExNIPflEQ'/>
        </Grid>
      
        {/* 校友会 */}
        <Grid item xs={12} md={3}>
          <Event 
          eventTitle = "2023 NYU 校友会" 
          description = "还在为凑不齐一桌狼人杀苦恼? 还愁没有找到旗鼓相当的大佬对手？ 还在线上狼人杀？ 快来一局酣畅淋漓的面杀吧！"
          // image = {werewolf} 
          url = 'https://mp.weixin.qq.com/s/Ap1EgwW0Dl2fRExNIPflEQ'/>
        </Grid>
      </Grid>
      
      {/* 新生手册*/}
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
      <img src=""
       alt="background" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }} />
      
      <Grid container style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} alignItems="center" justifyContent="center">
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h4" component="div" style={{ color: 'white' }}>
            Your Text Here
          </Typography>
          
          <Button variant="contained" color="primary">
            Button 1
          </Button>
          <Button variant="contained" color="secondary">
            Button 2
          </Button>
        </Grid>
      </Grid>
    </div>



    </div>
  );
}

export default Home;