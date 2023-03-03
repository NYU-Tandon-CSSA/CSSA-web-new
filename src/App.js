import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, Typography } from '@material-ui/core';

import Footer from './components/Footer';

import Home from './routes/Home';
import About from './routes/About';
import Activity from './routes/Activity';
import StudentService from './routes/StudentService';
import TransparentNavBar from './components/TransparentNavBar';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Tilt Warp, cursive',
      fontSize: '72px',
    },
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TransparentNavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/activity" component={Activity}/>
            <Route exact path="/studentservice" component={StudentService}/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
