import React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import MedicalSteps from './medical_exam_step';
import { Divider, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, CardActionArea } from '@mui/material';
import List from '@mui/material/List';

// images
import PreparationsCover from '../../images/fhImage/preparation_cover.jpg';

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

export default function Preparations() {
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
                        height: { xs: '200px', md: '300px' },
                        backgroundImage: `url(${PreparationsCover})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        textShadow: '0 0 10px rgba(0,0,0,0.5)',
                        mb: 4,
                        padding: { xs: 2, md: 0 }
                    }}
                >
                    <Typography variant="h3" component="h1" gutterBottom sx={{ lineHeight: 1.8, fontSize: { xs: '1.5rem', md: '3rem' } }}>
                        关于行前准备
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                        收拾行李，准备出发！
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
                        交学费
                    </Typography>
                </Box>
                <Box component="ul" sx={{ listStyle: 'none', padding: 0, mb: 4, ...lightPurpleBackground }}>
                    <Typography variant="h6" sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            拿到签证以后，就可以到
                            <a href="https://www.nyu.edu/students/student-information-and-resources/bills-payments-and-refunds/when-and-how-to-pay/methods-of-payment.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            NYU官网
                            </a>支付学费了。记住缴纳学费的
                            <a href="https://www.nyu.edu/students/student-information-and-resources/bills-payments-and-refunds/when-and-how-to-pay/billing-and-payment-due-dates.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            截止日期
                            </a>，建议大家提前交学费，学费到账需要时间。另外，nyu提供了很多种交学费的方式：
                    </Typography>
                    <Typography gutterBottom component="div">
                    <ul style={{ paddingLeft: '0' }}>
                            <li style={listItemStyle}><span style={listItemTitleStyle}>1.分期付款：</span>
                            <Typography sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            <a href="https://www.nyu.edu/students/student-information-and-resources/bills-payments-and-refunds/when-and-how-to-pay/methods-of-payment.html#PaymentPlans"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            payment plan
                            </a>
                            </Typography></li>
                            <li style={listItemStyle}><span style={listItemTitleStyle}>2.支票：</span>
                            <Typography sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            <a href="https://www.nyu.edu/students/student-information-and-resources/bills-payments-and-refunds/when-and-how-to-pay/methods-of-payment.html#Checks"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            electronic, personal, or bank check
                            </a>
                            </Typography></li>
                            <li style={listItemStyle}><span style={listItemTitleStyle}>3.用非美金的币种交学费：</span>
                            <Typography sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            <a href="https://www.nyu.edu/students/student-information-and-resources/bills-payments-and-refunds/when-and-how-to-pay/international-payments.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            International Payments (non-USD account)
                            </a>
                            </Typography></li>
                            <li style={listItemStyle}><span style={listItemTitleStyle}>4.奖学金、助学金</span> </li>
                        </ul>
                    </Typography>
                    <Box sx={noticeStyle}>
                            <FontAwesomeIcon icon={faExclamationCircle} style={exclamationIconStyle} />
                            <Box>
                                <Typography sx={{ lineHeight: 2, mb: 0, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                请注意纽约大学是不支持用信用卡来交学费的。另外建议大家准备交学费的时候，实时上NYU的官网，去看当时最新的学校提供的官方信息。
                                </Typography>                               
                            </Box>
                        </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mt:3, mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: { xs: '1.2rem', md: '2rem' } }}>
                        体检
                    </Typography>
                </Box>

                <Box sx={lightPurpleBackground}>
                    <Typography variant="h6" sx={{ lineHeight: 2, mb: 3, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            官网教程：
                            <a href="https://www.nyu.edu/students/health-and-wellness/next-stop-health-requirements/immunization-requirements.html#how-to"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                Immunization Requirements
                            </a>
                    </Typography>
                    <MedicalSteps />
                    <Typography variant="h6" sx={{ lineHeight: 2, mt: 5, mb: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            以下仅供参考：
                    </Typography>

                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            mb: 4
                        }}
                    >
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 2 , my: 4, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                            一般体检时需要携带的重要文件
                        </Typography>
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            疫苗记录表格（官网下载的学校疫苗要求表）
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            2寸证件照若干张
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            护照原件&复印件
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            身份证原件&复印件
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            录取通知书
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            I-20
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            过往疫苗接种记录原件&复印件
                        </Typography>
                    </Box>

                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
                        保险
                    </Typography>
                </Box>
                <Box component="ul" sx={{ listStyle: 'none', padding: 0, mb: 4, ...lightPurpleBackground }}>
                    <li>
                    <Typography variant="h6" sx={{ lineHeight: 2, mb: 3, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            NYU默认保险：
                            <a href="https://www.nyu.edu/content/dam/nyu/studentHealthServices/documents/insurance/2023-2024 Tandon Student Health Insurance Brochure.pdf"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                Student Health Plan 2023-2024
                            </a>
                    </Typography>
                    </li>
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345, minHeight:220}}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                    门诊服务
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <List>
                                        <Typography> NYU Student Health Center 向入学学生提供了很多免费的医疗服务，最常见的就是 Primary Care，也就是所谓的门诊，学生可以前往位于 726 Broadway 和 6 Metrotech 的诊所免费接收治疗。</Typography>
                                    </List>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345, minHeight:220 }}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                    免费体检
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Typography> SHC 还为学生提供了体检服务，学生可以免费到 726 Broadway 和 6 Metrotech 体检，这些体检内容包括血检以及很多常见的体检项目。然而还是有些项目是需要收费的比如 X 光，MMR 检测等都是需要学生或保险公司支付额外费用。</Typography>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345, minHeight:220 }}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                    心理咨询
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Typography> SHC 向学生免费开放任何心理治疗项目包括短期的心理咨询服务、自我提高的课程、以及临床评估。此外，SHC 还开放 7 天 24 小时的心理咨询热线让学生随时随地都能获得帮助，学习压力大的学生不妨可以打热线来寻求帮助。</Typography>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

                </Box>


                <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: { xs: '1.2rem', md: '2rem' } }}>
                        准备重要文件
                    </Typography>
                </Box>

                <Box sx={lightPurpleBackground}>
                    <Typography variant="h6" sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        首先是办理入学时需要的证件，以及在美国生活期间你要办理各种手续是会需要用到的文件，务必一起带到美国来并妥善保管。
                    </Typography>

                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            mb: 4
                        }}
                    >
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 2 , my: 4, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                            重要文件
                        </Typography>
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            护照
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            I-20 （来美国后找OGS更新签名）
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            DS-160
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            NYU 录取通知书
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            过往正式成绩单（密封好＋章）
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            过往毕业证书和学位证书的原件、复印件和英文翻译件
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            缴纳学费的收据
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            疫苗注射表，体检报告（小红本），疫苗证书（小黄本）
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            住房合同，住宿地址&联系人信息（过海关可能会看）
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            国内驾照/驾照翻译本/国际驾照
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            证件照若干张
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            资产证明
                        </Typography>

                    </Box>

                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mt:3, mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: { xs: '1.2rem', md: '2rem' } }}>
                        准备四季衣服
                    </Typography>
                </Box>
                <Box component="ul" sx={{ listStyle: 'none', padding: 0, mb: 4, ...lightPurpleBackground }}>
                        <Typography variant="h6" sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        四季日常衣物，天气可以参考北京天气，不用带很多，来纽约之后你一定会去逛街且忍不住剁手。可以薄厚各带三至四套，一件羽绒服，一套正装。如果是体型比较纤细的女生，建议可以多带一些，毕竟欧美的尺码跟亚洲人会有差距，不过有耐心的慢慢找也有很多合适的！
                        另外商务正装是必备的，在NYU你会遇到大量的presentation，面试，career fair等正式场合需要你dress up，精致出席！
                        </Typography>  
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mt:3, mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: { xs: '1.2rem', md: '2rem' } }}>
                        准备日常用品
                    </Typography>
                </Box>

                <Box component="ul" sx={{ listStyle: 'none', padding: 0, mb: 4, ...lightPurpleBackground }}>
                    <li>
                        <Typography variant="h6" sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }}>
                            1. 床上用品
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            可以带（但是在箱子里占地面积真的很大...）
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }}>
                            2. 小饰品
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            可以多带些饰品、头绳、手机壳等等装饰品。这种经常神秘失踪又不占行李空间的东西可以多带一些有备无患，毕竟美国没有某宝这样又便宜能包邮还能快速送达的神仙平台。
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }}>
                            3. 眼镜
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            太阳镜，近视镜，隐形眼镜最好先在国内配好。美国买框架眼镜和隐形都很方便，但是配眼镜需要重新按美国标准验光，价格不菲。尤其喜欢运动打篮球的男同学一定要多带几副眼镜，留着备用。
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }}>
                            4. 电器
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            美国的电器物美价廉，而且因为电压不同，不建议从国内带电器。可以带上各种充电器，数据线，转换插头和插线板。
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }}>
                            6. 药品
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            感冒药，消炎药，退烧药，创口贴，润喉片，西瓜霜，抗过敏药等等。特殊药品最好带上处方单。除了抗生素类药品，很多日常药都能在药店买到。常备自用药（肠胃药、感冒药、过敏药等，❌不要带任何中草药、止咳糖浆、红花油等药品。特殊药品最好带上处方单。除了抗生素类药品，很多日常药都能在药店买到。）

                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }}>
                            7. 现金和visa卡
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            现金尽量换一些零钱（很多地方不收百元大钞或者携带不安全），然后再带一些整钱、支票等，可以在之后存入银行。各种银行的留学信用卡，可以和父母一起办理主卡和副卡。
                        </Typography>
                    </li>
                </Box>

            </Box>
        </ThemeProvider>
    );
}

