import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Box, Drawer, List, useMediaQuery } from '@material-ui/core';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from '@mui/icons-material/Mail';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import InfoIcon from '@mui/icons-material/Info';
import { faWeixin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: 'all 0.3s ease-in-out',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zindex: 1000,
  },
  appBarSolid: {
    backgroundColor: '#808080',
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  desktopMenu: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  },
  menuItem: {
    color: '#ffffff',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 700,
  },
}));

function TransparentNavBar(props) {
  const classes = useStyles();
  const [isSolid, setIsSolid] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsSolid(currentScrollPos > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const urls = ["/", "/about", '/freshmanHandbook'];

  const list = () => (
    <Box sx={{ width: 280 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {["Home", "About Us", "新生手册"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={urls[index]}>
              <ListItemIcon>
                {index % 3 === 0 ? <InfoIcon /> : (index % 2 === 1 ? <TheaterComedyIcon /> : <ImportContactsIcon/>)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['微信公众号', 'Instagram', 'Facebook', 'NYU Engage', 'Contact Us'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {
              // ... (existing onClick logic)
            }}>
              <ListItemIcon>
                {index % 5 === 0 ? <FontAwesomeIcon className='fa-xl' icon={faWeixin}/> :
                 index % 5 === 1 ? <FontAwesomeIcon className='fa-xl' icon={faInstagram}/> :
                 index % 5 === 2 ? <FontAwesomeIcon className='fa-xl' icon={faFacebook}/> :
                 index % 5 === 3 ? <CalendarTodayIcon /> :
                 <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" className={`${classes.appBar} ${isSolid && classes.appBarSolid}`}>
      <Toolbar>
        <Box className={classes.desktopMenu}>
          {["Home", "About Us", "新生手册"].map((text, index) => (
            <Link key={text} to={urls[index]} className={classes.menuItem}>
              {text}
            </Link>
          ))}
        </Box>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      {isMobile && (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      )}
    </AppBar>
  );
}

export default TransparentNavBar;