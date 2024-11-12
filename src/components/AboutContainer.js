import React from 'react';
import { Typography, Divider, Grid, Box, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

function AboutContainer({ title, paragraph, imageUrl, titleColor, paragraphColor }) {
  return (
    <Box sx={{ padding: '32px', color: 'white' }}>
      <Grid container spacing={4} alignItems="center">
        {/* 左侧图片部分 */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              boxShadow: 3,
              margin: '16px',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
          </Box>
        </Grid>

        {/* 右侧文字部分 */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Stack spacing={2} alignItems="center">
            {/* 标题 */}
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: '2.3rem',
                color: titleColor,
              }}
            >
              {title}
            </Typography>

            {/* 分割线 */}
            <Divider sx={{ width: '50%', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginBottom: '16px' }} />

            {/* 段落文字 */}
            <Typography
              variant="body1"
              component="div"
              sx={{
                fontSize: '1.5rem',
                lineHeight: 1.6,
                color: paragraphColor,
                maxWidth: '80%',
              }}
            >
              {paragraph}
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      {/* 按钮部分 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: '150px' }}> {/* marginTop for adjust margin*/}
        <Button
          component={Link}
          to="/about"
          variant="contained"
          sx={{ backgroundColor: "#57068c", color: '#FFF', '&:hover': { backgroundColor: "#450568" } }}
        >
          Learn More <DoubleArrowIcon />
        </Button>

        <Button
          href="https://forms.gle/J7QJbiVAWX6nu9Je7"
          target="_blank"
          variant="contained"
          sx={{ backgroundColor: "#57068c", color: '#FFF', '&:hover': { backgroundColor: "#450568" } }}
        >
          Join Us <AssignmentIndIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default AboutContainer;
