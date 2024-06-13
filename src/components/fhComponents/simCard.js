import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  typography: {
    // fontFamily: "YouSheBiaoTiHei",
    fontFamily: "Noto Sans SC",
    // fontSize: 15,
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
         <Typography gutterBottom>
         提前准备好手机卡，不仅方便下飞机后及时跟父母报声平安，更便于联系接机同学，安排接下来的行程。那么美国的手机卡应该在哪里购买，如何购买呢？ 
         </Typography>
        <Typography gutterBottom>
          首先向大家介绍一下美国通讯基本模式。同中国相同，美国通讯也拥有几大知名运营商，如ATT，T-Mobile，和Verizon等等。各运营商提供服务大致相同，不同套餐价格所含流量，通话分钟数不同，信号强弱也略有分别。运营商分别出售Monthly Plan（月付卡），Prepaid（预付款）卡和 Family Plan（家庭套餐）卡。
        </Typography>
        <Typography gutterBottom>
          那么该如果选择呢？让我们来了解一下这三种模式吧。
          <br />
        </Typography>

        <Typography variant="h5" gutterBottom>
            Monthly Plan
        </Typography>
        <Typography gutterBottom>
            这种是手机签约，一般需要签1～2年，每月支付固定费用，这个费用包含一定数量的电话分钟数、短信数量以及上网流量，签约后客户可以获得手机。还有一种就是套餐签约，这样的套餐有不少价格要比签约机要更低一点，一般至少需要签约一年。而且刚到美国的时候，签手机时移动提供商需要缴纳金及提供护照等相关证件。
          <br />
        </Typography>

        <Typography variant="h5" gutterBottom>
            Prepaid
        </Typography>

        <Typography gutterBottom>
            每月定期扣款，提供一定数量的流量及通话分钟数，超额额外支付。类似国内的预付费卡。不需要前额红或支付月租费。用户可以先存任意价格的套餐，然后选择合适语音、短信和数据套餐进行消费。中国电信美洲公司CTExcel提供90天内停机保号服务，让您回美国后继续使用，灵活度较高。
          <br />
        </Typography>

        <Typography variant="h5" gutterBottom>
            Family Plan
        </Typography>

        <Typography gutterBottom>
            一般一个套餐可含4-5人，4-5人共享一定数额的流量及通话,其中一个人当保人，负责每月缴费，大家一起分享总数固定的分钟和流量。价格上Family Plan因为多人共享，会较prepaid卡低廉一些，但因为plan中可能存在部分人拖欠缴费，流量用超等问题，很难协调矛盾。现在随着更多优质实惠的Prepaid套餐的出现，Family Plan的价格优势不再明显。-20分钟左右就到了。
          <br />
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
