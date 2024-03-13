import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, CardActionArea, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

// image
import walkUP from '../../images/fhImage/Walkup_Building.jpg'
import apartment from '../../images/fhImage/Apartment.jpg'
import luxuryApt from '../../images/fhImage/luxuryApt.jpg'
import BrooklynBridge from '../../images/fhImage/BrooklynBridge.jpg'

// Icon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const theme = createTheme({
    typography: {
        // fontFamily: "YouSheBiaoTiHei",
        fontFamily: "Noto Sans SC",
        // fontSize: 15,
        fontWeight:"500",
        h6:{
            fontFamily: "YouSheBiaoTiHei",
        },
        h5:{
            fontFamily: "YouSheBiaoTiHei",
        },
        h4:{
            fontFamily: "YouSheBiaoTiHei",
        },
        subtitle1:{
            fontFamily: "YouSheBiaoTiHei",
        }
    },
});

export default function Rent() {

    // Initial height for BKDT Card
    const [isBkdtExtended, setisBkdtExtended] = useState(false);
    const [cardBkdtHeight, setcardBkdtHeight] = useState('700px');

    const handleToggleExtendBkdt = () => {
        if (isBkdtExtended) {
            setcardBkdtHeight('700px'); // Collapsed height
            setisBkdtExtended(false);
        } else {
            setcardBkdtHeight('auto'); // Expanded to fit content
            setisBkdtExtended(true);
        }
    };

    // Initial height for BK Card
    const [isBkExtended, setisBkExtended] = useState(false);
    const [cardBkHeight, setcardBkHeight] = useState('600px');

    const handleToggleExtendBk = () => {
        if (isBkExtended) {
            setcardBkHeight('600px'); // Collapsed height
            setisBkExtended(false);
        } else {
            setcardBkHeight('auto'); // Expanded to fit content
            setisBkExtended(true);
        }
    };

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
                                image={luxuryApt}
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


                    <Grid item xs={12} >
                        <Card sx={{overflow: 'hidden', maxHeight: cardBkdtHeight, transition: 'max-height 0.3s ease'}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="350"
                                image={BrooklynBridge}
                                alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Downtown Brooklyn
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <ul>
                                            <li>
                                                <Typography>布鲁克林Downtown是布鲁克林众多区域中的一块，也算是布鲁克林的交通、商业中心了。</Typography>
                                            </li>
                                            <li>
                                                <Typography>布鲁克林downtown内除了有NYU Tandon，还有长岛大学，Pratt等高校，还有各大金融机构的大楼，区内有不少Rental Building。</Typography>
                                            </li>
                                            <li>
                                                <Typography>区内交通便利，生活配套比较完善，综合来说是布鲁克林地区最适合学生租房的区域。</Typography>
                                            </li>
                                            <li>
                                                <Typography>布鲁克林downtown有众多地铁线，包括2、3、4、5、A、B、C、Q、R、N以及长岛火车，交通方便。</Typography>
                                            </li>
                                            <li>
                                                <Typography>地铁至曼哈顿中城只需20分钟，至NYU主校区只需15分钟，至曼哈顿或Brooklyn 中国城也只需20分钟。</Typography>
                                            </li>
                                        </ul>
                                    </Typography>

                                    {/* <Typography variant="h5">房租价格</Typography> */}

                                    {/* Extended Part*/}
                                    {isBkdtExtended && (
                                        <div>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Downtown Brooklyn 房租价格
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary" sx={{marginTop: 2}}>
                                                <ul>
                                                    <li>Studio:         $2,200 - $2,900</li>
                                                    <li>One Bedroom:    $2,800 - $3,800</li>
                                                    <li>Two Bedrooms:   $3,500 - $5,700</li>
                                                    <li>Three Bedrooms: $6,000 - $8,500</li>
                                                </ul>
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                推荐大楼
                                            </Typography>
                                        </div>
                                    )}
                                    <Button variant="contained" className='nyuColor' onClick={handleToggleExtendBkdt}>
                                        {isBkdtExtended ? <ExpandLessIcon/> : <>房租价格<ExpandMoreIcon /></>}
                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} >
                        <Card sx={{overflow: 'hidden', maxHeight: cardBkHeight, transition: 'max-height 0.3s ease'}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="300"
                                image={luxuryApt}
                                alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Downtown 南区（八大道）
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
                                    {/* Extended Part*/}
                                    {isBkExtended && (
                                        <Typography variant="body2" color="text.secondary" sx={{marginTop: 2}}>
                                            <ul>
                                                <li>额外设施包括泳池、停车场、影音室等</li>
                                                <li>宠物SPA、遛狗服务、自行车存放</li>
                                            </ul>
                                        </Typography>
                                    )}
                                    <Button variant="contained" onClick={handleToggleExtendBk}>
                                        {isBkExtended ? 'Less' : 'More'}
                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} >
                        <Card sx={{overflow: 'hidden', maxHeight: cardBkHeight, transition: 'max-height 0.3s ease'}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="200"
                                image={luxuryApt}
                                alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Downtown 南区（八大道）
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
                                    {/* Extended Part*/}
                                    {isBkExtended && (
                                        <Typography variant="body2" color="text.secondary" sx={{marginTop: 2}}>
                                            <ul>
                                                <li>额外设施包括泳池、停车场、影音室等</li>
                                                <li>宠物SPA、遛狗服务、自行车存放</li>
                                            </ul>
                                        </Typography>
                                    )}
                                    <Button variant="contained" onClick={handleToggleExtendBk}>
                                        {isBkExtended ? 'Less' : 'More'}
                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} >
                        <Card sx={{overflow: 'hidden', maxHeight: cardBkHeight, transition: 'max-height 0.3s ease'}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="200"
                                image={luxuryApt}
                                alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Downtown 南区（八大道）
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
                                    {/* Extended Part*/}
                                    {isBkExtended && (
                                        <Typography variant="body2" color="text.secondary" sx={{marginTop: 2}}>
                                            <ul>
                                                <li>额外设施包括泳池、停车场、影音室等</li>
                                                <li>宠物SPA、遛狗服务、自行车存放</li>
                                            </ul>
                                        </Typography>
                                    )}
                                    <Button variant="contained" onClick={handleToggleExtendBk}>
                                        {isBkExtended ? 'Less' : 'More'}
                                    </Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </ThemeProvider>
    )
}