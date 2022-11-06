import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import QR from '../images/wechat.JPG';

function Sidebar() {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          关注公众号
        </Typography>
        <img src={QR} alt="logo" height="100" width="100" />
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      <Link
        display="block"
        variant="body1"
        href={'https://mp.weixin.qq.com/s/4P2e0vdnPaBkLBfN-VryjA'}
      >
        2020-2021年报
      </Link>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      <Typography>即将上线...</Typography>
    </Grid>
  );
}

export default Sidebar;
