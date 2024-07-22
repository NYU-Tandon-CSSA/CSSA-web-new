import React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider, useMediaQuery } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

// Image import
import simCover from '../../images/fhImage/sim_cover.jpg';
import carrier from '../../images/fhImage/carriers.jpg';

// Theme setup
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

export default function SimCard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                mb: 2,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
            }}>
                <Box
                    sx={{
                        height: '300px',
                        backgroundImage: `url(${simCover})`,
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
                        关于电话卡
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                        快速解决通讯问题。
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
                        落地快速通网
                    </Typography>
                </Box>
                
                <Box sx={lightPurpleBackground}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                        <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            刚落地纽约机场的时候，你可以通过连接机场的免费Wi-Fi来联系别人，或者开通国际漫游服务。此外，你还可以在机场购买本地SIM卡并激活，获得本地号码和通讯服务。另一个方法就是使用eSIM，这样你甚至无需更换实体电话卡。希望大家在落地纽约后能马上顺利与家人和朋友取得联系!
                        </Typography>
                    </Box> 
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
                        美国常用通讯运营商
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Box
                        component="img"
                        src={carrier}
                        alt="Carrier Logo"
                        sx={{ width: { xs: '100%', md: '90%' }, height: '100%', objectFit: 'cover', mr: { xs: 0, md: 3 }, mb: { xs: 3, md: 0 } }}
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mt: 5, mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
                        购买电话卡和套餐
                    </Typography>
                </Box>

                <Box sx={lightPurpleBackground}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                        <Typography sx={{ lineHeight: 2, mb: 0, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            你可以提前几天到运营商官网或APP上网购电话卡，并邮寄到你的纽约住址，也可以在机场现场购买或到纽约市区线下办理。
                            运营商提供的套餐一般分为以下几种，大家可以到具体的运营商官网或线下门店去了解，按自己的需求选择：
                        </Typography>
                    </Box> 
                    <Typography variant="h6" sx={{ lineHeight: 4, mb: 0, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                        Monthly Plan
                    </Typography>
                    <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        按月收费。用户每月会收到账单并支付使用费。
                        有些月度计划需要签订长期合约（通常是12或24个月），有些则是无合约的，可以随时取消。
                        可以设置每月自动支付，避免忘记充值的问题。但如果有合约，取消或更改套餐可能会产生罚金。
                        这种套餐一般要和手机设备一起购买，也就是买新手机的同时绑定通讯套餐，享受优惠。
                    </Typography>
                    <Typography variant="h6" sx={{ lineHeight: 4, mb: 0, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                        Prepaid Plan
                    </Typography>
                    <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        用户需要提前支付所选套餐的费用，使用完预付费后需再次充值。
                        大多数预付费套餐没有长期合约，用户可以根据需要随时更改或取消套餐。
                    </Typography>
                    <Typography variant="h6" sx={{ lineHeight: 4, mb: 0, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                        Family Plan
                    </Typography>
                    <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        家庭套餐最经济实惠。你可以和同学朋友，组成“家庭成员”共享一个套餐，通常比每人单独购买更划算。
                        但这种方式也有一个很大的缺点，就是所有“家庭成员”共享一个账单，你们之间需要一直保持绑定关系，并不灵活。
                    </Typography>
                </Box>






            </Box>
        </ThemeProvider>
    );
}
