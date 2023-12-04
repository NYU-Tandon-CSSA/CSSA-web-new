import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Box, Drawer, List} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid'; // Grid version 1
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LoginIcon from '@mui/icons-material/Login';
import Divider from '@mui/material/Divider';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';


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
        'https://engage.nyu.edu/organization/nyu-tandon-chinese-students-scholars-association', // Internal link example
        '#home',
        '#home',
    ];

    // drawer content 
    const list = () => (
        <Box
            sx={{ width: 350 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >

            {/* list 1 */}

            <List>
            {['NYU Engage',"我们的活动", '关于我们',].map((text, index) => (
                <ListItem key={text} disablePadding>
                        <ListItemButton to={urls[index]} target="_blank">
                            <ListItemIcon>
                            {
                                index % 3 === 0 
                                ? <CalendarTodayIcon /> 
                                : (index % 2 === 1 
                                    ? <TheaterComedyIcon /> 
                                    : <InfoIcon />)
                            }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                </ListItem>
            ))}
            </List>
            <Divider />

            {/* list 2 */}

            <List>
            {['小红书', 'Contact Us'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton onClick={text === 'Contact Us' ? () => { window.open('mailto: nyutandoncssa22@gmail.com') } : null}>
                    <ListItemIcon>
                    {
                        index % 3 === 0 
                        ? <ImportContactsIcon /> 
                        : (index % 2 === 1 
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
                        <Grid item xs={12} md ={10}>
                            <Typography 
                                variant="h1" 
                                color="#ffffff"
                                class = 'Silkscreen'
                                sx={{ flexGrow: 3 }}>
                                NYU Tandon CSSA
                            </Typography>
                        </Grid>
                        <Grid xs={6} md ={1}>
                            <IconButton 
                                color="inherit" 
                                aria-label="login">
                                <LoginIcon sx = {{fontSize: 'inherit', p:1}} className={classes.icon}/>
                                Login
                            </IconButton>
                        </Grid>
                        <Grid xs={6} md ={1} sx={{p:3}}>
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
