import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box, Paper} from '@material-ui/core';
import aboutUs from "../images/AboutUs.jpeg"
import Container from '@mui/material/Container';


import image1 from '../images/members/image1.jpg'
import IntroOfMembers from '../components/IntroOfMembers';



export default function About() {
  return (
    <Container maxWidth="lg">
      <div 
        style={{paddingTop: "130px",
                textAlign:"center"
        
        }}>


        {/* <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <img src={aboutUs} width="100%"></img>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid> */}

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Row 1 */}
          {/* <Grid item xs={4} justifyContent="center">
            AboutUs
          </Grid>

          <Grid item xs={8}>
            Image
          </Grid> */}

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"210%", textTransform: 'uppercase'}}>Executive board</Typography>
            <Typography class = 'Silkscreen' style={{fontSize:"170%", textTransform: 'uppercase'}}>2023 - 2024</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>CABINET</Typography>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} md={3} justifyContent="center">
            <IntroOfMembers 
              name = "Wang Minghe - Mario" 
              position = "主席"
              year = "2024"
              intro="Major 数学但也很喜欢心理学，
                参与Steinhart Development Psychology暑期研究；
                经常参加志愿者活动；
                偶尔打打篮球。"
              image={image1}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfMembers 
                name = "Jing Yuwei - Christina" 
                position = "副主席"
                year = "2024"
                intro="近期刻苦专研琴技，但是雨点不协调的音乐爱好者&贪吃鬼"
                image={image1}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfMembers 
                name = "Shi Haowei - Max" 
                position = "秘书"
                year = "2024"
                intro="喜欢玩游戏和露营的CS自闭秃头宅男"
                image={image1}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfMembers 
                name = "Shi Haowei - Mia" 
                position = "财务"
                year = "2024"
                intro="estp 幸运小可爱一枚"
                image={image1}/>
          </Grid>

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>BOARD</Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfMembers 
                name = "Junyu Yao - Tim" 
                position = "技术与职业发展部部长"
                year = "2024"
                intro=""
                image={image1}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfMembers 
                name = "Yuan Linfei - Helen" 
                position = "技术与职业发展部副部长"
                year = "2024"
                intro=""
                image={image1}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfMembers 
                name = "" 
                position = "活动部部长"
                year = "2024"
                intro=""
                image={image1}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfMembers 
                name = "" 
                position = "活动部副部长"
                year = "2024"
                intro=""
                image={image1}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfMembers 
                name = "" 
                position = "外联部部长"
                year = "2024"
                intro=""
                image={image1}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfMembers 
                name = "" 
                position = "外联部副部长"
                year = "2024"
                intro=""
                image={image1}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfMembers 
                name = "" 
                position = "宣传部部长"
                year = "2024"
                intro=""
                image={image1}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfMembers 
                name = "" 
                position = "宣传部副部长"
                year = "2024"
                intro=""
                image={image1}/>
          </Grid>

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%", textTransform: 'uppercase'}}>Web development team</Typography>
          </Grid>
          
        </Grid>

      </div>
    </Container>
  )
}
