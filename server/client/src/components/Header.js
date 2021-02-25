import React, { Component } from 'react';
import { connect } from "react-redux"
import { FcGoogle } from "react-icons/fc";
import { IoLogOut } from "react-icons/io5";
import {Link} from "react-router-dom"

class Header extends Component {
   // renderContent
   renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li><a href="/auth/google"><FcGoogle style={{
            verticalAlign: 'middle',
            width: 20,
            height: 20,
          }}/> Login with Google</a></li>
        )
    
      default:
        return (
          <li><a href="/api/logout"><IoLogOut style={{
            verticalAlign: 'middle',
            color: "white",
            width: 20,
            height: 20,
          }}/> Logout</a></li>
        )
    }
  }

  render() {
   

    return (
      <>
        <nav className="">
          <div className="nav-wrapper light-blue darken-4 nav-style">
            <Link to="/" className="left brand-logo">Emaily</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
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
