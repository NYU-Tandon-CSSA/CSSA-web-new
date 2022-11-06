import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Banner from '../components/Banner';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Banner />
      <Grid container spacing={4}>
        <Post
          title={'NYU Tandon CSSA 秋季招新'}
          date={'2021-12-02'}
          description={'开心的出行，路过夕阳和落叶，和秋天说再见。'}
          imageurl={
            'https://m.psecn.photoshelter.com/img-get2/I0000oSfkKBpUckU/sec=wdfsdfoeflwefms1440ed202108104o8l11VZSpf2RIl/fit=440'
          }
          url={'https://mp.weixin.qq.com/s/QfM1uMhS6BSPUjhM5UlYvw'}
        />
        <Post
          title={'2020-2021年度总结 x 主席团介绍'}
          imageurl={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/NYU_Tandon_School_of_Engineering.JPG/1200px-NYU_Tandon_School_of_Engineering.JPG'
          }
          date={'2021-09-12'}
          description={'叮！请查收您的Tandon CSSA年报xE-board介绍'}
          url={'https://mp.weixin.qq.com/s/4P2e0vdnPaBkLBfN-VryjA'}
        />
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            '& .markdown': {
              py: 3,
            },
          }}
        >
          <Typography variant="h6" gutterBottom>
            关于CSSA
          </Typography>
          <Divider />
          <Typography variant="h7" gutterBottom>
            <br />
            “Tandon CSSA” 是NYU工程学院唯一权威的中国学生组织，
            <br />
            也是中国驻纽约领事馆注册的学生组织。 我们面向NYU全体中国学生，
            <br />
            以广大Tandon中国留学生为中心， 致力提供优质的资源与服务。
            <br />
            <br />
            “我们的2020-2021” 在2020-2021这特殊的一年之中，
            <br />
            <br />
            每一位同学都面临着挑战， 网课的压力，社交的匮乏。 NYU Tandon CSSA
            我们组织了以线上活动为主的丰富学联活动，
            <br />
            希望无论在何地的Tandon中国学生都能 丰富生活，缓解压力，广泛交友！
            <br />
          </Typography>
        </Grid>
        <Sidebar />
      </Grid>
      <br />
      <br />
    </div>
  );
}
