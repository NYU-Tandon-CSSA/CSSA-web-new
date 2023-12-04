import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {
  faWeixin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="#FFF" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.nyutandoncssa.com">
        NYU Tandon CSSA
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function SocialMedia() {
  return (
    <Typography variant="body2" color="#FFF" align="center">
      <Link color="inherit" href="https://www.instagram.com/tandoncssa/" sx={{mr: 2}} target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </Link>{" "}
      <Link color="inherit" href="https://www.facebook.com/nyutandoncssa/" sx={{mr: 2}} target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </Link>{" "}
      <Link color="inherit" href="https://mp.weixin.qq.com/s/iWgFKkEdJR0pDlHgcQHx_Q" sx={{mr: 2}} target="_blank">
        <FontAwesomeIcon icon={faWeixin} size="2x" />
      </Link>{" "}
    </Typography>
  );
}

function ContactInfo() {
  return (
    <Typography variant="body2" color="#FFF" align="center">
      {/* Replace this with your actual contact info */}
      <Button size="large" variant='contained' color="#FFF" onClick={() => { window.open('mailto: nyutandoncssa22@gmail.com') }}>Contact Us</Button>
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#8900e1", py: 6 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SocialMedia />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" align="center" color="#FFFFFF">
              NYU Tandon CSSA
            </Typography>
            <Copyright />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ContactInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
