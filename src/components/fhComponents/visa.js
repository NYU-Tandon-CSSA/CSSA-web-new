import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const theme = createTheme({
    typography: {
        fontFamily: "YouSheBiaoTiHei"
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

                <Typography variant="subtitle1" gutterBottom>
                    (关于申请美国签证的官方详细信息请参考NYU网站’Get a US visa’)
                </Typography>

                <Typography variant="h4" gutterBottom>
                    Accept offer
                </Typography>
                <Typography>
                    在NYU Start 激活NetID，设置密码。NetID形式类似xy1234，是今后登陆NYU各个网上系统的用户名，会在你的学习生活中扮演重要作用。

                    使用NetID登陆NYUHome. 选择 Albert Login-Applicants-Application Status-Admissions Offer-Accept.

                    缴纳Deposit。(Tandon没有明确的缴纳Deposit 的deadline， 但是建议一般不要超过收到offer之后的50天)
                </Typography>

                <Typography>
                    2. 申请I-20
                </Typography>
                <Typography>
                    准备你的相关文件，包括Admission Letter，护照以及资产证明。

                    填写I-20申请表 。

                    通常应该会在提交I-20申请后的2周内收到I-20。
                </Typography>

                <Typography>
                    3. 申请F1签证
                </Typography>

                <Typography>
                step0: 美国F-1学生签证申请必备材料清单

                        护照（有效期六个月以上），所有旧护照也需要一起带上

                        学校寄来的I-20

                        学校的录取信

                        符合大使馆格式要求的电子照及相应的一张实体照（照片具体要求包括必须是近六个月内拍摄：2x2英寸，浅色背景等）

                        DS-160表确认页打印版（需上传电子照片）

                        中信银行的缴费凭证

                        SEVIS缴费收据

                        面签预约确认打印单

                        资金证明：I-20表格中会注明一年（或一学期）所需的所有费用，包括学费和生活费。你需要找银行开具金额至少在所需费用以上数额的存款证明。

                        （还有一些辅助材料可能后用到，后文会提及）
                </Typography>
                <Typography>
                    step1: 缴纳SEVIS费（并需打印）

                    进入学生和交流访问学者信息系统（https://www.fmjfee.com/），根据I-20上的内容完成表格的填写并缴纳SEVIS费，一般信用卡即可支付，支付完成后打印电子收据并备用。
                </Typography>
                <Typography>
                    step2: 填写DS-160表格（并需打印）

                    DS-160表格，是每一位签证申请人，包括儿童在内，都必须拥有的一份签证申请表。DS-160采用在线填写的方式，并需要上传符合美国签证照片格式的电子照片。只有在填写完DS-160表并获得确认页上的条形码编号后，才可以申请预约大使馆面谈。请注意，DS-160表格上填写的内容必须完全准确，因为DS-160表格一旦确认是不可以更改的，错误的信息可能导致签证出现问题或是无法入境，因此小伙伴们在填写过程中请保持耐心和仔细。

                    DS-160表格网址为https://ceac.state.gov/genniv/ ，或者直接搜索DS-160也可以找到。注意在网站右上角是可以选择语言的，在表格填写过程中有不确定的地方可以查看中文翻译，来帮助理解填表。首次申请F1签证都需要去大使馆面谈，因此在首页选择地点时可以根据你的所在地附近选择北京、广州、上海、沈阳和成都之一的大使馆。另外提醒大家记录下自己的申请ID（Application ID），以便由于填写时间过久被强行登出后，可以再次通过该ID及密保问题提取自己的申请信息。

                    表格填写完毕之后，请把邮箱中收到的确认函打印备用。
                </Typography>

                <Typography>
                    step3: 缴纳签证费（并需打印）

                    打开网站http://www.ustraveldocs.com/进入签证申请系统，第一步必须先注册一个账户，才可以进行后面步骤的操作。注册完账户之后，
                    选择“新的签证申请／安排面谈时间”，这时网站会提醒你支付签证申请费，你可以选择在网上支付或是去银行网点支付，
                    但需要注意的是美国签证的申请费缴纳是和中信银行独家合作的，因此如果选择网上支付，必须有中信银行的账户且已开通网上银行缴费服务，
                    过程较为复杂在此不多作赘述。要是选择去中信银行各网点支付，则需打印出带有CGI Reference Number的付款单为付款凭证，带着付款单、
                    护照和申请费去任意一家中信银行缴费即可。在交完费之后，银行会让你选择是否寄到中信银行的网点（可任意选择）并填写地址，签证通过之后会将护照寄到你选择的中信银行，等待领取。
                </Typography>
                <Typography>
                    stpe4: 预约面签时间（并需打印）

                        缴费成功之后再次登录http://www.ustraveldocs.com/，选择好自己想预约的日期和时间即可，预约完成之后，会有预约确认函发送到你的邮箱，打印出来备用。牢记自己预约的日期和时间，并带起所有材料前往。在正式面签之前，检查一下所有材料是否准备齐全。

                        必备材料清单：六个月以上有效期的护照（旧护照也需要）、一张签证照片、学校寄来的I-20、学校的录取信、DS160确认页打印件、中信银行的缴费凭证、SEVIS缴费收据、面签预约确认单、财产证明。

                        辅助材料清单：学生的个人简历、学校给的奖学金信件（如果有）、学习计划（在美期间已经计划好的详细内容）、家庭关系证明（全家福、户口本、父母结婚证、公安局开具的子女关系证明等）、财产证明（房产证等）。
                </Typography>
                <Typography>
                    step5: 面签当天

                    由于六七月一直是签证申请的旺季，因此前往使馆面签的人会很多，常常需要排很久的队，建议比预约的时间提前到达比较保险。背包、手机、水、食物等一律都是不可以带进大使馆的，因此请提前寄存或是让陪同前往的人帮忙看管。但请注意，除了申请人之外，其他人是不可以陪同进入大使馆的（残疾人及13岁以下儿童可能例外），因此将所有材料装进文件袋会比较方便携带。经过安检之后，到指定窗口递交签证申请表和材料，之后等待指纹扫描和签证面谈。面谈时，自然的回答签证官的问题，问什么答什么，不用说多余的话，建议穿着得体，不要化浓妆。切记在回答问题时不要表现出有任何的移民倾向，这有可能会导致拒签。如果面签当场通过，签证官会收走你的护照，你只要安心回家等待护照寄到你付费时选择的中信银行，再前去领取即可。
                </Typography>
                <Typography>
                    step6: 等待护照

                    虽然当场通过了但护照没拿到手还是觉得不放心？可以在此网址https://ceac.state.gov/CEACStatTracker/Status.aspx 随时查看护照状态！拿到签证之后就可以开始安排美国的行程啦！撒花！
                </Typography>
            </Box>
        </ThemeProvider>
    )
}