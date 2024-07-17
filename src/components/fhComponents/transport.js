import React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Divider, useMediaQuery } from '@mui/material';
import CustomSteps from './customSteps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

// image
import transportCover from '../../images/fhImage/transport_cover.jpg';
import subwayImg from '../../images/fhImage/subway.jpg';
import busImg from '../../images/fhImage/bus.jpg';
import taxiImg from '../../images/fhImage/taxi.jpg';
import trainImg from '../../images/fhImage/grand-central.jpg';
import shuttleImg from '../../images/fhImage/shuttle.jpg';

// template setting
const theme = createTheme({
  typography: {
      fontFamily: "Noto Sans SC",
      fontWeight: "500",
      h5: {
          fontFamily: "Noto Sans SC",
      },
      h6: {
          fontFamily: "Noto Sans SC",
      },
      subtitle1: {
          fontFamily: "Noto Sans SC",
      }
  },
});

const iconStyle = {
  color: '#57068c',
  fontSize: '1.5rem',
  marginRight: '8px'
};

const noticeStyle = {
  border: '2px solid #af7ac5',
  padding: '16px',
  marginBottom: '16px',
  borderRadius: '8px',
  backgroundColor: '#f9f6ff',
  display: 'flex',
  alignItems: 'flex-start',
  mt: 4, 
  mb: 4,
};

const exclamationIconStyle = {
  color: '#af7ac5',
  fontSize: '1.5rem',
  marginRight: '8px'
};

const lightPurpleBackground = {
  backgroundColor: '#f9f6ff',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '16px',
};

const listItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  listStyleType: 'none',
  marginBottom: '16px',
};

const listItemTitleStyle = {
  fontWeight: 'bold',
  color: '#57068c',
  display: 'inline',
};

export default function Transport() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Box
          sx={{
              mb: 2,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
          }}
      >
          <Box
              sx={{
                  height: '300px',
                  backgroundImage: `url(${transportCover})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                  textShadow: '0 0 10px rgba(0,0,0,0.5)',
                  mb: 4,
              }}
          >
            <Typography variant="h3" component="h1" gutterBottom sx={{ lineHeight: 1.8, fontSize: { xs: '1.5rem', md: '3rem' } }}>
                关于交通
            </Typography>
            <Typography variant="h6" component="p" sx={{ lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                在纽约，公共交通是首选。
            </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
            <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
              纽约地铁
            </Typography>
        </Box>

        <Box sx={lightPurpleBackground}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box
                component="img"
                src={subwayImg}
                alt="New York Subway"
                sx={{ width: { xs: '100%', md: '40%' }, height: '100%', objectFit:'cover', mr: { xs: 0, md: 3 }, mb: { xs: 3, md: 0 } }}
            />
            <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              提到纽约的公共交通，首先想到的一定是纽约全覆盖的纽约地铁，能去到市区里大多数目的地的附近。虽然纽约的地铁依然较为脏乱差，但是慢慢地，你也有可能会接受甚至爱上这个极具时代感和艺术感的地铁系统。在NYU Tandon附近，主要有Jay Street MetroTech、Dekalb Ave、Hoyt st等地铁站，分布着2,3,A,B,C,F,R,Q等多条线路，非常方便，可以满足各种出行需求。地铁线路很多且纵横交错，不过你只需要一个Google Map就可以轻松地帮你规划好所有换乘线路。
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
              支付方式
          </Typography>
          <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            一般单程票价$2.90
          </Typography>
          <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            选择一：
            在地铁口的机器办理MetroCard -- Pay-Per-Ride（按次付费）和 Unlimited Ride（有周卡和月卡可以选择）。
          </Typography>
          <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            选择二：
            OMNY非接触式支付系统，可以使用信用卡、借记卡或Apple Pay在闸口直接感应支付。
          </Typography>

          <Typography variant="h6" sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
              地铁实用攻略
          </Typography>
          <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            1、纽约地铁24小时运营，但某些路线和车站会在夜间或周末节假日关闭或改线。有些时候，因为地铁维修的缘故，也会关闭一些线路或车站，可以留意MTA的官网或APP，还有地铁里的告示。
          </Typography>
          <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            2、纽约地铁修建于1907年，设施相对老旧，列车行驶在隧道途中的时候，依旧是没有信号的。
          </Typography>
          <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            3、搭乘地铁前最好提前记住路线方向，一般uptown是去曼岛上城方向，downtown是去下城或布鲁克林方向。很多月台两边并不是同一条线路的相反方向，刷卡进站之前最好看清楚入口标注的列车行驶方向，否则换方向可能需要刷卡重进。不用担心，在纽约地铁迷路是常有的事。
          </Typography>
          <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            4、纽约有些线路有快慢车之分。快车（Express）通常用菱形标志或E字母标注在地铁线路图和列车上表明线路的字母/数字周围。它们仅在主要站点停靠，不会在所有站点停车。慢车（Local）通常用圆形标志或L字母标注在地铁线路图和列车上，在所有站点停靠。
          </Typography>    
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
            <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
              公交
            </Typography>
        </Box>

        <Box sx={lightPurpleBackground}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box
                component="img"
                src={busImg}
                alt="New York Bus"
                sx={{ width: { xs: '100%', md: '40%' }, height: '100%', objectFit:'cover',  mr: { xs: 0, md: 3 }, mb: { xs: 3, md: 0 } }}
            />
            <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              纽约公交车相较地铁来说，因为间隔时间长，并没有那么便捷。大多数线路运营时间为5:00至凌晨1:00，部分线路24小时运营。
              公交线路编号以字母B（布鲁克林Brooklyn）、M（曼哈顿Manhattan）、Q（皇后区Queens）、S（斯塔滕岛Staten Island）、BX（布朗克斯The Bronx）开头。
              另外需要注意的是，公交车并非每个车站都停，需要乘客手动拉动车上靠窗的绳子或按提示下车的按钮，提醒司机下一站有乘客需要下车。
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
              支付方式
          </Typography>
          <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            一般单程票价$2.90，快车（Express）$7.00
          </Typography>
          <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            与地铁相同，使用MetroCard或OMNY支付。使用同一张MetroCard或OMNY支付，可以在两小时内免费转乘一次地铁或公交车，也就是免费从地铁转巴士，巴士转地铁或进行巴士间的转乘(一些线路除外)。
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
            <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
              出租车
            </Typography>
        </Box>

        <Box sx={lightPurpleBackground}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box
                component="img"
                src={taxiImg}
                alt="New York Taxi"
                sx={{ width: { xs: '100%', md: '40%' }, height: '100%', objectFit:'cover',  mr: { xs: 0, md: 3 }, mb: { xs: 3, md: 0 } }}
            />
            <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              在纽约，黄色的出租车也是一大风景线。车费自3.00美金起跳，之后还会根据具体情况加收，除了路费还要给小费至少10%。如果想要打车，在这里建议大家优先选择打车软件。
              具体出租车价格在
              <a href="https://www.nyc.gov/site/tlc/passengers/taxi-fare.page"
                style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                这里
                </a>可查询。
            </Typography>
          </Box>         
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
            <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
              打车软件
            </Typography>
        </Box>

        <Box sx={lightPurpleBackground}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              相信打车软件大家都很熟悉了。美国的打车软件和中国的打车软件用法基本一样，输入你要达到的地方，有司机会接单，然后直接把你送到指定地点，不需要准备现金和卡，钱会直接从你Uber账号中扣的，小费也是可选择的，而且价格跟出租车相比便宜不少。
              美国常用的打车软件是Uber和Lyft。
              注意选择信号较好以及标志性的叫车位置，确保司机能够顺利接到你。
            </Typography>
          </Box>         
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
            <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
              NYU校车
            </Typography>
        </Box>

        <Box sx={lightPurpleBackground}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box
                  component="img"
                  src={shuttleImg}
                  alt="NYU Shuttle"
                  sx={{ width: { xs: '100%', md: '40%' }, height: '100%', objectFit:'cover',  mr: { xs: 0, md: 3 }, mb: { xs: 3, md: 0 } }}
            />
            <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              凭着你的NYU学生ID，你可以免费乘坐NYU的校车线路穿梭在主校区和Tandon校区之间以及这两点一线之间的站点。这里推荐大家下载
              NYU mobile APP，可以实时看到每条线路上的校车行驶到哪里以及每个站点的位置。Tandon校区的同学最常搭乘的是Route A。
              具体校车路线和时间表可以查询NYU官网
              <a href="https://www.nyu.edu/life/travel-and-transportation/university-transportation/routes-and-schedules.html"
                style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                'Routes and Schedules'
                </a>。
            </Typography>
          </Box>         
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
            <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
              火车
            </Typography>
        </Box>
        <Box sx={lightPurpleBackground}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box
                  component="img"
                  src={trainImg}
                  alt="Grand Central"
                  sx={{ width: { xs: '100%', md: '40%' }, height: '100%', objectFit:'cover',  mr: { xs: 0, md: 3 }, mb: { xs: 3, md: 0 } }}
            />
            <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              如果想要去纽约附近的城镇进行短途旅行，可以选择坐火车。
              纽约两个大家常去的火车站：
              <a href="https://grandcentralterminal.com/"
                style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                Grand Central
                </a>
              (可以现场买票，也可以通过
              <a href="https://new.mta.info/traintime"
                style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                MTA TrainTime
                </a>
              提前买票) ，以及
              <a href="https://moynihantrainhall.nyc/"
                style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                Moynihan Train Hall NYC 
                </a>
              （提供
              <a href="https://www.amtrak.com/home?cmp=pdsrch-NAT%20|%20Core%20DMA%20|%20Brand%20|%20Google%20|%20Exact-google&gad_source=1&gclid=EAIaIQobChMIlJn2rp6thwMVoF5HAR10dwufEAAYASAAEgI2KPD_BwE&gclsrc=aw.ds"
                style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                Amtrak
                </a>
              和 Long Island Railroad 的火车线路）
            </Typography>

          </Box>         
        </Box>




       
    
      </Box>
    </ThemeProvider>
  );
}
