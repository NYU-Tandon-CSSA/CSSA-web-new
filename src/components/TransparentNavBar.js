import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Box, Drawer, List } from '@material-ui/core';
import { Link as MuiLink } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid'; // Grid version 1
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

const useStyles = makeStyles((theme) => ({
    navLink: {
        color: '#ffffff',
        textDecoration: 'none',
        margin: '0 15px',
        fontSize: '1rem',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        padding: '0 8px',
        '&:hover': {
            color: (props) => (props.isHomePage ? '#2d004d' : '#ccc6ca'),
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0 2px',
            fontSize: '0.75rem',
            height: '32px',
            padding: '0 4px',
            minWidth: 'auto',
        },
    },
    contactLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        cursor: 'pointer',
        flexDirection: 'row',
        justifyContent: 'center',
        '& .MuiSvgIcon-root': {
            display: 'flex',
            alignItems: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            gap: '1px',
        },
    },
    expandIcon: {
        fontSize: '1.2rem',
        transition: '0.3s',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem',
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
    desktopMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 4px',
            overflowX: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
        },
    },
    mobileMenuItem: {
        [theme.breakpoints.down('sm')]: {
            flex: '0 0 auto',
            whiteSpace: 'nowrap',
            textAlign: 'center',
        },
    },
}));

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
                        <Grid item xs={2} md={2} style={{ 
                            display: 'flex', 
                            justifyContent: 'flex-start', 
                            paddingLeft: '20px',
                            minWidth: 'fit-content',
                        }}>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <HomeIcon
                                    sx={{
                                        fontSize: {
                                            xs: '1.5rem',
                                            md: '2rem'
                                        },
                                        '&:hover': {
                                            color: isHomePage ? '#2d004d' : '#ccc6ca',
                                        },
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid 
                            item 
                            xs={10} 
                            md={8} 
                            className={classes.desktopMenu}
                        >
                            <Link to="/about" className={`${classes.navLink} ${classes.mobileMenuItem}`}>关于我们</Link>
                            <Link to="/departments" className={`${classes.navLink} ${classes.mobileMenuItem}`}>部门介绍</Link>
                            <Link to="/events" className={`${classes.navLink} ${classes.mobileMenuItem}`}>活动</Link>
                            <Link to="/gallery" className={`${classes.navLink} ${classes.mobileMenuItem}`}>剪影</Link>
                            <Link to="/freshmanHandbook" className={`${classes.navLink} ${classes.mobileMenuItem}`}>新生手册</Link>
                            <div className={`${classes.navLink} ${classes.contactLink} ${classes.mobileMenuItem}`} onClick={handleContactClick}>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    联系我们
                                    <ExpandMoreIcon 
                                        className={classes.expandIcon}
                                        style={{
                                            transform: Boolean(anchorEl) ? 'rotate(180deg)' : 'rotate(0)',
                                            marginLeft: '2px',
                                        }}
                                    />
                                </span>
                            </div>
                        </Grid>
                        <Grid item md={2} sx={{ display: { xs: 'none', md: 'block' } }} />
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
