import React, { Component } from 'react';
import { connect } from "react-redux"
import {Link} from "react-router-dom"

class Header extends Component {
   // renderContent
   renderContent = () => {
    switch (this.props.auth) {
      case null:
        return "Still deciding"

      case false:
        return "I'm logged out"
    
      default:
        return "I'm logged in"
    }
  }

  render() {
   

    return (
      <>
        <nav className="">
          <div className="nav-wrapper light-blue darken-4 nav-style">
            <Link to="/" className="left brand-logo">Emaily</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li><Link to="/auth/google">Login with Google</Link></li> */}
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Header);
