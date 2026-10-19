import React, { useEffect, useState } from "react";
import { Grid, Typography } from '@material-ui/core';
import Container from '@mui/material/Container';
import { useLanguage } from "../components/UseLanguage.js";

import '../css/about.css'

import IntroOfEboard from '../components/IntroOfEboard.js';
import IntroOfDevTeam from "../components/IntroOfDevTeam.js";
import { loadTeams } from "../content/loadTeams";

const emptyTeams = {
  cabinetTeam: [],
  boardTeam: [],
  wallOfFame: [],
  advisorTeam: [],
  devTeam: [],
};

export default function About() {
  const { t,lang } = useLanguage()
  const numOfDuplicates = 10;
  const [teams, setTeams] = useState(emptyTeams);

  useEffect(() => {
    loadTeams()
      .then(setTeams)
      .catch(() => setTeams(emptyTeams));
  }, []);

  const { cabinetTeam, boardTeam, wallOfFame, advisorTeam, devTeam } = teams;
  const repeatedCards = Array(numOfDuplicates).fill(devTeam).flat();


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

      <div style={{paddingTop: "130px", textAlign:"center"}}>

        <Grid container spacing={2} justifyContent="left" alignItems="center">
          {/* Row 1 */}
          {/* <Grid item xs={4} justifyContent="center">
            AboutUs
          </Grid>

          <Grid item xs={8}>
            Image
          </Grid> */}

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"210%", textTransform: 'uppercase'}}>{t("AboutUs.LargeTitle")}<br /> 2026 - 2027</Typography>
            {/* <Typography class = 'Silkscreen' style={{fontSize:"170%", textTransform: 'uppercase'}}>2023 - 2024</Typography> */}
          </Grid>

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>{t("AboutUs.Title1")}</Typography>
          </Grid>
          <Grid item xs={12}>
            <hr style={{
              border: 'none',
              height: '1px',
              backgroundColor: 'black',
              margin: '0 0 10px 0'
            }} />
          </Grid>

          {/* Row 2 */}
          {cabinetTeam.map(({name,position_zh,position_en,year,major,intro,image},index)=> (
            <Grid item xs={12} md={3} key={index}>
              <IntroOfEboard 
                name={name}
                position={lang === 'en' ? position_en: position_zh}
                year={year}
                major={major}
                intro={intro}
                image={image}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>{t("AboutUs.Title2")}</Typography>
          </Grid>
          <Grid item xs={12}>
            <hr style={{
              border: 'none',
              height: '1px',
              backgroundColor: 'black',
              margin: '0 0 10px 0'
            }} />
          </Grid>

          {boardTeam.map(({name,position_zh,position_en,year,major,intro,image},index)=> (
            <Grid item xs={12} md={3} key={index}>
              <IntroOfEboard 
                name={name}
                position={lang === 'en' ? position_en: position_zh}
                year={year}
                major={major}
                intro={intro}
                image={image}
              />
            </Grid>
          ))}
        
          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>{t("AboutUs.Title3")}</Typography>
          </Grid>
          <Grid item xs={12}>
            <hr style={{
              border: 'none',
              height: '1px',
              backgroundColor: 'black',
              margin: '0 0 10px 0'
            }} />
          </Grid>

          {wallOfFame.map(({ name, position_zh,position_en, year, major, intro, image, linkedinUrl }, index) => (
            <Grid item xs={12} md={3} key={index}>
              <IntroOfEboard 
                name={name}
                position={lang === 'en' ? position_en: position_zh}
                year={year}
                major={major}
                intro={intro}
                image={image}
                linkedinUrl={linkedinUrl ? linkedinUrl : null}
              />
            </Grid>
          ))}
          
          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>{t("AboutUs.Title4")}</Typography>
          </Grid>
          <Grid item xs={12}>
            <hr style={{
              border: 'none',
              height: '1px',
              backgroundColor: 'black',
              margin: '0 0 10px 0'
            }} />
          </Grid>
          {advisorTeam.map(({name, position_zh,position_en,year,major,intro,image, linkedinUrl},index)=>{
            return (
              <Grid item xs={12} md={3} key={index}>
                <IntroOfEboard 
                    name = {name}
                    position = {lang === 'en' ? position_en: position_zh}
                    year = {year}
                    major = {major}
                    intro = {intro}
                    image={image}
                    linkedinUrl={linkedinUrl ? linkedinUrl : null}/>
              </Grid>
            )
          })}
          
          

          <Grid item xs={12}>
            <Typography class = 'Silkscreen' style={{fontSize:"200%"}}>{t("AboutUs.Title5")}</Typography>
          </Grid>
            <Grid item xs={12}>
              <hr style={{
                border: 'none',
                height: '1px',
                backgroundColor: 'black',
                margin: '0 0 10px 0'
              }} />
            </Grid>
          
          <div className="card-wrapper">
            <div className="card-gallery">
            {repeatedCards.map(({ name, major, year, image }, index) => (
                <div className="dev-team-card" key={index}>
                  <IntroOfDevTeam
                    name={name}
                    major={major}
                    year={year}
                    image={image}
                  />
                </div>
              ))}
            </div>
          </div>  
        </Grid>

      </div>
    </Container>
  )
}
