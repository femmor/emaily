import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <>
        <nav className="">
          <div className="nav-wrapper light-blue darken-4 nav-style">
            <Link to="/" className="left brand-logo">Emaily</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/auth/google">Login with Google</Link></li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
