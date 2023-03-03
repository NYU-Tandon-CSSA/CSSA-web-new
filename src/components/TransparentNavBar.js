import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    text: {
        display: 'block',
        margin: '0 auto',
        marginTop: '10px',
        textAlign: 'center',
        color: '#8900e1',
    }
});

function TransparentNavBar(props) {
    const [opacity, setOpacity] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const height = window.innerHeight;
        setOpacity(Math.min(currentScrollY / height, 1));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const classes = useStyles();

    return (
        <AppBar
            position="fixed"
            className={classes.appBar}
            style={{
                backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                transition: 'background-color 0.1s ease-out',
            }}
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
