import React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Divider, useMediaQuery } from '@mui/material';
import CustomSteps from './customSteps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Link from '@material-ui/core/Link';


// Image import
import academicCover from '../../images/fhImage/academic_cover.jpg';
import albert from '../../images/fhImage/NYUAlbert.png';
import photo1 from '../../images/fhImage/academic.jpg';

// Theme setup
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
  

export default function Academic() {
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
                    backgroundImage: `url(${academicCover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)',
                    mb: 4,
                    padding: isMobile ? '20px' : '0', 
                }}
            >
                    <Typography variant="h3" component="h1" gutterBottom sx={{ lineHeight: 1.8, fontSize: { xs: '1.5rem', md: '3rem' } }}>
                        关于学术
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                        我们的资源和平台
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
                        NYU学生常用系统
                    </Typography>
                </Box>
                <Box sx={lightPurpleBackground}>
                <Typography gutterBottom component="div" sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                    <ul style={{ paddingLeft: '0' }}>
                        <li style={listItemStyle}><span style={listItemTitleStyle}>
                            <a href="https://albert.nyu.edu/albert_index.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 NYU Albert
                            </a>
                            </span>
                            <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                NYU的主要学生信息系统，用于课程注册、查看成绩单、查看学费账单、管理个人信息等。在你的Albert主页，就可以查询到NYU正在开放的课程，包括开课状态，教授，上课时间地点等等，并在这里直接进行选课。
                                戳
                                <a href="https://meet.nyu.edu/academics/your-guide-to-course-registration-at-nyu/"
                                style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                    这里
                                </a>看选课攻略。
                            </Typography> 
                            <div style={{ textAlign: 'center', marginTop: '30px', marginBottom:'30px' }}>
                                <img src={albert} alt="NYU Albert" style={{ width: '70%', height: 'auto' }} />
                            </div>  
                        </li>
                        
                        <li style={listItemStyle}><span style={listItemTitleStyle}>
                            <a href="https://www.nyu.edu/life/information-technology/teaching-and-learning-services/instructional-tools/nyu-lms-brightspace.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 Brightspace
                            </a>
                        </span>
                        <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            课程管理系统。教授会把课程大纲，学习资料，公告，作业，成绩，课堂录像等等材料上传到这个平台。学生则主要在这里获取学习资料，提交作业，进行在线考试，查询成绩。
                        </Typography>
                        </li>

                        <li style={listItemStyle}><span style={listItemTitleStyle}>
                            <a href="https://www.nyu.edu/life/information-technology/communication-and-collaboration/email-and-communication/nyu-email.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 NYU Gmail邮箱
                            </a>
                        </span>
                        <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            记得保持你的NYU邮箱的24小时登录。很多重要信息都会通过邮件直接发送到你的NYU专属邮箱
                        </Typography>
                        </li>

                        <li style={listItemStyle}><span style={listItemTitleStyle}>
                            <a href="https://piazza.com/nyu"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 Piazza
                            </a>
                        </span>
                        <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            Piazza 是一个在线问答论坛，学生之间和学生与教授、TA之间可以通过这个论坛平台就课程相关的问题进行交流和讨论，比如问作业，问考试要求等等。看教授开学后给到的具体指引，他们也可能会用其他论坛式平台来交流问题，比如Slack。
                        </Typography>
                        </li>             
                        </ul>
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
                        信息查询
                    </Typography>
                </Box>

                <Box sx={lightPurpleBackground}>
                    <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        碰到任何学术相关具体的问题（选课、毕业要求等）都可以联系你的academic advisor，学校会邮件告知你谁是你的advisor，也可以在NYU Albert的Academic板块看到你的advisor信息。对于一些比较重要的问题，建议都和advisor进行二次确认。
                    </Typography>
                    <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        另外，向NYU的微信群/学长学姐提问也会得到一些比较实用的建议。
                    </Typography>
                    <Typography gutterBottom component="div" sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}></Typography>
                    <Typography variant="h6" sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                        重要信息链接汇总
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', my: 0, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Typography gutterBottom component="div" sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                    <ul style={{ paddingLeft: '0' }}>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> 学术日历：
                            <a href="https://www.nyu.edu/students/student-information-and-resources/registration-records-and-graduation/academic-calendar.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 Academic Calendar
                            </a>
                        </span>
                        </li>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> 学术诚信政策：
                            <a href="https://engineering.nyu.edu/life-tandon/student-life/student-advocacy/student-code-conduct"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 Student Code of Conduct
                            </a>
                        </span>
                        </li>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> 成绩和GPA：
                            <a href="https://www.nyu.edu/students/student-information-and-resources/registration-records-and-graduation/transcripts-certifications-grades/grades.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 Grades
                            </a>
                        </span>
                        </li>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> 工院项目：
                            <a href="https://engineering.nyu.edu/academics/programs"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 Programs
                            </a>
                        </span>
                        </li>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> 学位进度：
                            <a href="https://www.nyu.edu/students/student-information-and-resources/registration-records-and-graduation/albert-help/training/students/degree-progress-report.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 Degree Progress Report
                            </a>
                        </span>
                        </li>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> 毕业申请：
                            <a href="https://www.nyu.edu/students/student-information-and-resources/registration-records-and-graduation/graduation-and-diplomas/graduation-information.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 Applying for Graduation
                            </a>
                        </span>
                        </li>
                    </ul>
                    </Typography>

                    <Box
                        component="img"
                        src={photo1}
                        alt="NYU academic"
                        sx={{ width: { xs: '80%', md: '40%' }, height: 'auto', ml: 'auto', mr: '10%', mb:'auto', mt: { xs: 3, md: 0 } }}
                        />                    
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
                        图书馆
                    </Typography>
                </Box>
                <Box sx={lightPurpleBackground}>
                    <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        工院学生最常去的两个图书馆，一个是Tandon校区的
                        <a href="https://library.nyu.edu/locations/bern-dibner-library/"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 Bern Dibner Library of Science and Technology
                        </a>
                        以及Washington Square主校区的
                        <a href="https://www.nyu.edu/academics/libraries/elmer-holmes-bobstlibrary.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                 Elmer Holmes Bobst Library
                        </a>。
                        两个图书馆都有大量的自习空间，但相对来说Tandon校区的Dibner图书馆人更少，更容易抢到位置，桌子也更大，而且Dibner离我们一般上课的地方更近。图书馆内还有几台打印机供大家使用，每个学生一学期有50刀的打印额度。凭学生id就可以使用打印机。如果想要提前预约自习室，可以通过以下链接申请。预约一般很快就会通过。
                        
                        <ul style={{ paddingLeft: '0' }}>
                            <li style={listItemStyle}><span style={listItemTitleStyle}> 小组自习室：
                                <a href="https://library.nyu.edu/spaces/dibner-group-study-rooms/"
                                style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                    Dibner Group Study Rooms
                                </a>
                            </span>
                            </li>
                            <li style={listItemStyle}><span style={listItemTitleStyle}> 单人自习室：
                                <a href="https://library.nyu.edu/spaces/dibner-individual-study-rooms/"
                                style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                    Dibner Individual Study Rooms
                                </a>
                            </span>
                            </li>
                        </ul>                       
                    </Typography>
                </Box>


                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
                        Research机会
                    </Typography>
                </Box>
                <Box sx={lightPurpleBackground}>
                    <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        如果想要获得更多research的机会，还是鼓励大家多去和学校的教授进行networking。你的academic advisor也可能会给你发邮件，推送最近学校教授正在进行并有意招募的项目。以下也有一些给大家推荐的渠道，可以点击了解详情：
                    <ul style={{ paddingLeft: '0' }}>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> VIP项目：
                            <a href="https://engineering.nyu.edu/research-innovation/student-research/vertically-integrated-projects"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                Vertically Integrated Projects
                            </a>
                        </span>
                        </li>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> UGSRP：
                            <a href="https://engineering.nyu.edu/research-innovation/student-research/undergraduate-summer-research-program"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                Undergraduate Summer Research Program
                            </a>
                        </span>
                        </li>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> 其他实验室：
                            <a href="https://engineering.nyu.edu/research/labs-and-groups"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                Labs and Groups
                            </a>
                        </span>
                        </li>
                    </ul>         
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
                        职业发展
                    </Typography>
                </Box>
                <Box sx={lightPurpleBackground}>
                    <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        在美国，Networking对于求职也至关重要。建议大家善用LinkedIn去和行业内的人多建立联系和交流。
                        如果想要拓展自己的技能，也可以留意NYU的邮箱，NYU会给大家推送一些有针对性的Bootcamp，比如Data Science Bootcamp。
                        另外，NYU系统内还有这些平台可以帮助大家找工作和实习机会：
                    <ul style={{ paddingLeft: '0' }}>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> Handshake平台：
                            <a href="https://nyu.joinhandshake.com/"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                NYU Handshake
                            </a>
                        </span>
                        </li>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> Wasserman Career Center：
                            <a href="https://www.nyu.edu/students/student-information-and-resources/career-development-and-jobs.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                Wasserman Center for Career Development
                            </a>
                        </span>
                        </li>
                        <li style={listItemStyle}><span style={listItemTitleStyle}> Career fair：
                        </span>
                        <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                NYU每学期基本都会举办Career Fair，大家可以去和公司直接沟通，给他们看简历。主校区的Career Fair一般是线下形式，而Tandon一般是线上。
                            </Typography>
                        </li>
                    </ul> 
                    </Typography>
                </Box>

            </Box>
        </ThemeProvider>
    );
}
