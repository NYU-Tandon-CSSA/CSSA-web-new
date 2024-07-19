import React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@mui/material';

// Image import
import simCover from '../../images/fhImage/sim_cover.jpg';

// Theme setup
const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans SC",
    fontWeight: "500",
    h5: {
        fontFamily: "YouSheBiaoTiHei",
    },
    h6: {
        fontFamily: "YouSheBiaoTiHei",
    },
    subtitle1: {
        fontFamily: "YouSheBiaoTiHei",
    },
    body1: {
        fontFamily: "Kaiti SC", 
        fontSize: '1.2rem', 
    },
  },
});

const iconStyle = {
    color: '#57068c',
    fontSize: '1.5rem',
    marginRight: '8px'
};

const sectionStyle = {
    backgroundColor: '#f9f6ff',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column'
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
                        美国的电话卡在哪里购买？如何购买通讯套餐？
                    </Typography>
                </Box>

                <Box sx={sectionStyle}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                        <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>手机卡购买说明</span>
                    </Typography>
                    <Typography sx={{ lineHeight: 1.5 }}>
                        提前准备好手机卡，不仅方便下飞机后及时跟父母报声平安，更便于联系接机同学，安排接下来的行程。那么美国的手机卡应该在哪里购买，如何购买呢？
                    </Typography>
                </Box>

                <Box sx={sectionStyle}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                        <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>美国通讯模式</span>
                    </Typography>
                    <Typography sx={{ lineHeight: 1.5 }}>
                        首先向大家介绍一下美国通讯基本模式。同中国相同，美国通讯也拥有几大知名运营商，如ATT，T-Mobile，和Verizon等等。各运营商提供服务大致相同，不同套餐价格所含流量，通话分钟数不同，信号强弱也略有分别。运营商分别出售Monthly Plan（月付卡），Prepaid（预付款）卡和 Family Plan（家庭套餐）卡。
                    </Typography>
                </Box>

                <Box sx={sectionStyle}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                        <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>选择合适的套餐</span>
                    </Typography>
                    <Typography sx={{ lineHeight: 1.5 }}>
                        那么该如果选择呢？让我们来了解一下这三种模式吧。
                    </Typography>
                </Box>

                <Box sx={sectionStyle}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                        <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Monthly Plan详解</span>
                    </Typography>
                    <Typography sx={{ lineHeight: 1.5 }}>
                        这种是手机签约，一般需要签1～2年，每月支付固定费用，这个费用包含一定数量的电话分钟数、短信数量以及上网流量，签约后客户可以获得手机。还有一种就是套餐签约，这样的套餐有不少价格要比签约机要更低一点，一般至少需要签约一年。而且刚到美国的时候，签手机时移动提供商需要缴纳金及提供护照等相关证件。
                    </Typography>
                </Box>

                <Box sx={sectionStyle}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                        <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Prepaid计划详解</span>
                    </Typography>
                    <Typography sx={{ lineHeight: 1.5 }}>
                        每月定期扣款，提供一定数量的流量及通话分钟数，超额额外支付。类似国内的预付费卡。不需要前额红或支付月租费。用户可以先存任意价格的套餐，然后选择合适语音、短信和数据套餐进行消费。中国电信美洲公司CTExcel提供90天内停机保号服务，让您回美国后继续使用，灵活度较高。
                    </Typography>
                </Box>

                <Box sx={sectionStyle}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                        <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Family Plan详解</span>
                    </Typography>
                    <Typography sx={{ lineHeight: 1.5 }}>
                        一般一个套餐可含4-5人，4-5人共享一定数额的流量及通话,其中一个人当保人，负责每月缴费，大家一起分享总数固定的分钟和流量。价格上Family Plan因为多人共享，会较prepaid卡低廉一些，但因为plan中可能存在部分人拖欠缴费，流量用超等问题，很难协调矛盾。现在随着更多优质实惠的Prepaid套餐的出现，Family Plan的价格优势不再明显。
                    </Typography>
                </Box>

            </Box>
        </ThemeProvider>
    );
}
