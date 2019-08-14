import React, { Component } from "react";
import Logo from "../../images/list.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";

class Header extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row title align-items-center">
          <div className="col-0">
            <img id="logo" src={Logo} alt="app logo" />
          </div>
          <div className="col-5">
            <p className="headline">Time to Get things Done!</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;


