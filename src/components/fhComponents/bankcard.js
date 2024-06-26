import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// image
import bankCover from '../../images/fhImage/bank_cover.jpg';

const theme = createTheme({
  typography: {
    // fontFamily: "YouSheBiaoTiHei",
    fontFamily: "Noto Sans SC",
    // fontSize: 15,
    fontWeight: "500",
    h5: {
      fontFamily: "YouSheBiaoTiHei",
      fontWeight: "bold",
      // color: "#E1BEE7" 
    },
    h6: {
      fontFamily: "Ma Shan Zheng",
    },
    subtitle1: {
      fontFamily: "Noto Serif SC",
      
    },
    body: {
      fontFamily: "YouSheBiaoTiHei",
      fontSize: 17,
    },
  },
});

export default function SimCard() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          overflowY: "scroll",
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
                这是简介。
            </Typography>
        </Box>
        <Typography variant="h5" gutterBottom>
        国内信用卡及借记卡指南
        </Typography>
        <Typography variant="body" gutterBottom>
        国内带的信用卡按推荐程度排序：首选自己的visa/mastercard信用卡 》 让父母办信用卡副卡 》 自己办借记卡。但要注意，副卡可能会导致父母在国内深夜接到银行的消费确认电话，且父母可以看到你的每笔交易记录。
        </Typography>
        <Typography variant="body" gutterBottom>
        如果信用卡和副卡都无法办理，可以考虑借记卡。但不推荐使用中国银行的visa/mastercard借记卡，使用体验不佳。
        </Typography>
        <Typography variant="body" gutterBottom>
        注意，无论是哪种卡，都不应办理双标卡（一张卡上同时有银联和visa/master的标志），因为这种卡通常不含芯片，且在美国多数地方无法使用。
        </Typography>

        <Typography variant="h5" gutterBottom>
        携带现金与安全提示
        </Typography>
        <Typography variant="body" gutterBottom>
        关于携带现金，从国内带来的现金限额是5000美元，建议不要超过这个数额。但在你办理美国银行卡前，带一些现金是必要的，因为有时候国内银行系统维护，而你可能急需使用现金。
        </Typography>

        <Typography variant="h5" gutterBottom>
        美国银行账户开设与管理
        </Typography>
        <Typography variant="body" gutterBottom>
        到美国后，首先应到本地的银行如Chase、Bank of America等开设账户。开设Checking account时通常会获得一张借记卡。建议根据学校附近的银行情况选择合适的银行。注意，银行开户可能需要预约。
        </Typography>
        <Typography variant="body" gutterBottom>
        存入现金时，如果超过5000美元，请分批存入，避免银行因此关闭你的账户。
        </Typography>

        <Typography variant="h5" gutterBottom>
        美国信用卡的申请与优势
        </Typography>
        <Typography variant="body" gutterBottom>
        办好银行账户和借记卡后，可以考虑申请信用卡。Chase银行需要你在账户中存有至少1000美元才能申请Freedom Rise卡；而BoA银行的Customized Cash Rewards卡则不需要SSN，存款越多，获批几率越高，信用额度也越高。其他银行如申请Discover It卡则需要SSN。
        </Typography>
        <Typography variant="body" gutterBottom>
        F1学生可以通过在校内找任何工作获取SSN，工作类型和时长不限。
        </Typography>

      </Box>
    </ThemeProvider>
  );
}
