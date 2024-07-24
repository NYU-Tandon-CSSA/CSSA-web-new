import React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Grid, CardActionArea,useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import OfferSteps from './offerSteps';


// image
import rentCover from '../../images/fhImage/rent_cover.jpg';
import walkUP from '../../images/fhImage/Walkup_Building.jpg'
import apartment from '../../images/fhImage/Apartment.jpg'
import luxury from '../../images/fhImage/luxury-apartment.jpg';
import nycmap from '../../images/fhImage/nyc_map.jpg';

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
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: { xs: '1.2rem', md: '2rem' } }}>
                    校外租房
                </Typography>
            </Box>
            
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, mb: 4, ...lightPurpleBackground }}>
            
            <Typography variant="h6" gutterBottom>
            作为一名即将到来的新生，你可能对在纽约的住宿安排感到兴奋和有些不安。纽约房源众多，如何挑选到最满意的新家？在这里，Tandon CSSA为你准备了一些关于在纽约租房的基本信息，希望你能对各种房源有一个基本的了解，帮助你顺利过渡到新生活。
                </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: { xs: '1.2rem', md: '2rem' } }}>
            纽约热门租房区域
                </Typography>
            </Box>
            
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, mb: 4, ...lightPurpleBackground }}>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
              <Box
                  component="img"
                  src={nycmap}
                  alt="nycmap"
                  sx={{ width: { xs: '100%', md: '80%' }, height: '100%', objectFit:'cover', mr: { xs: 0, md: 3 }, mb: { xs: 3, md: 0 } }}
              />
            </Box>
            
            <Typography variant="h6" sx={{ lineHeight: 3, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                1. Brooklyn Downtown
            </Typography>
            <Typography sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                <ul>
                    <li>
                        <Typography>最适合Tandon学生租房的区域，上学可以步行至教学楼，再也不怕早八迟到啦</Typography>
                    </li>
            <li>
                <Typography>公共交通非常便利，上岛只需10min左右</Typography>
            </li>
            <li>
                <Typography>大部分房屋都是新公寓，设施齐全，且价格适中，容易找到Tandon的室友</Typography>
            </li>
            </ul>
            </Typography>
            
            <Typography variant="h6" sx={{ lineHeight: 3, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                2. Manhattan
            </Typography>
            <Typography sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                <ul>
                    <li>
                        <Typography>距离Tandon有一定距离，通勤时间在20-30min不等</Typography>
                    </li>
            <li>
                <Typography>公寓价格普遍偏高，且面积较小设施比较旧</Typography>
            </li>
            <li>
                <Typography>离NYU main campus比较近，去NYU的其他设施（如教学楼，健身房，体育馆）只需步行</Typography>
            </li>
            </ul>
            </Typography>
            
            <Typography variant="h6" sx={{ lineHeight: 3, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                3. Jersey City
            </Typography>
            <Typography sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                <ul>
                    <li>
                        <Typography>有很多新公寓，且大部分公寓都不需要担保</Typography>
                    </li>
            <li>
                <Typography>房子性价比超高！同样价格在Jersey的房子是最大最新的！</Typography>
            </li>
            <li>
                <Typography>社区环境干净整洁，生活配套完善</Typography>
            </li>
            <li>
                <Typography>距离Tandon较远，公共交通需要path转地铁才能到达，需要50-60min不等</Typography>
            </li>
            </ul>
            </Typography>
            
            </Box>
            
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: { xs: '1.2rem', md: '2rem' } }}>
            纽约 Rental Building 类型
                </Typography>
            </Box>
            
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, mb: 4, ...lightPurpleBackground }}>
            
            <Typography variant="h6" sx={{ lineHeight: 3, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                1. Walk-up Building
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
              <Box
                  component="img"
                  src={walkUP}
                  alt="walkUP"
                  sx={{ width: { xs: '100%', md: '40%' }, height: '100%', objectFit:'cover', mr: { xs: 0, md: 3 }, mb: { xs: 3, md: 0 } }}
              />
            
            <Typography sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                <ul>
                    <li>
                        <Typography>没有电梯，6层左右纽约特色小楼，窗外有防火救生梯</Typography>
                    </li>
                    <li>
                        <Typography>没有门卫，一般会有电子监控，快递一般放在mail box附近，租户回家自取</Typography>
                    </li>
                    <li>
                        <Typography>房子外观老旧，内部多重新升级装修过房间小，非常挑房型</Typography>
                    </li>
                    <li>
                        <Typography>一般作为rental building出租的walk-up building位置都还不错，所以价格并不一定比luxury building便宜多少</Typography>
                    </li>
                </ul>
            </Typography>
            </Box>
            
            
            <Typography variant="h6" sx={{ lineHeight: 3, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                2. 普通电梯楼
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
              <Box
                  component="img"
                  src={apartment}
                  alt="apartment"
                  sx={{ width: { xs: '100%', md: '40%' }, height: '100%', objectFit:'cover', mr: { xs: 0, md: 3 }, mb: { xs: 3, md: 0 } }}
              />
            
            <Typography sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                <ul>
            <li>
                <Typography>有电梯，有公共的laundry room</Typography>
            </li>
            <li>
                <Typography>部分楼有门卫，可代收包裹；无门卫的楼都有电子监控，快递会被放在一楼lobby</Typography>
            </li>
            <li>
                <Typography>有live in super，任何时候需要维修或者有问题都可以联系他们</Typography>
            </li>
            <li>
                <Typography>大楼比较旧，但是屋内大部分都是全新装修过，房间比较大，厨房小， 交通位置较好</Typography>
            </li>
            <li>
                <Typography>部分楼曾有过老鼠蟑螂虫蚁等问题</Typography>
            </li>
                </ul>
            </Typography>
            </Box>
            
            <Typography variant="h6" sx={{ lineHeight: 3, mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                3. 豪华公寓楼
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
              <Box
                  component="img"
                  src={luxury}
                  alt="luxury"
                  sx={{ width: { xs: '100%', md: '40%' }, height: '100%', objectFit:'cover', mr: { xs: 0, md: 3 }, mb: { xs: 3, md: 0 } }}
              />
            
            <Typography sx={{ lineHeight: 2, mb: 1, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                <ul>
            <li>
                <Typography>有电梯、有24小时门卫、提供保安维修服务和代租客泊车服务</Typography>
            </li>
            <li>
                <Typography>健身房、洗衣房、休闲商务中心、露台都是基本标配，除此以外有的大楼还会有泳池、停车场、影音室、派对室、宠物SPA、遛狗、自行车存放等额外设施</Typography>
            </li>
            <li>
                <Typography>有楼内物业管理，报修之后24小时之内各种问题可以得到处理</Typography>
            </li>
            <li>
                <Typography>相比walk-up和普通电梯楼会更安全</Typography>
            </li>
                </ul>
            </Typography>
            </Box>
            
            </Box>
            
            </Box>
        </ThemeProvider>
    )
}
