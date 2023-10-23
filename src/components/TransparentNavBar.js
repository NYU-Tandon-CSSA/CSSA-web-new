import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import Grid from '@mui/material/Grid'; // Grid version 1
import MenuIcon from "@material-ui/icons/Menu";


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
        opacity: 0.75,
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

    return (
        <Box>
            <AppBar
                position="fixed" 
                className={`${classes.appBar} ${isSolid && classes.appBarSolid} ${isVisible ? classes.appBarVisible : classes.appBarHidden}`}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Grid xs={11}>
                        <Typography 
                            variant="h1" 
                            color="#ffffff"
                            class = 'header'>
                            NYU Tandon CSSA
                        </Typography>
                    </Grid>
                    <Grid xs={1}>
                        <IconButton 
                            color="inherit" 
                            aria-label="menu">
                            <MenuIcon className={classes.icon}/>
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default TransparentNavBar;
