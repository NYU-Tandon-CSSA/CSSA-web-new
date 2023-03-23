import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    text: {
        display: 'block',
        margin: '0 auto',
        marginTop: '10px',
        textAlign: 'center',
        color: '#8900e1',
    },
    appBar: {
        transition: 'all 0.3s ease-in-out',
        boxShadow: 'none',
        backgroundColor: 'transparent',
    },
    appBarSolid: {
        backgroundColor: 'white',
    },
    appBarHidden: {
        transform: 'translateY(-100%)',
    },
    appBarVisible: {
        transform: 'translateY(0)',
    },
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
        <AppBar
            position="fixed" className={`${classes.appBar} ${isSolid && classes.appBarSolid} ${isVisible ? classes.appBarVisible : classes.appBarHidden}`}
        >
            <Toolbar>
                <Typography variant="h1" className={classes.text}>
                    NYU Tandon CSSA
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default TransparentNavBar;
