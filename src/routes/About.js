import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box, Paper} from '@material-ui/core';
import aboutUs from "../images/AboutUs.jpeg"
import Container from '@mui/material/Container';

// css
import '../css/about.css'

// images
import mario from '../images/members/Mario.jpg';
import tim from '../images/members/Tim.jpg';
import helen from '../images/members/Helen.jpg';

//ITCD
import mia from '../images/members/Mia.jpg'
import aelx from '../images/members/Alex.jpg'

import IntroOfMembers from '../components/IntroOfMembers.js';
import IntroOfEboard from '../components/IntroOfEboard.js';


export default function About() {
  return (
    <Container maxWidth="lg" sx={{marginBottom: "8%"}}>

      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> 

      <div style={{paddingTop: "130px", textAlign:"center"}}>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Row 1 */}
          {/* <Grid item xs={4} justifyContent="center">
            AboutUs
          </Grid>

          <Grid item xs={8}>
            Image
          </Grid> */}

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"210%", textTransform: 'uppercase'}}>Executive board<br /> 2023 - 2024</Typography>
            {/* <Typography class = 'Silkscreen' style={{fontSize:"170%", textTransform: 'uppercase'}}>2023 - 2024</Typography> */}
          </Grid>

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>CABINET</Typography>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} md={3} justifyContent="center">
            <IntroOfEboard 
              name = "王铭赫 - Mario" 
              position = "主席"
              year = "2024"
              intro="Major 数学但也很喜欢心理学，
                参与Steinhart Development Psychology暑期研究；
                经常参加志愿者活动；
                偶尔打打篮球。"
              image={mario}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "荆雨薇 - Christina" 
                position = "副主席"
                year = "2024"
                intro="近期刻苦专研琴技，但是雨点不协调的音乐爱好者&贪吃鬼"
                image={mario}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "施皓威 - Max" 
                position = "秘书"
                year = "2024"
                intro="喜欢玩游戏和露营的CS自闭秃头宅男"
                image={mario}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "宋梦雅 - Mia" 
                position = "财务"
                year = "2024"
                intro="estp 幸运小可爱一枚"
                image={mario}/>
          </Grid>

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>BOARD</Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "姚俊煜 - Tim" 
                position = "技术与职业发展部部长"
                year = "2024"
                intro="不吃蘑菇"
                image={tim}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "苑林霏 - Helen" 
                position = "技术与职业发展部副部长"
                year = "2024"
                intro="目标是改变世界！明天开开心心"
                image={helen}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "赵中泽 - Gerald" 
                position = "活动部部长"
                year = "2024"
                intro="又菜又爱玩儿的，snowboarder, skier, air-softer, baller, boxer, wheel-thrower, mechanic."
                image={mario}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "张露文 - Devon" 
                position = "活动部副部长"
                year = "2024"
                intro="东北小松菜奈"
                image={mario}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "宋一荞 - Elaine" 
                position = "外联部部长"
                year = "2024"
                intro="脑洞比黑洞更深不可测的美食家"
                image={mario}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard
                name = "林之 - Zoey" 
                position = "外联部副部长"
                year = "2024"
                intro="ENFJ；烘培、钩针初学者"
                image={mario}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "赵朗玥 - Iris" 
                position = "宣传部部长"
                year = "2024"
                intro="招财如意的妈妈"
                image={mario}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "曾海琪 - Stephanie" 
                position = "宣传部副部长"
                year = "2024"
                intro="debug失败的Trader Joe's小粉丝修炼厨艺ing"
                image={mario}/>
          </Grid>

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%", textTransform: 'uppercase'}}>Web development team</Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <IntroOfMembers
              name = "姚俊煜 - Tim"
              major = "Computer Engineering"
              year = "2024"
              image = {tim}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfMembers
                name = "苑林霏 - Helen"
                major = "Computer Science"
                year = "2026"
                image = {helen}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfMembers
                name = "严语 - Alex"
                major = "Computer Science"
                year = "2024"
                image= {aelx}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfMembers
                name = "吴伟宁 - Winnie"
                major = "Computer Engineering"
                year = "2025"/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfMembers
                name = "缪丝雨 - Mia"
                major = "Applied Urban Science & Informatics"
                year = "2025"
                image= {mia}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfMembers
                name = "李卓伦"
                major = "Computer Engineering"
                year = "2025"/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfMembers
                name = "胡泽西"
                major = "Computer Engineering"
                year = "2025"/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfMembers
                name = "周亦桥"
                major = "Computer Science"
                year = "2025"/>
          </Grid>
        </Grid>

      </div>
    </Container>
  )
}
