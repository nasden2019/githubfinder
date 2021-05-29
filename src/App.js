import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

// import { LoginButton } from './Login'
// import { LogoutButton } from './Logout';
// import { Perfil } from './Perfil';
// import LoginButton from './components/Login';
// import Login from './Login'

const App = () => {

  return (

    // <Login>
    <GithubState>
      {/* <LoginButton />
          <Perfil />
            <LogoutButton /> */}
      <AlertState>
        <Router>
          <div className='App home' id="home">
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
      {/* </LogoutButton>
            </Perfil>
          </LoginButton> */}
    </GithubState>
    // </Login>
  );
};

export default App;
