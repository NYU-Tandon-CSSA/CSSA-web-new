import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const theme = createTheme({
    typography: {
        // fontFamily: "YouSheBiaoTiHei",
        fontFamily: "Noto Sans SC",
        // fontSize: 15,
        fontWeight:"500",
        h5:{
            fontFamily: "YouSheBiaoTiHei",
        },
        h6:{
            fontFamily: "YouSheBiaoTiHei",
        },
        subtitle1:{
            fontFamily: "YouSheBiaoTiHei",
        }
    },
  });

export default function Visa() {
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

                <Typography variant="h5" gutterBottom>
                    1. 重要文件
                </Typography>
                <Typography gutterBottom>
                首先是最重要的办理入学时需要的各种证件！
                护照，I-20 表格，DS-2019，正式成绩单（密封好＋骑缝章），毕业证书和学位证书的原件、复印件和英文翻译件，疫苗注射表（仅针对未提交的同学）。
                另外，有驾照的同学可以带着驾照，在新泽西州持有中国驾照可以直接进行笔试拿到美国驾照。
                </Typography>

                <Typography variant="h5" gutterBottom>
                    2. 衣服
                </Typography>
                <Typography gutterBottom>
                不用带很多，来纽约之后看到各式各样的衣服鞋子你一定会忍不住剁手的。可以薄厚各带三至四套，一件羽绒服，一套正装。如果是体型比较瘦小的妹子，建议可以多带一些，毕竟欧美的尺码你懂的，不过有耐心的慢慢找也有很多合适的漂亮衣服噢～
                
                </Typography>

                <Typography variant="h5" gutterBottom>
                    3. 生活用品
                </Typography>

                <Typography variant="h6" gutterBottom>
                    床上用品
                </Typography>

                <Typography gutterBottom>
                    可以带（但是在箱子里占地面积真的很大！）。
                </Typography>

                <Typography variant="h6" gutterBottom>
                    发饰头绳
                </Typography>
                <Typography gutterBottom>
                    女生们可以多带些发饰和头绳（这种经常神秘失踪的东西多带一些有备无患，况且美国的不是太难看就是太贵）。
                </Typography>

                <Typography variant="h6" gutterBottom>
                    眼镜
                </Typography>
                <Typography gutterBottom>
                    太阳镜，近视镜最好在国内配好（美国配眼镜需要验光，而且价格不菲。尤其喜欢运动打篮球的男同学一定要多带几副眼镜，留着备用）。
                </Typography>

                <Typography variant="h6" gutterBottom>
                    食物
                </Typography>
                <Typography gutterBottom>
                    其他的物品很方便就可以买到啦，尤其是食物，所以不要千里迢迢再背老干妈过来了，中超里、亚米网站上只有你想不到没有你买不到！
                </Typography>

                <Typography variant="h5" gutterBottom>
                    4. 电器
                </Typography>
                <Typography gutterBottom>
                美国的电器物美价廉，而且因为电压不同，不建议从国内带电器。可带转换插头和插线板。但是如果有需要可以带投影仪，国内很便宜～
                </Typography>

                <Typography variant="h5" gutterBottom>
                    5. 药品
                </Typography>
                <Typography gutterBottom>
                    感冒药，消炎药，退烧药，创口贴，润喉片，西瓜霜，抗过敏药等等。特殊药品最好带上处方单。除了抗生素类药品，很多日常药都能在药店买到。
                </Typography>

                <Typography variant="h5" gutterBottom>
                    6. 现金和支票
                </Typography>
                <Typography gutterBottom>
                    现金尽量换一些零钱（很多地方不收百元大钞或者携带不安全），然后再带一些整钱、支票等，可以在之后存入银行。
                </Typography>

                

            </Box>
        </ThemeProvider>
    )
}