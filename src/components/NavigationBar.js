import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LogoUrl from '../images/logo.png';

function Header() {
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          justifyContent: 'center',
        }}
      >
        <img src={LogoUrl} alt="logo" height="80" width="200" />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        <Button
          component={Link}
          color="inherit"
          noWrap
          variant="body2"
          to=""
          sx={{ p: 1, flexShrink: 0 }}
        >
          主页
        </Button>
        <Button
          component={Link}
          color="inherit"
          noWrap
          variant="body2"
          to={''}
          sx={{ p: 1, flexShrink: 0 }}
        >
          CSSA介绍
        </Button>
        <Button
          component={Link}
          color="inherit"
          noWrap
          variant="body2"
          to="/activity"
          sx={{ p: 1, flexShrink: 0 }}
        >
          以往活动
        </Button>
        <Button
          component={Link}
          color="inherit"
          noWrap
          variant="body2"
          to={''}
          sx={{ p: 1, flexShrink: 0 }}
        >
          学生服务
        </Button>
        <Button
          component={Link}
          color="inherit"
          noWrap
          variant="body2"
          to={''}
          sx={{ p: 1, flexShrink: 0 }}
        >
          校园攻略
        </Button>
        <Button
          component={Link}
          color="inherit"
          noWrap
          variant="body2"
          to={''}
          sx={{ p: 1, flexShrink: 0 }}
        >
          联系我们
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}
export default Header;
