import React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Grid, CardActionArea,useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';


// image
import rentCover from '../../images/fhImage/rent_cover.jpg';
import walkUP from '../../images/fhImage/Walkup_Building.jpg'
import apartment from '../../images/fhImage/Apartment.jpg'
import luxury from '../../images/fhImage/luxury-apartment.jpg';

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

export default function Rent() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                mb: 2,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                overflowY: "scroll"
            }}>
                <Box
                    sx={{
                        height: '300px',
                        backgroundImage: `url(${rentCover})`,
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
                        关于租房
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                        本篇针对校外租房。
                    </Typography>
                </Box>

                <Typography variant="h6" gutterBottom>
                租房是留学生来到美国面临的一个大问题。纽约房源众多，如何选到最满意的那一个？Tandon CSSA选择租房篇为新生手册的第三篇，为大家带来最全面、最专业并且最适合Tandon学生的房源分析。
                </Typography>
                <Typography variant="h4" gutterBottom>
                    纽约 Rental Building 类型
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image= {walkUP}
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Walk-up Building
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <List>
                                        <Typography>- 没有电梯，6层左右纽约特色小楼，窗外有防火救生梯</Typography>
                                        <Typography>- 没有门卫，一般会有电子监控，快递一般放在mail box附近，租户回家自取</Typography>
                                        <Typography>- 房子外观老旧，内部多重新升级装修过房间小，非常挑房型</Typography>
                                        <Typography>- 一般作为rental building出租的walk-up building位置都还不错，所以价格并不一定比luxury building便宜多少</Typography>
                                    </List>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={apartment}
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    普通电梯楼
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <ul>
                                        <li>
                                            <Typography>有电梯，有laundry room</Typography>
                                        </li>
                                        <li>
                                            <Typography>部分楼有门卫，可代收包裹；无门卫的楼都有电子监控，快递会被放在一楼lobby</Typography>
                                        </li>
                                        <li>
                                            <Typography>有live in super，任何时候需要维修或者有问题都可以联系他们</Typography>
                                        </li>
                                        <li>
                                            <Typography>大楼比较旧，但是屋内大部分都是全新装修过, 房间比较大，厨房小. 交通位置较好</Typography>
                                        </li>
                                        <li>
                                            <Typography>部分楼曾有过老鼠蟑螂虫蚁等问题</Typography>
                                        </li>
                                    </ul>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={luxury}
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    豪华公寓楼
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <ul>
                                        <li>
                                            <Typography>有电梯、有24小时门卫、提供保安维修服务和代租客泊车服务</Typography>
                                        </li>
                                        <li>
                                            <Typography>健身房、洗衣房、休闲商务中心、露台，是基本标配，除此以外有的大楼还会有泳池、停车场、影音室、派对室、宠物SPA、遛狗、自行车存放、等额外设施</Typography>
                                        </li>
                                        <li>
                                            <Typography>有楼内物业管理，报修之后24小时之内各种问题可以得到处理</Typography>
                                        </li>
                                        <li>
                                            <Typography>相比walk-up和普通电梯楼，安全能得到保证</Typography>
                                        </li>
                                    </ul>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

            </Box>
        </ThemeProvider>
    )
}