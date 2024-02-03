import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box, Paper} from '@material-ui/core';
import aboutUs from "../images/AboutUs.jpeg"
import Container from '@mui/material/Container';


import IntroOfMembers from '../components/IntroOfMembers';

export default function About() {
  return (
    <Container maxWidth="sm">
      <div 
      style={{paddingTop: "130px",
              textAlign:"center"
      
      }}>


        {/* <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <img src={aboutUs} width="100%"></img>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid> */}

        <Grid container spacing={2}>
              {/* Row 1 */}
              <Grid item xs={4}>
                AboutUs
              </Grid>
              <Grid item xs={8}>
                Image
              </Grid>
              {/* Row 2 */}
              <Grid item xs={12}>
                主席
                <IntroOfMembers/>
              </Grid>
              {/* Row 3 */}
              <Grid item xs={4}>
                秘书
              </Grid>
              <Grid item xs={4}>
                副主席
              </Grid>
              <Grid item xs={4}>
                财务
              </Grid>

              {/* Row 4 */}
              <Grid item xs={3}>
                活动
              </Grid>
              <Grid item xs={3}>
                外联
              </Grid>
              <Grid item xs={3}>
                技术与职业发展
              </Grid>
              <Grid item xs={3}>
                宣传
              </Grid>

              {/* Row 5 */}
              <Grid item xs={3}>
                <Box>
                  <Grid container>
                    <Grid item xs={6}>
                      ZZZ
                    </Grid>
                    <Grid item xs={6}>
                      ZLW
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={3}>
                外联
              </Grid>
              <Grid item xs={3}>
                技术与职业发展
              </Grid>
              <Grid item xs={3}>
                宣传
              </Grid>
          </Grid>

      </div>
    </Container>
  )
}
