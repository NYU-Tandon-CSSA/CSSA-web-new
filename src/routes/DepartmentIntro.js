import React from "react";
import "../css/DepartmentIntro.css"; 
import { Button } from "@mui/material";

import teamBuild from "../images/team-build.JPG";
import EOPhoto from "../images/EO.jpg";

const DepartmentIntro = () => {
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
            我们的社团<br />
            <span className="highlight">
              NYU Tandon <span className="highlight-purple">CSSA</span>
            </span>
          </h2>
          <p>
              Tandon CSSA作为唯一一个专注于服务Tandon中国学生的官方组织，我们的团队一直在期待并欢迎更多有趣灵魂的加入！
              <br/>
              我们时刻关注工院最新趋势，公众平台分享干货，举办针对工院的贴心活动，让大家在异乡也能感受到家的温暖。一届又一届，每一位Tandon CSSA成员都在以自己的努力和热情为Tandon CSSA打造美好的未来。
          </p>
          <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#6B46C1', 
                  '&:hover': { backgroundColor: '#553C9A' },
                  marginBottom: '16px',
                  display: 'block'
                }}
                href="https://nyutandoncssa.com/#/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eboard
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
                部门介绍
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
          fontWeight: '600'
        }}>
          部门介绍
        </h2>

        <div style={{
          minHeight: '100vh',
          display: 'flex',
          padding: '0 40px'
        }}>
          {/* 左边部分 */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
          }}>
            {/* 上半部分-图片 */}
            <div style={{
              marginBottom: '40px'
            }}>
              <img 
                src={EOPhoto} 
                alt="Department Image" 
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px'
                }}
              />
            </div>
            
            {/* 下半部分-部门介绍 */}
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '20px',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                活动部 Event Organizer
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#4A5568',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                我们是NYU Tandon CSSA 策划、组织和执行活动的部门。从前期brainstorm活动方案、场地人员安排、道具准备，到后期的现场推进与协调，活动部成员一次次地把脑洞变成现实。
              </p>
            </div>
          </div>

          {/* 右边部分 - 待定 */}
          <div style={{
            flex: 1,
            padding: '20px'
          }}>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentIntro;
