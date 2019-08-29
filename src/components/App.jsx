import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from '../context/github/GithubState';
import AlertState from '../context/alert/AlertState';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import User from './users/User';
import NotFound from './pages/NotFound';

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <main className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user/:username' component={User} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
