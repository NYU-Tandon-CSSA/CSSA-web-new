import React, { useState } from 'react';
import { Button } from '@mui/material';

import { Box, Typography, TextField, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import Container from '@mui/material/Container';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

// css
import '../css/about.css'

import {devTeam, advisorTeam, wallOfFame, boardTeam, cabinetTeam}  from "../data/data.js"
import { eventsData } from "../data/eventsData.js"


function Events() {
    const numOfDuplicates = 10; 

    const allCards = [...devTeam]; // Original set of devTeam
    const repeatedCards = Array(numOfDuplicates).fill(devTeam).flat();

    const [selectedYear, setSelectedYear] = useState(null);
    const [searchText, setSearchText] = useState('');

    // 过滤并排序活动数据
    const filteredEvents = eventsData
        .filter((event) => {
            const eventYear = new Date(event.date).getFullYear();
            return (
                (selectedYear === null || eventYear === selectedYear) &&
                event.title.toLowerCase().includes(searchText.toLowerCase())
            );
        })
        .sort((a, b) => {
            // 将日期字符串转换为时间戳进行比较，按时间从近到远排序
            return new Date(b.date) - new Date(a.date);
        });

    return (
        <Container maxWidth="lg" sx={{marginBottom: "8%"}}>

            <ul class="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul> 

        <div style={{paddingTop: "130px", textAlign:"center"}}></div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={{ p: 4 }}>
                    {/* 页面标题 */}
                    <Typography class = 'Silkscreen' style={{fontSize:"210%", textTransform: 'uppercase', textAlign: "center", fontWeight: 'bold'}}>
                        我们的活动
                    </Typography>
                    
                    <Box
                        sx={{
                            display: "flex", // 使用 Flexbox 布局
                            justifyContent: "center", // 内容水平居中
                            alignItems: "center", // 垂直居中对齐
                            gap: 2, // 设置子组件之间的间距
                            my: 2, // 上下外边距
                        }}
                    >
                        {/* 年份选择器 */}
                        <DatePicker
                            views={['year']}
                            label="年份"
                            value={selectedYear ? dayjs(`${selectedYear}-01-01`) : null}
                            onChange={(newDate) => setSelectedYear(newDate ? newDate.year() : null)}
                            minDate={dayjs('2000-01-01')}
                            maxDate={dayjs()}
                            slotProps={{ textField: { placeholder: '选择年份' } }}
                            clearable={true}  // 允许清除选择
                        />

                        {/* 搜索框 */}
                        <TextField
                            label="活动名称"
                            variant="outlined"
                            fullWidth
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            sx={{ maxWidth: "300px" }} // 限制搜索框宽度
                        />
                    </Box>

                    {/* 活动列表 */}
                    <Grid container spacing={4} sx={{ mt: 6 }}>
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event) => (
                                <Grid item xs={12} key={event.id}>
                                    <Card
                                        sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'column', md: 'row' },
                                        }}
                                    >
                                        {/* 左侧活动信息 */}
                                        <CardContent sx={{ flex: '1 1 auto', p: 2 }}>
                                            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                                                {event.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                gutterBottom
                                            >
                                                {dayjs(event.date).format('YYYY/MM/DD')}
                                            </Typography>
                                            <Typography variant="body1" paragraph>
                                                {event.description}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                href={event.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ backgroundColor: '#4B0082', '&:hover': { backgroundColor: '#3E0071' } }}
                                            >
                                                活动回顾
                                            </Button>
                                        </CardContent>

                                        {/* 右侧活动图片 */}
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                width: { xs: '100%', md: '400px' }, // 大屏幕固定宽度400px
                                                height: { xs: '225px', md: '225px' }, // 固定高度225px，创建16:9的宽高比
                                                objectFit: 'cover', // 保持图片比例并填充整个区域
                                                objectPosition: 'center', // 居中裁剪
                                                aspectRatio: '16/9', // 强制16:9宽高比
                                            }}
                                            image={event.image}
                                            alt={event.title}
                                        />
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            // 无匹配结果时显示提示文本
                            <Box sx={{ width: '100%', mt: 4 }}>
                                <Typography class = 'Silkscreen' style={{fontSize:"140%", textTransform: 'uppercase', textAlign: "center",}}>
                                    No events found for {selectedYear}.
                                </Typography>
                            </Box>
                        )}
                    </Grid>
                </Box>
            </LocalizationProvider>
        </Container>
    );
}

export default Events;
