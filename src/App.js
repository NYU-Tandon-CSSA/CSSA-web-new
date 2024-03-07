import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Footer from './components/Footer';

import Home from './routes/Home';
import About from './routes/About';
import freshmanHandbook from './routes/FreshmanHandbook';
import StudentService from './routes/StudentService';
import TransparentNavBar from './components/TransparentNavBar';
import XiaoHongShu from './routes/XiaoHongShu';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8900e1',
    },
    secondary: {
      main: '#00e1c8',
    },
    text: {
      primary: '#000000',
      secondary: '#8900e1',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Tilt Warp, cursive',
      fontSize: '4vw',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <TransparentNavBar /> */}
        {/* <div style={{ maxWidth: '85vw', margin: '0 auto' }}> */}
        <div>
          <HashRouter>
            <TransparentNavBar />
            <Switch>
              <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/freshmanHandbook/:pageInd" component={freshmanHandbook} />
                <Route exact path="/freshmanHandbook" component={freshmanHandbook} />
                <Route exact path="/studentservice" component={StudentService} />
                <Route exact path="/xiaohongshu" component={XiaoHongShu} />
              </div>
            </Switch>
          </HashRouter>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
