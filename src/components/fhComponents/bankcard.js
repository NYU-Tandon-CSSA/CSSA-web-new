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
import bankCover from '../../images/fhImage/bank_cover.jpg';

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

export default function BankCard() {
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
                backgroundImage: `url(${bankCover})`,
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
            <Typography variant="h3" component="h1" gutterBottom sx={{ lineHeight: 1.8 }}>
                关于银行卡
            </Typography>
            <Typography variant="h6" component="p" sx={{ lineHeight: 1.8 }}>
                如何妥善管理自己的钱财？
            </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
            <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
              国内信用卡及借记卡指南
            </Typography>
        </Box>

        <Box sx={lightPurpleBackground}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              国内带的信用卡按推荐程度排序：首选自己的visa/mastercard信用卡 > 让父母办信用卡副卡 > 自己办借记卡。但要注意，用副卡消费的话父母可能会在国内深夜接到银行的消费确认电话。
              如果信用卡和副卡都无法办理，可以考虑借记卡。
              无论是哪种卡，都不推荐办理双标卡（一张卡上同时有银联和visa/master的标志），因为这种卡通常不含芯片，且在美国多数地方无法使用。
            </Typography>
          </Box>         
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
            <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
              携带现金
            </Typography>
        </Box>
        <Box sx={lightPurpleBackground}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              关于携带现金，从国内带来的现金限额是5000美元，建议不要超过这个数额。但在你办理美国银行卡前，带一些现金是必要的，因为有时候国内银行系统维护，而你可能急需使用现金。
              而且建议身上多带些不同面额大小的现金，以备不时之需。
            </Typography>
          </Box>         
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
            <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
              美国银行账户开设与管理
            </Typography>
        </Box>
        <Box sx={lightPurpleBackground}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              到美国后，首先应到本地的银行，如Chase、Bank of America等开设账户。开设checking account时通常会获得一张借记卡。建议根据学校附近的银行情况选择合适的银行。
              注意，银行开户可能需要预约。可以提前打电话或在银行官网确认预约时间。
              存入现金时，如果超过5000美元，请分批存入，避免银行因此关闭你的账户。<br />
              <span style={{ display: 'block', marginTop: '16px' }}></span>
              关于checking和saving account的区别：美国的支票账户（checking account）主要用于日常开支和支付，具备高灵活性和便利性，但通常不支付利息；而储蓄账户（saving account）则用于积蓄和赚取利息，有取款和转账次数的限制，适合长期存款和资金增值。我们日常一般使用checking account。<br />
              <span style={{ display: 'block', marginTop: '16px' }}></span>
              不同情况的routing number：在美国，转账和电子支付（electric payment）的routing number有时是不一样的。
              我们有时支付学费或其他生活费时采取ACH转账，这时要给收款方提供一个routing number。另一种情况下，比如你的父母给你进行了国际电汇（Wire Transfer），也需要填写一个routing number。这两个routing number通常并不一样，注意提前通过银行或者手机银行确认。
            </Typography>
          </Box>         
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
            <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold', fontSize: isMobile ? '1.2rem' : '2rem' }}>
              美国信用卡
            </Typography>
        </Box>
        <Box sx={lightPurpleBackground}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Typography sx={{ lineHeight: 2, mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              办好银行账户和借记卡后，可以考虑申请信用卡。申请信用卡通常需要你拥有SSN。Chase银行需要你在账户中存有至少1000美元才能申请Freedom Rise卡；而BoA银行的Customized Cash Rewards卡则不需要SSN，存款越多，获批几率越高，信用额度也越高。其他银行如申请Discover It卡则需要SSN。
              F1学生可以通过在校内找任何工作获取SSN，工作类型和时长不限。
            </Typography>
          </Box> 
        </Box>
      </Box>
    </ThemeProvider>
  );
}
