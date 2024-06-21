import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import OfferSteps from './offerSteps';

// cover image
import visaCover from '../../images/fhImage/visa_cover.jpg';
import NYUStartImage from '../../images/fhImage/NYUStartImg.png';

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
        }
    },
});

const iconStyle = {
    color: '#57068c',  
    fontSize: '1.5rem',  
    marginRight: '8px'
};

export default function Visa() {
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
                        backgroundImage: `url(${visaCover})`,
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
                        关于签证
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ lineHeight: 1.8 }}>
                        本页面针对F1签证，
                        更多官方详细信息请参考NYU网站‘Get a US visa’
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2 }}>
                        第一步：准备申请I-20的文件
                    </Typography>
                </Box>

                <Box component="ul" sx={{ listStyle: 'none', padding: 0, mb: 4 }}>
                    <li>
                        <Typography variant="h6" sx={{ lineHeight: 2, mb: 1 }}>
                            明确申请身份
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            如果你要申请F-1身份，则需要获取I-20；如果你要申请J-1身份，则需要获取DS-2019。以下指引仅针对F-1签证，如果有需要申请J-1签证，请参考链接。
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 2, mb: 1 }}>
                            接受录取并保存录取通知书
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 5 }}>
                            <Box
                                component="img"
                                src={NYUStartImage}
                                alt="NYU start page"
                                sx={{ width: '50%', height: 'auto', mr: 3 }}
                            />
                            <OfferSteps />
                        </Box>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 2, mb: 1 }}>
                            准备其他文件
                        </Typography>
                        <ul>
                            <Typography sx={{ lineHeight: 2, mb: 1 }}>
                                护照个人资料页的清晰复印件
                            </Typography>
                        </ul>
                        <ul>
                            <Typography sx={{ lineHeight: 2 }}>
                                资金证明: 你需要文件来证明你可以支付在纽约大学就读第一年的预计费用，包括学杂费、生活费和健康保险。如果你的课程少于一年，则证明你能够支付课程期间的所有费用。资金证明必须为英文，且不能是超过 6 个月以前的文件。
                                所有资金必须流动。资金参考链接
                            </Typography>
                        </ul>
                    </li>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2 }}>
                        第二步：申请I-20或DS-2019
                    </Typography>
                </Box>
                <Typography gutterBottom sx={{ lineHeight: 2, mb: 4 }}>
                    准备你的相关文件，包括Admission Letter，护照以及资产证明
                    填写I-20申请表。
                    通常应该会在提交I-20申请后的2周内收到I-20。
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2 }}>
                        第三步：申请签证
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mb: 4
                    }}
                >
                    <Box
                        sx={{
                            width: '80%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            mb: 4
                        }}
                    >
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 2 , my: 4}}>
                            申请签证必备材料
                        </Typography>
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            护照（有效期六个月以上），所有旧护照也需要一起带上
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            身份证原件
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            学校发的I-20
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            SEVIS缴费收据
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            DS-160表确认页打印版（需上传电子照片）
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            签证费缴费凭证
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            面签预约确认打印单
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            录取通知书
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            符合大使馆格式要求的电子照及相应的两张实体照
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            资金证明：要高于I-20上显示的金额
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: '80%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 2 , my: 4}}>
                            辅助材料
                        </Typography>
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            户口本
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            学习计划，课程表
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            简历
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            以往成绩单
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            以往毕业证
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            NYU以及在NYU就读专业的介绍
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            导师简历
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            作品集
                        </Typography>
                        <Divider sx={{ width: '80%', my: 2 }} />
                        <Typography gutterBottom sx={{ lineHeight: 2 }}>
                            其他资金证明
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
