import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../components/Banner';
import AboutContainer from '../components/AboutContainer';
import group1 from '../images/Group1.jpg';
import Event from '../components/Event';
import werewolf from '../images/werewolf2.0.png';
import alimni_association from '../images/alumni_association.jpg';
import If_you_are_the_one from '../images/If_you_are_the_one.png';
import Voice_of_NYC from '../images/Voice_of_NYC.jpg';
import coffee_chat from '../images/coffee_chat.jpg';

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    backgroundColor: '#333', // 深色背景
    color: 'white',
    padding: theme.spacing(6),
    // 去掉 maxWidth 或设置为 '100%'
    width: '100%', // 确保占据整个宽度
  },
}));



function Home() {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setIsVisible(scrollY < window.innerHeight / 2);
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
<div className={classes.aboutSection}>
  <AboutContainer
    title="关于我们"
    paragraph="NYU Tandon CSSA（全称Chinese Students and Scholars Association，即中国学生学者联合会）是NYU Tandon School of Engineering最大的华人学生团体..."
    imageUrl={group1}
    titleColor="#FFFFFF"          // 标题颜色（白色）
    paragraphColor="rgba(255, 255, 255, 0.8)" // 段落颜色（白色半透明）
  />
</div>



      {/* Events */}
      <Grid container style={{ paddingTop: '8vh', paddingBottom: '8vh', maxWidth: '85%', margin: '0 auto' }} spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="div" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.3rem' }}>
            我们的活动
          </Typography>
        </Grid>

        {/* Event Cards */}
        {[{ title: "非诚勿扰", image: If_you_are_the_one, url: 'https://mp.weixin.qq.com/s/iKj8NE3CwyO9U-tZ-_eq6g' },
          { title: "心动的声音", image: Voice_of_NYC, url: 'https://mp.weixin.qq.com/s/TfM_ZKyMJvkZcAJlt8gsaQ' },
          { title: "周五桌游夜", image: werewolf, url: 'https://mp.weixin.qq.com/s/aGcqx2f3yRKFcND69erLpA' },
          { title: "校友会", image: alimni_association, url: 'https://mp.weixin.qq.com/s/zUUUnodaWAIr6A8ygWayaA' },
          { title: "Coffee Chat", image: coffee_chat, url: 'https://mp.weixin.qq.com/s/w6_CleHw2INkQqvM9QucMw' }]
          .map((event, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Event eventTitle={event.title} image={event.image} url={event.url} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Home;
