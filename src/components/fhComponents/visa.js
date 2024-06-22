import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import OfferSteps from './offerSteps';

// images
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

const noticeStyle = {
    border: '2px solid #af7ac5',
    padding: '16px',
    marginBottom: '16px',
    borderRadius: '8px',
    backgroundColor: '#f9f6ff',
    display: 'flex',
    alignItems: 'flex-start',
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
                        更多官方详细信息请参考NYU网站
                        <a href="https://www.nyu.edu/students/student-information-and-resources/student-visa-and-immigration/newly-admitted/before-you-arrive/get-a-us-visa.html"
                        style={{ color: '#fff', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            ‘Get a US visa’
                        </a>
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold' }}>
                        第一步：准备申请I-20的文件
                    </Typography>
                </Box>

                <Box component="ul" sx={{ listStyle: 'none', padding: 0, mb: 4, ...lightPurpleBackground }}>
                    <li>
                        <Typography variant="h6" sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                            1. 明确申请身份
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            如果你要申请F-1身份，则需要获取I-20；如果你要申请J-1身份，则需要获取DS-2019。
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            以下指引仅针对F-1签证，如果有需要申请J-1签证，请参考NYU网页
                            <a href="https://www.nyu.edu/students/student-information-and-resources/student-visa-and-immigration/newly-admitted/before-you-arrive/get-a-us-visa/prepare-your-documents.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            'Prepare Your Documents'
                            </a>。
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                            2. 接受录取并保存录取通知书
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
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                            3. 准备其他文件
                        </Typography>
                        <ul>
                            <li>
                            <Typography sx={{ lineHeight: 2, mb: 1 }}>
                                护照个人资料页的清晰复印件
                            </Typography>
                            </li>

                            <li>
                            <Typography sx={{ lineHeight: 2, mb: 2}}>
                                资金证明: 你需要文件来证明你可以支付在纽约大学就读第一年的预计费用，包括学杂费、生活费和健康保险。如果你的课程少于一年，则证明你能够支付课程期间的所有费用。资金证明必须为英文，且不能是超过 6 个月以前的文件。
                                所有资金必须流动。金额可参考NYU网页
                                <a href="https://www.nyu.edu/students/student-information-and-resources/student-visa-and-immigration/newly-admitted/before-you-arrive/estimated-expenses.html"
                                style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                'Estimated Expenses'
                                </a>。
                            </Typography>
                            </li>
                        </ul>
                    </li>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold' }}>
                        第二步：申请I-20或DS-2019
                    </Typography>
                </Box>
                <Box component="ul" sx={{ listStyle: 'none', padding: 0, mb: 4, ...lightPurpleBackground }}>
                    <li>
                        <Typography variant="h6" sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                            1. 填写申请表
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            找到
                            <a href="https://www.nyu.edu/students/student-information-and-resources/student-visa-and-immigration/newly-admitted/before-you-arrive/get-a-us-visa/apply-for-an-i20-or-ds2019.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            电子表格
                            </a>，填写并提交申请。
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                            2. 等待或补充材料
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            我们通常会在提交I-20申请后的2周内收到I-20。期间要留意你在Albert上登记的邮箱，学校可能会需要你补充材料
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                            3. 缴纳SEVIS费用
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            收到 I-20 或 DS-2019 后，要支付 SEVIS 费用。
                            <a href="https://www.fmjfee.com/i901fee/index.html"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            填写I-901 表格
                            </a>
                            并通过邮件或在线付款。SEVIS 费用必须在签证面试申请前至少 3 个工作日支付。
                        </Typography>
                    </li>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold' }}>
                        第三步：申请签证
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mb: 4,
                        ...lightPurpleBackground
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
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 2 , my: 4, fontWeight: 'bold' }}>
                            申请签证必备材料
                        </Typography>
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            护照（有效期六个月以上），所有旧护照也需要一起带上
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            身份证原件
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            学校发的I-20
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            SEVIS缴费收据
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            DS-160表确认页打印版（需上传电子照片）
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            签证费缴费凭证
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            面签预约确认打印单
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            录取通知书
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            符合大使馆格式要求的电子照及相应的两张实体照
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
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
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 2 , my: 4, fontWeight: 'bold' }}>
                            辅助材料
                        </Typography>
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            户口本
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            学习计划，课程表
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            简历
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            以往成绩单
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            以往毕业证
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            NYU以及在NYU就读专业的介绍
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            导师简历
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            作品集
                        </Typography>
                        <Divider sx={{ width: '80%', my: 1 }} />
                        <Typography gutterBottom sx={{ lineHeight: 1 }}>
                            其他资金证明
                        </Typography>
                    </Box>
                </Box>

                <Box component="ul" sx={{ listStyle: 'none', padding: 0, mb: 4, ...lightPurpleBackground }}>
                    <li>
                        <Typography variant="h6" sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                            1. 填写DS-160表格
                        </Typography>                     
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            填写
                            <a href="https://ceac.state.gov/genniv/"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            DS-160表格
                            </a>（打印）DS-160表格，是每一位签证申请人包括儿童在内，都必须完成的一份签证申请。DS-160采用在线填写的方式，并需要上传符合美国签证照片格式的电子照片。只有在填写完DS-160表并获得确认页上的条形码编号后，才可以申请预约大使馆面谈。
                        </Typography>
                        <Box sx={noticeStyle}>
                            <FontAwesomeIcon icon={faExclamationCircle} style={exclamationIconStyle} />
                            <Box>
                                <Typography sx={{ lineHeight: 2, mb: 2 }}>
                                    请注意，DS-160表格上填写的内容必须完全准确，因为DS-160表格一旦确认是不可以更改的，错误的信息可能导致签证出现问题或是无法入境，因此在填写过程中请保持耐心和仔细。
                                </Typography>
                                <Typography sx={{ lineHeight: 2, mb: 2 }}>
                                    注意在网站右上角是可以选择语言的，在表格填写过程中有不确定的地方可以查看中文翻译，来帮助理解填表。
                                </Typography>
                                <Typography sx={{ lineHeight: 2, mb: 2 }}>
                                    首次申请F1签证都需要去大使馆面谈，因此在首页选择地点时可以根据你的所在地附近选择北京、广州、上海、沈阳和成都之一的大使馆。
                                </Typography>
                                <Typography sx={{ lineHeight: 2, mb: 2 }}>
                                    另外提醒大家记录下自己的申请ID（Application ID），以便由于填写时间过久被强行登出后，可以再次通过该ID及密保问题提取自己的申请信息。
                                </Typography>
                                <Typography sx={{ lineHeight: 2, mb: 2 }}>
                                    表格填写完毕之后，请把邮箱中收到的确认函打印备用。
                                </Typography>
                            </Box>
                        </Box>
                        
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                            2. 签证申请
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            打开
                            <a href="http://www.ustraveldocs.com/"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            签证申请系统
                            </a>，第一步必须先注册一个账户，才可以进行后面步骤的操作。注册完账户之后， 登录并填写个人信息、护照送达地址和联系方式等，最后支付签证申请费。
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                            3. 预约面签时间（打印）
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            缴费成功之后再次登录
                            <a href="http://www.ustraveldocs.com/"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            签证申请系统
                            </a>，选择好自己想预约的日期和时间即可，预约完成之后，会有预约确认函发送到你的邮箱，打印出来备用。牢记自己预约的日期和时间，并带起所有材料前往。在正式面签之前，检查一下所有材料是否准备齐全。 
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                            4. 面签当天
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            由于六七月一直是签证申请的旺季，因此前往使馆面签的人会很多，常常需要排很久的队，建议比预约的时间提前到达比较保险。背包、手机、水、食物等一律都是不可以带进大使馆的，因此请提前寄存或是让陪同前往的人帮忙看管。但请注意，除了申请人之外，其他人是不可以陪同进入大使馆的（残疾人及13岁以下儿童可能例外），因此将所有材料装进文件袋会比较方便携带。经过安检之后，到指定窗口递交签证申请表和材料，之后等待指纹扫描和签证面谈。面谈时，自然的回答签证官的问题，问什么答什么，不用说多余的话，建议穿着得体，不要化浓妆。切记在回答问题时不要表现出有任何的移民倾向，这有可能会导致拒签。如果面签当场通过，签证官会收走你的护照，你只要安心回家等待护照寄到你付费时选择的中信银行，再前去领取即可。
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                            5. 等待护照
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            虽然当场通过了但护照没拿到手还是觉得不放心？可以通过
                            <a href="https://ceac.state.gov/CEACStatTracker/Status.aspx"
                            style={{ color: '#402E7A', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                            这个网址
                            </a>随时查看护照状态！拿到签证之后就可以开始安排美国的行程啦！
                        </Typography>
                    </li>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
