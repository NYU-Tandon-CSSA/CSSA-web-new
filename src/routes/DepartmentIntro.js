import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "../css/DepartmentIntro.css"; 
import { Button } from "@mui/material";
import { useLanguage } from "../components/UseLanguage";
import { departmentsData } from "../data/departmentsData";

import teamBuild from "../images/team-build.JPG";

const DepartmentIntro = () => {
  const { t, pick } = useLanguage();
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
            {t('departments.title')}<br />
            <span className="highlight">
              NYU Tandon <span className="highlight-purple">CSSA</span>
            </span>
          </h2>
          <p style={{ whiteSpace: 'pre-line' }}>
            {t('departments.description')}
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
                {t('departments.eboardButton')}
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
                {t('departments.detailsButton')}
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
          {t('departments.detailsTitle')}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          padding: '0 40px'
        }}>
          {departmentsData.map((dept) => (
            <div key={dept.key} style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '20px'
            }}>
              <div style={{ marginBottom: '40px' }}>
                <img 
                  src={dept.image} 
                  alt={pick(dept.name)} 
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
                  {pick(dept.name)}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#4A5568',
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}>
                  {pick(dept.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DepartmentIntro;
