import React from 'react';
import ReactDOM from "react-dom";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box, Paper, Link } from '@material-ui/core';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Event from '../components/Event';
import EventCarousel from '../components/EventCarousel';
import EventCard from '../components/EventCard';
// import Header from '../components/Header';

// About us import
import groupPhoto from '../images/Group_Photo_Fall2024.JPG'

//Events import
import CardActionArea from '@mui/material/CardActionArea';

// Section for images of recent posts
import werewolf from '../images/werewolf2.0.png';
import alimni_association from '../images/alumni_association.jpg';
import If_you_are_the_one from '../images/If_you_are_the_one.png';
import Voice_of_NYC from '../images/Voice_of_NYC.jpg';
import coffee_chat from '../images/coffee_chat.jpg';
import { upcomingEvents } from '../data/upcomingEvents';

const useStyles = makeStyles((theme) => ({
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
  aboutUsSection: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1c1c2d',
    color: 'white',
    padding: theme.spacing(4),
    gap: theme.spacing(4),
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },
  imageContainer: {
    flex: 1,
    height: '50%',
    maxWidth: '600px',
    margin: 'auto',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
  contentContainer: {
    flex: 1,
    padding: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '600px',
    margin: 'auto',
  },
  title: {
    marginBottom: theme.spacing(2),
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  paragraph: {
    marginBottom: theme.spacing(4),
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  buttonContainer: {
    display: 'flex',
    gap: theme.spacing(2),
  },
}));

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

  const events = upcomingEvents.map(event => ({
    id: event.id,
    content: (
      <img 
        src={event.image} 
        alt="Event poster" 
        style={{ width: '100%', cursor: 'pointer' }}
        onClick={() => window.open(event.url, '_blank')}
      />
    )
  }));

  return (
    <div style={{ backgroundColor: '#EEEEEE', width: '100%' }}>
      {/* Banner Image */}
      <Grid container spacing={3} style={{ width: '100%', margin: 0 }}>
        <Grid 
          item 
          xs={12} 
          style={{ padding: 0, margin: 0, height: '100vh', position: 'relative', zIndex: 10 ,filter: 'brightness(1.2)' }}
        >
          {/* <Banner /> */}
          <video autoPlay loop muted playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' }}>
            <source src="/background.mp4" type="video/mp4" />
          </video>
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
              backgroundColor: 'rgba(0, 0, 0, 0.3)' // 半透明背景
            }}
          >
            <h1 style={{ fontSize: '5rem', fontWeight: 'bold' }}>NYU TANDON CSSA</h1>
            
          </div>
          <p 
            className="scrolldown" 
            style={{
              position: 'absolute',
              bottom: '20px', 
              left: '50%',
              transform: 'translateX(-50%)',
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
              <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '24px', color: 'black' }} />
            </a>
          </p>
        </Grid>
      </Grid>

      {/* 关于我们 */}
      <Box className={classes.aboutUsSection} id="aboutUs">
        <Box 
          className={classes.imageContainer} 
          component={Paper}
          elevation={3}
          style={{ 
            backgroundImage: `url(${groupPhoto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box className={classes.contentContainer}>
          <Typography variant="h2" className={classes.title}>
            关于我们
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            NYU Tandon CSSA（全称Chinese Students and Scholars Association，即中国学生学者联合会）是NYU Tandon School of Engineering大的华人学生团体，同时也是中国驻纽约领事馆注册的学生组织。 我们面向NYU全体中国学生，以广大Tandon中国留学生为中心，致力于通过此平台为大家提供NYU校内及校外的优质资源与服务。
          </Typography>
          <Box className={classes.buttonContainer}>
            <Button 
              variant="contained" 
              color="primary"
              href="https://forms.gle/R4N9Jq2iuD72hr1K6"
              target="_blank"//在新标签页打开
              rel="noopener noreferrer"
            >
              加入我们
            </Button>
            <Button 
              variant="outlined" 
              color="primary"
              href="https://nyutandoncssa.com/#/about"
            >
              了解我们
            </Button>
          </Box>
        </Box>
      </Box>


      {/* Events */}
      <Grid container style={{ paddingTop: '8vh', paddingBottom: '8vh', maxWidth: '85%', margin: '0 auto' }} spacing={3}>
        <Grid item xs={12}>
          <Typography 
            variant="h2" 
            className={classes.title}
            style={{ textAlign: 'center' }}
          >
            我们的活动
          </Typography>
        </Grid>

        <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
          {/* 左侧色块 */}
          <Box 
            sx={{
              width: '20%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '2rem',
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#1c1c2d', 
                fontWeight: 300, 
                textAlign: 'center',
                lineHeight: 1.2
              }}
            >
              活动 · 预告
            </Typography>
          </Box>

          {/* EventCarousel */}
          <Box 
            sx={{ 
              flex: 1,
              maxWidth: '75%',
              margin: '0 auto',
              borderRadius: '16px',
              overflow: 'hidden',
              '& .carousel-root': {
                height: '80vh',
              },
              '& .carousel .slide img': {
                borderRadius: '16px',
              }
            }}
          >
            <EventCarousel events={events} />
          </Box>
        </Grid>

        {/* 过往活动卡片区域 */}
        <Grid 
          container 
          spacing={6} 
          style={{ 
            marginTop: '2rem',
            padding: '0 2rem'  // 添加左右内边距
          }}
        >
          {/* 第一行 */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              width: '100%',
              '& .MuiCard-root': {  // 调整卡片大小
                maxWidth: '100%',
                height: '100%'
              },
              '& .MuiCardMedia-root': {  // 调整图片比例
                paddingTop: '75%'  // 4:3 比例
              }
            }}>
              <EventCard
                imageSrc={werewolf}
                eventName="周五桌游夜"
                eventDescription="游戏开始了，你准备好了吗？"
                reviewLink="https://mp.weixin.qq.com/s/aGcqx2f3yRKFcND69erLpA"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ 
              width: '100%',
              '& .MuiCard-root': {
                maxWidth: '100%',
                height: '100%'
              },
              '& .MuiCardMedia-root': {
                paddingTop: '75%'
              }
            }}>
              <EventCard
                imageSrc={alimni_association}
                eventName="校友会"
                eventDescription="与优秀校友面对面交流"
                reviewLink="https://mp.weixin.qq.com/s/zUUUnodaWAIr6A8ygWayaA"
              />
            </Box>
          </Grid>

          {/* 右上角标题 */}
          <Grid item xs={12} md={4} style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            minHeight: '300px'  // 确保标题区域高度与卡片一致
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#1c1c2d', 
                fontWeight: 300, 
                textAlign: 'center',
                lineHeight: 1.2
              }}
            >
              活动 · 回顾
            </Typography>
          </Grid>

          {/* 第二行 */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              width: '100%',
              '& .MuiCard-root': {
                maxWidth: '100%',
                height: '100%'
              },
              '& .MuiCardMedia-root': {
                paddingTop: '75%'
              }
            }}>
              <EventCard
                imageSrc={If_you_are_the_one}
                eventName="非诚勿扰"
                eventDescription="寻找属于你的'The One'"
                reviewLink="https://mp.weixin.qq.com/s/iKj8NE3CwyO9U-tZ-_eq6g"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ 
              width: '100%',
              '& .MuiCard-root': {
                maxWidth: '100%',
                height: '100%'
              },
              '& .MuiCardMedia-root': {
                paddingTop: '75%'
              }
            }}>
              <EventCard
                imageSrc={Voice_of_NYC}
                eventName="心动的声音"
                eventDescription="一起寻找最强之声"
                reviewLink="https://mp.weixin.qq.com/s/bcJDCI84PLyek9O63GaJRg"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ 
              width: '100%',
              '& .MuiCard-root': {
                maxWidth: '100%',
                height: '100%'
              },
              '& .MuiCardMedia-root': {
                paddingTop: '75%'
              }
            }}>
              <EventCard
                imageSrc={coffee_chat}
                eventName="Coffee Chat"
                eventDescription="与资深嘉宾近距离交流"
                reviewLink="https://mp.weixin.qq.com/s/w6_CleHw2INkQqvM9QucMw"
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;