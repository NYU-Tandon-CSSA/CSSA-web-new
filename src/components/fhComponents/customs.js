import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import CustomSteps from './customSteps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

// images
import customCover from '../../images/fhImage/custom_cover.jpg';
import NYUStartImage from '../../images/fhImage/NYUStartImg.png';

// template setting
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

export default function Customs() {
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
                        backgroundImage: `url(${customCover})`,
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
                        关于海关
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ lineHeight: 1.8 }}>
                        这是简介。
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold' }}>
                        过关流程
                    </Typography>
                </Box>

                <CustomSteps />

                <Box sx={noticeStyle}>
                    <FontAwesomeIcon icon={faExclamationCircle} style={exclamationIconStyle} />
                    <Box>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            海关询问过程中，一般会要求你取下眼镜拍照+按指纹。按照惯例，海关人员会问你一些简单的问题，比如生日、居住地、来美目的、身上带了多少现金，大家如实回答就好。注意不要有留美倾向。
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            海关有可能会开箱检查你的行李中是否有违禁品。
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            过关时不要打电话，不要拍照。
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            入关的类型分两种，一种是美国公民或者永久居民的（US Citizens and Permanent Residents）,第二个是给非美国居民的（Non Residents/Foreign Nationals）如果非美国绿卡或者公民入关，排在非美国居民的窗口
                        </Typography>
                        <Typography sx={{ lineHeight: 2, mb: 2 }}>
                            机场有小推车可以使用，需支付硬币。
                        </Typography>

                    </Box>
                </Box>

                <Typography gutterBottom>
                    随身携带以下文件，以备海关人员在询问过程中检查：
                </Typography>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        mb: 4
                    }}
                >
                    <Typography variant="h6" gutterBottom sx={{ lineHeight: 2 , my: 4, fontWeight: 'bold' }}>
                        随身文件清单
                    </Typography>
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        SEVIS Fee缴费证明
                    </Typography>
                    <Divider sx={{ width: '90%', my: 1 }} />
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        I-20
                    </Typography>
                    <Divider sx={{ width: '90%', my: 1 }} />
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        <Typography>护照（内含有你的签证页）:F1/J1学生签有效期不少于6个月，B1/B2旅游签有效期不少于预定行程时间</Typography>
                    </Typography>
                    <Divider sx={{ width: '90%', my: 1 }} />
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        学校体检表，疫苗表
                    </Typography>
                    <Divider sx={{ width: '90%', my: 1 }} />
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        小红本&小黄本免疫证明
                    </Typography>
                    <Divider sx={{ width: '90%', my: 1 }} />
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        毕业证、学位证、学校成绩单、语言考试成绩单（托福、雅思、SAT等）
                    </Typography>
                    <Divider sx={{ width: '90%', my: 1 }} />
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        学校官方出具的offer
                    </Typography>
                    <Divider sx={{ width: '90%', my: 1 }} />
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        证件照（各类尺寸）
                    </Typography>
                    <Divider sx={{ width: '90%', my: 1 }} />
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        <Typography>海关码：提前在小程序“海关旅客指尖服务”上填写好个人信息并截图海关码，有效期为24小时</Typography>
                    </Typography>
                    <Divider sx={{ width: '90%', my: 1 }} />
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        住宿信息证明：比如你的租房合同，学校宿舍信息等。B1/B2旅客可提供中英文版酒店预订单
                    </Typography>
                    <Divider sx={{ width: '90%', my: 1 }} />
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        EVUS（仅针对B1/B2签证）：出行前要及时更新EVUS信息，注册打印
                    </Typography>
                    <Divider sx={{ width: '90%', my: 1 }} />
                    <Typography gutterBottom sx={{ lineHeight: 1 }}>
                        其他辅助文件：行程单，课程表，驾照等
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold' }}>
                        违禁品
                    </Typography>
                </Box>
                <Typography gutterBottom>
                    不要带违禁品， 海关会抽查行李，如果被查出携带违禁品或未按要求申报，后果很严重。
                </Typography>
                <br />

                <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                    违禁品分类
                </Typography>
                <Typography gutterBottom component="div">
                    <ul>
                        <li>生物制品：一般禁止未经消毒的人类和动物组织（包括血液、人或动植物排泄物）、活体细菌培养基、病毒或类似有机体、被怀疑感染人畜共患疾病的动物、昆虫、蜗牛和蝙蝠的进口。</li>
                        <li>水果、蔬菜和植物：许多水果、蔬菜、植物、枝条、种籽、未经处理的植物产品、特定濒危物种等一般都禁止进口。所有植物、植物产品、水果或蔬菜都必须向海关官员申报并接受检查。</li>
                        <li>肉类、牲畜和禽类：肉类、牲畜、禽类及其副产品一般都禁止入境，或是根据原产国的动物疾病状况进行限制。普通平罐装及腌制的肉类产品及干肉产品均严格限制入境。对于罐头装的肉类产品，如需进口，须得到检验官员确认该产品系熟制、已经商业封装，则允许入境。</li>
                        <li>鱼和野生动植物：鱼类和野生动植物也在进出口管制及卫生防疫要求范围内，主要包括：野生鸟类、哺乳动物、海洋哺乳动物、爬行动物、甲壳类动物、鱼类和软体动物；上述动物的任何部分或产品，如皮革、羽毛、蛋（卵）等；用野生动植物和鱼类制成的产品和物件。野生濒危物种和由此制造的产品禁止进出口。象牙或象牙制品一般禁止进出口。含有野生动植物部分的古董如能证明其历史有100年则可以进口。</li>
                        <li>打猎所得：如果入境者打算进口打猎纪念品或野味，一般需事先获得许可证，而且只有特定的口岸被授权处理上述物品进口的事宜。</li>
                        <li>受美国制裁国家的产品：禁止携带任何朝鲜和古巴的产品入境。</li>
                        <li>货币：携带入境的货币工具（包括美国或其他国家的硬币及货币、旅行支票、现金汇票和可流通证券等）金额超过一万美元，应填妥美国海关4790表（CustomForm 4790），主动向海关申报。未如实申报者可能导致被追究民事及刑事责任，包括没收所持货币及货币工具。</li>
                        <li>书籍、音像资料、电脑程序和磁带：盗版书籍、电脑程序及音像制品不得进入美国，盗版制品会被没收销毁。</li>
                        <li>药品：入境者可以携带经美国食品药品监督管理局（FDA）批准的自用药物或医疗仪器入境，所带药物或医疗仪器的数量不可超过个人的90天用量。药物或医疗仪器必须存放于原始包装内。如果药物或医疗仪器不适宜放在原始包装内，入境者必须附有认证医生的英文说明信。所有药物或医疗仪器必须附有认证医生的英文备注（doctorsnote）或处方（validprescription）。</li>
                        <li>宠物：
                            <ul>
                                <li>猫：在入境检查时必须能证明未患可传染给人的疾病。如果该宠物健康状况明显不佳，有执照的兽医将对其作进一步检查，有关费用由宠物的主人支付。</li>
                                <li>狗：在入境检查时必须能证明其未患可传染给人的疾病，抵达前至少30天内注射过狂犬病疫苗（此项规定不适用于3个月以下的幼狗）。</li>
                                <li>宠物鸟：可以入境，但鹦鹉类鸟只允许带入两只。同时需符合APHIS和公共卫生服务机构的有关要求，比如可能要求由宠物的主人出资，为该宠物在APHIS机构进行卫生防疫。</li>
                                <li>灵长类动物如猴子、猿等不允许进口。</li>
                                <li>入境者最好向州及地方有关机构查询了解对带入宠物有何规定和限定。有些地方，如夏威夷州，对宠物有严格的卫生防疫要求。</li>
                            </ul>
                        </li>
                        <li>可以携带入境但必须申报的食物：
                            <ul>
                                <li>佐料，如植物油，醋，芥末酱（mustard），番茄酱，腌菜（pickles），食用糖浆，蜂蜜（不含蜂室），果冻，果酱。</li>
                                <li>烘培制品和零食，如面包，曲奇饼，糕饼，谷物棒，糖果，巧克力。</li>
                                <li>固体乳制品，如固体芝士帕尔玛干酪（parmesan），切达干酪（cheddar），黄油。</li>
                                <li>不含肉禽类的罐头食品和真空瓶装食品。</li>
                                <li>封装于原始包装，且原始包装用英文注明成分的粉末状饮料。</li>
                                <li>封装于原始包装，且原始包装用英文注明成分的干燥制品（可含有奶蛋成分），如烘培混合粉，可可粉，布丁粉，薯片，婴儿配方食品。</li>
                                <li>其他：以上所有食品不可含有畜禽肉类成分。</li>
                            </ul>
                        </li>
                    </ul>
                </Typography>

                <Typography gutterBottom>
                    类别总述如上，具体食品种类请对照USDA Miscellaneous andProcessed Products Manual（http://www.aphis.usda.gov/import_export/plants/manuals/ports/downloads/miscellaneous.pdf）
                </Typography>
                <br />
                <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                    可免关税携带的物品:
                </Typography>
                <Typography gutterBottom component="div">
                    <ul>
                        <li>个人财产：个人穿戴使用的衣物、珠宝、化妆品、打猎或钓鱼用具、照相机、便携式收音机以及其他类似个人、物品如仅用于个人使用，可免于征税。上述物品可跟随着入境者入出境。</li>
                        <li>酒精饮料：年满21岁的非美国居民可免税携带入境1公升啤酒、葡萄酒、白酒等酒精饮料，但仅限个人使用。超过上述数量的酒精饮料将被征收海关税和国内税注意：除了联邦法律，入境者还必须遵守可能比联邦法律更加严格的有关酒精饮料的州法律。</li>
                        <li>烟草产品：旅客可以免税带入一条香烟（200支），或50支雪茄烟，或2公升（4.4磅）烟草，或按比例的上述各类物品。</li>
                        <li>家用物品：可免税进口家具、餐具、书籍、艺术品等家用物品。</li>
                        <li>免税礼品：非居民可免税带进价值不超过100美元的礼品。注意：要使上述礼品免税，入境者必须在美国停留至少超过72个小时，期间上述礼品必须伴随着入境者。而且，为方便海关官员检查，入境者的礼品不要进行礼物包装。</li>
                        <li>邮寄的礼品：从另一国家或加勒比受惠国通过邮寄寄来的礼品零售价值不超过100美元，免于征税。如该礼品寄自美属维尔京群岛、美属萨摩亚或关岛，礼品的免税额可允许不超过200美元。超过上述价值的礼品将被征税。注意：酒精饮料、烟草产品以及含酒精的香水不在上述规定的范围之内。</li>
                        <li>在免税店购买的物品：在免税店、飞机或船舶上购买的物品，如超过个人可携带的免税物品的数量或金额限制，将被海关征税。</li>
                    </ul>
                </Typography>
                <br />
                <Typography variant="h6" gutterBottom sx={{ lineHeight: 4, mb: 1, fontWeight: 'bold' }}>
                    应予征税的物品:
                </Typography>
                <Typography gutterBottom component="div">
                    <ul>
                        <li>超出上述免税范围的物品将被征税。其征收方法是：减去应予免税的物品价值后，1000美元价值的部分将被征收统一税率为3％的关税，超过1000美元价值的部分将按适用于该商品的税率征税。</li>
                        <li>按统一税率征税的物品必须跟随入境者本人，并且只供入境者个人使用或当作礼品。</li>
                        <li>在美属维尔京群岛、美属萨摩亚和关岛得到的物品，无论该物品跟随入境者本人或是寄往美国本土，对上述物品征收关税的统一税率为5％。</li>
                    </ul>
                </Typography>

            </Box>
        </ThemeProvider>
    );
}
