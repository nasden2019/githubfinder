import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Navbar = ({ icon, title }) => {
  return (
    <Router>
      <nav className='navbar'>
        <h1>
          <i className={icon} /> {title}
        </h1>
        {/* <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/regis'>About</Link>
          </li>
        </ul> */}
      </nav>


      <div className="container">
        {/* navbar... */}
        <Switch>
          <Route path="/login">
            Ruta de login
                    </Route>
          <Route path="/regis">
            Ruta de administracion
                    </Route>
          {/* <Route path="/" exact>
            Ruta de inicio
                    </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
