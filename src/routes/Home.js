import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box, Paper, Link } from '@material-ui/core';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import img from '../images/bridge.png';
import Event from '../components/Event';
import Banner from '../components/Banner';

// About us import
import AboutContainer from '../components/AboutContainer';
import groupPhoto from '../images/GroupPhoto.jpg';
import group1 from '../images/Group1.jpg';

//Events import
import CardActionArea from '@mui/material/CardActionArea';

// Section for images of recent posts
import werewolf from '../images/werewolf2.0.png';
import alimni_association from '../images/alumni_association.jpg';
import If_you_are_the_one from '../images/If_you_are_the_one.png';
import Voice_of_NYC from '../images/Voice_of_NYC.jpg';
import coffee_chat from '../images/coffee_chat.jpg';

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '4rem !important',
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

// Dynamic Navbar

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
    <div style={{ backgroundColor: '#EEEEEE', width: '100%' }}>
      <Grid container spacing={3} style={{ width: '100%', margin: 0 }}>

        {/* Banner Image */}
        <Grid item xs={12} style={{ padding: 0, margin: 0 }}>
          <div style={{ position: 'relative' }}>
            <Banner />
          </div>
        </Grid>
      </Grid>

      {/* 关于我们 */}
      <div style={{ maxWidth: '85%', margin: '0 auto' }}>
        <AboutContainer
          title="关于我们"
          paragraph="NYU Tandon CSSA（全称Chinese Students and Scholars Association，即中国学生学者联合会）是NYU Tandon School of Engineering最大的华人学生团体，同时也是中国驻纽约领事馆注册的学生组织。
          我们面向NYU全体中国学生，以广大Tandon中国留学生为中心，致力于通过此平台为大家提供NYU校内及校外的优质资源与服务。"
          imageUrl={group1}
        />
      </div>

      {/* Events */}
      <Grid container style={{ paddingTop: '8vh', paddingBottom: '8vh', maxWidth: '85%', margin: '0 auto' }} spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="div" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.3rem' }}>
            我们的活动
          </Typography>
        </Grid>
        
         {/* 非诚勿扰 */}
         <Grid item xs={12} md={6} lg={4}>
          <Link 
            href="'https://mp.weixin.qq.com/s/iKj8NE3CwyO9U-tZ-_eq6g'" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={If_you_are_the_one}
                  alt="Voice of NYC"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                    非诚勿扰
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    让我们共同见证爱情的奇迹，聆听心跳的声音，寻找属于你的"The One"！
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

    

        {/* 心动的声音 */}
        <Grid item xs={12} md={6} lg={4}>
          <Link 
            href="https://mp.weixin.qq.com/s/your-link-here" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={Voice_of_NYC}
                  alt="Voice of NYC"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                    心动的声音
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    让我们共同见证音乐的奇迹，聆听心动的力量，寻找属于你的"最强之声"！
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

        {/* 狼人杀大赛 */}
        <Grid item xs={12} md={6} lg={4}>
          <Event
            eventTitle="周五桌游夜"
            image={werewolf}
            url='https://mp.weixin.qq.com/s/aGcqx2f3yRKFcND69erLpA'
          />
        </Grid>

        {/* 校友会 */}
        <Grid item xs={12} md={6} lg={4}>
          <Event
            eventTitle="校友会"
            image={alimni_association}
            url='https://mp.weixin.qq.com/s/zUUUnodaWAIr6A8ygWayaA'
          />
        </Grid>

        {/* Coffee Chat */}
        <Grid item xs={12} md={6} lg={4}>
          <Event
            eventTitle="Coffee Chat"
            image={coffee_chat}
            url='https://mp.weixin.qq.com/s/w6_CleHw2INkQqvM9QucMw'
          />
        </Grid>
      </Grid>

    </div>
  );
}

export default Home;
