import React, { useState } from 'react';
import { Button } from '@mui/material';

import { Box, Typography, TextField, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import Container from '@mui/material/Container';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

//活动照片
import voice2024 from "../images/Events/Voice2024.JPG";

// css
import '../css/about.css'

import {devTeam, advisorTeam, wallOfFame, boardTeam, cabinetTeam}  from "../data/data.js"


function Events() {
    const numOfDuplicates = 10; 

    const allCards = [...devTeam]; // Original set of devTeam
    const repeatedCards = Array(numOfDuplicates).fill(devTeam).flat();

    const [selectedYear, setSelectedYear] = useState(dayjs().year());
    const [searchText, setSearchText] = useState('');

    // 模拟的活动数据
    const eventsData = [
        {
            id: 1,
            title: 'Planning an Event',
            date: '2022-11-15',
            description: 'Learn how to plan an event with Gallatin School.',
            image: 'https://via.placeholder.com/300x200',
            link: 'https://example.com/event-details',
        },
        {
            id: 2,
            title: '心动的声音 NYC Open Mic 2024',
            date: '2024-12-03',
            description: '一起寻找最强之声！',
            image: voice2024,
            link: 'https://example.com/event-details-2',
        },
    ];

    // 过滤活动数据
    const filteredEvents = eventsData.filter((event) => {
        const eventYear = new Date(event.date).getFullYear();
        return (
            eventYear === selectedYear &&
            event.title.toLowerCase().includes(searchText.toLowerCase())
        );
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
                            value={dayjs(`${selectedYear}-01-01`)}
                            onChange={(newDate) => setSelectedYear(newDate.year())}
                            minDate={dayjs('2000-01-01')}
                            maxDate={dayjs()} // 限制最大年份为当前年份
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
                    <Grid container spacing={4}>
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
                                                width: { xs: '100%', md: '300px' }, // 小屏占满，大屏固定宽度
                                                height: 'auto',
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
