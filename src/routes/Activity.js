import React from 'react';
import Grid from '@mui/material/Grid';
import Post from '../components/Post';

export default function Activities() {
  return (
    <div>
      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        <Post
          title={'秋游圆满结束啦~'}
          date={'2021-12-02'}
          description={'开心的出行，路过夕阳和落叶，和秋天说再见'}
          imageurl={
            'https://mmbiz.qpic.cn/mmbiz_jpg/P6pplt3Z7RAHbIe6evatP7pnCbmibMAGp56OnXZ0Kj7f4ELQWtzHKibkOiaNRXBCSGOPXr7qOacEok7f1gOG5c4iag/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
          }
          url={'https://mp.weixin.qq.com/s/GlQA2HynZtD13XbZJIdchg'}
        />
        <Post
          title={'周五桌游夜火热进行中～'}
          imageurl={
            'https://mmbiz.qpic.cn/mmbiz_jpg/P6pplt3Z7RCMtSicjHgkLxxnlnkicIPw3VQxMw9yYJSibOCFOia458FaroUmrumyWicrLMCwrfWtKjdPXXrPD0uWm2Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
          }
          date={'2021-11-14'}
          description={'midterm都考完了，还有人没来过桌游夜？'}
          url={'https://mp.weixin.qq.com/s/4Lj7_skCC7uZ6NC8O_KAVg'}
        />
        <Post
          title={'秋游圆满结束啦~'}
          date={'2021-12-02'}
          description={'开心的出行，路过夕阳和落叶，和秋天说再见'}
          imageurl={
            'https://mmbiz.qpic.cn/mmbiz_jpg/P6pplt3Z7RAHbIe6evatP7pnCbmibMAGp56OnXZ0Kj7f4ELQWtzHKibkOiaNRXBCSGOPXr7qOacEok7f1gOG5c4iag/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
          }
          url={'https://mp.weixin.qq.com/s/GlQA2HynZtD13XbZJIdchg'}
        />
        <Post
          title={'周五桌游夜火热进行中～'}
          imageurl={
            'https://mmbiz.qpic.cn/mmbiz_jpg/P6pplt3Z7RCMtSicjHgkLxxnlnkicIPw3VQxMw9yYJSibOCFOia458FaroUmrumyWicrLMCwrfWtKjdPXXrPD0uWm2Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
          }
          date={'2021-11-14'}
          description={'midterm都考完了，还有人没来过桌游夜？'}
          url={'https://mp.weixin.qq.com/s/4Lj7_skCC7uZ6NC8O_KAVg'}
        />
      </Grid>
      <br />
      <br />
    </div>
  );
}
