import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Box, Drawer, List} from '@material-ui/core';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton'
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
// icons
import {
    faWeixin,
    faInstagram,
    faFacebook,
  } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const useStyles = makeStyles({
    textShadows: {
        '--color-primary': '#a74dbf',
        '--color-secondary': '#bf65a3',
        '--color-tertiary': '#d17c87',
        '--color-quaternary': '#e0946b',
        '--color-quinary': '#eeab52',
        textShadow: '3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary)',
        animation: '$shadows 1.2s ease-in infinite',
        display: 'block',
        margin: '0 auto',
        textAlign: 'center',
        color: '#8900e1',
        animationDuration: '3.0s',
    },
    '@keyframes shadows': {
        '0%': {
            textShadow: 'none',
        },
        '10%': {
            transform: 'translate(-3px, -3px)',
            textShadow: '3px 3px 0 var(--color-secondary)',
        },
        '20%': {
            transform: 'translate(-6px, -6px)',
            textShadow: '3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary)',
        },
        '30%': {
            transform: 'translate(-9px, -9px)',
            textShadow: '3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary)',
        },
        '40%': {
            transform: 'translate(-12px, -12px)',
            textShadow: '3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary)',
        },
        '50%': {
            transform: 'translate(-12px, -12px)',
            textShadow: '3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary)',
        },
        '60%': {
            textShadow: '3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary)',
        },
        '70%': {
            textShadow: '3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary)',
        },
        '80%': {
            textShadow: '3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary)',
        },
        '90%': {
            textShadow: `3px 3px 0 var(--color-secondary)`,
        },
        '100%': {
            textShadow: 'none',
        },
    },
    appBar: {
        transition: 'all 0.3s ease-in-out',
        boxShadow: 'none',
        // opacity: 0.75,
        backgroundColor: '#8900e1',
    },
    appBarSolid: {
        backgroundColor: '#8900e1',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
    },
    appBarHidden: {
        transform: 'translateY(-100%)',
    },
    appBarVisible: {
        transform: 'translateY(0)',
    },
    icon: {
        fontSize: '4vh',
    }
});


function TransparentNavBar(props) {
    const classes = useStyles();
    const [isSolid, setIsSolid] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

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


    // toggleDrawer funtion 
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    
    //drawer Link - an array of URLs
    const urls = [
        "/about",
        '/freshmanHandbook',
        '/xiaohongshu',
    ];

    // drawer content 
    const list = () => (
        <Box
            sx={{ width: 280 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >

            {/* list 1 内部链接 */}

            <List>
            {['About Us', "新生手册", '小红书',].map((text, index) => (
                <ListItem key={text} disablePadding>
                        <ListItemButton component={Link} to={urls[index]}>
                            <ListItemIcon>
                            {
                                index % 3 === 0 
                                ? <InfoIcon />
                                : (index % 2 === 1 
                                    ?  <TheaterComedyIcon />
                                    :  <ImportContactsIcon/>)
                            }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                </ListItem>
            ))}
            </List>

            {/* <Divider /> */}

            {/* list 2 外部链接*/}

            <List>
            {[ '微信公众号', 'Instagram', 'Facebook','NYU Engage' ,'Contact Us'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton
                    onClick={() => {
                        if (text === '微信公众号') {
                            window.open('https://mp.weixin.qq.com/s/iWgFKkEdJR0pDlHgcQHx_Q', '_blank');
                        } else if (text === 'NYU Engage') {
                            window.open('https://engage.nyu.edu/organization/nyu-tandon-chinese-students-scholars-association', '_blank');
                        } else if (text === 'Instagram') {
                            window.open('https://www.instagram.com/tandoncssa/', '_blank');
                        } else if (text === 'Facebook') {
                            window.open('https://www.facebook.com/nyutandoncssa/', '_blank');
                        } else if (text === 'Contact Us') {
                            window.open('mailto:nyutandoncssa22@gmail.com');
                        } 
                        }}>
                    <ListItemIcon>
                    {
                        index % 5 === 0 
                        ? <FontAwesomeIcon className='fa-xl' icon={faWeixin}/>
                        : index % 5 === 1
                        ? <FontAwesomeIcon className='fa-xl' icon={faInstagram}/>
                        : index % 5 === 2
                        ? <FontAwesomeIcon className='fa-xl' icon={faFacebook}/>
                        : index % 5 === 3
                        ? <CalendarTodayIcon />
                        : (index % 5 === 4
                        ? <MailIcon /> 
                            : <ImportContactsIcon />)
                    }
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Box>
      );

    return (
        <Box>
            <AppBar
                position="fixed" 
                className={`${classes.appBar} ${isSolid && classes.appBarSolid} ${isVisible ? classes.appBarVisible : classes.appBarHidden}`}>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center" justifyContent = 'space-between'>
                        <Grid item xs={10} md={11}>
                            <Typography 
                                variant="h1" 
                                color="#ffffff"
                                class = 'Silkscreen'
                                sx={{ flexGrow: 3 }}>
                                    <MuiLink href="/" style={{textDecoration: 'none', color: 'inherit'}}>NYU Tandon CSSA</MuiLink>
                            </Typography>
                        </Grid>
                        <Grid item xs={2}  md={1}>
                            <IconButton 
                                color="inherit" 
                                aria-label="menu"
                                onClick={() => setDrawerOpen(true)}>
                                <MenuIcon sx = {{fontSize: 'medium'}} className={classes.icon}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" 
                    open={drawerOpen} 
                    onClose={toggleDrawer(false)}>
                    {list()}
            </Drawer>
        </Box>
    );
}

export default TransparentNavBar;
