import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "../css/DepartmentIntro.css"; 
import { Button } from "@mui/material";
import { useLanguage } from "../components/UseLanguage";

import teamBuild from "../images/team-build.JPG";
import EOPhoto from "../images/EO2.jpg";
import PMPhoto from "../images/PM.png";
import EAPhoto from "../images/EA.jpg";
import ITCDPhoto from "../images/ITCD.png";
import { Typography } from "antd";

const DepartmentIntro = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="department-intro-container" style={{ 
        marginBottom: '60px',
        backgroundColor: '#fafafa',
        paddingTop: '40px'
      }}>
        {/* Image */}
        <div className="department-intro-image">
          <img src={teamBuild} alt="Team Building" />
        </div>

        {/* Content */}
        <div className="department-intro-content">
          <h2>
            {t('departmentsIntro.OurClubs')}<br />
            <span className="highlight">
              NYU Tandon <span className="highlight-purple">CSSA</span>
            </span>
          </h2>
          <p>
            <div style = {{whiteSpace: 'pre-line'}}>
              {t('departmentsIntro.OurClubsD')}
            </div>
          </p>
          <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#6B46C1', 
                  '&:hover': { backgroundColor: '#553C9A' },
                  marginBottom: '16px',
                  display: 'block'
                }}
                component={RouterLink}
                to="/about"
              >
                {t('departmentsIntro.Buttons.Eboard')}
          </Button>
          <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#6B46C1', 
                  '&:hover': { backgroundColor: '#553C9A' },
                  display: 'block'
                }}
                onClick={() => {
                  document.querySelector('.section-title').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('departmentsIntro.Buttons.DepartmentsDetails')}
          </Button>
        </div>
      </div>

      <div className="department-sections-container" style={{ 
        backgroundColor: '#ffffff', 
        padding: '40px 0',
        marginTop: '60px'
      }}>
        <h2 className="section-title" style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '2rem',
          fontWeight: '600',
          color: '#000000'
        }}>
          {t('departmentsIntro.DepartmentsDetails.Title')}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          padding: '0 40px'
        }}>
          {/* 活动部 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
          }}>
            <div style={{ marginBottom: '40px' }}>
              <img 
                src={EOPhoto} 
                alt="活动部" 
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '20px',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                {t('departmentsIntro.DepartmentsDetails.EO')} 
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#4A5568',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                {t('departmentsIntro.DepartmentsDetails.EOD')}
              </p>
            </div>
          </div>

          {/* 外联部 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
          }}>
            <div style={{ marginBottom: '40px' }}>
              <img 
                src={EAPhoto} 
                alt="外联部" 
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '20px',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                {t('departmentsIntro.DepartmentsDetails.EA')}
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#4A5568',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                {t('departmentsIntro.DepartmentsDetails.EAD')}
              </p>
            </div>
          </div>

          {/* 宣传媒体部 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
          }}>
            <div style={{ marginBottom: '40px' }}>
              <img 
                src={PMPhoto} 
                alt="宣传媒体部" 
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '20px',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                {t('departmentsIntro.DepartmentsDetails.PRM')}
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#4A5568',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                {t('departmentsIntro.DepartmentsDetails.PRMD')}
              </p>
            </div>
          </div>

          {/* 技术和职业发展部 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
          }}>
            <div style={{ marginBottom: '40px' }}>
              <img 
                src={ITCDPhoto} 
                alt="技术和职业发展部" 
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '20px',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                {t('departmentsIntro.DepartmentsDetails.ITCD')}
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#4A5568',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                {t('departmentsIntro.DepartmentsDetails.ITCDD')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentIntro;
