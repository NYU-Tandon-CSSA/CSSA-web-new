import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Box, Drawer, List } from '@material-ui/core';
import { Link as MuiLink } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid'; // Grid version 1
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faWeixin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles({
    navLink: {
        color: '#ffffff',
        textDecoration: 'none',
        margin: '0 15px',
        fontSize: '1rem',
        '&:hover': {
            color: (props) => (props.isHomePage ? '#2d004d' : '#ccc6ca'),
        },
    },
    appBar: {
        transition: 'all 0.3s ease-in-out',
        boxShadow: 'none',
        backgroundColor: 'transparent',
    },
    appBarSolid: {
        backgroundColor: 'rgba(137, 0, 225, 0.8)',
        backdropFilter: 'blur(5px)',
    },
    appBarNonHome: {
        backgroundColor: 'rgba(137, 0, 225, 1)',
        backdropFilter: 'blur(5px)',
    },
    appBarHidden: {
        transform: 'translateY(-100%)',
    },
    appBarVisible: {
        transform: 'translateY(0)',
    },
});

function TransparentNavBar(props) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const classes = useStyles({ isHomePage });
    const [isSolid, setIsSolid] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            setIsSolid(currentScrollPos > 100);
            setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleContactClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleContactClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <AppBar
                position="fixed"
                className={`${classes.appBar} 
                    ${isHomePage 
                        ? (isSolid && classes.appBarSolid)
                        : classes.appBarNonHome
                    } 
                    ${isVisible ? classes.appBarVisible : classes.appBarHidden}`}
            >
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item xs={3}>
                            <MuiLink
                                href="/"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <HomeIcon
                                    sx={{
                                        fontSize: '2rem',
                                        '&:hover': {
                                            color: isHomePage ? '#2d004d' : '#ccc6ca',
                                        },
                                    }}
                                />
                            </MuiLink>
                        </Grid>
                        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to="/about" className={classes.navLink}>关于我们</Link>
                            <div
                                className={classes.navLink}
                                onClick={(e) => {}}
                            >
                                部门介绍
                            </div>
                            <div
                                className={classes.navLink}
                                onClick={(e) => {}}
                            >
                                活动
                            </div>
                            <div
                                className={classes.navLink}
                                onClick={(e) => {}}
                            >
                                剪影
                            </div>
                            <Link 
                                to="/freshmanHandbook" 
                                className={classes.navLink}
                            >
                                新生手册
                            </Link>
                            <div
                                className={classes.navLink}
                                onClick={handleContactClick}
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                联系我们
                                <ExpandMoreIcon
                                    sx={{
                                        fontSize: '1.2rem',
                                        marginLeft: '2px',
                                        transition: '0.3s',
                                        transform: Boolean(anchorEl) ? 'rotate(180deg)' : 'rotate(0)',
                                    }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleContactClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: -10, horizontal: 'center' }}
                PaperProps={{
                    sx: {
                        width: '160px',
                        marginTop: '10px',
                        '& .MuiMenuItem-root': {
                            fontSize: '0.9rem',
                            padding: '6px 16px',
                        },
                    },
                }}
            >
                <MenuItem
                    onClick={() => {
                        window.open('https://mp.weixin.qq.com/s/iWgFKkEdJR0pDlHgcQHx_Q', '_blank');
                        handleContactClose();
                    }}
                >
                    <FontAwesomeIcon icon={faWeixin} style={{ marginRight: '8px', fontSize: '0.9rem' }} />
                    微信公众号
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        window.open('https://www.instagram.com/tandoncssa/', '_blank');
                        handleContactClose();
                    }}
                >
                    <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '8px', fontSize: '0.9rem' }} />
                    Instagram
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        window.open('https://nyutandoncssa.com/#/xiaohongshu', '_blank');
                        handleContactClose();
                    }}
                >
                    <ImportContactsIcon style={{ marginRight: '8px', fontSize: '0.9rem' }} />
                    小红书
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        window.open('https://www.facebook.com/NYUTandonCSSA/', '_blank');
                        handleContactClose();
                    }}
                >
                    <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '8px', fontSize: '0.9rem' }} />
                    Facebook
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        window.open('https://engage.nyu.edu/organization/nyu-tandon-chinese-students-scholars-association', '_blank');
                        handleContactClose();
                    }}
                >
                    <CalendarTodayIcon style={{ marginRight: '8px', fontSize: '0.9rem' }} />
                    NYU Engage
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default TransparentNavBar;
