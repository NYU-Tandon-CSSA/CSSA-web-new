import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LogoUrl from '../images/logo.png';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        <img src={LogoUrl} alt="logo" style={{ "maxWidth": "40%" }} />
        <div className="" style={{
          "display": "inline - block",}}>
          <Button className='homeButton-nav-link'>
            <NavLink
              style={{ textDecoration: 'none' }}
              color="inherit"
              variant="text"
              to=""
              sx={{ p: 1, flexShrink: 0 }}
              className={isActive =>
                "homeButton-nav-link" + (!isActive ? "-unselected" : "")
              }
            >
              主页
            </NavLink>
          </Button>
          <Button>
            <NavLink
              style={{ textDecoration: 'none' }}
              color="inherit"
              variant="text"
              to='/About'
              sx={{ p: 1, flexShrink: 0 }}
              className={isActive =>
                "nav-link" + (!isActive ? "-unselected" : "")
              }
            >
              关于我们
            </NavLink>
          </Button>

          <Button>
            <NavLink
              style={{ textDecoration: 'none' }}
              color="inherit"
              variant="text"
              to="/activity"
              sx={{ p: 1, flexShrink: 0 }}
              className={isActive =>
                "nav-link" + (!isActive ? "-unselected" : "")
              }
            >
              以往活动
            </NavLink>
          </Button>

          <Button>
            <NavLink
              style={{ textDecoration: 'none' }}
              color="inherit"
              variant="text"
              to="/StudentService"
              sx={{ p: 1, flexShrink: 0 }}
              className={isActive =>
                "nav-link" + (!isActive ? "-unselected" : "")
              }
            >
              学生服务
            </NavLink>
          </Button>

          <Button>
            <NavLink
              style={{ textDecoration: 'none' }}
              color="inherit"
              variant="text"
              to="/xx"
              sx={{ p: 1, flexShrink: 0 }}
              className={isActive =>
                "nav-link" + (!isActive ? "-unselected" : "")
              }
            >
              校园攻略
            </NavLink>
          </Button>

          <Button>
            <NavLink
              style={{ textDecoration: 'none' }}
              color="inherit"
              variant="text"
              to="/x"
              sx={{ p: 1, flexShrink: 0 }}
              className={isActive =>
                "nav-link" + (!isActive ? "-unselected" : "")
              }
            >
              联系我们
            </NavLink>
          </Button>
        </div>
      </Toolbar>
    </React.Fragment>
  );
}
export default Header;
