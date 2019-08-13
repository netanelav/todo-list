import React, { Component } from "react";
import Logo from "../../images/list.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./Headline.css";

class Headline extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row title align-items-center">
          <div className="col-0">
            <img id="logo" src={Logo} alt="app logo" />
          </div>
          <div className="col-5">
            <p className="headline">Todo List</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Headline;


