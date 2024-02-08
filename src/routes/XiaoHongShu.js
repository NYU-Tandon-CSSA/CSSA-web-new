import * as React from 'react';
import Container from '@mui/material/Container';

// 小红书二维码
import xiaoHongShu from '../images/xiaoHongShu.jpg'
import { margin } from '@mui/system';


function XiaoHongShu() {
    return (
        <div sx={{ backgroundColor: '#EEEEEE', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <img src={xiaoHongShu} alt="Logo" style = {{margin: 'auto', width: '60%', height: 'auto'}}/>
            </Container>
        </div>
    );
}

export default XiaoHongShu;