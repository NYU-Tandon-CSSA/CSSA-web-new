import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// image
import transportCover from '../../images/fhImage/transport_cover.jpg';

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

export default function Transport() {
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
                backgroundImage: `url(${transportCover})`,
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
                关于交通
            </Typography>
            <Typography variant="h6" component="p" sx={{ lineHeight: 1.8 }}>
                在纽约，公共交通是首选。
            </Typography>
        </Box>
        
        <Typography variant="h5" gutterBottom>
          纽约地铁
        </Typography>
        <Typography gutterBottom>
          提到纽约的公共交通，首先想到的就一定是纽约全覆盖的纽约地铁。纽约地铁修建于1907年，设施相对老旧，但在2017年纽约地铁做了设施建设，现在的地铁站绝大部分已经实现信号覆盖（列车行驶途中大多依旧是没有信号的），而且有免费WI-FI！不过说实话，纽约的地铁依然是较为脏乱差的，但是我相信慢慢的你会接受甚至爱上这个极具时代感和艺术感的地铁系统，时不时的音乐，特有的腔调，真的。
          <br />
          关于具体的地铁线路规划，你只需要一个google map，
          出行线路就完全没有问题了。纽约地铁是24小时运营的，不过节假日或者周末或者夜间的班次会减少甚至改线，一定要注意多关注地铁系统张贴的临时改线的信息。
          <br />
          建议新生可以办月卡，
          刚来到纽约肯定要去很多地方，找房子什么的，而且前一个月学校的活动也很多。当然，如果住在学校附近就根据出行频率自己考虑吧。搭乘地铁时最好提前查好路线，一般uptown是去曼岛上城方向，downtown是去下城或布鲁克林方向。有些站点是两边互通的，不过有些站点不同方向的入口是分开在各自路的两侧，走错了就很麻烦了，刷卡之前最好看清楚入口标注的列车行驶方向。在纽约大学工学院附近，附近主要有Jay
          Street MetroTech、Dekalb、Hoyt
          st等地铁站，分布着2,3,A,B,C,F,R,Q等多条线路，非常方便，可以满足各种出行需求。
        </Typography>

        <Typography variant="h5" gutterBottom>
          公交车
        </Typography>
        <Typography gutterBottom>
          纽约公交车，相较地铁来说，因为间隔时间长，并没有那么便捷。不过，作为地铁的补充交通方式，还是需要跟大家介绍一下。纽约市共有3700辆公交车，行驶在200条线路上，每一区的公交车分别用该区英文名的第一个字母标注，但为了和布碌仑/布鲁克林区Brooklyn有所区分，布朗士区Bronx用BX标注。上车后，可以使用硬币或捷运卡MetroCard付费，但不接受纸币。巴士票价2.75美元，快车Express票价6.5美元，因为有零头，所以用捷运卡Metrocard付费更方便，而且还有优惠。之前地铁部分中提到的不限次数的7天或30天的Metrocard是包含普通巴士服务的但是不包括跨区的X巴士，这点要特殊注意。
          <br />
          如果使用按次付费的捷运卡，可以在付费两小时之内，免费从地铁转巴士，巴士转地铁或进行巴士间的转乘(一些线路除外)。付款机上显示“1
          Xfer OK”，即表示本次乘车是免费的。
          <br />
          如果使用硬币付款，在两小时内，可以在巴士间免费转乘。投币后，向司机要一张转程票transfer。这个票是一次性的捷运卡，付费后卡直接进入机器，不再弹出。
          另外需要注意的是，公交车并非每个车站都停，需要乘客手动提醒司机下一站有乘客下车。
        </Typography>

        <Typography variant="h5" gutterBottom>
          出租车
        </Typography>

        <Typography gutterBottom>
          在纽约，黄色的出租车也是一大风景线。车费自2.50美金起跳，之后每0.2公里或60秒收费0.5美元(晚间八点后自3块起跳，工作日高峰时间的下午4点至8点则由3.50元起跳)，此外若通过收费的桥梁及隧道时，乘客还得付额外费用。由于出租车司机算是提供服务，所以除了路费还要给小费至少10%。
          <br />
          另外，上午10点到下午4点，只能在出租汽车停靠点打车。如果司机不遵守在停车点停车的话会被罚款55美元。在这里建议大家优先选择打车软件。
        </Typography>

        <Typography variant="h5" gutterBottom>
          点召车
        </Typography>

        <Typography gutterBottom>
          纽约作为华人的聚居地之一，有很多华人电召车服务，有名的主要有金马，中华。如果要预约接机服务，可以网站预约也可以下飞机后电话预约，告诉他你是哪个航空公司的，说清楚在几号门，然后告诉要去的地方之后就可以坐等司机来接你了，一般10-20分钟左右就到了。
          <br />
          平时叫电召车的流程也是一样的。这里提醒大家注意两点，第一点是大部分华人电召车都可以中文交流的，第二点是一定要记得提前商量好车费及小费。
        </Typography>

        <Typography variant="h5" gutterBottom>
          Uber、Lyft
        </Typography>

        <Typography gutterBottom>
          相信这些软件大家都很熟悉了。美国的打车软件和中国的打车软件用法基本一样，输入你要达到的地方，有司机会接单，然后直接把你送到指定地点，不需要准备现金和卡，钱会直接从你Uber账号中扣的，小费也是可选择的，而且价格跟出租车相比便宜不少。注意选择信号较好以及标志性的叫车位置，确保司机能够顺利接到你。
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
