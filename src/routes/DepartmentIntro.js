import React from "react";
import "../css/DepartmentIntro.css"; 
import { Button } from "@mui/material";

import teamBuild from "../images/team-build.JPG";
import EOPhoto from "../images/EO2.jpg";
import PMPhoto from "../images/PM.png";
import EAPhoto from "../images/EA.jpg";
import ITCDPhoto from "../images/ITCD.png";

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
                部门详情
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
          部门详情
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
                外联部 External Affair
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#4A5568',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                我们主要负责对外联系公司、赞助商以及其他学联，在建立良好沟通、合作的基础上，为Tandon CSSA提供活动和宣传所需要的信息、资源、赞助资金等。              
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
                宣传媒体部 Public Relation & Media
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#4A5568',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                我们运营着CSSA各个官方平台，负责各项活动工作的宣传、记录及总结，是搭建起各部门间合作及学联与学生间交流的重要桥梁。我们产出各种活动海报、纪录片和各类干货，还有不定期的原创主题专栏。
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
                技术和职业发展部 ITCD
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#4A5568',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                我们正在积极运用学校和CSSA的校友资源，为中国学生及学者搭建一个职业发展和交流的平台。我们策划了和行业精英的Coffee Chat活动以及校友网的搭建。同时，我们还为CSSA举办的各种活动提供技术支持。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentIntro;
