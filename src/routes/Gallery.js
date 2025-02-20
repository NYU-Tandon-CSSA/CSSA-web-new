import React from 'react';
import { Grid, Container, Typography } from '@mui/material';

// 动态导入 src/images/fhImage 目录中的所有图片
// 注意：路径是相对于当前文件（src/routes/Gallery.js）的
const importAll = (context) => context.keys().map(context);
const images = importAll(require.context('../images/Events', false, /\.(png|jpe?g|svg)$/));
console.log('Loaded images:', images);

const Gallery = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Photo Gallery
      </Typography>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img
              src={image.default} // 使用 image.default 获取图片 URL
              alt={`Photo ${index + 1}`} // 简单的 alt 文本
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;