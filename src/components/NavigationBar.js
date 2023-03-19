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
        sx={{ justifyContent: 'space-between', overflowX: 'auto', backgroundColor:'transparent'}}
      >
        <a href="/" style={{ "maxWidth": "40%" }}>
          <img src={LogoUrl} alt="logo" style={{ "maxWidth": "80%" }} urf='/About'/>
        </a>
        <div className="" style={{
          "display": "inline - block",}}>

          <Button>
            <NavLink
              style={{ textDecoration: 'none', color:"#57068c"}}
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
              style={{ textDecoration: 'none', color:"#57068c" }}
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
              style={{ textDecoration: 'none', color:"#57068c" }}
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

        </div>
      </Toolbar>
    </React.Fragment>
  );
}
export default Header;
