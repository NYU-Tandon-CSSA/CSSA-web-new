import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@mui/material/Container';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

import Home from './routes/Home';
import About from './routes/About';
import Activity from './routes/Activity';
import StudentService from './routes/StudentService';

function App() {
  return (
    <Container maxWidth="lg">
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/activity" component={Activity}/>
            <Route exact path="/studentservice" component={StudentService}/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
