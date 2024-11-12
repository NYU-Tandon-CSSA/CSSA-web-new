import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box, Paper, Link } from '@material-ui/core';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Event from '../components/Event';
// import Header from '../components/Header';

// About us import
import AboutContainer from '../components/AboutContainer';
import groupPhoto from '../images/Group_Photo_Fall2024.JPG'
import group1 from '../images/Group1.jpg';

//Events import
import CardActionArea from '@mui/material/CardActionArea';

// Section for images of recent posts
import werewolf from '../images/werewolf2.0.png';
import alimni_association from '../images/alumni_association.jpg';
import If_you_are_the_one from '../images/If_you_are_the_one.png';
import Voice_of_NYC from '../images/Voice_of_NYC.jpg';
import coffee_chat from '../images/coffee_chat.jpg';

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

  return (
    <div style={{ backgroundColor: '#EEEEEE', width: '100%' }}>
      {/* Banner Image */}
      <Grid container spacing={3} style={{ width: '100%', margin: 0 }}>
        <Grid 
          item 
          xs={12} 
          style={{ padding: 0, margin: 0, height: '100vh', position: 'relative', zIndex: 10 ,filter: 'brightness(1.2)' }}
        >
          <img 
            src="CSSAFLAG.jpg" 
            alt="Background" 
            style={{
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              zIndex: '-1'
            }} 
          />
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
            NYU Tandon CSSA（全称Chinese Students and Scholars Association，即中国学生学者联合会）是NYU Tandon School of Engineering最大的华人学生团体，同时也是中国驻纽约领事馆注册的学生组织。 我们面向NYU全体中国学生，以广大Tandon中国留学生为中心，致力于通过此平台为大家提供NYU校内及校外的优质资源与服务。
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
          <Typography variant="h4" component="div" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.3rem' }}>
            我们的活动
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Event
            eventTitle="非诚勿扰"
            image={If_you_are_the_one}
            url='https://mp.weixin.qq.com/s/iKj8NE3CwyO9U-tZ-_eq6g'
          />
        </Grid>
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
        <Grid item xs={12} md={6} lg={4}>
          <Event
            eventTitle="周五桌游夜"
            image={werewolf}
            url='https://mp.weixin.qq.com/s/aGcqx2f3yRKFcND69erLpA'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Event
            eventTitle="校友会"
            image={alimni_association}
            url='https://mp.weixin.qq.com/s/zUUUnodaWAIr6A8ygWayaA'
          />
        </Grid>
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