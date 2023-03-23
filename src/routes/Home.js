import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, TimelineOppositeContent } from '@material-ui/lab';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import img from '../images/bridge.png'


// Section for images of recent posts
import manual from '../images/manual.png'
import fcwr from '../images/fcwr.png'
import werewolf from '../images/werewolf.png'


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
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ArrowDownwardRoundedIcon className={`${classes.icon} ${!isVisible && classes.iconHidden}`} />
        </Box>
      </Grid>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={3}>
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
            <Button size="small" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/a55zpVmTg3yf3aLi0zNSVQ') }}>出行前</Button>
            <Button size="small" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/aNoRUfjdUYAPZWwiBO3lEw') }}>吃喝攻略</Button>
            <Button size="small" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/4wWcxyJl74neiGRiqsia8Q') }}>宿舍生活</Button>
            <Button size="small" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/v6QSQVzf76bpdvmNEIBmWw') }}>选课推荐</Button>
            <Button size="small" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/iWgFKkEdJR0pDlHgcQHx_Q') }}>校园须知</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardMedia
            component="img"
            image={fcwr}
            title="非诚勿扰"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              2023 非诚勿扰
            </Typography>
            <Typography variant="body2" color="textSecondary">
              4.8 与你赴一场春日爱恋，“非诚勿扰”温暖回归
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/Oswuuh26ITa4PqWnsHFywQ')}}>了解更多</Button>
            <Button size="large" onClick={() => {
              navigator.clipboard.writeText('https://mp.weixin.qq.com/s/Oswuuh26ITa4PqWnsHFywQ');
              alert('微信公众号贴文链接已复制到剪贴板');
            }}>分享</Button>
          </CardActions>
        </Card>
        <div style={{minHeight: "20px"}}></div>
        <Card>
          <CardMedia
            component="img"
            image={werewolf}
            title="非诚勿扰"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              2023 狼人杀大赛
            </Typography>
            <Typography variant="body2" color="textSecondary">
              还在为凑不齐一桌狼人杀苦恼？
              还愁没有找到旗鼓相当的大佬对手？
              还在线上狼人杀？快来一局酣畅淋漓的面杀吧！
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" variant='contained' color="primary" onClick={() => { window.open('https://mp.weixin.qq.com/s/Ap1EgwW0Dl2fRExNIPflEQ')}}>了解更多</Button>
            <Button size="large" onClick={() => {
              navigator.clipboard.writeText('https://mp.weixin.qq.com/s/Ap1EgwW0Dl2fRExNIPflEQ');
              alert('微信公众号贴文链接已复制到剪贴板');
            }}>分享</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4} >
        <Typography variant="h5" component="div"> 未来活动展望 </Typography>
        <Typography variant="h5" component="div"> Upcoming Events </Typography>
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
              敬请期待
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
            <TimelineContent>敬请期待</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
      <Grid item xs={1}>
      </Grid>
    </Grid>
  );
}

export default Home;