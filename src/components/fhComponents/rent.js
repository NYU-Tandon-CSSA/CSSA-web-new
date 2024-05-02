import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, CardActionArea, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Rent() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
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
                </Grid>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Brooklyn Downtown - （首选）" {...a11yProps(0)} />
                    <Tab label="Brooklyn 南区" {...a11yProps(1)} />
                    <Tab label="Manhattan 曼岛" {...a11yProps(2)} />
                    <Tab label="New Jersey" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box elevation={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="Building Image"
                                height="140"
                                image=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Building Name
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    Description:
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Price:
                                </Typography>
                                <Typography variant="body2" color="text.secondary" display={'inline'}>
                                    Studio: {" "}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" display={'inline'}>
                                    $2000 - $3000
                                </Typography> 
                                <br></br>
                                <Typography variant="body2" color="text.secondary" display={'inline'}>
                                    1 Bed:  {" "}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" display={'inline'}>
                                    $3000 - $2000
                                </Typography> 
                                <br></br>
                                <Typography variant="body2" color="text.secondary" display={'inline'}>
                                    2 Bed:  {" "}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" display={'inline'}>
                                    $4000 - $5000
                                </Typography> 
                            </CardContent>
                            <CardActions>
                                <Button size="small">leasing office</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    Item Three
                </CustomTabPanel>
            </Box>
        </ThemeProvider>
    )
}