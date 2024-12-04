import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box, Paper } from '@material-ui/core';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Event from '../components/Event';
import Banner from '../components/Banner';
// import Header from '../components/Header';

// About us import
import AboutContainer from '../components/AboutContainer';
import groupPhoto from '../images/GroupPhoto.jpg';
import group1 from '../images/Group1.jpg';

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

  const data = {
    // project: "https://example.com/project",
    // github: "https://github.com/username",
    name: "NYU TANDON CSSA",
    description: "Your description here",
  };

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
        <Grid 
          item 
          xs={12} 
          style={{ padding: 0, margin: 0, height: '100vh', position: 'relative', zIndex: 10 ,filter: 'brightness(1.2)' }}
        >
          {/* <Banner /> */}
          <video autoPlay loop muted playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' }}>
            <source src="/background.mp4" type="video/mp4" />
          </video>
          {/* <img 
            src="CSSAFLAG.jpg" 
            alt="Background" 
            style={{
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              zIndex: '-1'
            }} 
          /> */}
              {/* 文字内容 */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              color: 'white',
              textAlign: 'center',
              padding: '0 20px',
              backgroundColor: 'rgba(0, 0, 0, 0.3)' // 半透明背景，增强文字可读性
            }}
          >
            <h1 style={{ fontSize: '5rem', fontWeight: 'bold' }}>NYU TANDON CSSA</h1>
            
          </div>
            {/* 滚动按钮 */}
          <p 
            className="scrolldown" 
            style={{
              position: 'absolute',
              bottom: '20px', // 距离底部 20px，可根据需要调整
              left: '50%',
              transform: 'translateX(-50%)', // 水平居中
              zIndex: 1
            }}
          >
            <a className="smoothscroll" 
             href="#"
             onClick={(e) => {
               e.preventDefault();
               document.getElementById('aboutUs').scrollIntoView({ behavior: 'smooth', block: 'start' });
             }} 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
            }}>
              {/* <i className="icon-down-circle" style={{ fontSize: '24px', color: 'black' }}></i> */}
              <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '24px', color: 'black' }} />
              {/* ▼ */}
            </a>
          </p>
        </Grid>
      </Grid>
      
      {/* 关于我们 */}
      <div id='aboutUs' style={{ maxWidth: '85%', margin: '0 auto' }}>
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
          <Event
            eventTitle="非诚勿扰"
            image={If_you_are_the_one}
            url='https://mp.weixin.qq.com/s/iKj8NE3CwyO9U-tZ-_eq6g'
          />
        </Grid>

        {/* 心动的声音 */}
        <Grid item xs={12} md={6} lg={4}>
          <Event
            eventTitle="心动的声音"
            image={Voice_of_NYC}
            url='https://mp.weixin.qq.com/s/TfM_ZKyMJvkZcAJlt8gsaQ'
          />
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
