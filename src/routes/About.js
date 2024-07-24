import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box, Paper} from '@material-ui/core';
import aboutUs from "../images/AboutUs.jpeg"
import Container from '@mui/material/Container';

// css
import '../css/about.css'

// advisor
import mario from '../images/members/Mario.jpg';
import tim from '../images/members/Tim.jpg';
import cory from '../images/members/Cory.jpg'
import christina from '../images/members/Christina.jpg'
import elaine from '../images/members/Elaine.jpg'
import stephanie from '../images/members/Stephanie.jpg'
import zoey from '../images/members/Zoey.jpg'
import luwen from '../images/members/Luwen.jpg'
import miaSong from '../images/members/MiaSong.jpg'
import aelx from '../images/members/Alex.jpg'

//unknow
import unknow from '../images/members/Unknow.png'

//board
import helen from '../images/members/Helen.jpg'
import gerald from '../images/members/Gerald.jpg'
import max from '../images/members/Max.jpg'
import carol from '../images/members/Carol.jpg'
import samuel from '../images/members/Samuel.jpg'
import daniel from '../images/members/Daniel.jpg'
import winnie from '../images/members/Winnie.jpg'
import yi from '../images/members/Yi.jpg'
import mia from '../images/members/Mia.jpg'

//IT team
import andrew from '../images/members/Andrew.jpg';



import IntroOfMembers from '../components/IntroOfMembers.js';
import IntroOfEboard from '../components/IntroOfEboard.js';
import IntroOfDevTeam from "../components/IntroOfDevTeam.js";


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

        <Grid container spacing={2} justifyContent="left" alignItems="center">
          {/* Row 1 */}
          {/* <Grid item xs={4} justifyContent="center">
            AboutUs
          </Grid>

          <Grid item xs={8}>
            Image
          </Grid> */}

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"210%", textTransform: 'uppercase'}}>Executive board<br /> 2024 - 2025</Typography>
            {/* <Typography class = 'Silkscreen' style={{fontSize:"170%", textTransform: 'uppercase'}}>2023 - 2024</Typography> */}
          </Grid>

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>CABINET</Typography>
          </Grid>
          <Grid item xs={12}>
            <hr style={{
              border: 'none',
              height: '1px',
              backgroundColor: 'black',
              margin: '0 0 10px 0'
            }} />
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} md={3} justifyContent="center">
            <IntroOfEboard 
              name = "苑林霏 - Helen" 
              position = " 主席"
              year = "2026"
              major = "B.S. Computer Science"
              intro="目标是改变世界！开开心心; Mathematics Minor + Business Studies Minor"
              image={helen}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
              name = "赵中泽 - Gerald" 
              position = " 副主席"
              year = "2025"
              major = "B.S. Computer Science"
              intro="又菜又爱玩儿的，snowboarder, skier, air-softer, baller, boxer, wheel-thrower, mechanic."
              image={gerald}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
              name = "施皓威 - Max" 
              position = " 秘书"
              year = "2025"
              major = "B.S. / M.S Computer Science / Financial Engineering"
              intro="喜欢玩游戏和露营的CS自闭秃头宅男"
              image={max}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
              name = "缪丝雨 - Mia" 
              position = " 财务"
              year = "2025"
              major = "M.S. Urban Science"
              intro="ESFJ-In me the tiger sniffs the rose; 考证达人！对Quant/BA方向感兴趣 欢迎与我交流～"
              image={mia}/>
          </Grid>

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>BOARD</Typography>
          </Grid>
          <Grid item xs={12}>
            <hr style={{
              border: 'none',
              height: '1px',
              backgroundColor: 'black',
              margin: '0 0 10px 0'
            }} />
          </Grid>
            
          <Grid item xs={12} md={3}>
            <IntroOfEboard 
              name = "吴伟宁 - Winnie" 
              position = " 技术与职业发展部部长"
              year = "2025"
              major = "M.S. Computer Engineering"
              intro="非常淡人但是喜欢城市"
              image={winnie}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <IntroOfEboard 
              name = "张怡然 - Carol" 
              position = "外联部部长"
              year = "2026"
              major = "B.S. BTM"
              intro="ESFP，烘焙&美食&旅游&跳舞一级爱好者，AKA不会跳舞的KPOP人不是好厨子"
              image={carol}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
              name = "王泽宁 - Samuel" 
              position = "活动部部长"
              year = "2025"
              major = "B.S. Computer Science"
              intro="ESTP，喜欢踢球; 成为活动部部长"
              image={samuel}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
              name = "梁逸伦 - Daniel" 
              position = "活动部副部长"
              year = "2025"
              major = "B.S. Computer Science"
              intro="业余围棋选手; 炉石传说美服前500"
              image={daniel}/>
          </Grid>

          

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
              name = "周亦桥 - Yiqiao" 
              position = " 技术与职业发展部副部长"
              year = "2026"
              major = "B.S. Computer Science"
              intro="事已至此，先吃饭吧"
              image={yi}/>
          </Grid>

        
          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>WALL OF FAME</Typography>
          </Grid>
          <Grid item xs={12}>
            <hr style={{
              border: 'none',
              height: '1px',
              backgroundColor: 'black',
              margin: '0 0 10px 0'
            }} />
          </Grid>
          <Grid item xs={12}>
            <Typography class='Silkscreen' style={{fontSize:"120%", marginBottom: '20px'}}>
              欢迎点击卡片右下角链接connect Linkedin
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
              name="Sherry Fu"
              position = "2019-2020 Tandon CSSA主席"
              year = "2020"
              major = "Business and Technology Management (BTM)"
              intro=""
              image={unknow}
              />
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
              name="Sherry Fu"
              position = "2019-2020 Tandon CSSA主席"
              year = "2020"
              major = "Business and Technology Management (BTM)"
              intro="目前在特斯拉工作，专注于电动汽车技术创新"
              image={unknow}
              linkedinUrl="https://www.linkedin.com/in/bob-li"/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
              name="王晨 - Cindy"
              position = "2021-2022 Tandon CSSA主席"
              year = "2022"
              major = "B.S. Chemical Engineering"
              intro="现在在阿布扎比的石油公司工作，致力于可持续能源研究"
              image={unknow}
              linkedinUrl="https://www.linkedin.com/in/cindy-wang"/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
              name="陈大伟 - David"
              position = "2022-2023 Tandon CSSA主席"
              year = "2023"
              major = "B.S. Mechanical Engineering"
              intro="目前在波音公司工作，参与航空航天技术开发"
              image={unknow}
              linkedinUrl="https://www.linkedin.com/in/david-chen"/>
          </Grid>
          
          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>ADVISOR COMMITTEE</Typography>
          </Grid>
          <Grid item xs={12}>
            <hr style={{
              border: 'none',
              height: '1px',
              backgroundColor: 'black',
              margin: '0 0 10px 0'
            }} />
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "梅依玟 - Cory" 
                position = "22-23 主席"
                year = "2023"
                major = "B.S. Mathematics."
                intro="put a dent in the universe"
                image={cory}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "王铭赫 - Mario" 
                position = "23-24 主席"
                year = "2024"
                major = "B.S. Applied Mathematics."
                intro=" 研究生在哥大读Biostatistics。Tandon CSSA四年老粉，坚定的enfp"
                image={mario}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "荆雨薇 - Christina" 
                position = "23-24 副主席"
                year = "2024"
                major= "B.S / M.S. Mathematics / MFE."
                intro=" 二月水瓶/永恒ENTJ 喜欢旅行和音乐 爱喝茶/爱咖啡/天天温开水 爱吃饭/爱睡觉/处处易发呆 "
                image={christina}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "宋一荞 - Elaine" 
                position = "22-24 外联部部长"
                year = "2024"
                major= "B.S. Mechanical Engineering."
                intro=" 脑洞比黑洞更大♠️"
                image={elaine}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "姚俊煜 - Tim" 
                position = "23-24 技术与职业发展部部长"
                year = "2024"
                major= "M.S. Computer Engineering."
                intro="不吃蘑菇！"
                image={tim}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "曾海琪 - Stephanie" 
                position = "23-24 宣传部 22-23 外联部副部长"
                year = "2024"
                major= "B.S. / M.S Business and Technology Management / Financial Engineering"
                intro="Trader Joe小粉丝修炼厨艺ing"
                image={stephanie}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "林之 - Zoey" 
                position = "23-24 外联部副部长"
                year = "2024"
                major= "M.S. Management of Technology."
                intro=" enfj努力进阶中"
                image={zoey}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "张露文 - Luwen" 
                position = "23-24 活动部副部长"
                year = "2024"
                major= "M.S. Management of Technology."
                intro=" 活动部yyds，希望cssa越来越好！"
                image={luwen}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "宋梦雅 - Mia" 
                position = "23-24 财务"
                year = "2024"
                major = "M.S. Biotechnology and Entrepreneurship."
                intro=" 没什么大愿望，每天开心就好！"
                image={miaSong}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <IntroOfEboard 
                name = "严语 - Alex" 
                position = "21-24 Tech Lead"
                year = "2024"
                major= "B.S. Computer Science."
                intro="See more at http://alexyan.me ~"
                image={aelx}/>
          </Grid>

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%", textTransform: 'uppercase'}}>Web development team</Typography>
          </Grid>
          <Grid item xs={10}>
            <hr style={{
              border: 'none',
              height: '1px',
              backgroundColor: 'black',
              margin: '0 0 10px 0'
            }} />
          </Grid>
          
          <Grid item xs={12} md={6} >
            <IntroOfDevTeam
              name = "姚俊煜 - Tim"
              major = "Computer Engineering"
              year = "2023-2024"
              image = {tim}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfDevTeam
                name = "苑林霏 - Helen"
                major = "Computer Science"
                year = "2023-2024"
                image = {helen}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfDevTeam
                name = "严语 - Alex"
                major = "Computer Science"
                year = "2023-2024"
                image= {aelx}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfDevTeam
                name = "吴伟宁 - Winnie"
                major = "Computer Engineering"
                year = "2023-2025"
                image = {winnie}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfDevTeam
                name = "缪丝雨 - Mia"
                major = "Applied Urban Science & Informatics"
                year = "2023-2024"
                image= {mia}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfDevTeam
                name = "李卓伦"
                major = "Computer Engineering"
                year = "2023-2025"
                image={unknow}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfDevTeam
                name = "胡泽西"
                major = "Computer Engineering"
                year = "2023-2025"
                image={unknow}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfDevTeam
                name = "周亦桥"
                major = "Computer Science"
                year = "2023-2025"
                image = {yi}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfDevTeam
                name = "张健桁 - Andrew"
                major = "Computer Science"
                year = "2024-2025"
                image = {andrew}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfDevTeam
                name = "张丰泽"
                major = "Computer Science"
                year = "2023-2024"
                image = {unknow}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <IntroOfDevTeam
                name = "Mark"
                major = "Computer Science"
                year = "2023-2024"
                image = {unknow}/>
          </Grid>
        </Grid>

      </div>
    </Container>
  )
}
