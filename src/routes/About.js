import { Grid } from "@mui/material";
import React from "react";
import aboutUs from "../images/AboutUs.jpeg"

export default function About() {
  return (
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <img src={aboutUs} width="100%"></img>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  )
}
