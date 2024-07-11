import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

// Image import
import studyCover from '../../images/fhImage/nyu_study.jpg';

// Theme setup
const theme = createTheme({
    typography: {
        fontFamily: "Noto Sans SC",
        fontWeight: "500",
        h3: {
            fontFamily: "YouSheBiaoTiHei",
        },
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

export default function StudySupport() {
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
                        backgroundImage: `url(${studyCover})`,
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
                        关于纽约大学学术
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ lineHeight: 1.8 }}>
                        纽约大学的毕业要求是什么？是否有找研究的机会？
                    </Typography>
                </Box>

                <Typography variant="body1" gutterBottom>
                    欢迎来到纽约大学！作为全球最具声誉的学术机构之一，我们致力于提供卓越的教育和丰富的学术资源，帮助你们实现学术和职业目标。希望本手册能为你们提供必要的指导，帮助你们顺利开展在NYU的学术旅程。
                    在纽约大学求学期间，我们将全力支持你探索个人、学术和职业兴趣。以下是我们提供的顶级工具、服务、资源和机会：
                    <ul>
                        <li><strong>Albert</strong>: 注册课程并编辑个人信息</li>
                        <li><strong>Brightspace</strong>: 访问课程资料并与班级同学进行合作</li>
                        <li><strong>StudentLink</strong>: 提供账单、助学金、注册等相关帮助</li>
                        <li><strong>学术日历</strong>: 浏览重要日期和截止时间</li>
                    </ul>
                </Typography>

                <Typography variant="body1" gutterBottom>
                    为满足上海纽约大学的毕业条件，学生须修满128个学分。所修课程须包括核心课程、专业课程及选修课程。
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold' }}>
                        图书馆和研究资源
                    </Typography>
                </Box>

                <Box sx={lightPurpleBackground}>
                    <Typography variant="body1" gutterBottom>
                        NYU拥有丰富的图书馆资源，包括：
                        <ul>
                            <li><strong>Bobst 图书馆</strong>: 主要的学术图书馆，提供广泛的书籍、期刊和电子资源。</li>
                            <li><strong>法律图书馆</strong>: 专为法学院学生提供法律资源和研究支持。</li>
                            <li><strong>医学图书馆</strong>: 为医学院学生和教职员工提供医学研究资源。</li>
                        </ul>
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold' }}>
                        学术辅导和支持
                    </Typography>
                </Box>

                <Box sx={lightPurpleBackground}>
                    <Typography variant="body1" gutterBottom>
                        NYU提供多种学术辅导和支持服务，包括：
                        <ul>
                            <li><strong>写作中心</strong>: 帮助学生提升写作能力。</li>
                            <li><strong>数学辅导中心</strong>: 提供数学和统计学的辅导。</li>
                            <li><strong>语言学习支持</strong>: 帮助非母语学生提升语言能力。</li>
                        </ul>
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold' }}>
                        成绩评定
                    </Typography>
                </Box>

                <Box sx={lightPurpleBackground}>
                    <Typography variant="body1" gutterBottom>
                        NYU采用字母评分系统（A、B、C等），每个课程的成绩将计入学生的GPA。学生需保持一定的GPA以维持良好的学术状态。以下是评分标准：
                        <ul>
                            <li>A：优秀（4.0）</li>
                            <li>B：良好（3.0）</li>
                            <li>C：及格（2.0）</li>
                            <li>D：低于标准（1.0）</li>
                            <li>F：不及格（0.0）</li>
                        </ul>
                        学生应在每学期注册之前与学术顾问一起查看课程安排，以确保他们能够按时完成学位。NYU希望学生在秋季和春季学期都参加课程，直到满足学位要求。没有参加课程但仍在努力完成其他要求（如论文、实习或语言）的学生必须参加维持入学计划。 
                        某些课程需要获得教师或课程的特别许可，学生才能注册。这些课程在 Albert 课程搜索和课程表网页列表中列出。想要参加这些课程之一的学生应按照说明上的指示进行操作。如需更多说明，请联系教务处并提供课程编号和标题。 
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} style={iconStyle} />
                    <Typography variant="h5" sx={{ lineHeight: 2, fontWeight: 'bold' }}>
                        论文要求
                    </Typography>
                </Box>

                <Box sx={lightPurpleBackground}>
                    <Typography variant="body1" gutterBottom>
                        学位论文部分允许学生根据自己的兴趣研究课题，并根据他们在纽约大学的课程和导师指导下完成的工作来选择。学生应与他们选择的合作教师协商后选择论文主题。
                        所有学生都必须在所选的学习领域撰写一篇论文。两名教员（其中一人为学生的导师）将对论文进行评估。论文可以基于课程学期论文，但仍然应是一份独立的研究工作，通常在 50 页或更多页的范围内。
                        硕士论文是一项原创研究项目，在某些情况下，可能是之前研讨会或学期论文的独立成果。理想情况下，学生应在课程第二学期结束前与学术顾问会面，确定论文指导老师（如果尚未确定），并讨论他们拟定的论文主题。硕士论文必须由相关教职员工赞助和指导。
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
